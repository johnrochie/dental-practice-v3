import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'General Dentistry', href: '#services' },
      { name: 'Cosmetic Dentistry', href: '#services' },
      { name: 'Orthodontics', href: '#services' },
      { name: 'Emergency Care', href: '#services' },
      { name: 'Children\'s Dentistry', href: '#services' },
    ],
    practice: [
      { name: 'About Us', href: '#team' },
      { name: 'Our Team', href: '#team' },
      { name: 'Patient Stories', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-serif font-bold text-2xl mb-4">
              Premier Dental Care
            </h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Modern dentistry meets compassionate care. Serving Dublin since 2010 with expert care you can trust.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 hover:underline transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Practice</h4>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 hover:underline transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 hover:underline transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-12 border-t border-slate-800">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-slate-500 mb-1">Phone</p>
              <p className="text-slate-300 font-medium">+353 1 234 5678</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Email</p>
              <p className="text-slate-300 font-medium break-all">info@premierdental.ie</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Address</p>
              <p className="text-slate-300">
                123 Main Street<br />
                Dublin, D02 XY12
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Premier Dental Care. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            GDC Registered Practice No. 123456
          </p>
        </div>
      </div>
    </footer>
  );
}
