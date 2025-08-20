"use client";

import { useEffect, useState } from "react";

export default function ViewDetailsPage() {
  const [details, setDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch(
          "/api/FetchUserReq?tailorID=" + localStorage.getItem("UserID")
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

  const handleUpdate = async (id: string, newPrice: string, newStatus: string) => {
    try {
      const res = await fetch("/api/UpdateUserStatus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, Price: newPrice, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Details updated successfully!");
        setDetails((prev) =>
          prev.map((d) =>
            d._id === id ? { ...d, Price: newPrice, status: newStatus } : d
          )
        );
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update details.");
    }
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        All Users Details
      </h1>

      {details.length === 0 ? (
        <p className="text-center text-gray-500">No details found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail._id}
              className="border rounded-2xl text-gray-800 p-6 shadow-md bg-white hover:shadow-lg transition"
            >
              {/* Dress Details */}
              <h2 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-1">
                Dress Details
              </h2>
              <div className="space-y-1 text-sm">
                <p><b>Kurtis Length:</b> {detail.kurtiLength}</p>
                <p><b>Sleeve Type:</b> {detail.sleeveType}</p>
                <p><b>Neck Design:</b> {detail.neckDesign}</p>
                <p><b>Fabric Type:</b> {detail.fabricType}</p>
                <p><b>Extra Notes:</b> {detail.extraNotes || "N/A"}</p>
                <p><b>Chest:</b> {detail.chest}</p>
                <p><b>Waist:</b> {detail.waist}</p>
                <p><b>Hips:</b> {detail.hips}</p>
                <p><b>Length:</b> {detail.length}</p>
                <p><b>UserID:</b> {detail.userID}</p>
                <p><b>User Status:</b> {detail.UsersStatus}</p>
              </div>

              {/* Reference Image */}
              {detail.referenceImage && (
                <div className="mt-3">
                  <b>Reference Image:</b>
                  <img
                    src={detail.referenceImage}
                    alt="Reference"
                    className="mt-2 rounded-lg w-full h-40 object-cover border border-gray-200"
                  />
                </div>
              )}

              {/* Tailor Info
              <h2 className="text-lg font-semibold mt-5 mb-3 border-b border-gray-200 pb-1">
                Tailor Information
              </h2>
              <div className="space-y-1 text-sm">
                <p><b>Tailor Name:</b> {detail.TailorName || "N/A"}</p>
                <p><b>Tailor ID:</b> {detail.TailorID || "N/A"}</p>
                <p><b>Email:</b> {detail.TailorEmail || "N/A"}</p>
                <p><b>Phone:</b> {detail.TailorPhone || "N/A"}</p>
                <p><b>Address:</b> {detail.TailorAddress || "N/A"}</p>
              </div> */}

              {/* Update Section */}
              <div className="border rounded-md p-3 mt-5 bg-gray-50">
                <label className="block text-sm mb-2">
                  <b>Status:</b>
                  <select
                    defaultValue={detail.status}
                    onChange={(e) =>
                      setDetails((prev) =>
                        prev.map((d) =>
                          d._id === detail._id ? { ...d, status: e.target.value } : d
                        )
                      )
                    }
                    className="ml-2 border rounded px-2 py-1 text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </label>

                <label className="block text-sm mb-3">
                  <b>Price:</b>
                  <input
                    type="number"
                    defaultValue={detail.Price || ""}
                    onChange={(e) =>
                      setDetails((prev) =>
                        prev.map((d) =>
                          d._id === detail._id ? { ...d, Price: e.target.value } : d
                        )
                      )
                    }
                    className="ml-2 border rounded px-2 py-1 text-sm w-24"
                  />
                </label>

                <button
                  onClick={() => handleUpdate(detail._id, detail.Price, detail.status)}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
