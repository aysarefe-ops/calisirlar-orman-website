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
    heroTitle: "Seçkin yüzeyler. Güvenilir üretim.",
    heroText: "Mimari ve mobilya projeleri için doğal ve endüstriyel kaplamalar, kaplamalı panel ve tamamlayıcı kenar çözümleri.",
    explore: "Koleksiyonu inceleyin", company: "Kurumsal", material: "Yüzeyleri inceleyin", all: "Tüm koleksiyonu görün",
    introTitle: "Malzeme bilgisi, üretim disiplini ve projeye özel çözüm yaklaşımı.",
    introText: "Çalışırlar, 1993'ten bu yana ahşap yüzey deneyimini geniş bir malzeme kütüphanesi ve kontrollü üretim kabiliyetiyle birleştiriyor. Torbalı'daki tesiste doğal ve endüstriyel kaplamalı panel çözümleri üretiliyor.",
    categories: "Yüzey sistemleri", categoriesText: "Doğal karakterden tekrarlanabilir endüstriyel yüzeylere, panelden tamamlayıcı kenar detaylarına uzanan bütüncül koleksiyon.",
    facility: "Malzemeyi standarda dönüştüren üretim.", facilityText: "Torbalı, İzmir'deki yaklaşık 11.000 m² üretim tesisi; yüzey seçimi, panel hazırlığı, kaplama uygulaması ve uzman süreç kontrolünü aynı çatı altında yönetir.",
    quality: "Tutarlı sonuç için kontrollü süreç", qualityText: "Kalite yaklaşımımız; doğru malzeme seçimi, süreç boyunca uzman denetimi ve projeye uygun çözüm geliştirme üzerine kuruludur.",
    contactCta: "Projeniz için yüzey seçimini birlikte netleştirelim.", contactAction: "Projenizi paylaşın"
  },
  en: {
    nav: { company: "Company", products: "Products", production: "Production", gallery: "Gallery", documents: "Documents", contact: "Contact" },
    heroEyebrow: "ÇALIŞIRLAR WOOD PRODUCTS · SINCE 1993",
    heroTitle: "Distinctive surfaces. Reliable production.",
    heroText: "Natural and industrial veneers, veneered panels and coordinated edge solutions for architecture and furniture projects.",
    explore: "Explore the collection", company: "Our company", material: "Explore surfaces", all: "View the full collection",
    introTitle: "Material knowledge, production discipline and a project-led approach.",
    introText: "Since 1993, Çalışırlar has combined wood-surface expertise with a broad material library and controlled production capability. Natural and industrial veneered panel solutions are produced at the Torbalı facility.",
    categories: "Surface systems", categoriesText: "A coordinated collection spanning natural character, repeatable industrial surfaces, panels and finishing edge details.",
    facility: "Production that turns material into consistency.", facilityText: "The approximately 11,000 m² Torbalı facility manages surface selection, panel preparation, veneering and expert process control under one roof.",
    quality: "Controlled processes, consistent outcomes", qualityText: "Our approach to quality is built on the right material selection, expert oversight throughout production and solutions tailored to project needs.",
    contactCta: "Let’s define the right surface selection for your project.", contactAction: "Discuss your project"
  }
} as const;

export const companyContact = {
  email: "info@calisirlarormanurunleri.com.tr",
  headOffice: "661/4 Sokak No:3, Şirinyer, İzmir, Türkiye",
  headPhones: ["+90 232 254 64 05", "+90 232 264 36 71"],
  factory: "Kazım Karabekir Mah. 6909 Sokak No:1, Pancar, Torbalı, İzmir, Türkiye",
  factoryPhones: ["+90 232 853 74 85–86", "+90 232 853 74 88"]
};
