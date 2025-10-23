import { Link } from "react-router-dom";
import leaf from "../assets/leaf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faPinterestP } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#166534] w-full text-white py-10 px-4 border-t border-[#14532d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo and tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={leaf} alt="GreenNest" className="w-10 h-10" />
            <span className="text-2xl font-normal text-white">GreenNest</span>
          </div>
          <p className="text-md text-[#52ffa7] mt-2 max-w-xs">
            Nurture your space with healthy indoor plants and expert care guidance.
          </p>
        </div>
        {/* Center: Quick Links */}
        <div>
          <div className="text-2xl font-normal mb-4 text-white">Quick Links</div>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline text-lg text-[#52ffa7]/90">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-lg text-[#52ffa7]/90">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline text-lg text-[#52ffa7]/90">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* Social Icons: Font Awesome */}
        <div>
          <div className="text-2xl font-normal mb-4 text-white">Follow Us</div>
          <div className="flex gap-6">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-[#14532d] rounded-full flex items-center justify-center w-12 h-12 hover:bg-[#22c55e] transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#52ffa7" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-[#14532d] rounded-full flex items-center justify-center w-12 h-12 hover:bg-[#22c55e] transition">
              <FontAwesomeIcon icon={faFacebookF} size="lg" color="#52ffa7" />
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" className="bg-[#14532d] rounded-full flex items-center justify-center w-12 h-12 hover:bg-[#22c55e] transition">
              <FontAwesomeIcon icon={faPinterestP} size="lg" color="#52ffa7" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center border-t border-[#14532d] mt-12 pt-6 text-white text-lg">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
}
