import type { Metadata } from "next";
import "./globals.css";
import "./homepage-motion.css";

export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://calisirlarorman.com"), title: { default: "Çalışırlar Orman Ürünleri", template: "%s | Çalışırlar Orman Ürünleri" }, description: "Doğal ve endüstriyel ahşap kaplamalar, kaplamalı MDF ve sunta ile ahşap kenar bantları.", icons:{icon:"/images/brand/calisirlar-monogram-medallion.png",apple:"/images/brand/calisirlar-monogram-medallion.png"} };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
