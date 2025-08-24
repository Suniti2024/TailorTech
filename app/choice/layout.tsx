// app/choice/layout.tsx  (server component — NO "use client" at top)
import React from "react";
import styles from "./choice.module.css";

export default function ChoiceLayout({ children }: { children: React.ReactNode }) {
  // Wrap children in a div with the module class instead of setting body.className
  return (
    <div className={styles.layoutBody}>
      {children}
    </div>
  );
}
