import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-wood-carpentry-workshop.jpg"
            alt="Carpentry Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-balance leading-tight">
            حيث يلتقي <span className="text-accent">الإتقان</span> بالفن
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            نحول الأخشاب إلى تحف فنية تزين منازلكم. خبرة تمتد لعقود في النجارة
            والديكورات الخشبية الفاخرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              مشاهدة أعمالنا <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-all"
            >
              اطلب استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">
              25+
            </div>
            <div className="text-muted-foreground">عاماً من الخبرة</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">
              500+
            </div>
            <div className="text-muted-foreground">مشروع مكتمل</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">
              100%
            </div>
            <div className="text-muted-foreground">رضا العملاء</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">
              15
            </div>
            <div className="text-muted-foreground">حرفي خبير</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              حلول خشبية متكاملة لكل زاوية في منزلك
            </p>
          </div>
          <Link
            href="/services"
            className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2 hover:text-accent hover:border-accent transition-colors"
          >
            اكتشف كافة الخدمات <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "ديكورات داخلية",
              desc: "تصميم وتنفيذ ديكورات خشبية عصرية وكلاسيكية.",
              img: "/images/15.jpg",
            },
            {
              title: "خزائن مخصصة",
              desc: "حلول تخزين ذكية وأنيقة تناسب احتياجاتك.",
              img: "/images/6.jpg",
            },
            {
              title: "أبواب داخلية وخارجية",
              desc: "صناعة أبواب  فريدة تدوم لأجيال.",
              img: "/images/17.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative h-[500px] overflow-hidden rounded-3xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-6">{item.desc}</p>
                <div className="h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
