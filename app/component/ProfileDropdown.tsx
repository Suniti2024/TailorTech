// // "use client";


// // import React, { useState, useEffect, useRef } from "react";


// // export default function ProfileDropdown() {
// // const [open, setOpen] = useState(false);
// // const btnRef = useRef<HTMLButtonElement | null>(null);
// // const menuRef = useRef<HTMLDivElement | null>(null);


// // useEffect(() => {
// // function handleClick(e: MouseEvent) {
// // const target = e.target as Node;
// // if (btnRef.current?.contains(target)) return;
// // if (menuRef.current && !menuRef.current.contains(target)) {
// // setOpen(false);
// // }
// // }
// // document.addEventListener("click", handleClick);
// // return () => document.removeEventListener("click", handleClick);
// // }, []);


// // return (
// // <div className="relative">
// // <button
// // ref={btnRef}
// // onClick={() => setOpen((s) => !s)}
// // className="flex items-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
// // aria-expanded={open}
// // aria-haspopup="true"
// // >
// // <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // </svg>
// // </button>


// // {open && (
// // <div ref={menuRef} id="profileDropdown" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
// // <a href="profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
// // <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // </svg>
// // Visit Profile
// // </a>


// // <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
// // <svg className="h-4 w-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
// // </svg>
// // Logout
// // </a>
// // </div>
// // )}
// // </div>
// // );
// // }

// "use client";

// import React, { useState, useEffect, useRef } from "react";

// export default function ProfileDropdown() {
//   const [open, setOpen] = useState(false);
//   const btnRef = useRef<HTMLButtonElement | null>(null);
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       const target = e.target as Node;
//       if (btnRef.current?.contains(target)) return;
//       if (menuRef.current && !menuRef.current.contains(target)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, []);

//   const handleLogout = () => {
//     // Remove stored login info
//     localStorage.removeItem("loggedInEmail");
//     localStorage.removeItem("UserID");

//     // Redirect to login
//     window.location.href = "/login";
//   };

//   return (
//     <div className="relative">
//       <button
//         ref={btnRef}
//         onClick={() => setOpen((s) => !s)}
//         className="flex items-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
//         aria-expanded={open}
//         aria-haspopup="true"
//       >
//         <svg
//           className="h-6 w-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//           />
//         </svg>
//       </button>

//       {open && (
//         <div
//           ref={menuRef}
//           id="profileDropdown"
//           className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
//         >
//           {/* Visit Profile */}
//           <a
//             href="/profile"
//             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//           >
//             <svg
//               className="h-4 w-4 mr-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//             Visit Profile
//           </a>

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-left"
//           >
//             <svg
//               className="h-4 w-4 mr-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17 16l4-4m0 0l-4-4m4 4H7"
//               />
//             </svg>
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);


  console.log("tailorID");

  useEffect(() => {
  
    function handleClick(e: MouseEvent) {

      const target = e.target as Node;
      if (btnRef.current?.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((s) => !s)}
        className="flex items-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          id="profileDropdown"
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
        >
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Visit Profile
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-4 w-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </a>
        </div>
      )}
    </div>
  );
}