"use client";
import React from "react";
import AuthLayout from "../component/Authlayout";
// corrected path (components, plural)
import Link from "next/link";
import styles from "./choice.module.css";

export default function ChoicePage() {
  return (
    <AuthLayout>
      <div className={styles.choiceWrapper}>
        <h1 className={styles.heading}>Who are you?</h1>
        <p className={styles.subText}>Select one to continue your registration</p>

        <div className={styles.cardsContainer}>
          {/* Tailor block */}
          {/* <Link href="/register?role=tailor" className={styles.card}> */}
           <Link href="/t-registration" className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <img src="/tailor.png"   alt="Tailor" />
            </div>
            <h2 className={styles.cardTitle}>I am a Tailor</h2>
          </Link>

          {/* Customer block */}
          {/* <Link href="/register?role=customer" className={styles.card}> */}
          <Link href="/registration" className={styles.card}>
            <div className={styles.imagePlaceholder}>
              <img src="/customer.png" alt="Customer" />
            </div>
            <h2 className={styles.cardTitle}>I am a Customer</h2>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
