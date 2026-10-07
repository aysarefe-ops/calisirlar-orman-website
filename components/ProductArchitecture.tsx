import Image from "next/image";
import Link from "next/link";
import type { Locale, ProductCategory } from "@/lib/types";
import { getPath } from "@/lib/content";
import { getProductCategory, productCategories, productCategoryPath } from "@/lib/categories";
import { ProductExplorer } from "./ProductExplorer";
import { Arrow } from "./Icons";
import { ContactCta } from "./Footer";

export function ProductLanding({ locale }: { locale: Locale }) {
  const tr=locale==="tr";
  return <main className="product-architecture">
    <section className="page-hero product-landing-hero"><div className="page-hero-content"><span className="eyebrow">{tr?"ÜRÜNLER":"PRODUCTS"}</span><h1>{tr?"Kaplama, panel ve kenar bandı ürünleri.":"Veneer, panel and edge band products."}</h1><p>{tr?"Doğal ve endüstriyel kaplamalar, kaplamalı MDF ve sunta ile ahşap kenar bandı seçeneklerini inceleyin.":"Explore natural and industrial veneers, veneered MDF and chipboard, and wood edge band options."}</p></div></section>
    <section className="product-family-index">
      {productCategories.map((category,index)=><Link className={`product-family family-${index+1}`} href={productCategoryPath(locale,category.id)} key={category.id}>
        <div className="product-family-image"><Image src={category.image} alt={`${category.name[locale]} ${tr?"malzeme görünümü":"material view"}`} fill sizes={index<2?"60vw":"55vw"}/></div>
        <div className="product-family-copy"><span>{category.order} / {category.short[locale]}</span><h2>{category.name[locale]}</h2><p>{category.description[locale]}</p><Arrow size={24}/></div>
      </Link>)}
    </section>
    <ContactCta locale={locale}/>
  </main>;
}

export function VeneerCategoryPage({ locale, categoryId }: { locale: Locale; categoryId: Extract<ProductCategory,"natural-veneer"|"industrial-veneer"> }) {
  const tr=locale==="tr";
  const category=getProductCategory(categoryId);
  return <main>
    <section className="page-hero has-image category-hero"><Image src={category.image} alt="" fill priority sizes="100vw"/><div className="page-hero-content"><div className="breadcrumbs"><Link href={getPath(locale,"home")}>{tr?"Ana Sayfa":"Home"}</Link> / <Link href={getPath(locale,"products")}>{tr?"Ürünler":"Products"}</Link> / {category.name[locale]}</div><span className="eyebrow">{category.order} / {tr?"MALZEME AİLESİ":"MATERIAL FAMILY"}</span><h1>{category.name[locale]}</h1><p>{category.description[locale]}</p></div></section>
    <ProductExplorer locale={locale} productCategory={categoryId}/>
    <ContactCta locale={locale}/>
  </main>;
}
