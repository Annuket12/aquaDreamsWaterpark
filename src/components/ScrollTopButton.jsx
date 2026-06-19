import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 bg-cyan-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaArrowUp />
    </button>
  );
}