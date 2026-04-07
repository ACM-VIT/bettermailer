import { NextResponse } from "next/server";
import {
  createCustomTemplate,
  getCustomTemplatesForUser,
} from "@/lib/customTemplates";
import { getSessionUserEmail } from "@/lib/auth";

export async function GET() {
  try {
    const userEmail = await getSessionUserEmail();

    if (!userEmail) {
      return NextResponse.json(
        { error: "Please log in to view templates." },
        { status: 401 },
      );
    }

    const templates = await getCustomTemplatesForUser(userEmail);

    return NextResponse.json({ templates });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to load templates right now.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userEmail = await getSessionUserEmail();

    if (!userEmail) {
      return NextResponse.json(
        { error: "Please log in to save templates." },
        { status: 401 },
      );
    }

    const body = (await request.json()) as {
      label?: string;
      prompt?: string;
    };

    const template = await createCustomTemplate({
      ownerEmail: userEmail,
      label: body.label ?? "",
      prompt: body.prompt ?? "",
    });

    return NextResponse.json({ template }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to save template right now.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
