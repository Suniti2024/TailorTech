'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Tailor {
  _id: string;
  name: string;
  email: string;
  address: string;
  experience: number;
}

export default function RecommendationPage() {
  const [tailors, setTailors] = useState<Tailor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const res = await fetch('/api/recomm');
        if (!res.ok) throw new Error('Failed to fetch tailors');
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

  const handleSelectTailor = (tailorId: string) => {
     alert(`Tailor ${tailorId} selected!`);
 
    // Here you can call an API to store the selected tailor for the user
  };

  if (loading) return <p className="text-center mt-10">Loading tailors...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tailor Recommendations</h1>
      {tailors.length === 0 ? (
        <p>No tailors found.</p>
      ) : (
        <div className="space-y-4">
          {tailors.map((tailor) => (
            <div
              key={tailor._id}
              className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{tailor.name}</h2>
                <p className="text-sm text-gray-600">
                  Location: {tailor.address}
                </p>
                <p className="text-sm text-gray-600">
                  Experience: {tailor.experience} years
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/tailor/${tailor._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Profile
                </Link>
                <button
                  onClick={() => handleSelectTailor(tailor.name)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Select Tailor
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 