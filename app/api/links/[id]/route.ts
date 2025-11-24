import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  // Soft delete: sirf is_active ko false karo
  await query("UPDATE links SET is_active = FALSE WHERE id = $1", [id]);

  return NextResponse.json({ success: true });
}
