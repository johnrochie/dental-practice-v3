export default function Services() {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive care including cleanings, exams, and preventative treatments.',
      details: 'Comprehensive exams & Professional cleaning',
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers for your perfect look.',
      details: 'Smile makeovers & Whitening',
    },
    {
      icon: '😁',
      title: 'Orthodontics',
      description: 'Braces, Invisalign, and alignment treatments for all ages.',
      details: 'Braces & Alignments',
    },
    {
      icon: '🚑',
      title: 'Emergency Care',
      description: 'Urgent dental services available when you need us most.',
      details: 'Urgent care & 24/7 support',
    },
    {
      icon: '👶',
      title: 'Children\'s Dentistry',
      description: 'Specialized care for children in a friendly environment.',
      details: 'Child-friendly & Gentle approach',
    },
    {
      icon: '📅',
      title: 'Preventive Care',
      description: 'Regular checkups and preventative treatments to maintain oral health.',
      details: 'Checkups & Dental hygiene',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Our Services
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Expert dental care for your entire family
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#2563eb]/10 hover:border-[#2563eb]/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-2 hover:text-[#2563eb] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-[#2563eb]/70 text-sm font-medium">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
