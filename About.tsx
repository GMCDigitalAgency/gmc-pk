import { useEffect, useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'سالوں کا تجربہ' },
  { icon: Users, value: '500+', label: 'مطمئن صارفین' },
  { icon: Target, value: '100%', label: 'کامیابی کی شرح' },
];

export default function About() {
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
      id="about"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-semibold mb-4">
              ہمارے بارے میں
            </span>
            <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ animationDelay: '0.1s' }}>
              GMC Digital Agency سے <span className="text-gradient">واقفیت</span>
            </h2>
            <p className="reveal opacity-0 text-lg text-slate-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              GMC Digital Agency پاکستان کی ایک معروف ڈیجیٹل ایجنسی ہے جو اپنے صارفین کو بہترین ڈیجیٹل خدمات فراہم کرتی ہے۔ 
              ہمارا مقصد معیار اور اعتماد کو فروغ دینا ہے۔
            </p>
          </div>

          {/* Stats */}
          <div className="reveal opacity-0 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-2xl bg-slate-50 hover:bg-gradient-primary transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-600 group-hover:text-white/90 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="reveal opacity-0 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#0ea5e9]/5 to-[#14b8a6]/5 border border-[#0ea5e9]/10" style={{ animationDelay: '0.4s' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ہمارا مقصد</h3>
              <p className="text-slate-600 leading-relaxed">
                GMC Digital Agency کا مقصد اپنے صارفین کو اعلیٰ معیار کی ڈیجیٹل خدمات فراہم کرنا ہے۔ 
                ہم ہمیشہ صارفین کی ضروریات کو ترجیح دیتے ہیں اور ان کے اعتماد کو برقرار رکھنے کی کوشش کرتے ہیں۔ 
                ہمارا ہدف پاکستان میں ڈیجیٹل شعبے میں ایک قابل اعتماد نام بنانا ہے۔
              </p>
            </div>

            {/* Vision */}
            <div className="reveal opacity-0 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#14b8a6]/5 to-[#0ea5e9]/5 border border-[#14b8a6]/10" style={{ animationDelay: '0.5s' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ہمارا وژن</h3>
              <p className="text-slate-600 leading-relaxed">
                ہمارا وژن پاکستان کی سب سے قابل اعتماد اور معروف ڈیجیٹل ایجنسی بننا ہے۔ 
                ہم جدید ٹیکنالوجی اور جدید طریقوں کو اپناتے ہوئے اپنے صارفین کو بہترین تجربہ فراہم کرنا چاہتے ہیں۔ 
                ہم معیار، شفافیت اور عمدہ خدمات کے ساتھ ڈیجیٹل شعبے میں انقلاب لانا چاہتے ہیں۔
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
