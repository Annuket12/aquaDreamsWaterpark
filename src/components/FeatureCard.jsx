export default function FeatureCard({
  title,
  desc,
  image
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 duration-300">
      <img
        src={image}
        alt=""
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl mb-3">
          {title}
        </h3>

        <p>{desc}</p>
      </div>
    </div>
  );
}