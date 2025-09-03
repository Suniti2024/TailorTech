"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../app/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Home() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialRef.current) {
        testimonialRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on link click (mobile)
    }
  };

  return (
    <main className="min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="TailorTech" width={36} height={36} />
            <h1 className="text-xl md:text-2xl font-bold">TailorTech</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("homehero")}>Home</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("services")}>Services</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("how-it-works")}>How It Works</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("testimonials")}>Testimonials</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("aboutus")}>About Us</Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("contact")}>Contact</Button>
             {/* <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => handleScroll("choice")}>sign in</Button> */}
             <Button 
          variant="ghost" 
          className="text-white hover:bg-white/20" 
          onClick={() => {
            // Use window.location.href to navigate to a new page
            console.log("Redirecting to /choice");
            window.location.href = '/choice';
          }}
        >
          Sign In
        </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {menuOpen ? (
              <X className="h-6 w-6 text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu className="h-6 w-6 text-white cursor-pointer" onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 text-gray-800 md:hidden">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("homehero")}>Home</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("services")}>Services</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("how-it-works")}>How It Works</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("testimonials")}>Testimonials</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("aboutus")}>About Us</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("contact")}>Contact</button>
               <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScroll("choice")}>sign in</button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="homehero" className="pt-32 text-center px-6 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
        <h2 className="text-5xl font-extrabold text-purple-800 mb-6 drop-shadow-sm">Welcome to TailorTech</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Your all-in-one tailoring platform connecting customers and professional tailors seamlessly.
        </p>
        <video autoPlay loop muted className="rounded-xl mx-auto shadow-lg w-full max-w-3xl border-4 border-purple-300">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200">
        <h3 className="text-4xl font-bold text-center text-yellow-800 mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition">
            <Image src="/customer.jpeg" alt="Customer" width={300} height={200} className="mx-auto rounded-xl" />
            <h4 className="text-xl font-semibold text-yellow-700 mt-4">For Customers</h4>
            <p className="text-gray-600 my-4">Request custom stitching, track progress, and connect with trusted tailors easily.</p>
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700">Get Started as Customer</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition">
            <Image src="/tailor.jpeg" alt="Tailor" width={300} height={200} className="mx-auto rounded-xl" />
            <h4 className="text-xl font-semibold text-yellow-700 mt-4">For Tailors</h4>
            <p className="text-gray-600 my-4">Manage orders, receive payments, and grow your tailoring business digitally.</p>
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700">Get Started as Tailor</Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Customers</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Sign up and explore tailor profiles nearby</li>
              <li>Place a stitching order with your measurements</li>
              <li>Track your order status in real-time</li>
              <li>Receive your perfectly stitched outfit</li>
            </ul>
          </div>
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Tailors</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Register your tailor profile and list services</li>
              <li>Receive customer orders and accept them</li>
              <li>Update stitching status and notify customer</li>
              <li>Get paid online and boost your visibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 py-20 px-6 md:px-20 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-800">What Our Users Say</h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide" ref={testimonialRef}>
          {["This service is a lifesaver!", "Easy to use and effective.", "Tailors are professional!", "Smooth experience!", "Highly recommend TailorTech!"].map((quote, i) => (
            <div key={i} className="min-w-[300px] bg-white/80 p-4 rounded shadow text-center hover:scale-105 transition">
              <p>“{quote}”</p>
              <p className="mt-2 text-sm text-gray-500">- User {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="aboutus" className="py-20 px-6 md:px-20 bg-gradient-to-r from-green-50 via-green-100 to-green-200">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">About Us</h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center">
          TailorTech is a one-stop digital platform dedicated to modernizing the tailoring experience. Whether you're a customer seeking perfect fitting clothes or a tailor aiming to expand your reach, we bring them together through innovation and ease of use.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Contact Us</h2>
        <form className="max-w-3xl mx-auto space-y-6 bg-white/70 p-8 rounded-lg shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg h-40"></textarea>
          <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
