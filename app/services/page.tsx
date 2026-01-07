import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hammer, Ruler, PenTool, Trees } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "نجارة الأثاث المخصص",
      desc: "نصمم وننفذ قطع أثاث فريدة تعكس ذوقك الخاص وتناسب مساحتك بدقة.",
      icon: <Hammer className="w-12 h-12 text-accent" />,
      features: ["تصميم ثلاثي الأبعاد", "أخشاب طبيعية 100%", "ضمان مدي الحياة"],
    },
    {
      title: "الديكورات الخشبية الجدارية",
      desc: "تكسيات جدارية وسقوف خشبية تضفي لمسة من الدفء والفخامة على المجالس والصالات.",
      icon: <PenTool className="w-12 h-12 text-accent" />,
      features: ["نقوش إسلامية", "مودرن بانيلينج", "إضاءة مخفية"],
    },
    {
      title: "تصميم وتنفيذ المطابخ",
      desc: "مطابخ عصرية تجمع بين متانة الخشب وأحدث التقنيات لراحة ست البيت.",
      icon: <Ruler className="w-12 h-12 text-accent" />,
      features: ["مقاومة للرطوبة", "إكسسوارات إيطالية", "استغلال ذكي للمساحات"],
    },
    {
      title: "ترميم وتجديد الخشب",
      desc: "نعيد الحياة لقطعك القديمة الثمينة من خلال تقنيات ترميم احترافية.",
      icon: <Trees className="w-12 h-12 text-accent" />,
      features: ["إزالة الخدوش", "تغيير الألوان", "معالجة التشققات"],
    },
  ]

  return (
    <main className="min-h-screen page-transition">
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">خدماتنا الاحترافية</h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            من التصميم الأولي وحتى التركيب النهائي، نحن معك في كل خطوة لنضمن لك جودة لا تضاهى.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[3rem] border border-border hover:shadow-xl transition-all group"
            >
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 font-bold text-primary">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
