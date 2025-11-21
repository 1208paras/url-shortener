import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: NextRequest, { params }) {
  const code = params.code;
  const result = await query(
    "SELECT * FROM links WHERE short_code=$1 AND is_active=TRUE",
    [code]
  );
  if (!result.rows.length)
    return NextResponse.redirect(new URL("/", req.url));

  const link = result.rows[0];
  query("UPDATE links SET click_count=click_count+1, last_clicked_at=NOW() WHERE id=$1",[link.id]);

  return NextResponse.redirect(link.original_url);
}
