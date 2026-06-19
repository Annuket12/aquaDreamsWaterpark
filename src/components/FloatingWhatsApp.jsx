import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919774192052"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/aqua.adreams"
        target="_blank"
        rel="noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaInstagram size={24} />
      </a>

    </div>
  );
}