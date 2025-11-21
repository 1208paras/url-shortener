import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function DELETE(req: NextRequest, { params }) {
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error:"Invalid id"},{status:400});
  await query("DELETE FROM links WHERE id=$1",[id]);
  return NextResponse.json({ success:true });
}
