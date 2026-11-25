"use client";

import React from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintResumeButton() {
  return (
    <Button
      type="button"
      size="sm"
      variant="primary"
      onClick={() => window.print()}
    >
      <Printer className="h-3.5 w-3.5" />
      <span>Print / Save as PDF</span>
    </Button>
  );
}
