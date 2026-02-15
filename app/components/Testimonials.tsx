export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Murphy',
      review: 'Exceptional service from start to finish. The team made me feel comfortable throughout.',
      rating: 5,
      date: '2023',
    },
    {
      name: 'Aileen Kelly',
      review: 'Best dental experience I\'ve had. Modern facilities and friendly, professional staff.',
      rating: 5,
      date: '2024',
    },
    {
      name: 'Patrick O\'Sullivan',
      review: 'Highly recommended for anyone seeking quality dental care in a welcoming environment.',
      rating: 5,
      date: '2024',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Real stories from our satisfied patients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="p-6 sm:p-8 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:shadow-[#2563eb]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(() => (
                  <span className="text-[#2563eb] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#64748b] mb-4 italic leading-relaxed">
                "{item.review}"
              </p>
              <p className="text-sm text-[#94a3b8] font-medium">
                {item.name}, {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
