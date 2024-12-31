"use server";

import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { postcss } from "tailwindcss";

export const GET = async (request: Request, context: any) => {
  const {keywords} = context?.params;

  const posts = await prisma.post.findMany({
    where: {
      title: { contains: keywords, mode: "insensitive" },
    },
  });

  return NextResponse.json(posts, { status: 200 });
};
