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
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#64748b] text-lg">
            Experienced dental professionals dedicated to your care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="p-6 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
                {member.name}
              </h3>
              <p className="text-[#64748b] mb-1 font-medium text-[#2563eb]">
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
