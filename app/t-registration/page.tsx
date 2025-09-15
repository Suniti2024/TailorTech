 
//  'use client';

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useRouter } from 'next/navigation';
// import { Tailor } from '../types/tailor';

// export default function RegisterPage() {
//   const router = useRouter();

//   const [form, setForm] = useState<Tailor>({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     services: [],
//     experience: '',
//     photos: []
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: name === 'services' ? value.split(',').map(s => s.trim()) : value
//     }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/tailor', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });

//       if (!res.ok) {
//         alert('Failed to register');
//         return;
//       }

//       const data = await res.json();
//       // Redirect to tailor profile page using inserted ID
//       router.push(`/tailors/${data.id}`);
//     } catch (err) {
//       console.error('Error during registration:', err);
//       alert('Something went wrong');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black border border-cyan-400 rounded-3xl shadow-[0_0_25px_#00ffff] p-8 w-full max-w-md"
//       >
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#00ffff]">
//             🔍
//           </div>
//           <h1 className="text-3xl font-bold text-cyan-400 mt-4">Registration</h1>
//         </div>

//         {['name', 'email', 'password', 'phone', 'address', 'services', 'experience'].map((field, idx) => (
//           <div key={idx}>
//             <label className="block mb-2 text-cyan-400 font-semibold capitalize">
//               {field === 'services' ? 'Services (comma separated)' : field}
//             </label>
//             <input
//               type={field === 'password' ? 'password' : 'text'}
//               name={field}
//               placeholder={`Enter your ${field}`}
//               onChange={handleChange}
//               className="w-full p-2 mb-4 bg-black border border-cyan-400 rounded-md text-cyan-300 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-lg shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_30px_#00ffff] transition-all duration-300"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Tailor } from '../types/tailor';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState<Tailor>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    services: [],
    experience: '',
    photos: []
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'services' ? value.split(',').map(s => s.trim()) : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        alert('Failed to register');
        return;
      }

      const data = await res.json();
      // Redirect to tailor profile page using inserted ID
      router.push(`/tailors/${data.id}`);
    } catch (err) {
      console.error('Error during registration:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-cyan-400 rounded-3xl shadow-[0_0_25px_#00ffff] p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#00ffff]">
            🔍
          </div>
          <h1 className="text-3xl font-bold text-cyan-400 mt-4">Registration</h1>
        </div>

        {['name', 'email', 'password', 'phone', 'address', 'services', 'experience'].map((field, idx) => (
          <div key={idx}>
            <label className="block mb-2 text-cyan-400 font-semibold capitalize">
              {field === 'services' ? 'Services (comma separated)' : field}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={`Enter your ${field}`}
              onChange={handleChange}
              className="w-full p-2 mb-4 bg-black border border-cyan-400 rounded-md text-cyan-300 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-lg shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_30px_#00ffff] transition-all duration-300"
        >
          Create Account
        </button>

        {/* Already have account link */}
        <p className="mt-4 text-center text-cyan-400">
          Already have an account?{' '}
          <span
            onClick={() => router.push('/logiin')}
            className="underline cursor-pointer hover:text-cyan-300"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
