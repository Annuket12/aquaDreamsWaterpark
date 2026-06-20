import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576013551627-0b744bca0246?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="glass text-white px-5 py-2 rounded-full">
            Premium Swimming Experience
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white mt-6">
            Aqua
            <span className="block text-cyan-400">
              Dreams
            </span>
          </h1>

          <p className="text-slate-200 text-xl mt-6 leading-relaxed">
            Welcome to Aqua Dreams, a premium swimming destination where
            luxury, fitness, safety, and family entertainment come
            together. Experience professional training, crystal-clear
            pools, exciting water slides, and world-class facilities
            designed for every age group.
          </p>

          <div className="flex gap-4 flex-wrap mt-8">
            <Link
              to="/classes"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Explore Classes
            </Link>

            <Link
              to="/contact"
              className="glass text-white px-8 py-4 rounded-full"
            >
              Contact Us
            </Link>

            <Link
              to="/gallery"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Aqua Gallery
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}