import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// GET → sirf active links laao (is_active = TRUE)
export async function GET(req: NextRequest) {
  try {
    const result = await query(
      "SELECT * FROM links WHERE is_active = TRUE ORDER BY created_at DESC"
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching links:", error);
    return NextResponse.json(
      { error: "Failed to fetch links" },
      { status: 500 }
    );
  }
}

// POST → naya short URL banao
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body; // frontend se 'url' aa raha hai

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // random short code
    const short_code = Math.random().toString(36).substring(2, 8);

    const result = await query(
      "INSERT INTO links (short_code, original_url) VALUES ($1, $2) RETURNING *",
      [short_code, url]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Error creating link:", error);
    return NextResponse.json(
      { error: "Failed to create link" },
      { status: 500 }
    );
  }
}
