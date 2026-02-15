export default function Services() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive care including cleanings, exams, and preventative treatments.',
      details: '✓ Comprehensive exams ✨ Professional clean',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers for your perfect look.',
      details: '✨ Smile makeovers ✨ Whitening',
    },
    {
      title: 'Orthodontics',
      description: 'Braces, Invisalign, and alignment treatments for all ages.',
      details: '🦷 Braces ✨ Alignments',
    },
    {
      title: 'Emergency Care',
      description: 'Urgent dental services available when you need us most.',
      details: '🚑 Urgent care ✅ 24/7 support',
    },
    {
      title: 'Children\'s Dentistry',
      description: 'Specialized care for children in a friendly environment.',
      details: '👶 Child-friendly ✅ Gentle approach',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Our Services
          </h2>
          <p className="text-[#64748b] text-lg">Expert dental care for your entire family</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.details.split('|')[0]}</div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-2 hover:text-[#2563eb] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
