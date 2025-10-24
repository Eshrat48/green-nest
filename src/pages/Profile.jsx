// Profile.jsx
import { useContext } from "react";
import { useAuth } from "../context/AuthProvider"; // or the exact file of your AuthProvider
import { Navigate, useLocation } from "react-router-dom";

export default function Profile() {
  const { user, updateProfile } = useAuth();  // Use hook here
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
    <section className="max-w-md mx-auto my-16 bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
        <span className="text-white font-semibold">My Profile</span>
        <button
          onClick={() => setEdit((v) => !v)}
          className="bg-white text-green-700 px-4 py-1 rounded-full font-medium"
        >
          {edit ? "Cancel" : "Edit Profile"}
        </button>
      </div>
      <div className="flex flex-col items-center pt-6 pb-2">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            className="rounded-full w-20 h-20 mb-2"
            alt="profile"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center text-white mb-2 text-3xl">
            <span>👤</span>
          </div>
        )}
      </div>
      <div className="px-8 pb-8">
        {!edit ? (
          <>
            <div className="py-3 px-4 mb-3 bg-gray-50 rounded-md text-left">
              <span className="block font-bold text-gray-600">Name</span>
              <span>{user?.displayName}</span>
            </div>
            <div className="py-3 px-4 mb-3 bg-gray-50 rounded-md text-left">
              <span className="block font-bold text-gray-600">Email</span>
              <span>{user?.email}</span>
            </div>
            <div className="p-4 mt-4 border rounded text-green-700 bg-green-50 text-left">
              <span className="block text-gray-800 font-bold mb-1">
                Account Status
              </span>
              <span className="text-green-600">Active Member</span>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="flex flex-col gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium ml-1 mb-1">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium ml-1 mb-1">
                Photo URL
              </label>
              <input
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium ml-1 mb-1">Email</label>
              <input
                value={user?.email}
                className="w-full px-3 py-2 border rounded bg-gray-100"
                disabled
              />
              <span className="text-xs text-gray-400">Email cannot be changed</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-5 font-medium"
              >
                Update Profile
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-2 px-5"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </div>
            {success && <span className="text-green-600 text-sm">{success}</span>}
          </form>
        )}
      </div>
    </section>
  );
}