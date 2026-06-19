import img1 from "../assets/images.jpg";
import img2 from "../assets/image2.avif";
import img3 from "../assets/image3.avif";
import img4 from "../assets/image4.avif";

import vid1 from "../assets/vedio1.mp4";
import vid2 from "../assets/vedio2.mp4";
import vid3 from "../assets/vedio3.mp4";
import vid4 from "../assets/vedio4.mp4";

const images = [img1, img2, img3, img4];

export default function Gallery() {
  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

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
            Explore our swimming pools, water slides, café area, and fun experiences.
          </p>

        </div>

        {/* Images */}
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={img}
                alt="Aqua Dreams"
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

        {/* Videos */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">Video Gallery</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[vid1, vid2, vid3, vid4].map((vid, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <video
                  controls
                  className="w-full h-72 object-cover"
                >
                  <source src={vid} type="video/mp4" />
                </video>

                <div className="p-5">
                  <h3 className="font-bold text-xl">
                    Aqua Dreams Moment {i + 1}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Instagram */}
        <div className="mt-20 bg-cyan-600 rounded-3xl p-10 text-center text-white">

          <h2 className="text-3xl font-black mb-4">
            Follow Us on Instagram
          </h2>

          <a
            href="https://instagram.com/aqua.adrems"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-cyan-600 px-8 py-3 rounded-full font-bold inline-block hover:scale-105 transition"
          >
            @aqua.adreams
          </a>

        </div>

      </div>

    </div>
  );
}