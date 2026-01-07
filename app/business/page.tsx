import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Business() {
  const projects = [
    {
      title: "مكتب",
      category: "مكتب تنفيذي",
      img: "/images/1.jpg",
    },
    {
      title: "منزل",
      category: "أبواب داخلية",
      img: "/images/4.jpg",
    },
    {
      title: "منزل",
      category: "أبواب خارجية",
      img: "/images/5.jpg",
    },
    {
      title: "خزائن  مطابخ",
      category: "حلول تخزين",
      img: "/images/6.jpg",
    },
    {
      title: "  ديكورات فخمة",
      category: " ديكورات",
      img: "/images/7.jpg",
    },
    {
      title: "ديكور",
      category: "أعمال خارجية",
      img: "/images/8.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              معرض الأعمال
            </h1>
            <p className="text-muted-foreground text-xl">
              نحن لا نصنع مجرد أثاث، نحن نبني تجارب تدوم طويلاً. استعرض نخبة من
              مشاريعنا المنفذة.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium">
              الكل
            </button>
            <button className="px-6 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium">
              سكني
            </button>
            <button className="px-6 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium">
              تجاري
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] mb-6">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <span className="text-accent text-sm font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary text-primary-foreground p-12 md:p-20 rounded-[3rem] text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            هل أنت مستعد لمشروعك القادم؟
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-primary px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            ابدأ مشروعك الآن
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
