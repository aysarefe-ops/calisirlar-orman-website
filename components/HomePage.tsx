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
  const selectedProducts = ["usa-ceviz","dogal-teak","cls-03-hareli-mese","cls-16-wenge"].map(bySlug);
  const scrollProducts = ["akcaagac","usa-ceviz","zebrano","dogal-teak","cls-01-ince-freze-mese","cls-03-hareli-mese","cls-16-wenge"].map(bySlug);
  const collection = [
    { title: tr ? "Doğal Kaplamalar" : "Natural Veneers", label: "01 / NATURAL VENEER", image: bySlug("usa-ceviz").images.catalogue, href: productCategoryPath(locale,"natural-veneer") },
    { title: tr ? "Endüstriyel Kaplamalar" : "Industrial Veneers", label: "02 / INDUSTRIAL VENEER", image: bySlug("cls-16-wenge").images.catalogue, href: productCategoryPath(locale,"industrial-veneer") },
    { title: tr ? "Kaplamalı MDF & Sunta" : "Veneered MDF & Chipboard", label: "03 / PANELS", image: "/images/editorial/campaign/panels/full-size-veneered-panels-desktop.webp", href: productCategoryPath(locale,"veneered-mdf-chipboard") },
    { title: tr ? "Ahşap Kenar Bantları" : "Wood Edge Bands", label: "04 / EDGE DETAIL", image: "/images/editorial/campaign/edge-band/edge-band-loops-desktop.webp", href: productCategoryPath(locale,"wood-edge-band") }
  ];
  const materialArchive: MarqueeImage[] = [
    { src:bySlug("akcaagac").images.catalogue, alt:tr?"Akçaağaç kaplama":"Maple veneer", label:"MAPLE / 01", width:"narrow" },
    { src:bySlug("usa-ceviz").images.catalogue, alt:tr?"Amerikan ceviz kaplama":"USA walnut veneer", label:"WALNUT / 02", width:"wide" },
    { src:bySlug("zebrano").images.catalogue, alt:"Zebrano", label:"ZEBRANO / 03", width:"regular" },
    { src:bySlug("dogal-teak").images.catalogue, alt:tr?"Doğal teak kaplama":"Natural teak veneer", label:"TEAK / 04", width:"narrow" },
    { src:bySlug("cls-01-ince-freze-mese").images.catalogue, alt:tr?"CLS-01 endüstriyel kaplama":"CLS-01 industrial veneer", label:"INDUSTRIAL / CLS-01", width:"wide" },
    { src:bySlug("cls-16-wenge").images.catalogue, alt:tr?"CLS-16 endüstriyel kaplama":"CLS-16 industrial veneer", label:"INDUSTRIAL / CLS-16", width:"regular" },
  ];
  const architectureArchive: MarqueeImage[] = [
    { src:"/images/editorial/campaign/architecture/walnut-living-wall-desktop.webp", alt:tr?"Ceviz kaplamalı duvar uygulaması":"Walnut-clad wall application", label:"ARCHITECTURE / 01", width:"wide" },
    { src:"/images/editorial/campaign/architecture/light-oak-meeting-room-desktop.webp", alt:tr?"Açık meşe toplantı mekânı":"Light oak meeting space", label:"ARCHITECTURE / 02", width:"wide" },
    { src:"/images/editorial/campaign/architecture/walnut-reception-desktop.webp", alt:tr?"Ceviz resepsiyon uygulaması":"Walnut reception application", label:"ARCHITECTURE / 03", width:"wide" },
    { src:bySlug("akcaagac").images.application!, alt:tr?"Akçaağaç mekân görselleştirmesi":"Maple room visualization", label:"ROOM V2 / MAPLE", width:"wide" },
    { src:bySlug("freze-mese").images.application!, alt:tr?"Freze meşe mekân görselleştirmesi":"Rift oak room visualization", label:"ROOM / RIFT OAK", width:"wide" },
  ];

  return <main className="premium-home motion-home">
    <MovingHero locale={locale} productPath={productPath} contactPath={getPath(locale,"contact")}/>

    <section className="brand-statement">
      <div className="index-label"><span>01</span><span>{tr ? "ÜRÜNLER / ÜRETİM" : "PRODUCTS / PRODUCTION"}</span></div>
      <div className="brand-statement-copy"><p>{tr ? "Kaplama, panel ve kenar bandı üretimi." : "Veneer, panel and edge band production."}</p><span>{tr ? "Doğal ve endüstriyel kaplama seçenekleri, proje ölçüsü ve teknik gereksinimlere göre hazırlanır." : "Natural and industrial veneer options are prepared to project dimensions and technical requirements."}</span></div>
      <dl className="brand-proof"><div><dt>1993</dt><dd>{tr ? "Ahşap yüzey deneyimi" : "Wood-surface experience"}</dd></div><div><dt>11.000 m²</dt><dd>{tr ? "Torbalı üretim tesisi" : "Torbalı production facility"}</dd></div><div><dt>04</dt><dd>{tr ? "Tamamlayıcı ürün ailesi" : "Coordinated product families"}</dd></div></dl>
    </section>

    <section className="unique-surface">
      <div className="unique-surface-image image-clip-reveal"><Image src="/images/editorial/campaign/veneer/nature-never-repeats-desktop.webp" alt={tr ? "Aynı türden, birbirinden farklı iki doğal ceviz kaplama yaprağı" : "Two distinct natural walnut veneer leaves from the same species"} fill sizes="(max-width:760px) 100vw, 62vw"/></div>
      <div className="unique-surface-copy"><div className="index-label"><span>02</span><span>{tr ? "DOĞAL KAPLAMALAR" : "NATURAL VENEERS"}</span></div><h2>{tr ? <>Doğal kaplama<br/><em>seçenekleri.</em></> : <>Natural veneer<br/><em>options.</em></>}</h2><p>{tr ? "Damar, ton ve doku her levhada değişebilir. Projeye uygun ürün seçimi numune üzerinden yapılır." : "Grain, tone and texture can vary between sheets. The product for each project is selected through physical samples."}</p></div>
    </section>

    <section className="material-archive-section">
      <header><span>03 / {tr ? "ÜRÜN KOLEKSİYONU" : "PRODUCT COLLECTION"}</span><h2>{tr ? <>Doğal ve endüstriyel<br/><em>kaplama koleksiyonu.</em></> : <>Natural and industrial<br/><em>veneer collection.</em></>}</h2></header>
      <MaterialMarquee images={materialArchive} direction="left" duration={50} variant="material" pauseOnHover locale={locale}/>
    </section>

    <section className="collection-editorial motion-collection">
      <header className="collection-intro"><div className="index-label"><span>04</span><span>{tr ? "ÜRÜN GRUPLARI" : "PRODUCT GROUPS"}</span></div><h2>{tr ? "Kaplama, kaplamalı panel ve ahşap kenar bandı." : "Veneers, veneered panels and wood edge bands."}</h2></header>
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
      <header><span>06 / {tr ? "UYGULAMA ÖRNEKLERİ" : "APPLICATION EXAMPLES"}</span><h2>{tr ? <>Ürünlerin iç mekân<br/><em>uygulamaları.</em></> : <>Interior applications<br/><em>of our products.</em></>}</h2></header>
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
      <div className="manufacturing-copy"><div className="index-label light"><span>07</span><span>{tr ? "ÜRETİM TESİSİ" : "PRODUCTION FACILITY"}</span></div><h2>{tr ? <>Kaplamalı panel üretimi<br/><em>ve kalite kontrol.</em></> : <>Veneered panel production<br/><em>and quality control.</em></>}</h2><div className="metric-display"><strong>11,000</strong><span>m²</span></div><p className="metric-caption">{tr ? <>ÜRETİM TESİSİ<br/>TORBALI / İZMİR</> : <>PRODUCTION FACILITY<br/>TORBALI / İZMİR</>}</p><p>{tr ? "Yüzey seçimi, panel hazırlığı, kaplama uygulaması ve süreç kontrolü Torbalı tesisinde yürütülür." : "Surface selection, panel preparation, veneering and process control are carried out at the Torbalı facility."}</p><Link className="line-link light" href={getPath(locale,"production")}>{tr ? "Üretim bilgilerini inceleyin" : "View production details"}<Arrow/></Link></div>
    </section>

    <section className="experience-editorial motion-experience"><div className="index-label"><span>08</span><span>{tr ? "DENEYİM / ÜRETİM / ÜRÜN" : "EXPERIENCE / PRODUCTION / PRODUCT"}</span></div><div className="experience-year">1993</div><div className="experience-line"><span>01</span><strong>{tr ? "Doğal ve endüstriyel kaplama" : "Natural and industrial veneer"}</strong><p>{tr ? "Geniş ürün ve numune koleksiyonu" : "Extensive product and sample collection"}</p></div><div className="experience-line"><span>02</span><strong>2007 · Torbalı</strong><p>{tr ? "11.000 m² üretim tesisi" : "11,000 m² production facility"}</p></div><div className="experience-line"><span>03</span><strong>{tr ? "Bugün" : "Today"}</strong><p>{tr ? "Projeye özel kaplama, panel ve kenar bandı çözümleri" : "Project-specific veneer, panel and edge band solutions"}</p></div></section>

    <section className="selected-materials motion-selected"><header><div className="index-label"><span>09</span><span>{tr?"ÖNE ÇIKAN ÜRÜNLER":"FEATURED PRODUCTS"}</span></div><h2>{tr?"Öne çıkan kaplama seçenekleri.":"Featured veneer options."}</h2></header><div className="selected-material-grid">{selectedProducts.map(product=><ProductCard key={product.id} product={product} locale={locale}/>)}</div><Link className="line-link selected-material-link" href={productPath}>{tr?"Tüm ürünleri inceleyin":"View all products"}<Arrow/></Link></section>

    <section className="talk-material"><Image className="talk-material-seal" src="/images/brand/calisirlar-monogram-medallion.png" alt="" width={360} height={360}/><div className="index-label"><span>10</span><span>{tr ? "NUMUNE VE PROJE DESTEĞİ" : "SAMPLES AND PROJECT SUPPORT"}</span></div><h2>{tr ? <>NUMUNE VE<br/><em>PROJE TALEBİ.</em></> : <>SAMPLE AND<br/><em>PROJECT ENQUIRY.</em></>}</h2><Link className="line-link" href={getPath(locale,"contact")}>{tr ? "Talep oluşturun" : "Send an enquiry"}<Arrow/></Link></section>
  </main>;
}
