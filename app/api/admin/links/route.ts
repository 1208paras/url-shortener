// app/api/admin/links/route.ts
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// FORCE dynamic – har request pe DB hit
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const result = await query(
      "SELECT * FROM links ORDER BY created_at DESC"
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error fetching admin links:", err);
    return NextResponse.json(
      { error: "Failed to load links" },
      { status: 500 }
    );
  }
}
