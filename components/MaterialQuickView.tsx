"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Locale, Product } from "@/lib/types";
import { categoryLabel } from "@/lib/products";
import { productDetailPath } from "@/lib/categories";

type Props = { product: Product | null; locale: Locale; onClose: () => void };

export function MaterialQuickView({ product, locale, onClose }: Props) {
  const [view, setView] = useState<"material" | "detail" | "application">("material");
  const dialogRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const tr = locale === "tr";

  useEffect(() => setView("material"), [product?.id]);
  useEffect(() => {
    if (!product) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.focus());
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", keydown); };
  }, [product, onClose]);

  return <AnimatePresence>
    {product && <motion.div className="material-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration: reducedMotion ? 0 : .35 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.div ref={dialogRef} className="material-dialog" role="dialog" aria-modal="true" aria-labelledby="material-title" tabIndex={-1} initial={reducedMotion ? false : { opacity:0, y:18 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:12 }} transition={{ duration: reducedMotion ? 0 : .52, ease:[.22,.72,0,1] }}>
        <button type="button" className="material-close" onClick={onClose} aria-label={tr ? "Hızlı görünümü kapat" : "Close quick view"}>×</button>
        <div className="material-media">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={view} className="material-media-frame" layoutId={!reducedMotion && view === "material" ? `material-${product.id}` : undefined} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration: reducedMotion ? 0 : .42 }}>
              <Image
                src={view === "application" && product.images.application ? product.images.application : view === "detail" && product.images.macro ? product.images.macro : product.images.enhanced ?? product.images.catalogue}
                alt={view === "application" ? `${product.name[locale]} ${tr ? "aynı oda uygulama görselleştirmesi" : "same-room application visualization"}` : view === "detail" ? `${product.name[locale]} ${tr ? "yakın doku detayı" : "close material detail"}` : `${product.name[locale]} ${tr ? "malzeme dokusu" : "material texture"}`}
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
                quality={90}
              />
              {view === "application" && <span className="visualization-tag">{tr ? "UYGULAMA GÖRSELLEŞTİRMESİ" : "APPLICATION VISUALIZATION"}</span>}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="material-panel">
          <div>
            <span className="eyebrow">{categoryLabel(product.category, locale)}</span>
            <h2 id="material-title">{product.name[locale]}</h2>
            {product.code && <p className="material-number"><span>{tr ? "ÜRÜN KODU" : "PRODUCT CODE"}</span><strong>{product.code}</strong></p>}
            <div className="material-tabs" role="tablist" aria-label={tr ? "Malzeme görünümü" : "Material view"}>
              <button type="button" role="tab" aria-selected={view === "material"} onClick={() => setView("material")}>{tr ? "MALZEME" : "MATERIAL"}</button>
              <button type="button" role="tab" aria-selected={view === "detail"} disabled={!product.images.macro} onClick={() => setView("detail")}>{tr ? "DETAY" : "DETAIL"}</button>
              <button type="button" role="tab" aria-selected={view === "application"} disabled={!product.images.application} onClick={() => setView("application")}>{tr ? "MEKÂNDA GÖR" : "VIEW IN SPACE"}</button>
            </div>
            {!product.images.application && <p className="material-pending">{tr ? "Bu yüzey için aynı-oda görselleştirmesi kalite kontrol sırasındadır." : "The same-room visualization for this surface is pending quality review."}</p>}
          </div>
          <div className="material-actions">
            <p>{tr ? "Ekran ve ışık koşullarına bağlı olarak ürün tonları fiziksel numuneden farklı görünebilir." : "Product tones may differ from the physical sample depending on screen and lighting conditions."}</p>
            <Link className="line-link" href={productDetailPath(locale, product)}>{tr ? "DETAYLI İNCELE" : "FULL DETAILS"}<span>→</span></Link>
          </div>
        </div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}
