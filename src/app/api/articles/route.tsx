"use server";

import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

const GET = async (request: Request) => {
  try {
    const data = await prisma.post.findMany({
      take: 20,
      orderBy: {
        createdAt: "asc",
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi khi lấy dữ liệu từ cơ sở dữ liệu" },
      { status: 500 }
    );
  }
};

export { GET };
