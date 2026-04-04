"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // remove user session
    localStorage.removeItem("user");

    // redirect to login
    router.replace("/login");
  }, [router]);

  return <p className="p-5">Logging out...</p>;
}