import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import crypto from "crypto";

function generateCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  const bytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) out += chars[bytes[i] % chars.length];
  return out;
}

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  try { new URL(url); } catch { 
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  let code = generateCode();
  let exists = await query("SELECT 1 FROM links WHERE short_code=$1",[code]);
  while (exists.rows.length) {
    code = generateCode();
    exists = await query("SELECT 1 FROM links WHERE short_code=$1",[code]);
  }

  const result = await query(
    "INSERT INTO links (short_code, original_url) VALUES ($1,$2) RETURNING *",
    [code, url]
  );
  return NextResponse.json(result.rows[0]);
}

export async function GET() {
  const result = await query("SELECT * FROM links ORDER BY created_at DESC");
  return NextResponse.json(result.rows);
}
