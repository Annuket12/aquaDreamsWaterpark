export default function About() {
return ( <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

```
  <div className="max-w-6xl mx-auto px-4 md:px-6">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
        About Aqua Dreams
      </span>

      <h1 className="text-4xl md:text-6xl font-black mt-6 text-slate-900">
        Your Perfect Poolside Destination
      </h1>

      <p className="max-w-4xl mx-auto mt-6 text-slate-600 text-lg leading-8">
        Aqua Dreams Swimming Pool is a modern recreational destination
        located on Bahu Jhorli Road, Khanpur Khurd, Jhajjar, Haryana.
        Designed for families, kids, and swimming enthusiasts, we provide
        a refreshing environment where fitness, fun, relaxation, and
        entertainment come together.
      </p>

    </div>

    {/* About Content */}

    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

      <h2 className="text-3xl font-bold mb-6">
        Experience Aqua Dreams
      </h2>

      <p className="text-slate-600 leading-8 mb-5">
        Aqua Dreams offers a clean and hygienic swimming environment
        with facilities suitable for both beginners and experienced
        swimmers. Whether you want to learn swimming professionally,
        spend quality time with family, or simply relax on a sunny day,
        our facility is designed to provide a memorable experience.
      </p>

      <p className="text-slate-600 leading-8">
        Our swimming classes are conducted by experienced trainers who
        focus on safety, confidence building, and proper swimming
        techniques for both children and adults.
      </p>

    </div>

    {/* Features */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-4xl mb-4">🏊</div>
        <h3 className="font-bold text-xl mb-3">
          Main Pool
        </h3>

        <p className="text-slate-600">
          Spacious swimming pool with clean and filtered water.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-4xl mb-4">👶</div>
        <h3 className="font-bold text-xl mb-3">
          Baby Pools
        </h3>

        <p className="text-slate-600">
          Two dedicated baby pools for children to enjoy safely.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-4xl mb-4">🎢</div>
        <h3 className="font-bold text-xl mb-3">
          Water Slides
        </h3>

        <p className="text-slate-600">
          Exciting slides designed for fun and adventure.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">
        <div className="text-4xl mb-4">☕</div>
        <h3 className="font-bold text-xl mb-3">
          Café Area
        </h3>

        <p className="text-slate-600">
          Refreshments, snacks, and beverages for visitors.
        </p>
      </div>

    </div>

    {/* Extra Details */}

    <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">

      <h2 className="text-3xl font-bold mb-6">
        Why Families Love Aqua Dreams
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <ul className="space-y-4 text-slate-600">

          <li>✓ Safe and Hygienic Environment</li>

          <li>✓ Professional Swimming Training</li>

          <li>✓ Kids and Adult Programs</li>

          <li>✓ Family Friendly Atmosphere</li>

        </ul>

        <ul className="space-y-4 text-slate-600">

          <li>✓ DJ Music and Fun Vibes</li>

          <li>✓ Water Slides and Activities</li>

          <li>✓ Comfortable Seating Area</li>

          <li>✓ Friendly Staff and Support</li>

        </ul>

      </div>

    </div>

  </div>

</div>


);
}
