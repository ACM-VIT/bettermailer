"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { name, email, dob, password, confirmPassword } = form;

    if (!name || !email || !dob || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u: any) => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("user", email);
    router.push("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-md border border-gray-200">

        <p className="text-sm text-gray-500 mb-2">Create account</p>

        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Get started in a minute
        </h1>

        {/* ✅ FORM ADDED */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Date of birth</label>
              <input
                type="date"
                name="dob"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit" // ✅ IMPORTANT
            className="w-full mt-6 bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition"
          >
            Create account
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}