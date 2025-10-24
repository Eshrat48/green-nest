import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth } from "../context/AuthProvider"; 
import leaf from "../assets/leaf.png"; 

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  return (
    <nav className="w-full shadow-sm border border-gray-300 rounded-sm bg-white px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={leaf} alt="GreenNest logo" className="w-9 h-9" />
          <span className="text-[#16a34a] text-xl font-normal">GreenNest</span>
        </Link>

        <div className="flex-1 flex justify-center items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive ? "text-[#16a34a]" : "text-gray-600") +
              " text-lg font-normal hover:text-[#16a34a] transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              (isActive ? "text-[#16a34a]" : "text-gray-600") +
              " text-lg font-normal hover:text-[#16a34a] transition"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              (isActive ? "text-[#16a34a]" : "text-gray-600") +
              " text-lg font-normal hover:text-[#16a34a] transition"
            }
          >
            My Profile
          </NavLink>
        </div>

        <div className="flex items-center gap-4 relative">
          {!user && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-[#16a34a] text-white rounded hover:bg-[#15803d] transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 border border-[#16a34a] text-[#16a34a] rounded hover:bg-[#f0fdf4] transition"
              >
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <img
                  src={user.photoURL || "https://i.ibb.co/d6s6wXC/avatar-placeholder.png"}
                  alt="user"
                  className="w-12 h-12 rounded-full border border-[#16a34a]"
                />
                <span className="ml-3 text-[#16a34a] text-lg">
                  {user.displayName || "User"}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-16 bg-white border rounded shadow-md z-50 p-4 w-36">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-[#f0fdf4] text-gray-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
