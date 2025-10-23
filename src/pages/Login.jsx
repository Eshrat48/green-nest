import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import leafLogo from "../assets/leaf.png"; // <-- Import your logo

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (email === "test@test.com" && password === "123456") {
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  function handleGoogleLogin() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#ddf0e4ff] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center mb-20 mt-20"
      >
        {/* Logo */}
        <div className="mb-1">
          <img src={leafLogo} alt="GreenNest Logo" className="h-20 w-20 mx-auto" />
        </div>
        <h2 className="text-center text-lg font-semibold mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-5 text-center">Login to your GreenNest account</p>

        {/* Email Field */}
        <div className="w-full mb-4">
          <label className="text-sm block text-left mb-1">Email</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400"><FiMail /></span>
            <input
              className="pl-10 pr-3 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        {/* Password Field */}
        <div className="w-full mb-2">
          <label className="text-sm block text-left mb-1">Password</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400"><FiLock /></span>
            <input
              className="pl-10 pr-10 py-2 border border-gray-200 rounded-md outline-none w-full focus:border-green-400 transition"
              type={showPass ? "text" : "password"}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="******"
            />
            <button
              type="button"
              onClick={() => setShowPass(v => !v)}
              className="absolute right-3 top-3.5 text-gray-400"
              tabIndex={-1}
            >
              <FiEyeOff />
            </button>
          </div>
        </div>
        {/* Forgot Password */}
        <div className="w-full text-right mb-3 text-xs">
          <a href="#" className="text-green-500 hover:underline">Forgot Password?</a>
        </div>
        {/* Error Message */}
        {error && <div className="mb-3 w-full text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-700 rounded-md w-full py-2 font-medium shadow mb-4 transition"
        >
          Login
        </button>
        {/* Divider */}
        <div className="flex items-center w-full my-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-gray-400 text-xs px-2">Or continue with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center rounded-md border border-gray-300 py-2 bg-white hover:bg-gray-100 mb-3 transition"
        >
          <FcGoogle className="mr-2 text-xl" />
          <span>Sign in with Google</span>
        </button>
        {/* Signup Link */}
        <p className="text-xs mt-2 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}
