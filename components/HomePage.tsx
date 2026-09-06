import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { getPath } from "@/lib/content";
import { productCategoryPath } from "@/lib/categories";
import { products } from "@/lib/products";
import { Arrow } from "./Icons";
import { ProductCard } from "./ProductCard";
import { MovingHero } from "./MovingHero";
import { MaterialMarquee, type MarqueeImage } from "./MaterialMarquee";
import { ScrollMaterialStrip } from "./ScrollMaterialStrip";

export function HomePage({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  const productPath = getPath(locale, "products");
  const bySlug = (slug: string) => products.find((product) => product.slug === slug)!;
  const selectedProducts = ["usa-ceviz","dogal-teak","a3-hareli-mese","a11-wenge"].map(bySlug);
  const scrollProducts = ["akcaagac","usa-ceviz","zebrano","dogal-teak","a1-ince-dar-mese","a3-hareli-mese","a11-wenge"].map(bySlug);
  const collection = [
    { title: tr ? "Doğal Kaplamalar" : "Natural Veneers", label: "01 / NATURAL VENEER", image: bySlug("usa-ceviz").images.catalogue, href: productCategoryPath(locale,"natural-veneer") },
    { title: tr ? "Endüstriyel Kaplamalar" : "Industrial Veneers", label: "02 / INDUSTRIAL VENEER", image: bySlug("a11-wenge").images.catalogue, href: productCategoryPath(locale,"industrial-veneer") },
    { title: tr ? "Kaplamalı MDF & Sunta" : "Veneered MDF & Chipboard", label: "03 / PANELS", image: "/images/editorial/campaign/panels/full-size-veneered-panels-desktop.webp", href: productCategoryPath(locale,"veneered-mdf-chipboard") },
    { title: tr ? "Ahşap Kenar Bantları" : "Wood Edge Bands", label: "04 / EDGE DETAIL", image: "/images/editorial/campaign/edge-band/edge-band-loops-desktop.webp", href: productCategoryPath(locale,"wood-edge-band") }
  ];
  const materialArchive: MarqueeImage[] = [
    { src:bySlug("akcaagac").images.catalogue, alt:tr?"Akçaağaç kaplama":"Maple veneer", label:"MAPLE / 01", width:"narrow" },
    { src:bySlug("usa-ceviz").images.catalogue, alt:tr?"Amerikan ceviz kaplama":"USA walnut veneer", label:"WALNUT / 02", width:"wide" },
    { src:bySlug("zebrano").images.catalogue, alt:"Zebrano", label:"ZEBRANO / 03", width:"regular" },
    { src:bySlug("dogal-teak").images.catalogue, alt:tr?"Doğal teak kaplama":"Natural teak veneer", label:"TEAK / 04", width:"narrow" },
    { src:bySlug("a1-ince-dar-mese").images.catalogue, alt:tr?"A1 endüstriyel kaplama":"A1 industrial veneer", label:"INDUSTRIAL / A1", width:"wide" },
    { src:bySlug("a11-wenge").images.catalogue, alt:tr?"A11 endüstriyel kaplama":"A11 industrial veneer", label:"INDUSTRIAL / A11", width:"regular" },
  ];
  const architectureArchive: MarqueeImage[] = [
    { src:"/images/editorial/campaign/architecture/walnut-living-wall-desktop.webp", alt:tr?"Ceviz kaplamalı duvar uygulaması":"Walnut-clad wall application", label:"ARCHITECTURE / 01", width:"wide" },
    { src:"/images/editorial/campaign/architecture/light-oak-meeting-room-desktop.webp", alt:tr?"Açık meşe toplantı mekânı":"Light oak meeting space", label:"ARCHITECTURE / 02", width:"wide" },
    { src:"/images/editorial/campaign/architecture/walnut-reception-desktop.webp", alt:tr?"Ceviz resepsiyon uygulaması":"Walnut reception application", label:"ARCHITECTURE / 03", width:"wide" },
    { src:bySlug("akcaagac").images.application!, alt:tr?"Akçaağaç mekân görselleştirmesi":"Maple room visualization", label:"ROOM V2 / MAPLE", width:"wide" },
    { src:bySlug("a11-wenge").images.application!, alt:tr?"A11 mekân görselleştirmesi":"A11 room visualization", label:"ROOM V2 / A11", width:"wide" },
  ];

  return <main className="premium-home motion-home">
    <MovingHero locale={locale} productPath={productPath} contactPath={getPath(locale,"contact")}/>

    <section className="brand-statement">
      <div className="index-label"><span>01</span><span>{tr ? "MALZEME BİLGİSİ / ÜRETİM DİSİPLİNİ" : "MATERIAL KNOWLEDGE / PRODUCTION DISCIPLINE"}</span></div>
      <div className="brand-statement-copy"><p>{tr ? "Ahşabın karakterini seçer, üretim disiplinimizle projeye hazırlarız." : "We select the character of wood and prepare it for projects with production discipline."}</p><span>{tr ? "Doğal yüzeyin benzersizliği, kontrollü üretimin tutarlılığıyla buluşur." : "The individuality of natural material meets the consistency of controlled production."}</span></div>
      <dl className="brand-proof"><div><dt>1993</dt><dd>{tr ? "Ahşap yüzey deneyimi" : "Wood-surface experience"}</dd></div><div><dt>11.000 m²</dt><dd>{tr ? "Torbalı üretim tesisi" : "Torbalı production facility"}</dd></div><div><dt>04</dt><dd>{tr ? "Tamamlayıcı ürün ailesi" : "Coordinated product families"}</dd></div></dl>
    </section>

    <section className="unique-surface">
      <div className="unique-surface-image image-clip-reveal"><Image src="/images/editorial/campaign/veneer/nature-never-repeats-desktop.webp" alt={tr ? "Aynı türden, birbirinden farklı iki doğal ceviz kaplama yaprağı" : "Two distinct natural walnut veneer leaves from the same species"} fill sizes="(max-width:760px) 100vw, 62vw"/></div>
      <div className="unique-surface-copy"><div className="index-label"><span>02</span><span>{tr ? "DOĞAL SEÇKİ" : "NATURAL SELECTION"}</span></div><h2>{tr ? <>Doğal olanın değeri,<br/><em>tekrar etmemesinde.</em></> : <>The value of nature<br/>lies in <em>never repeating.</em></>}</h2><p>{tr ? "Her yaprak; damar, ton ve doku bakımından benzersizdir. Koleksiyonlarımız bu doğal farklılığı güçlü bir tasarım kararına dönüştürür." : "Every leaf is distinct in grain, tone and texture. Our collections turn that natural variation into a confident design decision."}</p></div>
    </section>

    <section className="material-archive-section">
      <header><span>03 / {tr ? "MALZEME KÜTÜPHANESİ" : "MATERIAL LIBRARY"}</span><h2>{tr ? <>Projeler için seçilmiş<br/><em>bir yüzey kütüphanesi.</em></> : <>A surface library<br/><em>selected for projects.</em></>}</h2></header>
      <MaterialMarquee images={materialArchive} direction="left" duration={50} variant="material" pauseOnHover locale={locale}/>
    </section>

    <section className="collection-editorial motion-collection">
      <header className="collection-intro"><div className="index-label"><span>04</span><span>{tr ? "BÜTÜNCÜL YÜZEY SİSTEMİ" : "COORDINATED SURFACE SYSTEM"}</span></div><h2>{tr ? "Yüzeyden tamamlayıcı detaya, tek bir malzeme dili." : "One material language, from surface to finishing detail."}</h2></header>
      <div className="material-composition">
        {collection.map((item,index) => <Link className={`composition-item composition-${index+1}`} href={item.href} key={item.title}>
          <div className="composition-image image-clip-reveal"><Image src={item.image} alt={`${item.title} ${tr ? "malzeme dokusu" : "material texture"}`} fill sizes={index === 0 ? "60vw" : "40vw"}/></div>
          <div className="composition-meta"><span>{item.label}</span><strong>{item.title}</strong><Arrow/></div>
        </Link>)}
      </div>
      <Link className="line-link collection-all" href={productPath}>{tr ? "Dört ürün ailesini keşfedin" : "Explore all four product families"}<Arrow/></Link>
    </section>

    <ScrollMaterialStrip locale={locale} products={scrollProducts}/>

    <section className="architecture-marquee-section">
      <header><span>06 / {tr ? "MİMARİ UYGULAMALAR" : "ARCHITECTURAL APPLICATIONS"}</span><h2>{tr ? <>Malzeme kararından,<br/><em>mekânsal etkiye.</em></> : <>From material decision<br/>to <em>spatial impact.</em></>}</h2></header>
      <MaterialMarquee images={architectureArchive} direction="right" duration={56} variant="architecture" pauseOnHover locale={locale}/>
    </section>

    <section className="manufacturing-editorial">
      <div className="manufacturing-visual image-clip-reveal">
        <Image src="/images/editorial/calisirlar-production-poster.jpg" alt={tr ? "Çalışırlar Torbalı üretim tesisi" : "Çalışırlar production facility in Torbalı"} fill sizes="52vw"/>
        <video className="manufacturing-film" autoPlay muted loop playsInline preload="metadata" poster="/images/editorial/calisirlar-production-poster.jpg" aria-label={tr ? "Torbalı tesisinde üretim süreci" : "Production process at the Torbalı facility"}>
          <source src="/videos/calisirlar-production-portrait.mp4" type="video/mp4"/>
        </video>
        <div className="manufacturing-film-label"><span>{tr ? "ÜRETİM PORTRESİ" : "PRODUCTION PORTRAIT"}</span><span>TORBALI · 00:16</span></div>
      </div>
      <div className="manufacturing-copy"><div className="index-label light"><span>07</span><span>{tr ? "ÜRETİM GÜCÜ" : "PRODUCTION CAPABILITY"}</span></div><h2>{tr ? <>Malzemeyi standarda<br/><em>dönüştüren üretim.</em></> : <>Production that turns<br/><em>material into consistency.</em></>}</h2><div className="metric-display"><strong>11,000</strong><span>m²</span></div><p className="metric-caption">{tr ? <>ÜRETİM TESİSİ<br/>TORBALI / İZMİR</> : <>PRODUCTION FACILITY<br/>TORBALI / İZMİR</>}</p><p>{tr ? "Yüzey seçimi, panel hazırlığı, kaplama uygulaması ve uzman süreç kontrolü; aynı kalite yaklaşımı altında, tek tesiste yönetilir." : "Surface selection, panel preparation, veneering and expert process control are managed under one quality approach at a single facility."}</p><Link className="line-link light" href={getPath(locale,"production")}>{tr ? "Üretim kabiliyetimizi inceleyin" : "Explore our capabilities"}<Arrow/></Link></div>
    </section>

    <section className="experience-editorial motion-experience"><div className="index-label"><span>08</span><span>{tr ? "BİRİKİM / KAPASİTE / SÜREKLİLİK" : "EXPERIENCE / CAPABILITY / CONTINUITY"}</span></div><div className="experience-year">1993</div><div className="experience-line"><span>01</span><strong>{tr ? "Doğal ve endüstriyel kaplama" : "Natural and industrial veneer"}</strong><p>{tr ? "Uzman malzeme bilgisiyle büyüyen koleksiyon" : "A collection shaped by specialist material knowledge"}</p></div><div className="experience-line"><span>02</span><strong>2007 · Torbalı</strong><p>{tr ? "Modern üretim tesisinin kurulması" : "Establishment of the modern production facility"}</p></div><div className="experience-line"><span>03</span><strong>{tr ? "Bugün" : "Today"}</strong><p>{tr ? "Projeye özel yüzey, panel ve kenar çözümleri" : "Project-specific surface, panel and edge solutions"}</p></div></section>

    <section className="selected-materials motion-selected"><header><div className="index-label"><span>09</span><span>{tr?"KÜRATÖRLÜ SEÇKİ":"CURATED SELECTION"}</span></div><h2>{tr?"Projenin tonunu belirleyen yüzeyler.":"Surfaces that define the tone of a project."}</h2></header><div className="selected-material-grid">{selectedProducts.map(product=><ProductCard key={product.id} product={product} locale={locale}/>)}</div><Link className="line-link selected-material-link" href={productPath}>{tr?"Tüm yüzeyleri inceleyin":"Explore every surface"}<Arrow/></Link></section>

    <section className="talk-material"><Image className="talk-material-seal" src="/images/brand/calisirlar-monogram-medallion.png" alt="" width={360} height={360}/><div className="index-label"><span>10</span><span>{tr ? "PROJE DESTEĞİ" : "PROJECT SUPPORT"}</span></div><h2>{tr ? <>PROJENİZİ<br/><em>BİRLİKTE PLANLAYALIM.</em></> : <>LET&apos;S PLAN<br/><em>YOUR PROJECT.</em></>}</h2><Link className="line-link" href={getPath(locale,"contact")}>{tr ? "Proje talebi oluşturun" : "Start a project enquiry"}<Arrow/></Link></section>
  </main>;
}
