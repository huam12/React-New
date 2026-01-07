import {
  Hammer,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Hammer className="h-8 w-8 text-secondary" />
            <span className="text-3xl font-serif font-bold">أبو عواد</span>
          </div>

          <p className="text-primary-foreground/70 leading-relaxed">
            نحن نفخر بتقديم أرقى حلول النجارة والديكور الخشبي في المنطقة، مع
            التركيز على الجودة والجمال في كل تفصيلة.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/yd524599"
              target="_blank"
              aria-label="Instagram"
              className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
              className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li>
              <Link href="/" className="hover:text-secondary">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/business" className="hover:text-secondary">
                أعمالنا
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-secondary">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary">
                من نحن
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6">الخدمات</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li>نجارة عامة</li>
            <li>تصميم مطابخ</li>
            <li>تركيب ديكورات</li>
            <li>ترميم أثاث</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6">اتصل بنا</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <a
                href="https://maps.google.com/?q=الرياض الصناعية القديمة"
                target="_blank"
                className="hover:text-secondary"
              >
                المملكة العربية السعودية – الرياض – الصناعية القديمة
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <a href="tel:+966500756613" className="hover:text-secondary">
                +966 50 075 6613
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <a
                href="mailto:aboawad@gmail.com"
                className="hover:text-secondary"
              >
                aboawad@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-primary-foreground/50 text-sm">
        جميع الحقوق محفوظة © {new Date().getFullYear()} أبو عواد للخشب والديكور
      </div>
    </footer>
  );
}
