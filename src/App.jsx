import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function Home() {
  return <div className="p-10 text-center"><h1 className="text-4xl font-bold">Home Page</h1></div>;
}
function Plants() {
  return <div className="p-10 text-center"><h1 className="text-4xl font-bold">Plants Page</h1></div>;
}
function Profile() {
  return <div className="p-10 text-center"><h1 className="text-4xl font-bold">My Profile</h1></div>;
}
function Login() {
  return <div className="p-10 text-center"><h1 className="text-4xl font-bold">Login Page</h1></div>;
}
function Register() {
  return <div className="p-10 text-center"><h1 className="text-4xl font-bold">Register Page</h1></div>;
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
