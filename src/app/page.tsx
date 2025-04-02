"use server"
import { signIn } from "next-auth/react";
import Image from "next/image";
import { SignInButton } from './components/sign-in-button';
import {auth} from "@/auth";

export default async function Home() {
  const session= await auth();
  return (
    <div>
      <p>You are not signed In</p>
      <br /><br />
    <SignInButton/>
    </div>
  );
}