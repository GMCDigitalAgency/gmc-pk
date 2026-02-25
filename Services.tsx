import { useEffect, useRef } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Handshake, 
  BarChart3, 
  Globe,
  ArrowLeft
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'کاروباری مشاورت',
    description: 'ہمارے ماہرین آپ کے کاروبار کی ترقی کے لیے بہترین مشورے فراہم کرتے ہیں۔',
    color: 'from-[#0ea5e9] to-[#0284c7]',
  },
  {
    icon: TrendingUp,
    title: 'مارکیٹنگ سروسز',
    description: 'جدید مارکیٹنگ تکنیکوں سے اپنے کاروبار کو نئی بلندیوں تک پہنچائیں۔',
    color: 'from-[#14b8a6] to-[#0d9488]',
  },
  {
    icon: Shield,
    title: 'انشورنس سروسز',
    description: 'مکمل انشورنس حل جو آپ کے کاروبار اور اثاثوں کی حفاظت کریں۔',
    color: 'from-[#8b5cf6] to-[#7c3aed]',
  },
  {
    icon: Handshake,
    title: 'کاروباری شراکت داری',
    description: 'نئے کاروباری مواقع اور شراکت داریوں کے لیے ہمارے ساتھ جڑیں۔',
    color: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    icon: BarChart3,
    title: 'فنانشل ایڈوائزری',
    description: 'ماہر مالی مشیروں سے بہترین مالی منصوبہ بندی کی خدمات حاصل کریں۔',
    color: 'from-[#ec4899] to-[#db2777]',
  },
  {
    icon: Globe,
    title: 'ای کامرس سلوشنز',
    description: 'آن لائن کاروبار کے لیے مکمل حل اور ڈیجیٹل تبدیلی۔',
    color: 'from-[#06b6d4] to-[#0891b2]',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-32 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] text-sm font-semibold mb-4">
              ہماری خدمات
            </span>
            <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ animationDelay: '0.1s' }}>
              ہماری <span className="text-gradient">خصوصی خدمات</span>
            </h2>
            <p className="reveal opacity-0 text-lg text-slate-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              GMC Digital Agency آپ کو مختلف ڈیجیٹل شعبوں میں پیشہ ورانہ خدمات فراہم کرتی ہے۔ 
              ہماری تجربہ کار ٹیم آپ کی ہر ضرورت کا خیال رکھتی ہے۔
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="reveal opacity-0 group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm card-hover overflow-hidden"
                style={{ animationDelay: `${0.1 * (index + 3)}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-slate-100 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <service.icon className="w-8 h-8 text-[#0ea5e9] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-white/90 mb-6 transition-colors leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-[#0ea5e9] group-hover:text-white font-medium transition-colors"
                  >
                    مزید جانیں
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
