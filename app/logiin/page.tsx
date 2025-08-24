"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "../component/Authlayout"; // <<-- corrected import path
import styles from "./logiin.module.css";

const LoginForm: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") ?? "").toString().trim();
    const password = (formData.get("password") ?? "").toString();

    if (!email || !password) {
      alert("Please fill in both email and password");
      return;
    }

    const btn = form.querySelector<HTMLButtonElement>(".submit-btn");
    const originalText = btn?.textContent ?? "Sign In";

    if (btn) {
      btn.textContent = "Signing In...";
      btn.disabled = true;
    }

    window.setTimeout(() => {
      setSuccess(true);
      form.reset();

      if (btn) {
        btn.textContent = originalText;
        btn.disabled = false;
      }

      const successEl = document.getElementById("loginSuccessMessage");
      successEl?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen p-4 ${styles.pageWrap}`}>
      <div className={styles.tailoringPattern} />
      <div className={styles.floatingShapes} />

      <div className={`w-full max-w-md rounded-2xl p-8 relative ${styles.formContainer}`}>
        <h1 className={`${styles.headingFont} text-4xl font-bold text-center mb-8`} style={{ color: "#00e5ff" }}>
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "rgba(0,255,255,0.65)" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: "rgba(0,255,255,0.65)" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className={`submit-btn w-full py-3 px-6 text-white font-semibold rounded-lg ${styles.submitBtn}`}
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p style={{ color: "rgba(255,255,255,0.75)" }}>
            Do you want to register?{" "}
            <Link href="/choice" className="font-medium" style={{ color: "#ff5db3" }}>
              Create an account
            </Link>
          </p>
        </div>

        {success && (
          <div id="loginSuccessMessage" className={`${styles.successBox} mt-6 p-4 rounded-lg`}>
            Login successful! Redirecting...
          </div>
        )}
      </div>
    </div>
  );
};

// Wrap the page with AuthLayout so logo/header appears
export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
