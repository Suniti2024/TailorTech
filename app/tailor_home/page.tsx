"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./tailor.module.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [tailorID, settailorID] = useState("");
const router = useRouter();
  const getTailorID = async () => {
    const taiID = localStorage.getItem("UserID");
    return settailorID(taiID || "");
  };


  useEffect(() => {
    getTailorID();
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleLogout() {
    // TODO: wire this to your auth logic
    console.log("Logout clicked");
    alert("Logging out...");
  }

  function handleVisitProfile() {
    // TODO: navigate to profile route (use next/router or next/navigation if needed)
    console.log("Visit profile");
    alert("Visiting profile...");
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <div className="w-60 h-40 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="TailorTech Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-gray-900"
                aria-label="Notifications"
              >
                <span role="img" aria-hidden>
                  🔔
                </span>
              </button>

              {/* Profile + Dropdown */}
              <div className="relative" ref={ref}>
                <button
                  onClick={() => setOpen((s) => !s)}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={open}
                >
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    John Doe
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transform origin-top-right transition-all ${
                    open
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        router.push(`/tailor_home/${tailorID}`);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      role="menuitem"
                    >
                      <span className="mr-3">👤</span>
                      Visit Profile
                    </button>

                    <button
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      role="menuitem"
                    >
                      <span className="mr-3">🚪</span>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              {/* end profile */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className={`${styles.gradientBg} rounded-2xl p-8 text-white mb-8`}>
          <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className={`bg-white rounded-xl p-6 shadow-sm ${styles.cardHover}`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl" role="img" aria-label="handshake">
                  🤝
                </span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Client Matches
                </p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>

          <div
            className={`bg-white rounded-xl p-6 shadow-sm ${styles.cardHover}`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <span className="text-2xl" role="img" aria-label="package">
                  📦
                </span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Active Orders
                </p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div
            className={`bg-white rounded-xl p-6 shadow-sm ${styles.cardHover}`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <span className="text-2xl" role="img" aria-label="star">
                  ⭐
                </span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Services Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span
                      className="text-2xl mr-3"
                      role="img"
                      aria-label="dress"
                    >
                      👗
                    </span>
                    <h4 className="font-semibold text-gray-900">
                      Custom Tailoring
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Professional custom clothing tailored to your exact
                    measurements and preferences.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span
                      className="text-2xl mr-3"
                      role="img"
                      aria-label="scissors"
                    >
                      ✂️
                    </span>
                    <h4 className="font-semibold text-gray-900">Alterations</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert alterations to ensure your existing garments fit
                    perfectly.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3" role="img" aria-label="tie">
                      👔
                    </span>
                    <h4 className="font-semibold text-gray-900">Formal Wear</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Elegant suits, blazers, and formal attire for special
                    occasions.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span
                      className="text-2xl mr-3"
                      role="img"
                      aria-label="mask"
                    >
                      🎭
                    </span>
                    <h4 className="font-semibold text-gray-900">
                      Traditional Wear
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Beautiful traditional clothing crafted with attention to
                    cultural details.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Recent Orders
                </h3>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Manage Orders
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm font-medium text-gray-500 border-b">
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Item</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Due Date</th>
                      <th className="pb-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-900">
                    <tr className="border-b">
                      <td className="py-4">Priya Sharma</td>
                      <td className="py-4">Lehenga</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          In Progress
                        </span>
                      </td>
                      <td className="py-4">Dec 15</td>
                      <td className="py-4 font-medium">₹3,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">Amit Patel</td>
                      <td className="py-4">Blazer</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Ready
                        </span>
                      </td>
                      <td className="py-4">Dec 12</td>
                      <td className="py-4 font-medium">₹2,200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4">Lisa Chen</td>
                      <td className="py-4">Dress</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          Measuring
                        </span>
                      </td>
                      <td className="py-4">Dec 20</td>
                      <td className="py-4 font-medium">₹1,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* About TailorTech */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About TailorTech
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  TailorTech connects skilled tailors with customers seeking
                  quality custom clothing and alterations. Our platform makes it
                  easy to showcase your craftsmanship and grow your business.
                </p>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl" role="img" aria-label="dart">
                    🎯
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Our Mission</h4>
                    <p className="text-sm text-gray-600">
                      Empowering tailors with modern tools
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl" role="img" aria-label="star">
                    ⭐
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Quality First</h4>
                    <p className="text-sm text-gray-600">
                      Connecting customers with skilled artisans
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-lg" role="img" aria-label="email">
                    📧
                  </span>
                  <span className="text-sm text-gray-600">
                    support@tailortech.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg" role="img" aria-label="phone">
                    📞
                  </span>
                  <span className="text-sm text-gray-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg" role="img" aria-label="clock">
                    🕒
                  </span>
                  <span className="text-sm text-gray-600">
                    Mon-Sat: 9AM - 7PM
                  </span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="text-sm text-gray-900">Mumbai, Bandra</span>
                </div>
                <button
                  className={`w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors ${styles.cardHover}`}
                >
                  Update Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
