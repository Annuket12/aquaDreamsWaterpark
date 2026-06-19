import { FaInstagram } from "react-icons/fa";

const facilities = [
{
icon: "🏊",
title: "Main Swimming Pool",
description:
"Large and well-maintained swimming pool with clean filtered water suitable for all age groups."
},
{
icon: "👶",
title: "2 Baby Pools",
description:
"Dedicated baby pools designed for safe and enjoyable swimming experiences for children."
},
{
icon: "🎢",
title: "Water Slides",
description:
"Exciting water slides providing fun and entertainment for families and groups."
},
{
icon: "🚿",
title: "Showers & Changing Rooms",
description:
"Clean changing rooms and shower facilities for visitor comfort and convenience."
},
{
icon: "☕",
title: "Café Area",
description:
"Enjoy snacks, cold drinks, refreshments, and relaxing seating after swimming."
},
{
icon: "🎵",
title: "DJ Vibes",
description:
"Energetic music and lively atmosphere creating a fun and memorable poolside experience."
},
{
icon: "🛟",
title: "Safety Equipment",
description:
"Life-saving equipment and trained staff available to ensure visitor safety."
},
{
icon: "🚗",
title: "Parking Area",
description:
"Convenient parking facility for visitors arriving with family and friends."
}
];

export default function Facilities() {
return ( <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

```
  <div className="container mx-auto px-4 md:px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
        Aqua Dreams Facilities
      </span>

      <h1 className="text-4xl md:text-6xl font-black mt-5 text-slate-900">
        Premium Facilities
      </h1>

      <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg leading-8">
        Aqua Dreams Swimming Pool offers modern facilities designed
        for comfort, safety, fun, and professional swimming training.
        Located at Khanpur Khurd Village, Bahu Jhorli Road, Jhajjar,
        Haryana, we provide a complete family-friendly experience.
      </p>

    </div>

    {/* Facility Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {facilities.map((facility) => (

        <div
          key={facility.title}
          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100 hover:-translate-y-2"
        >

          <div className="text-5xl mb-5">
            {facility.icon}
          </div>

          <h3 className="text-xl font-bold mb-3">
            {facility.title}
          </h3>

          <p className="text-slate-600 leading-7">
            {facility.description}
          </p>

        </div>

      ))}

    </div>

    {/* Extra Section */}

    <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-3xl font-bold mb-5">
            Why Visitors Love Aqua Dreams
          </h2>

          <p className="text-slate-600 leading-8 mb-5">
            Aqua Dreams is more than just a swimming pool. We offer
            a complete recreational experience with swimming,
            water slides, relaxing café seating, family-friendly
            facilities, and a vibrant atmosphere.
          </p>

          <p className="text-slate-600 leading-8">
            Whether you're coming for professional swimming classes,
            a family outing, or simply to relax and enjoy the water,
            Aqua Dreams provides a memorable experience for everyone.
          </p>

        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 text-white">

          <h3 className="text-2xl font-bold mb-5">
            Connect With Us
          </h3>

          <div className="space-y-4">

            <p>
              📞 +91 9774192052
            </p>

            <p>
              🕒 9:00 AM – 7:00 PM
            </p>

            <a
              href="https://instagram.com/aqua.adreams"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-100 transition"
            >
              <FaInstagram />
              @aqua.adremas
            </a>

            <p>
              📍 Khanpur Khurd Village,
              Bahu Jhorli Road,
              Jhajjar, Haryana
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>


);
}
