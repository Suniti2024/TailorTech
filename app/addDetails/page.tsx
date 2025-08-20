

"use client";

import React, { useEffect, useState } from "react";

export default function AddDetailsPage() {
  const [userId, setUserId] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    kurtiLength: "",
    sleeveType: "",
    neckDesign: "",
    fabricType: "",
    extraNotes: "",
    referenceImage: null as File | null,


    
  });

  // Pick userId from ?userId=... or localStorage.userId (no auth required)
  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const idFromLS = localStorage.getItem("UserID") || "";
      setUserId( idFromLS);
    } catch {
      // ignore
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = new FormData();
      // attach userId if we have it
      if (userId) payload.append("userId", userId);

      payload.append("kurtiLength", formData.kurtiLength);
      payload.append("sleeveType", formData.sleeveType);
      payload.append("neckDesign", formData.neckDesign);
      payload.append("fabricType", formData.fabricType);
      payload.append("extraNotes", formData.extraNotes);
      if (formData.referenceImage) {
        payload.append("referenceImage", formData.referenceImage);
      }

      const res = await fetch("/api/add-details", {
        method: "POST",
        body: payload, // multipart/form-data; do NOT set Content-Type manually
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        alert("Details saved successfully!");
        setFormData({
          kurtiLength: "",
          sleeveType: "",
          neckDesign: "",
          fabricType: "",
          extraNotes: "",
          referenceImage: null,
        });
      } else {
        alert(data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving details");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg font-sans"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Additional Dress Details
        </h1>

        {/* Kurti Length */}
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Kurti Length</span>
          <select
            name="kurtiLength"
            value={formData.kurtiLength}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
          >
            <option value="" className="text-gray-700">
              Select length
            </option>
            <option value="full" className="text-gray-800">
              Full
            </option>
            <option value="belowKnee" className="text-gray-800">
              Below Knee
            </option>
            <option value="kneeLength" className="text-gray-800">
              Knee Length
            </option>
            <option value="short" className="text-gray-800">
              Short
            </option>
          </select>
        </label>

        {/* Sleeve Type */}
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Sleeve Type</span>
          <select
            name="sleeveType"
            value={formData.sleeveType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
          >
            <option value="" className="text-gray-700">
              Select sleeve type
            </option>
            <option value="full" className="text-gray-800">
              Full Sleeves
            </option>
            <option value="half" className="text-gray-800">
              Half Sleeves
            </option>
            <option value="sleeveless" className="text-gray-800">
              Sleeveless
            </option>
            <option value="threeFourth" className="text-gray-800">
              3/4th Sleeves
            </option>
          </select>
        </label>

        {/* Neck Design */}
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Neck Design</span>
          <select
            name="neckDesign"
            value={formData.neckDesign}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
          >
            <option value="" className="text-gray-700">
              Select neck design
            </option>
            <option value="round" className="text-gray-800">
              Round Neck
            </option>
            <option value="vNeck" className="text-gray-800">
              V-Neck
            </option>
            <option value="collar" className="text-gray-800">
              Collar
            </option>
            <option value="boat" className="text-gray-800">
              Boat Neck
            </option>
          </select>
        </label>

        {/* Fabric Type */}
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Fabric Type</span>
          <select
            name="fabricType"
            value={formData.fabricType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
          >
            <option value="" className="text-gray-700">
              Select fabric
            </option>
            <option value="cotton" className="text-gray-800">
              Cotton
            </option>
            <option value="silk" className="text-gray-800">
              Silk
            </option>
            <option value="linen" className="text-gray-800">
              Linen
            </option>
            <option value="georgette" className="text-gray-800">
              Georgette
            </option>
          </select>
        </label>

        {/* Extra Notes */}
        <label className="block mb-3">
          <span className="text-gray-700 font-medium">Extra Notes</span>
          <textarea
            name="extraNotes"
            value={formData.extraNotes}
            onChange={handleChange}
            placeholder="Any additional instructions..."
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none text-gray-800"
            rows={3}
          />
        </label>

        {/* Reference Image */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Reference Image</span>
          <input
            type="file"
            name="referenceImage"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-gray-800"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold shadow hover:bg-pink-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Saving..." : "Submit Details"}
        </button>
      </form>
    </div>
  );
}
