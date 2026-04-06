import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = false; // TODO: replace with real auth check

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome back 👋</h1>
    </div>
  );
}
