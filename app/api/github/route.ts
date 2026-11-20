import { NextResponse } from "next/server";
import { getGitHubData } from "@/lib/github";

export async function GET() {
  try {
    const data = await getGitHubData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub metrics" },
      { status: 500 }
    );
  }
}

