import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/lib/types";

export function generateStaticParams() { return [{ locale: "tr" }, { locale: "en" }]; }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (raw !== "tr" && raw !== "en") notFound(); const locale = raw as Locale; return <div lang={locale}><Header locale={locale}/>{children}<Footer locale={locale}/></div>; }
