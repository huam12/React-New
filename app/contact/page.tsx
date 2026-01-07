import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            تواصل معنا
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            هل لديك فكرة في مخيلتك؟ نحن هنا لنساعدك في تحويل أفكارك إلى حقيقة
            ملموسة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-muted p-8 md:p-12 rounded-[2rem] shadow-sm border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="ادخل اسمك هنا"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">نوع الخدمة</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:outline-none transition-all">
                  <option>ديكورات داخلية</option>
                  <option>خزائن ومطابخ</option>
                  <option>أثاث مخصص</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">رسالتك</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                  placeholder="أخبرنا بالمزيد عن مشروعك..."
                ></textarea>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                إرسال الرسالة <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary transition-colors">
                  <Phone className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">اتصل بنا مباشرة</h3>
                  <p className="text-muted-foreground">
                    متاحون من السبت إلى الخميس، ٩ ص - ٩ م
                  </p>
                  <p className="text-accent font-bold mt-2 text-lg" dir="ltr">
                    +966 50 075 6613
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary transition-colors">
                  <Mail className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">راسلنا إلكترونياً</h3>
                  <p className="text-muted-foreground">
                    سنرد عليك في غضون ٢٤ ساعة عمل
                  </p>
                  <p className="text-accent font-bold mt-2 text-lg">
                    aboawad@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary transition-colors">
                  <MapPin className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">المــوقع</h3>
                  <p className="text-muted-foreground">
                    تفضل بزيارتنا لمشاهدة عينات من أعمالنا
                  </p>
                  <p className="text-accent font-bold mt-2 text-lg">
                    المملكة العربية السعودية ، الرياض ، الصناعية القديمة{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full rounded-[2rem] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps?q=الرياض الصناعية القديمة&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
