import prismadb from "@/lib/prismadb";

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!name) return new NextResponse("Missing name", { status: 400 });

    const store = await prismadb.store.create({
      data: {
        name: name,
        userId: userId,
      },
    });

    return NextResponse.json(store);
  } catch (err) {
    console.log("[Stores_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
