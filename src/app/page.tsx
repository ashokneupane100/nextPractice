"use server"; // Directive for Next.js server actions

import { signIn } from "next-auth/react";
import Image from "next/image";
import { SignInButton } from "./components/sign-in-button";
import { auth } from "@/auth";
import { SignOutButton } from "./components/sign-out-button";

// Define a type for the session user to ensure type safety (if using TypeScript)
interface UserSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default async function Home() {
  // Fetch the session using the auth helper
  const session: UserSession | null = await auth();

  // If the user is signed in, display their information
  if (session?.user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Next Auth v5 + Next 15
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            User signed in with name:{" "}
            <span className="font-semibold">
              {session.user.name ?? "Unknown"}
            </span>
          </p>
          <p className="text-lg text-gray-600 mb-4">
            User signed in with email:{" "}
            <span className="font-semibold">
              {session.user.email ?? "Unknown"}
            </span>
          </p>

          {/* Display user avatar if available */}
          {session.user.image && (
            <div className="flex justify-center mb-4">
              <Image
                src={session.user.image}
                width={48}
                height={48}
                alt={session.user.name ?? "Avatar"}
                className="rounded-full border-2 border-gray-300"
              />
            </div>
          )}
        </div>
        <div className="mt-8">
        <SignOutButton />
        </div>
      </div>
    );
  }

  // If the user is not signed in, show the sign-in prompt
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <p className="text-lg text-gray-600 mb-6">You are not signed in.</p>
        <SignInButton />
      </div>
    </div>
  );
}
