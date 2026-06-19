const images = [
"../pics/images.jpg",
"../pics/image2.avif",
"../pics/image3.avif",
"../pics/image4.avif"
]

export default function Gallery() {
return ( <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

```
  <div className="container mx-auto px-4 md:px-6">

    {/* Heading */}

    <div className="text-center mb-14">

      <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
        Aqua Dreams Gallery
      </span>

      <h1 className="text-4xl md:text-6xl font-black mt-5 text-slate-900">
        Pool Moments
      </h1>

      <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg">
        Explore our swimming pools, water slides, café area,
        family fun activities, and exciting experiences at
        Aqua Dreams Swimming Pool.
      </p>

    </div>

    {/* Image Gallery */}

    <h2 className="text-3xl font-bold mb-8">
      Photo Gallery
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {images.map((img, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-3xl shadow-lg group"
        >

          <img
            src={img}
            alt="Aqua Dreams"
            className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
          />

        </div>

      ))}

    </div>

    {/* Video Gallery */}

    <div className="mt-20">

      <h2 className="text-3xl font-bold mb-8">
        Video Gallery
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Video 1 */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <video
            controls
            className="w-full h-72 object-cover"
          >
            <source src="../pics/vedio1.mp4" type="video/mp4" />
          </video>

          <div className="p-5">
            <h3 className="font-bold text-xl">
              Pool Experience
            </h3>
          </div>

        </div>

        {/* Video 2 */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <video
            controls
            className="w-full h-72 object-cover"
          >
            <source src="../pics/vedio2.mp4" type="video/mp4" />
          </video>

          <div className="p-5">
            <h3 className="font-bold text-xl">
              Water Slides Fun
            </h3>
          </div>

        </div>

        {/* Video 3 */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <video
            controls
            className="w-full h-72 object-cover"
          >
            <source src="../pics/vedio3.mp4" type="video/mp4" />
          </video>

          <div className="p-5">
            <h3 className="font-bold text-xl">
              Swimming Training
            </h3>
          </div>

        </div>

        {/* Video 4 */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <video
            controls
            className="w-full h-72 object-cover"
          >
            <source src="../pics/vedio4.mp4" type="video/mp4" />
          </video>

          <div className="p-5">
            <h3 className="font-bold text-xl">
              Aqua Dreams Highlights
            </h3>
          </div>

        </div>

      </div>

    </div>

    {/* Instagram CTA */}

    <div className="mt-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10 text-center text-white">

      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Follow Our Journey
      </h2>

      <p className="text-lg mb-6">
        Stay updated with new events, swimming classes,
        special offers, and exciting pool moments.
      </p>

      <a
        href="https://instagram.com/aqua.adrems"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-cyan-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition inline-block"
      >
        @aqua.adrems
      </a>

    </div>

  </div>

</div>


);
}
