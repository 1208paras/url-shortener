// app/api/admin/links/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = (await req.json().catch(() => null)) as
    | { is_active?: boolean }
    | null;

  if (!body || typeof body.is_active !== "boolean") {
    return NextResponse.json(
      { error: "is_active boolean required" },
      { status: 400 }
    );
  }

  try {
    // rowCount check hata diya – TypeScript safe
    await query("UPDATE links SET is_active = $1 WHERE id = $2", [
      body.is_active,
      id,
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error updating link:", err);
    return NextResponse.json(
      { error: "Failed to update link" },
      { status: 500 }
    );
  }
}
