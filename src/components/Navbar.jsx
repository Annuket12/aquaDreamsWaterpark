import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black text-cyan-600"
        >
          Aqua Dreams
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4 text-slate-700 font-medium">

          <Link to="/" onClick={closeMenu} className="block">
            Home
          </Link>

          <Link to="/about" onClick={closeMenu} className="block">
            About
          </Link>

          <Link to="/classes" onClick={closeMenu} className="block">
            Classes
          </Link>

          <Link to="/facilities" onClick={closeMenu} className="block">
            Facilities
          </Link>

          <Link to="/gallery" onClick={closeMenu} className="block">
            Gallery
          </Link>

          <Link to="/contact" onClick={closeMenu} className="block">
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}