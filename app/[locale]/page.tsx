import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import type { Locale } from "@/lib/types";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; return { title: locale === "tr" ? "Ahşap Kaplama ve Yüzey Sistemleri" : "Wood Veneers & Surface Systems", description: locale === "tr" ? "Doğal ve endüstriyel ahşap kaplamalar, kaplamalı MDF ve sunta ile ahşap kenar bantları için Çalışırlar koleksiyonunu keşfedin." : "Explore Çalışırlar natural and industrial veneers, veneered MDF and chipboard, and wood edge bands.", alternates: { canonical: `/${locale}`, languages: { "tr-TR": "/tr", "en": "/en" } } }; }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (raw !== "tr" && raw !== "en") notFound(); return <HomePage locale={raw as Locale}/>; }
