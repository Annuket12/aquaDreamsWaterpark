import Hero from "../components/Hero";
import { FaInstagram, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Home() {
  const features = [
    "Professional Trainers",
    "Kids Programs",
    "Adults Training",
    "Exciting Water Slides",
    "Safe Environment",
    "Modern Facilities",
  ];

  return (
    <>
      <Hero />

      {/* Stats Section */}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="luxury-card p-6 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-cyan-600">
                2K+
              </h2>
              <p className="text-slate-600 mt-2">
                Happy Visitors
              </p>
            </div>

            <div className="luxury-card p-6 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-cyan-600">
                5+
              </h2>
              <p className="text-slate-600 mt-2">
                Trainers
              </p>
            </div>

            <div className="luxury-card p-6 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-cyan-600">
                1.5+
              </h2>
              <p className="text-slate-600 mt-2">
                Years Experience
              </p>
            </div>

            <div className="luxury-card p-6 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-cyan-600">
                100%
              </h2>
              <p className="text-slate-600 mt-2">
                Safety Standards
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* About Section */}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Welcome To Aqua Dreams
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Aqua Dreams Swimming Pool is a premium destination for
              swimming, fitness, fun, and relaxation. Our facility
              features clean water systems, exciting water slides,
              professional swimming coaches, and a safe environment
              for both kids and adults. Whether you are learning to
              swim for the first time or improving your skills,
              Aqua Dreams offers the perfect experience for everyone.
            </p>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-20 bg-white">

        <div className="container mx-auto px-4 md:px-6">

          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item) => (
              <div
                key={item}
                className="luxury-card p-8 hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-600">
                  {item}
                </h3>

                <p className="text-slate-600">
                  Enjoy professional facilities and premium services
                  designed to make every swimming session enjoyable,
                  safe, and memorable.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Pricing */}

      <section className="py-20 bg-slate-50">

        <div className="container mx-auto px-4 md:px-6">

          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="luxury-card p-8 text-center">
              <h3 className="text-xl font-bold">
                Swimming Classes
              </h3>

              <div className="text-5xl font-black text-cyan-600 mt-4">
                ₹4000
              </div>

              <p className="mt-3 text-slate-600">
                Per Month Professional Training
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <h3 className="text-xl font-bold">
                Under 10 Years
              </h3>

              <div className="text-5xl font-black text-cyan-600 mt-4">
                ₹200
              </div>

              <p className="mt-3 text-slate-600">
                Daily Entry Fee
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <h3 className="text-xl font-bold">
                Above 10 Years
              </h3>

              <div className="text-5xl font-black text-cyan-600 mt-4">
                ₹250
              </div>

              <p className="mt-3 text-slate-600">
                Daily Entry Fee
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact Info */}

      <section className="py-20 bg-white">

        <div className="container mx-auto px-4 md:px-6">

          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Visit Aqua Dreams
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="luxury-card p-8 text-center">
              <FaPhoneAlt className="mx-auto text-4xl text-cyan-600 mb-4" />
              <h3 className="font-bold text-xl">
                Call Us
              </h3>
              <p className="mt-2 text-slate-600">
                +91 9774192052
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <FaInstagram className="mx-auto text-4xl text-pink-500 mb-4" />
              <h3 className="font-bold text-xl">
                Instagram
              </h3>
              <p className="mt-2 text-slate-600">
                @aqua.adreams
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <FaClock className="mx-auto text-4xl text-cyan-600 mb-4" />
              <h3 className="font-bold text-xl">
                Timings
              </h3>
              <p className="mt-2 text-slate-600">
                9:00 AM - 7:00 PM
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="gradient-bg text-white py-20">

        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">

          <h2 className="text-4xl md:text-6xl font-black">
            Dive Into Excellence
          </h2>

          <p className="mt-6 text-lg md:text-xl">
            Join Aqua Dreams today and enjoy premium swimming
            facilities, professional coaching, exciting water slides,
            and unforgettable moments with family and friends.
          </p>

          <a
            href="tel:9774192052"
            className="inline-block mt-8 bg-white text-cyan-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Call Now
          </a>

        </div>

      </section>
    </>
  );
}