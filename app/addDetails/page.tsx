// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function StepperForm() {
//   interface Tailor {
//     _id: string;
//     name: string;
//     email: string;
//     address: string;
//     experience: number;
//   }

//   const [step, setStep] = useState(1);
//   const [tailors, setTailors] = useState<Tailor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTailor, setSelectedTailor] = useState<any>(null);
//   const [formData, setFormData] = useState({
//     kurtiLength: "",
//     sleeveType: "",
//     neckDesign: "",
//     fabricType: "",
//     extraNotes: "",
//     referenceImage: null as File | null,
//     chest: "",
//     waist: "",
//     hips: "",
//     length: "",
//     userID: "",
//     Status: "Pending",
//     TailorName: "",
//     TailorID: "",
//     TailorEmail: "",
//     TailorPhone: "",
//     Price: "Not Assigned",
//     TailorAddress: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData({ ...formData, referenceImage: e.target.files[0] });
//     }
//   };

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Build FormData for multipart/form-data
//       const data = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value !== null) {
//           data.append(key, value as string | Blob);
//         }
//       });

//       const res = await fetch("/api/add-details", {
//         method: "POST",
//         body: data, // browser sets Content-Type automatically
//       });

//       if (!res.ok) {
//         const errorData = await res.json().catch(() => ({}));
//         throw new Error(errorData.message || "Failed to submit details");
//       }

//       const result = await res.json();
//       console.log("Server response:", result);

//       alert("Details submitted successfully ✅");
//     } catch (error: any) {
//       console.error("Submit error:", error);
//       alert(`❌ Error: ${error.message || "Something went wrong"}`);
//     }
//   };

//   useEffect(() => {
//     const idFromLS = localStorage.getItem("UserID");
//     if (idFromLS) {
//       setFormData((prev) => ({
//         ...prev,
//         userID: idFromLS,
//       }));
//     }

//     const fetchTailors = async () => {
//       try {
//         const res = await fetch("/api/recomm");
//         if (!res.ok) throw new Error("Failed to fetch tailors");
//         const data = await res.json();
//         setTailors(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTailors();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto p-8">
//       {/* Stepper Header */}
//       <div className="flex items-center justify-between mb-10">
//         {["Dress Details", "Measurements", "Tailor Selection", "Review"].map(
//           (label, index) => (
//             <div key={index} className="flex-1 text-center relative">
//               {/* Circle */}
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto z-10
//               ${
//                 step === index + 1
//                   ? "bg-black text-white"
//                   : step > index + 1
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//               >
//                 {step > index + 1 ? "✓" : index + 1}
//               </div>
//               <p
//                 className={`mt-2 text-sm font-medium ${
//                   step === index + 1 ? "text-black" : "text-gray-500"
//                 }`}
//               >
//                 {label}
//               </p>
//               {/* Connector Line */}
//               {index < 2 && (
//                 <div
//                   className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 
//                 ${step > index + 1 ? "bg-green-500" : "bg-gray-300"}`}
//                 ></div>
//               )}
//             </div>
//           )
//         )}
//       </div>

