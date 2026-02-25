import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="reveal opacity-0 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/90 text-sm font-medium">
                  پاکستان میں قابل اعتماد ڈیجیٹل ایجنسی
                </span>
              </div>

              <h1 className="reveal opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6" style={{ animationDelay: '0.1s' }}>
                <span className="block">GMC</span>
                <span className="text-gradient">Digital Agency</span>
              </h1>

              <p className="reveal opacity-0 text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
                آپ کا قابل اعتماد کاروباری شراکت دار۔ ہم معیار، اعتماد اور عمدہ خدمات کو یقینی بناتے ہیں۔
              </p>

              <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10" style={{ animationDelay: '0.3s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg rounded-full group"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ہماری خدمات دیکھیں
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  رابطہ کریں
                </Button>
              </div>

              {/* Contact Info */}
              <div className="reveal opacity-0 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-slate-400" style={{ animationDelay: '0.4s' }}>
                <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#0ea5e9]" />
                  <span>+92 300 1234567</span>
                </a>
                <a href="mailto:gmc.pvt.pk@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[#14b8a6]" />
                  <span>gmc.pvt.pk@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Content - Logo/Graphic */}
            <div className="reveal opacity-0 hidden lg:flex justify-center items-center" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-2xl bg-gradient-primary p-1 animate-float">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center p-8">
                    <img 
                      src="/logo.jpg" 
                      alt="GMC Digital Agency" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0ea5e9] rounded-lg opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#14b8a6] rounded-full opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
