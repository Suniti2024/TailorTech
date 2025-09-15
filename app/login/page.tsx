 
// "use client";

// import { useState, FormEvent } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         router.push("/dashboard"); // Redirect after success
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             style={styles.input}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             style={styles.input}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p style={styles.error}>{error}</p>}
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//         <div style={styles.footer}>
//           Don’t have an account?{" "}
//           <a href="/register" style={styles.link}>
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   body: {
//     minHeight: "100vh",
//     background: "radial-gradient(circle, #0f0f0f, #1a1a1a)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontFamily: "Orbitron, sans-serif",
//     padding: "20px",
//   },
//   container: {
//     background: "rgba(0, 0, 0, 0.7)",
//     border: "2px solid #00ffff",
//     borderRadius: "15px",
//     padding: "30px 20px",
//     width: "100%",
//     maxWidth: "350px",
//     boxShadow: "0 0 20px #00ffff",
//     color: "#00ffff",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "10px 0",
//     background: "transparent",
//     border: "1px solid #00ffff",
//     borderRadius: "8px",
//     color: "white",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "20px",
//     backgroundColor: "transparent",
//     border: "2px solid #00ffff",
//     color: "#00ffff",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
//   footer: {
//     marginTop: "15px",
//     textAlign: "center",
//     color: "white",
//   },
//   link: {
//     color: "#ff00ff",
//     textDecoration: "none",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     textAlign: "center",
//   },
// };


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
      const res = await fetch("/api/login", {
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
          <a href="/registration" style={styles.link}>
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
