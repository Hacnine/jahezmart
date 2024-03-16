import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log("data: ", data);

  const { name, lastName, email, subject, message } = data;

  return NextResponse.json({ name, lastName, email, subject, message });
}
