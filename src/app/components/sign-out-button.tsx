"use client";
import { login,logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return <button className="bg-green-900 p-3 rounded-lg text-white cursor-pointer" onClick={() => logout()}> Sign Out Github</button>;
};