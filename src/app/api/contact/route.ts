import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown; // Honeypot
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipRequestLog.get(ip) ?? []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipRequestLog.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many messages sent recently. Please wait a few minutes or email directly.",
      },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  // Silently accept honeypot submissions to deter automated spam bots
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name (2–100 characters)." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 150) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json(
      { ok: false, error: "Please include a message (10–3000 characters)." },
      { status: 400 }
    );
  }

  const result = await sendContactEmail({ name, email, message });

  if (!result.ok) {
    const status = result.reason === "unconfigured" ? 503 : 502;
    return NextResponse.json(
      {
        ok: false,
        configured: result.reason !== "unconfigured",
        error: result.error,
      },
      { status }
    );
  }

  return NextResponse.json({ ok: true, provider: result.provider });
}
