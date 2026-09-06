import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ProductLanding, VeneerCategoryPage } from "@/components/ProductArchitecture";
import { SectionPage } from "@/components/SectionPages";
import { findProductCategoryBySlug, productCategories, productCategoryPath, productDetailPath } from "@/lib/categories";
import { products } from "@/lib/products";
import type { Locale } from "@/lib/types";

export function generateStaticParams(){return (["tr","en"] as const).flatMap(locale=>[
  ...productCategories.map(category=>({locale,section:locale==="tr"?"urunler":"products",slug:category.slug[locale]})),
  ...products.map(product=>({locale,section:locale==="tr"?"urunler":"products",slug:product.slug}))
]);}

export async function generateMetadata({params}:{params:Promise<{locale:string;section:string;slug:string}>}):Promise<Metadata>{
  const {locale:raw,section,slug}=await params;
  if(raw!=="tr"&&raw!=="en")return{};
  const locale=raw as Locale;
  if(section!==(locale==="tr"?"urunler":"products"))return{};
  const category=findProductCategoryBySlug(locale,slug);
  if(!category)return{};
  return {title:category.name[locale],description:category.description[locale],alternates:{canonical:productCategoryPath(locale,category.id),languages:{"tr-TR":productCategoryPath("tr",category.id),en:productCategoryPath("en",category.id)}},openGraph:{images:[category.image]}};
}

export default async function CategoryOrLegacyProductPage({params}:{params:Promise<{locale:string;section:string;slug:string}>}){
  const {locale:raw,section,slug}=await params;
  if(raw!=="tr"&&raw!=="en")notFound();
  const locale=raw as Locale;
  if(section!==(locale==="tr"?"urunler":"products"))notFound();
  const category=findProductCategoryBySlug(locale,slug);
  if(category?.id==="natural-veneer"||category?.id==="industrial-veneer")return <VeneerCategoryPage locale={locale} categoryId={category.id}/>;
  if(category?.id==="veneered-mdf-chipboard")return <SectionPage locale={locale} type="boards"/>;
  if(category?.id==="wood-edge-band")return <SectionPage locale={locale} type="edges"/>;
  const legacyProduct=products.find(product=>product.slug===slug);
  if(legacyProduct)permanentRedirect(productDetailPath(locale,legacyProduct));
  if(slug==="urunler"||slug==="products")return <ProductLanding locale={locale}/>;
  notFound();
}
