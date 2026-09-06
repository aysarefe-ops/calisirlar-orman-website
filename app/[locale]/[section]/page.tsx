import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLanding } from "@/components/ProductArchitecture";
import { SectionPage, type SectionKey } from "@/components/SectionPages";
import { getPath } from "@/lib/content";
import type { Locale } from "@/lib/types";

const sectionMap: Record<Locale, Record<string, SectionKey | "products">> = {
  tr: { kurumsal:"company", urunler:"products", uretim:"production", galeri:"gallery", belgeler:"documents", iletisim:"contact" },
  en: { company:"company", products:"products", production:"production", gallery:"gallery", documents:"documents", contact:"contact" }
};
export function generateStaticParams(){return Object.entries(sectionMap).flatMap(([locale,sections])=>Object.keys(sections).map(section=>({locale,section})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;section:string}>}):Promise<Metadata>{const {locale,section}=await params;if((locale!=="tr"&&locale!=="en")||!sectionMap[locale][section])return{};const type=sectionMap[locale][section];const title=type==="products"?(locale==="tr"?"Ürünler ve Ahşap Yüzey Sistemleri":"Products & Wood Surface Systems"):(locale==="tr"?({company:"Kurumsal",production:"Üretim",gallery:"Galeri",documents:"Belgeler",contact:"İletişim"} as Record<string,string>)[type]:({company:"Company",production:"Production",gallery:"Gallery",documents:"Documents",contact:"Contact"} as Record<string,string>)[type]);return{title,alternates:{canonical:`/${locale}/${section}`,languages:{"tr-TR":type==="products"?getPath("tr","products"):undefined,en:type==="products"?getPath("en","products"):undefined}}};}
export default async function Page({params}:{params:Promise<{locale:string;section:string}>}){const {locale:raw,section}=await params;if(raw!=="tr"&&raw!=="en")notFound();const locale=raw as Locale;const type=sectionMap[locale][section];if(!type)notFound();if(type==="products")return <ProductLanding locale={locale}/>;return <SectionPage locale={locale} type={type}/>;}
