"use client";

import { useActionState } from "react";
import { signinAction, type SigninState } from "./action";

const initialState: SigninState = {
  error: null,
  success: null,
};

export default function SigninPage() {
  const [state, formAction, pending] = useActionState(
    signinAction,
    initialState
  );

  return (
    <form action={formAction}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit" disabled={pending}>
        Sign In
      </button>
      {state.error ? <p>{state.error}</p> : null}
      {state.success ? <p>{state.success}</p> : null}
    </form>
  );
}
