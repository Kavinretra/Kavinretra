import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Kavin Retra S N | Software Engineer & Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 85% 20%, rgba(16, 185, 129, 0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(14, 165, 233, 0.15), transparent 40%), #09090b",
          color: "#f4f4f5",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          border: "1px solid #27272a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#18181b",
                border: "1px solid rgba(16, 185, 129, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#34d399",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              KR
            </div>
            <span style={{ fontSize: "20px", color: "#a1a1aa" }}>
              kavin-portfolio-amber.vercel.app
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              background: "rgba(6, 78, 59, 0.35)",
              color: "#6ee7b7",
              fontSize: "16px",
            }}
          >
            Open to Engineering Roles
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#34d399",
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#d4d4d8",
              maxWidth: "920px",
              lineHeight: 1.45,
            }}
          >
            Building enterprise CRM, HRMS &amp; financial platforms and intelligent AI agent workflows with Python, Django, React.js, Node.js &amp; AWS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Python & Django",
            "React.js & Next.js",
            "Node.js",
            "AI Agents",
            "MySQL & PostgreSQL",
            "AWS & Docker",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                background: "#18181b",
                border: "1px solid #27272a",
                color: "#e4e4e7",
                fontSize: "16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
