"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";
import type { Locale, Product } from "@/lib/types";
import { categoryLabel } from "@/lib/products";
import { productDetailPath } from "@/lib/categories";

type Props = {
  product: Product;
  locale: Locale;
  priority?: boolean;
  onSelect?: (product: Product, trigger: HTMLElement) => void;
};

function CardContent({ product, locale, priority, animate }: Omit<Props, "onSelect"> & { animate: boolean }) {
  return <>
    <motion.div className="product-image" layoutId={animate ? `material-${product.id}` : undefined} transition={{ duration: .58, ease: [.22,.72,0,1] }}>
      <Image src={product.images.catalogue} alt={`${product.name[locale]} — ${categoryLabel(product.category,locale).toLowerCase()} yüzey dokusu`} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" priority={priority}/>
      <span className="product-view-label" aria-hidden="true">{locale === "tr" ? "MALZEMEYİ GÖR" : "VIEW MATERIAL"} →</span>
    </motion.div>
    <div className="product-meta">
      <small>{categoryLabel(product.category, locale)}{product.code ? ` / ${product.code}` : ""}</small>
      <h3>{product.name[locale]}</h3>
    </div>
  </>;
}

export function ProductCard({ product, locale, priority = false, onSelect }: Props) {
  const reducedMotion = useReducedMotion();
  if (onSelect) {
    const open = (event: MouseEvent<HTMLButtonElement>) => onSelect(product, event.currentTarget);
    return <button type="button" className="product-card product-card-button" onClick={open} aria-haspopup="dialog">
      <CardContent product={product} locale={locale} priority={priority} animate={!reducedMotion}/>
    </button>;
  }
  return <Link className="product-card" href={productDetailPath(locale,product)}>
    <CardContent product={product} locale={locale} priority={priority} animate={false}/>
  </Link>;
}
