

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import AuthLayout from "../component/Authlayout"; // <<-- corrected import path
// import styles from "./logiin.module.css";

// const LoginForm: React.FC = () => {
//   const [success, setSuccess] = useState<boolean>(false);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     setSuccess(false);

//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const email = (formData.get("email") ?? "").toString().trim();
//     const password = (formData.get("password") ?? "").toString();

//     if (!email || !password) {
//       alert("Please fill in both email and password");
//       return;
//     }

//     const btn = form.querySelector<HTMLButtonElement>(".submit-btn");
//     const originalText = btn?.textContent ?? "Sign In";

//     if (btn) {
//       btn.textContent = "Signing In...";
//       btn.disabled = true;
//     }

//     window.setTimeout(() => {
//       setSuccess(true);
//       form.reset();

//       if (btn) {
//         btn.textContent = originalText;
//         btn.disabled = false;
//       }

//       const successEl = document.getElementById("loginSuccessMessage");
//       successEl?.scrollIntoView({ behavior: "smooth" });
//     }, 900);
//   };

//   // 🔹 Redirect after login success
//   useEffect(() => {
//     if (success) {
//       const timer = setTimeout(() => {
//         router.push("/tailor_home"); // redirect to tailor_home
//       }, 1500); // wait 1.5s so user sees success message
//       return () => clearTimeout(timer);
//     }
//   }, [success, router]);

//   return (
//     <div
//       className={`flex items-center justify-center min-h-screen p-4 ${styles.pageWrap}`}
//     >
//       <div className={styles.tailoringPattern} />
//       <div className={styles.floatingShapes} />

//       <div
//         className={`w-full max-w-md rounded-2xl p-8 relative ${styles.formContainer}`}
//       >
//         <h1
//           className={`${styles.headingFont} text-4xl font-bold text-center mb-8`}
//           style={{ color: "#00e5ff" }}
//         >
//           Sign In
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium mb-2"
//               style={{ color: "rgba(0,255,255,0.65)" }}
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
//               placeholder="Enter your email address"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium mb-2"
//               style={{ color: "rgba(0,255,255,0.65)" }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`submit-btn w-full py-3 px-6 text-white font-semibold rounded-lg ${styles.submitBtn}`}
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <p style={{ color: "rgba(255,255,255,0.75)" }}>
//             Do you want to register?{" "}
//             <Link
//               href="/choice"
//               className="font-medium"
//               style={{ color: "#ff5db3" }}
//             >
//               Create an account
//             </Link>
//           </p>
//         </div>

//         {success && (
//           <div
//             id="loginSuccessMessage"
//             className={`${styles.successBox} mt-6 p-4 rounded-lg`}
//           >
//             Login successful! Redirecting...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Wrap the page with AuthLayout so logo/header appears
// export default function Page() {
//   return (
//     <AuthLayout>
//       <LoginForm />
//     </AuthLayout>
//   );
// }


// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import AuthLayout from "../component/Authlayout"; // <<-- corrected import path
// import styles from "./logiin.module.css";

// const LoginForm: React.FC = () => {
//   const [success, setSuccess] = useState<boolean>(false);
//   const router = useRouter();
//   const [loginEmail, setLoginEmail] = useState<string>("");

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   setSuccess(false);

  //   const form = e.currentTarget;
  //   const formData = new FormData(form);
  //   const email = (formData.get("email") ?? "").toString().trim();
  //   const password = (formData.get("password") ?? "").toString();

  //   if (!email || !password) {
  //     alert("Please fill in both email and password");
  //     return;
  //   }

  //   const btn = form.querySelector<HTMLButtonElement>(".submit-btn");
  //   const originalText = btn?.textContent ?? "Sign In";

  //   if (btn) {
  //     btn.textContent = "Signing In...";
  //     btn.disabled = true;
  //   }

  //   // Simulating login success
  //   window.setTimeout(() => {
  //     setSuccess(true);
  //     setLoginEmail(email);

     

  //     // ✅ Store email & dummy userID in localStorage
  //     localStorage.setItem("UserEmail", email);
  //     localStorage.setItem("UserID", data?.user?.userID ); // replace with actual userID from backend later

  //     form.reset();

  //     if (btn) {
  //       btn.textContent = originalText;
  //       btn.disabled = false;
  //     }

  //     const successEl = document.getElementById("loginSuccessMessage");
  //     successEl?.scrollIntoView({ behavior: "smooth" });
  //   }, 900);
  // };

  // // 🔹 Redirect after login success
  // useEffect(() => {
  //   if (success) {
  //     const timer = setTimeout(() => {
  //       router.push("/tailor_home"); // redirect to tailor_home
  //     }, 1500); // wait 1.5s so user sees success message
  //     return () => clearTimeout(timer);
  //   }
  // }, [success, router]);

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       setError("");
  
