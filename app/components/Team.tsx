export default function Team() {
  const team = [
    {
      name: "Dr. Sarah O'Brien",
      title: "Principal Dentist",
      description: "15 years of experience in restorative dentistry.",
    },
    {
      name: "Dr. Michael Walsh",
      title: "Orthodontist",
      description: "Specialist in Invisalign and clear aligners.",
    },
    {
      name: "Dr. Emma Chen",
      title: "Cosmetic Dentist",
      description: "Expert in smile makeovers and aesthetic dentistry.",
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Experienced dental professionals dedicated to your care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#38bdf8] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
                {member.name}
              </h3>
              <p className="text-[#64748b] mb-3 font-medium text-[#2563eb]">
                {member.title}
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
