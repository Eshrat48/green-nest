// src/components/ProtectedRoute.jsx
import { useAuth } from "../context/AuthProvider"; // Use your actual path
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}
