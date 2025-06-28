import SignUpForm from "@/components/form/signUp-form";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="flex items-center justify-center w-full md:w-[400px]">
        <SignUpForm />
      </section>
    </div>
  );
}
