"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-md border border-gray-200">

        <p className="text-sm text-gray-500 mb-2">Welcome back</p>

        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Sign in to your account
        </h1>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
          Sign in
        </button>

        <p className="text-sm text-gray-500 text-center mt-6">
          Need an account?{" "}
          <Link href="/signup" className="text-black font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}