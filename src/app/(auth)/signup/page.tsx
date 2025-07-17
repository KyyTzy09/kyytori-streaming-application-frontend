import SignUpForm from "@/features/auth/components/signUp-form";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <section className="flex items-center justify-center w-full md:w-[400px]">
        <SignUpForm />
      </section>
    </div>
  );
}
