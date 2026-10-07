import Link from "next/link";
import { companyContact, copy, getPath } from "@/lib/content";
import type { Locale } from "@/lib/types";
import { productCategories, productCategoryPath } from "@/lib/categories";
import { Arrow } from "./Icons";
import { BrandLockup } from "./Logo";

export function ContactCta({ locale }: { locale: Locale }) { const c = copy[locale]; return <section className="contact-cta"><div><span className="eyebrow">{locale === "tr" ? "PROJE TALEBİ" : "PROJECT ENQUIRIES"}</span><h2>{c.contactCta}</h2></div><Link className="text-link light" href={getPath(locale,"contact")}>{c.contactAction}<Arrow/></Link></section>; }

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <footer><div className="footer-statement"><BrandLockup href={getPath(locale,"home")} className="footer-lockup"/><h2>{locale === "tr" ? <>Kaplama, panel ve<br/><em>kenar bandı çözümleri.</em></> : <>Veneer, panel and<br/><em>edge band solutions.</em></>}</h2></div><div className="footer-grid"><div className="footer-brand"><BrandLockup href={getPath(locale,"home")}/><p>{locale === "tr" ? "Doğal ve endüstriyel kaplamalar, kaplamalı panel üretimi ve proje desteği." : "Natural and industrial veneers, veneered panel production and project support."}</p></div><div><h3>{locale === "tr" ? "Ürünler" : "Products"}</h3>{productCategories.map(category=><Link href={productCategoryPath(locale,category.id)} key={category.id}>{category.name[locale]}</Link>)}</div><div><h3>{locale === "tr" ? "Şirket" : "Company"}</h3><Link href={getPath(locale,"company")}>{c.nav.company}</Link><Link href={getPath(locale,"production")}>{c.nav.production}</Link><Link href={getPath(locale,"gallery")}>{c.nav.gallery}</Link><Link href={getPath(locale,"documents")}>{c.nav.documents}</Link></div><div><h3>{c.nav.contact}</h3><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a><a href="tel:+902328537485">+90 232 853 74 85–86</a><p>{companyContact.factory}</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Çalışırlar Orman Ürünleri</span><div><Link href="/tr">TR</Link><Link href="/en">EN</Link></div></div></footer>;
}
