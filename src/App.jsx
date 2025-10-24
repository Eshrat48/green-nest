import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plants from './pages/Plants';  // Move other pages to separate files similarly
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import PlantDetails from './pages/PlantDetails';
import ProtectedRoute from './components/ProtectedRoute'; // Use correct path


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plants/:id"
          element={
            <ProtectedRoute>
              <PlantDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}
