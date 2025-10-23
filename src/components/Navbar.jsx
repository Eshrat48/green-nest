// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const mockUser = null; // Replace with your actual auth logic later

export default function Navbar() {
  const [user, setUser] = useState(mockUser);
  function handleLogout() { setUser(null); }

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 text-primary text-xl font-bold">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12S6 2 20 2c0 18-10 20-18 10"/>
            <line x1="2" y1="12" x2="20" y2="12"/>
          </svg>
          GreenNest
        </Link>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <NavLink to="/" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/plants" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>Plants</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>My Profile</NavLink>
          </li>
        </ul>
        {/* Mobile menu icon */}
        <div className="dropdown md:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-square">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-48">
            <li>
              <NavLink to="/" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/plants" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>Plants</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({isActive})=>isActive?"text-primary font-semibold":undefined}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        {!user ? (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-ghost btn-sm text-primary normal-case">Login</Link>
            <Link to="/register" className="btn btn-primary btn-sm normal-case px-6">Register</Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || "https://i.ibb.co/d6s6wXC/avatar-placeholder.png"} alt="User avatar" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="mb-2 font-semibold text-primary">{user.displayName || "Profile"}</li>
              <li><button onClick={handleLogout} className="text-error">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
