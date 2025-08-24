"use client";
import React from "react";
import Image from "next/image";
import styles from "./AuthLayout.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.pageWrap}>
      {/* Logo at top */}
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Website Logo"
          width={860}
          height={10}
          className={styles.logo}
        />
      </header>

      {/* Page-specific content */}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AuthLayout;
