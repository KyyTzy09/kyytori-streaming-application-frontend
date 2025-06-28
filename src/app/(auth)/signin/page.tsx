import SignInForm from "@/components/form/signIn-form";
import React from "react";

export default function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="flex items-center justify-center w-full md:w-[400px]">
        <SignInForm />
      </section>
    </div>
  );
}
