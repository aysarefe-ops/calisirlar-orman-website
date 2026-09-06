"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Locale, Product } from "@/lib/types";

export function ScrollMaterialStrip({ locale, products }: { locale: Locale; products: Product[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target:rootRef, offset:["start start","end end"] });
  const x = useTransform(scrollYProgress,[0,1],["0%","-42%"]);
  const tr = locale === "tr";

  return <section ref={rootRef} className="scroll-material-strip">
    <div className="scroll-material-sticky">
      <header><span>05 / {tr ? "YÜZEY KARŞILAŞTIRMASI" : "SURFACE COMPARISON"}</span><h2>{tr ? <>Yüzeyleri birlikte<br/><em>değerlendirin.</em></> : <>Compare surfaces<br/><em>side by side.</em></>}</h2></header>
      <motion.div className="scroll-panel-track" style={{ x: reducedMotion ? 0 : x }}>
        {products.map((product,index)=><figure key={product.id}>
          <div><Image src={product.images.catalogue} alt={`${product.name[locale]} ${tr ? "kaplama yüzeyi" : "veneer surface"}`} fill sizes="(max-width:760px) 68vw, 30vw"/></div>
          <figcaption><span>{String(index+1).padStart(2,"0")} / {product.code ?? (tr ? "DOĞAL" : "NATURAL")}</span><strong>{product.name[locale]}</strong></figcaption>
        </figure>)}
      </motion.div>
    </div>
  </section>;
}
