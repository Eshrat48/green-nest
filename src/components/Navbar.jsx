import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import leaf from "../assets/leaf.png"; // adjust if needed

// Mock user for demonstration (null = logged out, object = logged in)
const mockUser = {
  displayName: "John Doe",
  photoURL: "https://i.ibb.co/d6s6wXC/avatar-placeholder.png"
};
// const mockUser = null; // Uncomment for "logged out" view

export default function Navbar() {
  const [user, setUser] = useState(mockUser);

  function handleLogout() {
    setUser(null); // Replace with your actual logout logic
  }

  return (
    <nav className="w-full shadow-sm border border-gray-300 rounded-sm bg-white px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={leaf}
            alt="GreenNest logo"
            className="w-9 h-9"
          />
          <span className="text-[#16a34a] text-xl font-normal">GreenNest</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-600 text-lg font-normal hover:text-[#16a34a] transition ${
                isActive ? "text-[#16a34a] font-normal" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              `text-gray-600 text-lg font-normal hover:text-[#16a34a] transition ${
                isActive ? "text-[#16a34a] font-normal" : ""
              }`
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `text-gray-600 text-lg font-normal hover:text-[#16a34a] transition ${
                isActive ? "text-[#16a34a] font-normal" : ""
              }`
            }
          >
            My Profile
          </NavLink>
        </div>

        {/* Auth Section */}
        {!user ? (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-[#16a34a] text-lg rounded-lg px-3 py-2 hover:bg-[#e5f7ea] transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#16a34a] text-white text-lg px-5 py-2 rounded-lg font-normal hover:bg-[#149632] transition"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="relative flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#e5f7ea] transition">
              <img
                src={user.photoURL}
                alt="User avatar"
                className="w-9 h-9 rounded-full border border-[#16a34a]"
              />
              <span className="text-[#16a34a] text-lg">{user.displayName}</span>
            </button>
            {/* Dropdown (show always for this example; add menu logic for real auth) */}
            <div className="absolute right-0 top-16 z-20 bg-white rounded shadow border border-gray-200 w-44 py-2">
              <button
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
