import type { Locale } from "./types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://calisirlarorman.com";

export const paths = {
  tr: { home: "/tr", company: "/tr/kurumsal", products: "/tr/urunler", production: "/tr/uretim", gallery: "/tr/galeri", documents: "/tr/belgeler", contact: "/tr/iletisim", boards: "/tr/urunler/kaplamali-mdf-sunta", edges: "/tr/urunler/ahsap-kenar-bantlari" },
  en: { home: "/en", company: "/en/company", products: "/en/products", production: "/en/production", gallery: "/en/gallery", documents: "/en/documents", contact: "/en/contact", boards: "/en/products/veneered-mdf-chipboard", edges: "/en/products/wood-edge-bands" }
} as const;

export const getPath = (locale: Locale, key: keyof typeof paths.tr) => paths[locale][key];

export const copy = {
  tr: {
    nav: { company: "Kurumsal", products: "Ürünler", production: "Üretim", gallery: "Galeri", documents: "Belgeler", contact: "İletişim" },
    heroEyebrow: "ÇALIŞIRLAR ORMAN ÜRÜNLERİ · 1993'TEN BERİ",
    heroTitle: "Doğal ve endüstriyel kaplama çözümleri.",
    heroText: "Mimari ve mobilya projeleri için doğal ve endüstriyel kaplamalar, kaplamalı panel ve tamamlayıcı kenar çözümleri.",
    explore: "Koleksiyonu inceleyin", company: "Kurumsal", material: "Yüzeyleri inceleyin", all: "Tüm koleksiyonu görün",
    introTitle: "Kaplama, panel ve kenar bandı çözümleri.",
    introText: "Çalışırlar, 1993'ten beri doğal ve endüstriyel kaplamalar sunuyor. Torbalı'daki tesiste projeye göre kaplamalı MDF ve sunta üretimi yapılıyor.",
    categories: "Ürün grupları", categoriesText: "Doğal ve endüstriyel kaplamalar, kaplamalı MDF ve sunta ile ahşap kenar bantları.",
    facility: "11.000 m² üretim tesisi.", facilityText: "Torbalı, İzmir'deki üretim tesisi; yüzey seçimi, panel hazırlığı, kaplama uygulaması ve süreç kontrolünü aynı çatı altında yürütür.",
    quality: "Tutarlı sonuç için kontrollü süreç", qualityText: "Kalite yaklaşımımız; doğru malzeme seçimi, süreç boyunca uzman denetimi ve projeye uygun çözüm geliştirme üzerine kuruludur.",
    contactCta: "Numune, ürün bilgisi ve proje talepleriniz için iletişime geçin.", contactAction: "Talep oluşturun"
  },
  en: {
    nav: { company: "Company", products: "Products", production: "Production", gallery: "Gallery", documents: "Documents", contact: "Contact" },
    heroEyebrow: "ÇALIŞIRLAR WOOD PRODUCTS · SINCE 1993",
    heroTitle: "Natural and industrial veneer solutions.",
    heroText: "Natural and industrial veneers, veneered panels and wood edge bands for architecture and furniture projects.",
    explore: "Explore the collection", company: "Our company", material: "Explore surfaces", all: "View the full collection",
    introTitle: "Veneer, panel and edge band solutions.",
    introText: "Çalışırlar has supplied natural and industrial veneers since 1993. Veneered MDF and chipboard are produced to project requirements at the Torbalı facility.",
    categories: "Product groups", categoriesText: "Natural and industrial veneers, veneered MDF and chipboard, and wood edge bands.",
    facility: "11,000 m² production facility.", facilityText: "The Torbalı facility manages surface selection, panel preparation, veneering and process control under one roof.",
    quality: "Controlled processes, consistent outcomes", qualityText: "Our approach to quality is built on the right material selection, expert oversight throughout production and solutions tailored to project needs.",
    contactCta: "Contact us for samples, product information and project enquiries.", contactAction: "Send an enquiry"
  }
} as const;

export const companyContact = {
  email: "info@calisirlarormanurunleri.com.tr",
  headOffice: "661/4 Sokak No:3, Şirinyer, İzmir, Türkiye",
  headPhones: ["+90 232 254 64 05", "+90 232 264 36 71"],
  factory: "Kazım Karabekir Mah. 6909 Sokak No:1, Pancar, Torbalı, İzmir, Türkiye",
  factoryPhones: ["+90 232 853 74 85–86", "+90 232 853 74 88"]
};
