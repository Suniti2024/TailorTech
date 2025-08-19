// "use client";

// import { useEffect, useState } from "react";

// export default function ViewDetailsPage() {
//   const [details, setDetails] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
 
//     async function fetchDetails() {
//       try {
//         const res = await fetch("/api/adddetails?userID="+localStorage.getItem("UserID"));
//         const data = await res.json();
//         if (data.success) {
//           setDetails(data.data);
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchDetails();
 
//   }, []);

//   const handleSend = (detail: any) => {
//     alert(`Details sent for ID: ${detail._id}`);
//     // 👉 Here you can add logic to actually "send" the details (API, email, etc.)
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>All AddDetails</h1>
//       {details.length === 0 ? (
//         <p>No details found.</p>
//       ) : (
//         details.map((detail) => (
//           <div key={detail._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//             <p><b>Kurtis Length:</b> {detail.kurtiLength}</p>
//             <p><b>Sleeve Type:</b> {detail.sleeveType}</p>
//             <p><b>Neck Design:</b> {detail.neckDesign}</p>
//             <p><b>Fabric Type:</b> {detail.fabricType}</p>
//             <p><b>Extra Notes:</b> {detail.extraNotes || "N/A"}</p>
//             <button onClick={() => handleSend(detail)}>Send Details</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function ViewDetailsPage() {
  const [details, setDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch(
          "/api/adddetails?userID=" + localStorage.getItem("UserID")
        );
        const data = await res.json();
        if (data.success) {
          setDetails(data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);

  const handleSend = (detail: any) => {
    alert(`Details sent for ID: ${detail._id}`);
    // 👉 Here you can add logic to actually "send" the details (API, email, etc.)
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">All AddDetails</h1>

      {details.length === 0 ? (
        <p className="text-center text-gray-500">No details found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail._id}
              className="border rounded-2xl p-5 shadow-md bg-black hover:shadow-lg transition"
            >
              <p className="mb-2">
                <b>Kurtis Length:</b> {detail.kurtiLength}
              </p>
              <p className="mb-2">
                <b>Sleeve Type:</b> {detail.sleeveType}
              </p>
              <p className="mb-2">
                <b>Neck Design:</b> {detail.neckDesign}
              </p>
              <p className="mb-2">
                <b>Fabric Type:</b> {detail.fabricType}
              </p>
              <p className="mb-4">
                <b>Extra Notes:</b> {detail.extraNotes || "N/A"}
              </p>
              <button
                onClick={() => handleSend(detail)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-black py-2 px-4 rounded-lg transition"
              >
                Send Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
