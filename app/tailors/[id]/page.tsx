import { connectToDatabase } from '@/utils/mongodb';
import { ObjectId } from 'mongodb';
import { Tailor } from '../../types/tailor';
import Link from 'next/link';

interface TailorProfileProps {
  params: {
    id: string;
  };
}

export default async function TailorProfile({ params: { id } }: TailorProfileProps) {
  const { db } = await connectToDatabase();

  let tailor: Tailor | null = null;

  try {
    if (!ObjectId.isValid(id)) {
      return (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-xl font-semibold text-red-600">Invalid tailor ID</h1>
        </div>
      );
    }

    tailor = await db
      .collection<Tailor>('tailors')
      .findOne({ id: new ObjectId(id) });

  } catch (error) {
    console.error('Error fetching tailor:', error);
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold text-red-600">Error loading tailor</h1>
      </div>
    );
  }

  if (!tailor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold text-gray-700">Tailor not found</h1>
      </div>
    );
  }

  // Simulated logged-in user (replace with actual session logic)
  const currentUserId = "YOUR_LOGGED_IN_USER_ID";

  const isOwner = tailor._id?.toString() === currentUserId;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
          Tailor Profile
        </h1>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={tailor.photos?.[0] || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-purple-300 shadow-md object-cover"
          />
        </div>

        {/* Profile Info */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  <div>
    <label className="block text-sm font-medium text-gray-600">Name</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.name}
    </p>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600">Email</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.email}
    </p>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600">Phone</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.phone}
    </p>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600">Experience</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.experience || "N/A"}
    </p>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-600">Address</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.address || "N/A"}
    </p>
  </div>
  <div className="sm:col-span-2">
    <label className="block text-sm font-medium text-gray-600">Services</label>
    <p className="mt-1 px-3 py-2 rounded-md border border-gray-200 bg-gray-50">
      {tailor.services?.join(", ") || "N/A"}
    </p>
  </div>
</div>


        {/* Buttons (only if user is owner) */}
        {isOwner && (
          <div className="flex justify-center gap-4 mb-6">
            <Link
              href={`/tailors/edit/${tailor._id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              ✏️ Edit Profile
            </Link>

            <Link
              href={`/tailors/${tailor._id}/add-photos`}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              📷 Add Photos
            </Link>
          </div>
        )}

        {/* Photos Section */}
        {tailor.photos?.length > 1 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Sample Work</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tailor.photos.slice(1).map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Tailor work ${index + 1}`}
                  className="rounded-lg border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
