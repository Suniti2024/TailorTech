

"use client";
import { useState, useEffect, ChangeEvent } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "", // pre-filled when user logs in
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    description: "",
  });

  // ✅ Fetch profile for logged-in user
  const fetchProfile = async (loggedInEmail: string) => {
    try {
      const res = await fetch(`/api/profile?email=${loggedInEmail}`);
      const data = await res.json();

      if (data.success && data.profile) {
        setFormData({
          username: data.profile.username || "",
          email: data.profile.email || loggedInEmail,
          street: data.profile.street || "",
          area: data.profile.area || "",
          city: data.profile.city || "",
          state: data.profile.state || "",
          pincode: data.profile.pincode || "",
          landmark: data.profile.landmark || "",
          description: data.profile.description || "",
        });
        setProfileImage(data.profile.profileImage || null);
      } else {
        // if no profile found, at least keep email
        setFormData((prev) => ({ ...prev, email: loggedInEmail }));
      }
    } catch (err) {
      console.error("Error loading profile:", err);
    }
  };

  // ✅ Load profile on mount
  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (!loggedInEmail) {
      window.location.href = "/profile";
      return;
    }
    fetchProfile(loggedInEmail);
  }, []);

  // Input + textarea handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, description: e.target.value }));
  };

  // Image upload handler
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save to DB
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, profileImage }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Profile saved!");
        setIsEditing(false);
        const loggedInEmail = localStorage.getItem("loggedInEmail");
        if (loggedInEmail) {
          fetchProfile(loggedInEmail); // reload latest data
        }
      } else {
        alert("Failed to save profile.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving profile.");
    }
  };

  const inputKeys = [
    "username",
    "email",
    "street",
    "area",
    "city",
    "state",
    "pincode",
    "landmark",
  ];

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <section className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-2xl px-8 py-10 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            My Profile
          </h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-5 py-2 font-medium rounded-xl shadow transition-all ${
              isEditing
                ? "bg-gray-400 text-white hover:bg-gray-600"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-95"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8 relative">
          <img
            src={profileImage || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg ring-4 ring-purple-300 object-cover hover:scale-105 transition-transform"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-4 text-sm text-gray-600"
            />
          )}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {inputKeys.map((key) => (
            <div key={key} className="flex flex-col">
              <label className="text-gray-600 font-semibold capitalize mb-2 tracking-wide">
                {key}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="border border-purple-200 bg-purple-50 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                  disabled={key === "email"}
                />
              ) : (
                <p className="text-gray-800 bg-gray-100 border rounded-lg px-4 py-2">
                  {formData[key as keyof typeof formData]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-4">
          <label className="text-gray-600 font-semibold mb-2 block tracking-wide">
            Description
          </label>
          {isEditing ? (
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleTextareaChange}
              className="border border-purple-200 bg-purple-50 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none w-full resize-none transition duration-300"
            />
          ) : (
            <div className="text-gray-800 bg-gray-100 border rounded-lg px-4 py-3 min-h-[64px] font-medium">
              {formData.description}
            </div>
          )}
        </div>

        {/* Save Button */}
        {isEditing && (
          <button
            onClick={handleSubmit}
            className="mt-8 w-full py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold rounded-2xl shadow-xl hover:from-green-500 hover:to-blue-500 transition duration-300"
          >
            Save Profile
          </button>
        )}
      </section>
    </main>
  );
}
