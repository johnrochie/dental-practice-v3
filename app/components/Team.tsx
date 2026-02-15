import { Mail, Phone as PhoneIcon } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Dr. Sarah O\'Brien',
      title: 'Principal Dentist',
      description: 'Leading our practice with 15 years of expertise in restorative and cosmetic dentistry.',
      email: 'sarah@premierdental.ie',
    },
    {
      name: 'Dr. Michael Walsh',
      title: 'Orthodontist',
      description: 'Specialist in clear aligners and modern orthodontics for patients of all ages.',
      email: 'michael@premierdental.ie',
    },
    {
      name: 'Dr. Emma Chen',
      title: 'Cosmetic Dentist',
      description: 'Expert in smile transformations with advanced aesthetic dentistry techniques.',
      email: 'emma@premierdental.ie',
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-emerald-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-teal-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-playfair">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Contact buttons */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our team CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-slate-600 mb-6">
            Our team of dental professionals is committed to providing exceptional care in a welcoming environment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
