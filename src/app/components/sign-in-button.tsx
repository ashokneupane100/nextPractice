"use client";
import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return <button className="bg-green-900 p-3 rounded-lg text-white" onClick={() => login()}> Sign In With Github</button>;
};