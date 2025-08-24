import React from "react";

export const metadata = {
  title: "TailorTech - Tailor Dashboard",
  description: "TailorTech dashboard for tailors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind via CDN (no global.css needed) */}
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body className="bg-gray-50" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial" }}>
        {children}
      </body>
    </html>
  );
}
