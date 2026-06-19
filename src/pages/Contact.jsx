import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaSwimmingPool
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Aqua Dreams
          </span>

          <h1 className="text-4xl md:text-6xl font-black mt-5 text-slate-900">
            Visit Aqua Dreams
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg">
            Enjoy swimming, water slides, DJ vibes, café refreshments,
            and professional swimming training in a safe and hygienic environment.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition">

            <FaPhone className="text-4xl text-cyan-600 mx-auto mb-4" />

            <h3 className="font-bold text-xl mb-2">
              Call Us
            </h3>

            <p className="text-slate-600">
              +91 9774192052
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition">

            <FaClock className="text-4xl text-cyan-600 mx-auto mb-4" />

            <h3 className="font-bold text-xl mb-2">
              Timings
            </h3>

            <p className="text-slate-600">
              9:00 AM – 7:00 PM
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition">

            <FaSwimmingPool className="text-4xl text-cyan-600 mx-auto mb-4" />

            <h3 className="font-bold text-xl mb-2">
              Classes Fee
            </h3>

            <p className="text-slate-600">
              ₹4000 / Month
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition">

            <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />

            <h3 className="font-bold text-xl mb-2">
              Location
            </h3>

            <p className="text-slate-600 text-sm">
              Khanpur Khurd,
              Jhajjar, Haryana
            </p>

          </div>

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Pricing */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Entry & Training Fees
            </h2>

            <div className="space-y-5">

              <div className="bg-cyan-50 rounded-2xl p-5">
                <h3 className="font-bold text-lg">
                  Swimming Classes
                </h3>

                <p className="text-cyan-600 font-bold text-2xl mt-2">
                  ₹4000 / Month
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold">
                  Daily Entry (Under 10 Years)
                </h3>

                <p className="text-2xl font-bold text-cyan-600 mt-2">
                  ₹200
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold">
                  Daily Entry (Above 10 Years)
                </h3>

                <p className="text-2xl font-bold text-cyan-600 mt-2">
                  ₹250
                </p>
              </div>

            </div>

          </div>

          {/* Contact Details */}

          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Connect With Us
            </h2>

            <div className="space-y-5">

              <p>
                📍 Aqua Dreams Swimming Pool
                <br />
                Khanpur Khurd Village
                <br />
                Bahu Jhorli Road
                <br />
                Jhajjar, Haryana
              </p>

              <p>
                📞 +91 9774192052
              </p>

              <p>
                🕒 9:00 AM – 7:00 PM
              </p>

            </div>

            <div className="flex flex-col gap-4 mt-8">

              <a
                href="https://wa.me/919774192052"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 py-4 rounded-xl text-center font-semibold transition"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+919774192052"
                className="bg-white text-blue-700 py-4 rounded-xl text-center font-semibold transition"
              >
                Call Now
              </a>

              <a
                href="https://instagram.com/aqua.adreams"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 py-4 rounded-xl text-center font-semibold"
              >
                Follow @aqua.adreams
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}