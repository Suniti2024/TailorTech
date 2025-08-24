"use client";
import React from "react";
import './customer_home.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<head>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>TailorTech - Connect with Local Tailors</title>
</head>
<body className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-inter">
{children}
</body>
</html>
);
}