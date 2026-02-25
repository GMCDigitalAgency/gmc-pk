import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const contactInfo = [
  {
    icon: MapPin,
    title: 'پتہ',
    content: '123 بزنس سینٹر، مین جی ٹی روڈ، لاہور، پاکستان',
    color: 'bg-[#0ea5e9]',
  },
  {
    icon: Phone,
    title: 'فون',
    content: '+92 300 1234567',
    link: 'tel:+923001234567',
    color: 'bg-[#14b8a6]',
  },
  {
    icon: Mail,
    title: 'ای میل',
    content: 'gmc.pvt.pk@gmail.com',
    link: 'mailto:gmc.pvt.pk@gmail.com',
    color: 'bg-[#8b5cf6]',
  },
  {
    icon: Clock,
    title: 'اوقات کار',
    content: 'پیر - جمعہ: صبح 9 بجے سے شام 6 بجے تک',
    color: 'bg-[#f59e0b]',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="reveal opacity-0 inline-block px-4 py-2 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-sm font-semibold mb-4">
              رابطہ کریں
            </span>
            <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ animationDelay: '0.1s' }}>
              ہم سے <span className="text-gradient">رابطہ کریں</span>
            </h2>
            <p className="reveal opacity-0 text-lg text-slate-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              کسی بھی سوال یا معلومات کے لیے ہم سے رابطہ کریں۔ 
              ہماری ٹیم جلد از جلد آپ سے رابطہ کرے گی۔
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
              <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">پیغام بھیجیں</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">نام</label>
                    <Input
                      type="text"
                      placeholder="اپنا نام درج کریں"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">ای میل</label>
                      <Input
                        type="email"
                        placeholder="اپنا ای میل درج کریں"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-xl border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">فون نمبر</label>
                      <Input
                        type="tel"
                        placeholder="اپنا فون نمبر درج کریں"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">پیغام</label>
                    <Textarea
                      placeholder="اپنا پیغام یہاں لکھیں..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[140px] rounded-xl border-slate-200 focus:border-[#0ea5e9] focus:ring-[#0ea5e9] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-primary hover:opacity-90 text-white rounded-xl text-base font-medium"
                  >
                    پیغام بھیجیں
                    <Send className="mr-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="reveal opacity-0 space-y-6" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">رابطے کی معلومات</h3>
              
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
                >
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-slate-600 hover:text-[#0ea5e9] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-primary text-white text-center">
                <MapPin className="w-10 h-10 mx-auto mb-3" />
                <p className="text-lg font-medium">لاہور، پاکستان میں واقع</p>
                <p className="text-white/80 mt-1">ہمارے دفتر کا دورہ کریں</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">پیغام کامیابی سے بھیج دیا گیا!</DialogTitle>
            <DialogDescription className="text-slate-600 mt-2">
              شکریہ! ہماری ٹیم جلد از جلد آپ سے رابطہ کرے گی۔
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button 
              onClick={() => setShowDialog(false)}
              className="w-full bg-gradient-primary hover:opacity-90 text-white"
            >
              ٹھیک ہے
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
