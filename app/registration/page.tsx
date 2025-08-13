  

 "use client";

import React, { useState, FormEvent } from "react";

export default function Page() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMsg("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value.trim();
    const address = (form.elements.namedItem("address") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !password || !address) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, address }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setSuccess(true);
      form.reset();
      const successMsg = document.getElementById("successMessage");
      if (successMsg) {
        successMsg.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-sm md:max-w-md rounded-3xl p-6 sm:p-8 relative border border-cyan-400 shadow-lg neon-glow">
        <div className="text-center mb-6">
          <div className="text-5xl text-cyan-300 mb-3">
            <span role="img" aria-label="search">🔍</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-cyan-300 tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Registration
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField id="name" type="text" label="Full Name" placeholder="Enter your full name" />
          <InputField id="email" type="email" label="Email Address" placeholder="Enter your email address" />
          <InputField id="password" type="password" label="Password" placeholder="Create a secure password" />
          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-cyan-300 mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              placeholder="Enter your complete address"
              className="w-full px-4 py-2 rounded-lg bg-black text-white border border-cyan-300 placeholder-cyan-400 focus:outline-none"
            />
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn w-full py-3 px-6 text-white font-bold rounded-lg border border-cyan-400 hover:bg-cyan-600 transition-colors bg-black neon-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <p className="text-cyan-300">
            Already have an account?{" "}
            <a href="/login" className="text-pink-400 hover:underline">
              Sign In
            </a>
          </p>
        </div>

        {success && (
          <div
            id="successMessage"
            className="mt-6 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            Registration successful! Welcome to our tailoring studio.
          </div>
        )}
      </div>

      <style jsx>{`
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.2);
          background-color: rgba(0, 0, 0, 0.9);
        }
        .neon-button {
          box-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};

function InputField({ id, type, label, placeholder }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-cyan-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg bg-black text-white border border-cyan-300 placeholder-cyan-400 focus:outline-none"
      />
    </div>
  );
}
