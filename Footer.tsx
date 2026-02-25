import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'ہوم', href: '#home' },
  { label: 'ہمارے بارے میں', href: '#about' },
  { label: 'خدمات', href: '#services' },
  { label: 'رابطہ', href: '#contact' },
];

const services = [
  { label: 'کاروباری مشاورت', href: '#services' },
  { label: 'مارکیٹنگ سروسز', href: '#services' },
  { label: 'انشورنس سروسز', href: '#services' },
  { label: 'فنانشل ایڈوائزری', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/logo.jpg" 
                  alt="GMC Digital Agency" 
                  className="h-16 w-auto rounded-xl bg-white p-2"
                />
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                GMC Digital Agency پاکستان کی ایک معروف ڈیجیٹل ایجنسی ہے جو اپنے صارفین کو بہترین ڈیجیٹل خدمات فراہم کرتی ہے۔
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-primary flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">فوری لنکس</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">ہماری خدمات</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">رابطہ کی معلومات</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">123 بزنس سینٹر، مین جی ٹی روڈ، لاہور، پاکستان</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#14b8a6] flex-shrink-0" />
                  <a href="tel:+923001234567" className="text-slate-400 hover:text-white transition-colors">
                    +92 300 1234567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8b5cf6] flex-shrink-0" />
                  <a href="mailto:gmc.pvt.pk@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                    gmc.pvt.pk@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-right">
              © 2024 GMC Digital Agency. جملہ حقوق محفوظ ہیں۔
            </p>
            <p className="text-slate-500 text-sm">
              www.gmc.pk | www.gmc.com.pk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
