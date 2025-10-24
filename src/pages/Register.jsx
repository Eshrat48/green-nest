// Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FiMail, FiLock, FiUser, FiImage, FiEyeOff } from "react-icons/fi";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import leafLogo from "../assets/leaf.png";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  function validatePassword(pw) {
    return (
      /[A-Z]/.test(pw) &&
      /[a-z]/.test(pw) && 
      pw.length >= 6
    );
  }

  function convertGoogleDriveUrlToDirect(url) {
    const regExp = /\/d\/(.*?)\/view/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; 
  }

  function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!validatePassword(password)) {
      setError(
        "Password must have at least one uppercase, one lowercase letter, and be at least 6 characters."
      );
      return;
    }
    if (!name || !email || !photo) {
      setError("All fields are required.");
      return;
    }
    const directPhotoUrl = convertGoogleDriveUrlToDirect(photo);

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        email,
        password,
        displayName: name,
        photoURL: directPhotoUrl,
      })
    );
    register(email, name, directPhotoUrl);
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#ddf0e4ff] flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center mb-20 mt-20"
      >
        <div className="mb-5 h-22 w-22">
          <img
            src={leafLogo}
            alt="GreenNest Logo"
            className="h-10 w-10 mx-auto"
          />
        </div>
        <h2 className="text-center font-semibold text-green-800 text-[25px]">
          Create Account
        </h2>
        <p className="text-[16px] text-gray-500 text-center">
          Join GreenNest and start your plant journey
        </p>
        <div className="w-full mb-4">
          <label className="text-medium block text-left mb-1 text-gray-600 mt-4">Name</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiUser />
            </span>
            <input
              className="pl-10 pr-3 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label className="text-medium text-gray-600 block text-left mb-1">Email</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiMail />
            </span>
            <input
              className="pl-10 pr-3 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label className="text-medium text-gray-600 block text-left mb-1">Photo URL</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiImage />
            </span>
            <input
              className="pl-10 pr-3 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type="url"
              required
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <label className="text-medium text-gray-600 block text-left mb-1">Password</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400">
              <FiLock />
            </span>
            <input
              className="pl-10 pr-10 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type={showPass ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
            <button
              type="button"
              onClick={() => setShowPass((v) => !v)}
              className="absolute right-3 top-3.5 text-gray-400"
              tabIndex={-1}
            >
              <FiEyeOff />
            </button>
          </div>
        </div>
        {error && (
          <div className="mb-3 w-full text-red-500 text-sm text-center">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-700 rounded-md w-full py-2 font-medium shadow mb-4 transition"
        >
          Register
        </button>
        <div className="flex items-center w-full my-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-gray-400 text-xs px-2">Or continue with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        
        <div className="w-full">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              register(decoded.email, decoded.name, decoded.picture);
              navigate("/");
            }}
            onError={() => {
              setError("Google sign-up failed. Please try again.");
            }}
          />
        </div>

        <p className="text-xs mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
