export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe]/10 to-[#2563eb]/5)">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#e0f2fe]/30 to-[#2563eb]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e293b] mb-6 leading-tight">
            Premium Dental Care
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#64748b] max-w-2xl mx-auto mb-8 sm:mb-10">
            Expert dentistry for you and your family
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 sm:py-4 bg-[#2563eb] hover:bg-[#38bdf8] text-white rounded-full font-semibold transition-all shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3 sm:py-4 border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-[#0f172a] rounded-full font-semibold transition-all"
            >
              Our Services
            </a>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[#2563eb]/20 bg-white/50 shadow-lg max-w-md mx-auto mt-8 sm:mt-10">
            <div className="text-3xl mb-2">🎉</div>
            <p className="font-semibold text-[#1e293b] text-xl">New Patients Special</p>
            <p className="text-[#64748b] text-sm mb-4">
              Experience premium dental care at a special rate. First-time patients only.
            </p>
            <a
              href="#contact"
              className="w-full block py-2 sm:py-3 bg-[#2563eb] hover:bg-[#38bdf8] text-white rounded-lg font-semibold transition-all"
            >
              Claim Offer
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e0f2fe]/30 max-w-md mx-auto">
            <div className="text-blue-600 font-semibold text-sm">24/7 Support</div>
            <div className="text-slate-400 text-xs">(Urgent dental issues)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
