"use server";

import { db } from "@/app/src/db";
import { users } from "@/app/src/db/schema";

export type SignupState = {
  error: string | null;
  success: string | null;
};

export async function signupAction(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return { ...prevState, error: "Missing fields", success: null };
    }

    await db.insert(users).values({
      name,
      email,
      password,
    });

    return { error: null, success: "User created successfully" };
  } catch (err) {
    console.log(err);
    return {
      ...prevState,
      error: "User already exists or DB error",
      success: null,
    };
  }
}