//       {/* Form */}
//       <form className="space-y-6 bg-white shadow-lg p-6 rounded-2xl border">
//         {step === 1 && (
//           <div className="grid gap-4">
//             <div>
//               <label className="block font-medium">Kurti Length</label>
//               <select
//                 name="kurtiLength"
//                 value={formData.kurtiLength}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               >
//                 <option value="">Select length</option>
//                 <option value="short">Short</option>
//                 <option value="medium">Medium</option>
//                 <option value="long">Long</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-medium">Sleeve Type</label>
//               <select
//                 name="sleeveType"
//                 value={formData.sleeveType}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               >
//                 <option value="">Select sleeve type</option>
//                 <option value="full">Full</option>
//                 <option value="half">Half</option>
//                 <option value="sleeveless">Sleeveless</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-medium">Neck Design</label>
//               <select
//                 name="neckDesign"
//                 value={formData.neckDesign}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               >
//                 <option value="">Select neck design</option>
//                 <option value="round">Round</option>
//                 <option value="vneck">V-Neck</option>
//                 <option value="collar">Collar</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-medium">Fabric Type</label>
//               <select
//                 name="fabricType"
//                 value={formData.fabricType}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               >
//                 <option value="">Select fabric</option>
//                 <option value="cotton">Cotton</option>
//                 <option value="silk">Silk</option>
//                 <option value="linen">Linen</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-medium">Extra Notes</label>
//               <textarea
//                 name="extraNotes"
//                 value={formData.extraNotes}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//                 placeholder="Any additional instructions..."
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Reference Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="w-full border rounded-lg p-2"
//               />
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="grid gap-4">
//             <div>
//               <label className="block font-medium">Chest (inches)</label>
//               <input
//                 type="text"
//                 name="chest"
//                 value={formData.chest}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Waist (inches)</label>
//               <input
//                 type="text"
//                 name="waist"
//                 value={formData.waist}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Hips (inches)</label>
//               <input
//                 type="text"
//                 name="hips"
//                 value={formData.hips}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Length (inches)</label>
//               <input
//                 type="text"
//                 name="length"
//                 value={formData.length}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black"
//               />
//             </div>
//           </div>
//         )}
//         {step === 3 && (
//           <div className="max-w-4xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6">Tailor Recommendations</h1>

