import { Link } from "react-router-dom";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
return ( <footer className="bg-slate-950 text-white">

```
  <div className="container mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 gap-8">

      {/* Brand */}

      <div>
        <h2 className="text-2xl font-bold text-cyan-400">
          Aqua Dreams
        </h2>

        <p className="text-slate-400 mt-3 text-sm leading-relaxed">
          Premium swimming pool, water slides,
          professional coaching, and a safe,
          hygienic environment for kids and adults.
        </p>
      </div>

      {/* Quick Links */}

      <div>
        <h3 className="font-semibold mb-3">
          Quick Links
        </h3>

        <div className="flex flex-col gap-2 text-sm text-slate-400">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="/classes"
            className="hover:text-cyan-400 transition"
          >
            Classes
          </Link>

          <Link
            to="/gallery"
            className="hover:text-cyan-400 transition"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

        </div>
      </div>

      {/* Contact */}

      <div>
        <h3 className="font-semibold mb-3">
          Contact
        </h3>

        <div className="space-y-2 text-sm text-slate-400">

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-cyan-400" />
            +91 9774192052
          </p>

          <a
            href="https://instagram.com/aqua.adreams"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaInstagram className="text-pink-500" />
            @aqua.adreams
          </a>

          <p>
            Timings: 9:00 AM – 7:00 PM
          </p>
          <p className="leading-relaxed">
      📍vill:- Khanpur Khurd,
      <br />
       Bahu Jhorli Road,
      Jhajjar, Haryana
    </p>

        </div>
      </div>

    </div>

    {/* Bottom Bar */}

    <div className="border-t border-slate-800 mt-8 pt-5 text-center">

      <p className="text-slate-500 text-sm">
        © 2026 Aqua Dreams Swimming Pool. All Rights Reserved.
      </p>
      

    </div>

  </div>

</footer>

);
}
