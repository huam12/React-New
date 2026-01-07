import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen page-transition">
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/18.jpg?height=1200&width=800&query=master+carpenter+at+work"
              alt="Heresy of craft"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">
              قصة شغف، <br />
              <span className="text-accent">إرث من الخشب</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              بدأت رحلتنا في "نجارة أبو عواد" من ورشة صغيرة يسكنها الشغف، حيث
              كان الهدف دائماً هو تحويل قطع الخشب الصامتة إلى قصص تروى في زوايا
              المنازل.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">رؤيتنا</h3>
              <p className="text-muted-foreground">
                أن نكون الوجهة الأولى لكل من يبحث عن التميز والفخامة في عالم
                الديكورات الخشبية، مع الحفاظ على الأصالة والحرفية اليدوية.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">مهمتنا</h3>
              <p className="text-muted-foreground">
                تقديم حلول مبتكرة تجمع بين الوظيفة والجمال، باستخدام أجود أنواع
                الأخشاب العالمية وبأيدي أمهر الحرفيين المحللين.
              </p>
            </div>

            <div className="pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-accent">١٩٩٨</h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">
                  عام التأسيس
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-accent">١٥٠٠+</h4>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">
                  عميل سعيد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
