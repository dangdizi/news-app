"use server";

import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Hàm xử lý GET request
export const GET = async (
  request: Request,
  context: any
) => {
  const {id} = context.params;
  const data = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ data });
};