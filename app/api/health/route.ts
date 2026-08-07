import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "persona-compendium",
    time: new Date().toISOString(),
  });
}
