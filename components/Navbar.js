"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="text-xl font-semibold text-blue-600">
       LeeChat
      </Link>
      <div>
        <Link href="/login" className="mx-2 text-black-500 border border-blue-500 rounded-xl p-2">
          Login
        </Link>
        <Link href="/signup" className="mx-2 text-black-500 border border-blue-500 rounded-xl p-2">
          Signup
        </Link>
      </div>
    </nav>
  );
}
