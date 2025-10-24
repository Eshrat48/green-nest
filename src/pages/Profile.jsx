// Profile.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();
    await updateProfile({ displayName: name, photoURL: photo });
    setSuccess("Profile updated!");
    setEdit(false);
  }

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-green-50 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">My Profile</h1>
        <button
          onClick={() => setEdit((v) => !v)}
          className="bg-white text-green-900 px-7 py-1 rounded-full text-[18px] font-semibold border border-green-400 hover:bg-green-100 transition "
        >
          {edit ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="flex flex-col items-center mb-8">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-green-300"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-gray-600">
            👤
          </div>
        )}
      </div>

      {!edit ? (
        <>
          <div className="mb-4">
            <label className="block text-[20px] font-medium text-gray-600 mb-1">Name</label>
            <p className="text-lg text-gray-700">{user?.displayName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-[20px] font-medium text-gray-600 mb-1">Email</label>
            <p className="text-lg text-gray-700">{user?.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-[20px] font-medium text-gray-600 mb-1">Account Status</label>
            <p className="text-lg text-gray-700">Active Member</p>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Photo URL</label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <p className="text-sm text-gray-500">Email cannot be changed</p>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded mr-2">
            Update Profile
          </button>
          <button type="button" onClick={() => setEdit(false)} className="bg-gray-300 px-6 py-2 rounded">
            Cancel
          </button>
          {success && <p className="text-green-600 mt-2">{success}</p>}
        </form>
      )}
    </div>
  );
}
