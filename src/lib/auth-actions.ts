"use server";

import { signOut } from "next-auth/react"; // Note: This won't work directly on the server
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // Import your NextAuth config

export async function serverSignOut() {
  // Since signOut from next-auth/react is client-side, we need to handle this differently
  // Instead, we can invalidate the session on the server and redirect
  const session = await getServerSession(authOptions);
  if (session) {
    // Invalidate the session (NextAuth.js doesn't have a direct server-side signOut method)
    // We can redirect to the sign-out endpoint provided by NextAuth.js
    return { redirect: "/api/auth/signout" }; // Redirect to NextAuth's sign-out route
  }
  return { redirect: "/" };
}