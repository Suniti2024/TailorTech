"use client";

import Link from "next/link";
import React from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo (keep it inside /public/logo.png) */}
              <img
                src="/logo.png"
                alt="TailorTech Logo"
                className="h-40 w-auto "
              />
            </Link>
          </div>

          {/* Right: Notification + Profile */}
<div className="flex items-center space-x-4">
  <Link href="/UserRequests">   
  <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-5-5V9a6 6 0 10-12 0v3l-5 5h5m7 0v1a3 3 0 01-6 0v-1m6 0H9"
        />
      </svg>
      <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
    </button>
  </Link>

  <ProfileDropdown />
</div>

        </div>
      </div>
    </header>
  );
}