//       try {
//         const res = await fetch("/api/logiin", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         });
  
//         const data = await res.json();
//   console.log(data);
  
//         if (res.ok) {
//           // ✅ Save the logged-in email in localStorage
//           localStorage.setItem("loggedInEmail", email);
//           localStorage.setItem("UserID", data?.user?.userID);
  
//           // Redirect after login success
//           router.push("/tailor_home"); 
//           // 👉 or use "/profile" if you want direct profile redirect
//         } else {
//           setError(data.message || "Login failed");
//         }
//       } catch (err) {
//         setError("Something went wrong. Please try again.");
//       }
//     };
  

//   return (
//     <div
//       className={`flex items-center justify-center min-h-screen p-4 ${styles.pageWrap}`}
//     >
//       <div className={styles.tailoringPattern} />
//       <div className={styles.floatingShapes} />

//       <div
//         className={`w-full max-w-md rounded-2xl p-8 relative ${styles.formContainer}`}
//       >
//         <h1
//           className={`${styles.headingFont} text-4xl font-bold text-center mb-8`}
//           style={{ color: "#00e5ff" }}
//         >
//           Sign In
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium mb-2"
//               style={{ color: "rgba(0,255,255,0.65)" }}
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
//               placeholder="Enter your email address"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium mb-2"
//               style={{ color: "rgba(0,255,255,0.65)" }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className={`${styles.inputField} w-full px-4 py-3 rounded-lg focus:outline-none`}
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`submit-btn w-full py-3 px-6 text-white font-semibold rounded-lg ${styles.submitBtn}`}
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <p style={{ color: "rgba(255,255,255,0.75)" }}>
//             Do you want to register?{" "}
//             <Link
//               href="/choice"
//               className="font-medium"
//               style={{ color: "#ff5db3" }}
//             >
//               Create an account
//             </Link>
//           </p>
//         </div>

//         {success && (
//           <div
//             id="loginSuccessMessage"
//             className={`${styles.successBox} mt-6 p-4 rounded-lg`}
//           >
//             Login successful! Redirecting...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Wrap the page with AuthLayout so logo/header appears
// export default function Page() {
//   return (
//     <AuthLayout>
//       <LoginForm />
//     </AuthLayout>
//   );
// }

"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/logiin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
console.log(data);

      if (res.ok) {
        // ✅ Save the logged-in email in localStorage
        localStorage.setItem("loggedInEmail", email);
        localStorage.setItem("UserID", data?.user?.userID);

        // Redirect after login success
        router.push("/customer_home"); 
        // 👉 or use "/profile" if you want direct profile redirect
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <div style={styles.footer}>
          Don’t have an account?{" "}
          <a href="/t_registration" style={styles.link}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    minHeight: "100vh",
    background: "radial-gradient(circle, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Orbitron, sans-serif",
    padding: "20px",
  },
  container: {
    background: "rgba(0, 0, 0, 0.7)",
    border: "2px solid #00ffff",
    borderRadius: "15px",
    padding: "30px 20px",
    width: "100%",
    maxWidth: "350px",
    boxShadow: "0 0 20px #00ffff",
    color: "#00ffff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    background: "transparent",
    border: "1px solid #00ffff",
    borderRadius: "8px",
    color: "white",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: "transparent",
    border: "2px solid #00ffff",
    color: "#00ffff",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "15px",
    textAlign: "center",
    color: "white",
  },
  link: {
    color: "#ff00ff",
    textDecoration: "none",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  },
};