//             {tailors.length === 0 ? (
//               <p>No tailors found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {tailors.map((tailor) => (
//                   <div
//                     key={tailor._id}
//                     className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
//                   >
//                     <div>
//                       <h2 className="text-lg font-semibold">{tailor.name}</h2>
//                       <p className="text-sm text-gray-600">
//                         Location: {tailor.address}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Experience: {tailor.experience} years
//                       </p>
//                     </div>
//                     <div className="flex gap-3">
//                       <Link
//                         target="_blank"
//                         href={`/tailors/${tailor._id}`}
//                         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                       >
//                         View Profile
//                       </Link>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setFormData((prev: any) => ({
//                             ...prev,
//                             TailorName: tailor.name,
//                             TailorID: tailor._id,
//                             TailorEmail: tailor.email,
//                             TailorPhone: tailor.phone,
//                             TailorAddress: tailor.address,
//                           }));
//                           setSelectedTailor(tailor); // store selected tailor
//                         }}
//                         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                       >
//                         Select Tailor
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Show selected tailor at the bottom */}
//             {selectedTailor && (
//               <div className="mt-8 border-t pt-6">
//                 <h2 className="text-xl font-semibold mb-3">Selected Tailor</h2>
//                 <div className="border rounded-lg p-4 bg-gray-50 shadow-md">
//                   <h3 className="text-lg font-bold">{selectedTailor.name}</h3>
//                   <p className="text-sm text-gray-700">
//                     Location: {selectedTailor.address}
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     Experience: {selectedTailor.experience} years
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     Tailor ID: {selectedTailor._id}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {step === 4 && (
//           <div className="space-y-4">
//             <h2 className="font-bold text-xl text-gray-800">
//               Review Your Details
//             </h2>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <p>
//                 <strong>UserID:</strong> {formData.userID}
//               </p>
//               <p>
//                 <strong>Kurti Length:</strong> {formData.kurtiLength}
//               </p>
//               <p>
//                 <strong>Sleeve Type:</strong> {formData.sleeveType}
//               </p>
//               <p>
//                 <strong>Neck Design:</strong> {formData.neckDesign}
//               </p>
//               <p>
//                 <strong>Fabric Type:</strong> {formData.fabricType}
//               </p>
//               <p>
//                 <strong>Notes:</strong> {formData.extraNotes}
//               </p>
//               <p>
//                 <strong>Chest:</strong> {formData.chest}
//               </p>
//               <p>
//                 <strong>Waist:</strong> {formData.waist}
//               </p>
//               <p>
//                 <strong>Hips:</strong> {formData.hips}
//               </p>
//               <p>
//                 <strong>Length:</strong> {formData.length}
//               </p>
//               {formData.referenceImage && (
//                 <p>
//                   <strong>Reference Image:</strong>{" "}
//                   {formData.referenceImage.name}
//                 </p>
//               )}
//             </div>

//             {selectedTailor && (
//               <div className="mt-8 border-t pt-6">
//                 <h2 className="text-xl font-semibold mb-3">Selected Tailor</h2>
//                 <div className="border rounded-lg p-4 bg-gray-50 shadow-md">
//                   <h3 className="text-lg font-bold">{selectedTailor.name}</h3>
//                   <p className="text-sm text-gray-700">
//                     Location: {selectedTailor.address}
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     Experience: {selectedTailor.experience} years
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     Tailor ID: {selectedTailor._id}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between pt-4">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
//             >
//               Back
//             </button>
//           )}
//           {step < 4 ? (
//             <button
//               type="button"
//               onClick={nextStep}
//               className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
//             >
//               ✅ Submit Details
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StepperForm() {
  interface Tailor {
    _id: string;
    name: string;
    email: string;
    address: string;
    experience: number;
    phone?: string;
  }

  const [step, setStep] = useState(1);
  const [tailors, setTailors] = useState<Tailor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTailor, setSelectedTailor] = useState<any>(null);
  const [formData, setFormData] = useState({
    kurtiLength: "",
    sleeveType: "",
    neckDesign: "",
    fabricType: "",
    extraNotes: "",
    referenceImage: null as File | null,
    chest: "",
    waist: "",
    hips: "",
    length: "",
    userID: "",
    Status: "Pending",
    TailorName: "",
    TailorID: "",
    TailorEmail: "",
    TailorPhone: "",
    Price: "Not Assigned",
    TailorAddress: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, referenceImage: e.target.files[0] });
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          data.append(key, value as string | Blob);
        }
      });

      const res = await fetch("/api/add-details", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit details");
      }

      const result = await res.json();
      console.log("Server response:", result);

      alert("Details submitted successfully ✅");
    } catch (error: any) {
      console.error("Submit error:", error);
      alert(`❌ Error: ${error.message || "Something went wrong"}`);
    }
  };

  useEffect(() => {
    const idFromLS = localStorage.getItem("UserID");
    if (idFromLS) {
      setFormData((prev) => ({
        ...prev,
        userID: idFromLS,
      }));
    }

    const fetchTailors = async () => {
      try {
        const res = await fetch("/api/recomm");
        if (!res.ok) throw new Error("Failed to fetch tailors");
        const data = await res.json();
        setTailors(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTailors();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-8 text-black">
      {/* Stepper Header */}
      <div className="flex items-center justify-between mb-10">
        {["Dress Details", "Measurements", "Tailor Selection", "Review"].map(
          (label, index) => (
            <div key={index} className="flex-1 text-center relative text-black">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto z-10
              ${
                step === index + 1
                  ? "bg-black text-white"
                  : step > index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              >
                {step > index + 1 ? "✓" : index + 1}
              </div>
              <p
                className={`mt-2 text-sm font-medium ${
                  step === index + 1 ? "text-black" : "text-black"
                }`}
              >
                {label}
              </p>
              {index < 2 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 
                ${step > index + 1 ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          )
        )}
      </div>

      {/* Form */}
      <form className="space-y-6 bg-white shadow-lg p-6 rounded-2xl border text-black">
        {step === 1 && (
          <div className="grid gap-4">
            <div>
              <label className="block font-medium text-black">Kurti Length</label>
              <select
                name="kurtiLength"
                value={formData.kurtiLength}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              >
                <option value="">Select length</option>
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-black">Sleeve Type</label>
              <select
                name="sleeveType"
                value={formData.sleeveType}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              >
                <option value="">Select sleeve type</option>
                <option value="full">Full</option>
                <option value="half">Half</option>
                <option value="sleeveless">Sleeveless</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-black">Neck Design</label>
              <select
                name="neckDesign"
                value={formData.neckDesign}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              >
                <option value="">Select neck design</option>
                <option value="round">Round</option>
                <option value="vneck">V-Neck</option>
                <option value="collar">Collar</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-black">Fabric Type</label>
              <select
                name="fabricType"
                value={formData.fabricType}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              >
                <option value="">Select fabric</option>
                <option value="cotton">Cotton</option>
                <option value="silk">Silk</option>
                <option value="linen">Linen</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-black">Extra Notes</label>
              <textarea
                name="extraNotes"
                value={formData.extraNotes}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
                placeholder="Any additional instructions..."
              />
            </div>
            <div>
              <label className="block font-medium text-black">Reference Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border rounded-lg p-2 text-black"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <div>
              <label className="block font-medium text-black">Chest (inches)</label>
              <input
                type="text"
                name="chest"
                value={formData.chest}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              />
            </div>
            <div>
              <label className="block font-medium text-black">Waist (inches)</label>
              <input
                type="text"
                name="waist"
                value={formData.waist}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              />
            </div>
            <div>
              <label className="block font-medium text-black">Hips (inches)</label>
              <input
                type="text"
                name="hips"
                value={formData.hips}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              />
            </div>
            <div>
              <label className="block font-medium text-black">Length (inches)</label>
              <input
                type="text"
                name="length"
                value={formData.length}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-black text-black"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-4xl mx-auto p-6 text-black">
            <h1 className="text-2xl font-bold mb-6 text-black">Tailor Recommendations</h1>

            {tailors.length === 0 ? (
              <p className="text-black">No tailors found.</p>
            ) : (
              <div className="space-y-4">
                {tailors.map((tailor) => (
                  <div
                    key={tailor._id}
                    className="border rounded-lg p-4 shadow-sm flex justify-between items-center text-black"
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-black">{tailor.name}</h2>
                      <p className="text-sm text-black">
                        Location: {tailor.address}
                      </p>
                      <p className="text-sm text-black">
                        Experience: {tailor.experience} years
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        target="_blank"
                        href={`/tailors/${tailor._id}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        View Profile
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev: any) => ({
                            ...prev,
                            TailorName: tailor.name,
                            TailorID: tailor._id,
                            TailorEmail: tailor.email,
                            TailorPhone: tailor.phone || "",
                            TailorAddress: tailor.address,
                          }));
                          setSelectedTailor(tailor);
                        }}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Select Tailor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedTailor && (
              <div className="mt-8 border-t pt-6 text-black">
                <h2 className="text-xl font-semibold mb-3 text-black">Selected Tailor</h2>
                <div className="border rounded-lg p-4 bg-gray-50 shadow-md text-black">
                  <h3 className="text-lg font-bold">{selectedTailor.name}</h3>
                  <p className="text-sm text-black">
                    Location: {selectedTailor.address}
                  </p>
                  <p className="text-sm text-black">
                    Experience: {selectedTailor.experience} years
                  </p>
                  <p className="text-sm text-black">
                    Tailor ID: {selectedTailor._id}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 text-black">
            <h2 className="font-bold text-xl text-black">
              Review Your Details
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg text-black">
              <p><strong>UserID:</strong> {formData.userID}</p>
              <p><strong>Kurti Length:</strong> {formData.kurtiLength}</p>
              <p><strong>Sleeve Type:</strong> {formData.sleeveType}</p>
              <p><strong>Neck Design:</strong> {formData.neckDesign}</p>
              <p><strong>Fabric Type:</strong> {formData.fabricType}</p>
              <p><strong>Notes:</strong> {formData.extraNotes}</p>
              <p><strong>Chest:</strong> {formData.chest}</p>
              <p><strong>Waist:</strong> {formData.waist}</p>
              <p><strong>Hips:</strong> {formData.hips}</p>
              <p><strong>Length:</strong> {formData.length}</p>
              {formData.referenceImage && (
                <p>
                  <strong>Reference Image:</strong> {formData.referenceImage.name}
                </p>
              )}
            </div>

            {selectedTailor && (
              <div className="mt-8 border-t pt-6 text-black">
                <h2 className="text-xl font-semibold mb-3 text-black">Selected Tailor</h2>
                <div className="border rounded-lg p-4 bg-gray-50 shadow-md text-black">
                  <h3 className="text-lg font-bold">{selectedTailor.name}</h3>
                  <p className="text-sm text-black">
                    Location: {selectedTailor.address}
                  </p>
                  <p className="text-sm text-black">
                    Experience: {selectedTailor.experience} years
                  </p>
                  <p className="text-sm text-black">
                    Tailor ID: {selectedTailor._id}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              ✅ Submit Details
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
