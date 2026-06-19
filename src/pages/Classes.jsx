const classes = [
{
title: "Beginner Program",
level: "For New Swimmers",
timing: "7:00 AM - 9:00 AM",
price: "₹4000 / Month",
description:
"Perfect for beginners who want to learn basic swimming techniques, water confidence, floating, breathing control, and safety skills."
},
{
title: "Intermediate Program",
level: "Skill Development",
timing: "7:00 AM - 9:00 AM",
price: "₹4000 / Month",
description:
"Designed for swimmers who already know the basics and want to improve speed, endurance, strokes, and overall swimming performance."
},
{
title: "Advanced Program",
level: "Professional Training",
timing: "6:00 PM - 7:00 PM",
price: "₹4000 / Month",
description:
"Advanced coaching for competitive swimmers focusing on professional techniques, fitness, stamina, and performance improvement."
},
{
title: "Kids Classes",
level: "Under 10 Years",
timing: "6:00 PM - 7:00 PM",
price: "₹4000 / Month",
description:
"Fun and safe swimming sessions specially designed for children with experienced trainers and dedicated supervision."
}
];

export default function Classes() {
return ( <div className="pt-28 pb-20 bg-slate-50 min-h-screen">

```
  <div className="container mx-auto px-4 md:px-6">

    {/* Heading */}

    <div className="text-center mb-14">

      <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
        Aqua Dreams Training Programs
      </span>

      <h1 className="text-4xl md:text-6xl font-black mt-5 text-slate-900">
        Swimming Classes
      </h1>

      <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg">
        Learn swimming with experienced trainers in a safe,
        hygienic, and fun environment suitable for kids,
        beginners, and advanced swimmers.
      </p>

    </div>

    {/* Classes Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {classes.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100"
        >

          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {item.level}
          </span>

          <h3 className="text-2xl font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-7 mb-6">
            {item.description}
          </p>

          <div className="space-y-3 border-t pt-5">

            <p className="font-medium">
              ⏰ {item.timing}
            </p>

            <p className="font-medium text-cyan-600">
              💰 {item.price}
            </p>

          </div>

        </div>

      ))}

    </div>

    {/* Additional Information */}

    <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">

      <h2 className="text-3xl font-bold mb-6">
        Training Benefits
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <ul className="space-y-4 text-slate-600">

          <li>✓ Professional Swimming Coaches</li>
          <li>✓ Safe and Hygienic Environment</li>
          <li>✓ Individual Attention</li>
          <li>✓ Modern Training Techniques</li>

        </ul>

        <ul className="space-y-4 text-slate-600">

          <li>✓ Separate Programs for Kids & Adults</li>
          <li>✓ Fitness and Endurance Development</li>
          <li>✓ Confidence Building Sessions</li>
          <li>✓ Fun Learning Experience</li>

        </ul>

      </div>

    </div>

  </div>

</div>

);
}
