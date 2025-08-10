import SignInForm from "@/features/auth/components/forms/signIn-form";
import React from "react";

export default function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <section className="flex items-center justify-center w-full md:w-[400px]">
        <SignInForm />
      </section>
    </div>
  );
}
