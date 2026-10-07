"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/types";
import { Arrow } from "./Icons";

export function MovingHero({ locale, productPath, contactPath }: { locale: Locale; productPath: string; contactPath: string }) {
  const tr = locale === "tr";
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const isPaused = Boolean(reducedMotion || paused);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPaused) video.pause();
    else void video.play().catch(() => undefined);
  }, [isPaused]);

  return <section className="moving-hero">
    <div className="hero-video-frame">
      <Image src="/images/editorial/calisirlar-production-hero-poster.jpg" alt={tr ? "Çalışırlar Torbalı üretim tesisi" : "Çalışırlar production facility in Torbalı"} fill priority sizes="100vw"/>
      <video ref={videoRef} className="hero-video" autoPlay={!reducedMotion} muted loop playsInline preload="auto" poster="/images/editorial/calisirlar-production-hero-poster.jpg" aria-label={tr ? "Çalışırlar üretim süreci ve Torbalı tesisi" : "Çalışırlar production process and Torbalı facility"}>
        <source media="(max-width: 760px)" src="/videos/calisirlar-production-portrait.mp4" type="video/mp4"/>
        <source src="/videos/calisirlar-production-hero.mp4" type="video/mp4"/>
      </video>
    </div>
    <div className="moving-hero-shade"/>
    <div className="moving-hero-meta"><span>PRODUCTION / SURFACES</span><span>TORBALI · İZMİR</span><span>SINCE 1993</span></div>
    <div className="moving-hero-copy">
      <span className="hero-kicker">{tr ? "TORBALI'DAN PROJEYE · KONTROLLÜ ÜRETİM" : "FROM TORBALI TO THE PROJECT · CONTROLLED PRODUCTION"}</span>
      <h1>{tr ? <>Doğal ve endüstriyel<br/><em>kaplama çözümleri.</em></> : <>Natural and industrial<br/><em>veneer solutions.</em></>}</h1>
      <p className="hero-lede">{tr ? "Kaplama, kaplamalı MDF ve sunta ile ahşap kenar bandı üretimi. Numune, teknik bilgi ve proje desteği." : "Veneers, veneered MDF and chipboard, and wood edge band production. Samples, technical information and project support."}</p>
      <div className="hero-conversion-actions"><Link className="hero-primary" href={productPath}>{tr ? "Ürünleri inceleyin" : "View products"}<Arrow/></Link><Link className="line-link light" href={contactPath}>{tr ? "Proje talebi oluşturun" : "Start a project enquiry"}<Arrow/></Link></div>
    </div>
    <button type="button" className="hero-motion-control" aria-pressed={isPaused} onClick={() => setPaused(!paused)} disabled={Boolean(reducedMotion)}>
      <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>{isPaused ? (tr ? "HAREKETİ BAŞLAT" : "PLAY MOTION") : (tr ? "HAREKETİ DURDUR" : "PAUSE MOTION")}
    </button>
  </section>;
}
