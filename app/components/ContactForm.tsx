'use client';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#e2e8f0]">
      <h3 className="font-semibold text-[#1e293b] text-lg mb-6">
        Send us a message
      </h3>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none"
            required
          />
        </div>
        <div>
          <textarea
            rows={5}
            placeholder="How can we help you? Describe your dental needs in detail..."
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-[#2563eb] hover:bg-[#38bdf8] text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
