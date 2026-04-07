import "server-only";

import { asc, eq } from "drizzle-orm";
import { getDb } from "@/app/src/db";
import { customEmailTemplates } from "@/app/src/db/schema";

export interface SavedCustomTemplate {
  id: string;
  label: string;
  prompt: string;
}

export async function getCustomTemplatesForUser(
  ownerEmail: string,
): Promise<SavedCustomTemplate[]> {
  const db = getDb();
  const normalizedEmail = ownerEmail.trim().toLowerCase();

  const rows = await db
    .select({
      id: customEmailTemplates.id,
      label: customEmailTemplates.label,
      prompt: customEmailTemplates.prompt,
    })
    .from(customEmailTemplates)
    .where(eq(customEmailTemplates.ownerEmail, normalizedEmail))
    .orderBy(asc(customEmailTemplates.createdAt));

  return rows;
}

export async function createCustomTemplate(input: {
  ownerEmail: string;
  label: string;
  prompt: string;
}): Promise<SavedCustomTemplate> {
  const db = getDb();
  const ownerEmail = input.ownerEmail.trim().toLowerCase();
  const label = input.label.trim();
  const prompt = input.prompt.trim();

  if (!ownerEmail) {
    throw new Error("User email is required.");
  }

  if (!label || !prompt) {
    throw new Error("Both label and prompt are required.");
  }

  const existingTemplates = await db
    .select({
      label: customEmailTemplates.label,
    })
    .from(customEmailTemplates)
    .where(eq(customEmailTemplates.ownerEmail, ownerEmail));

  const hasDuplicateLabel = existingTemplates.some((template) => {
    return template.label.toLowerCase() === label.toLowerCase();
  });

  if (hasDuplicateLabel) {
    throw new Error("That tag name already exists.");
  }

  const insertedTemplates = await db
    .insert(customEmailTemplates)
    .values({
      ownerEmail,
      label,
      prompt,
    })
    .returning({
      id: customEmailTemplates.id,
      label: customEmailTemplates.label,
      prompt: customEmailTemplates.prompt,
    });

  const template = insertedTemplates[0];

  if (!template) {
    throw new Error("Unable to save template right now.");
  }

  return template;
}
