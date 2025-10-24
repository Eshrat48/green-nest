// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import leafLogo from "../assets/leaf.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      setError("No registered user found, please register first.");
      return;
    }
    if (
      email.trim().toLowerCase() === registeredUser.email.toLowerCase() &&
      password === registeredUser.password
    ) {
      login(registeredUser.email, registeredUser.displayName, registeredUser.photoURL);
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#ddf0e4ff] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center mb-20 mt-20"
      >
        <div className="mb-1">
          <img src={leafLogo} alt="GreenNest Logo" className="h-20 w-20 mx-auto" />
        </div>
        <h2 className="text-center text-lg font-semibold mb-1 text-green-700">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-5 text-center">
          Login to your GreenNest account
        </p>
        <div className="w-full mb-4">
          <label className="text-sm block text-left mb-1 text-gray-600">Email</label>
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
        <div className="w-full mb-2">
          <label className="text-sm block text-left mb-1 text-gray-600">Password</label>
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
        
        <div className="w-full mb-2 text-right">
          <a 
            href="mailto:support@greennest.com?subject=Password%20Reset%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20reset%20my%20password%20for%20my%20GreenNest%20account.%0A%0AMy%20registered%20email%3A%20"
            className="text-sm text-green-600 hover:text-green-700 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        {error && (
          <div className="mb-3 w-full text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-700 rounded-md w-full py-2 font-medium shadow mb-4 transition"
        >
          Login
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
              login(decoded.email, decoded.name, decoded.picture);
              navigate("/");
            }}
            onError={() => {
              setError("Google sign-in failed. Please try again.");
            }}
          />
        </div>

        <p className="text-xs mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
