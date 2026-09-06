"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LayoutGroup } from "framer-motion";
import type { Locale, Product, ProductCategory, ProductSubtype } from "@/lib/types";
import { categoryLabel, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { MaterialQuickView } from "./MaterialQuickView";
import { CloseIcon, SearchIcon } from "./Icons";

export function ProductExplorer({ locale, productCategory }: { locale: Locale; productCategory: Extract<ProductCategory,"natural-veneer"|"industrial-veneer"> }) {
  const [query, setQuery] = useState("");
  const [subtype, setSubtype] = useState<"all" | ProductSubtype>("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const categoryProducts = useMemo(() => products.filter((product) => product.category === productCategory), [productCategory]);
  const normalizedQuery = query.trim().toLocaleLowerCase(locale);
  const list = useMemo(() => categoryProducts.filter((product) => {
    const matchesSubtype = subtype === "all" || product.subtype === subtype;
    const searchable = `${product.code ?? ""} ${product.name.tr} ${product.name.en} ${categoryLabel(product.category, locale)} ${product.subtype ?? ""}`.toLocaleLowerCase(locale);
    return matchesSubtype && searchable.includes(normalizedQuery);
  }), [categoryProducts, locale, normalizedQuery, subtype]);
  const labels = locale === "tr" ? { all: "Tümü", natural: "Doğal", exotic: "Egzotik", search: "İsim veya ürün kodu ara", count: "malzeme", clear: "Filtreleri temizle", empty: "Aradığınız yüzeyi burada bulamadık." } : { all: "All", natural: "Natural", exotic: "Exotic", search: "Search by name or product code", count: "materials", clear: "Clear filters", empty: "We could not find that surface." };

  const readUrlMaterial = useCallback(() => {
    const slug = new URL(window.location.href).searchParams.get("material");
    setSelected(slug ? categoryProducts.find((product) => product.slug === slug) ?? null : null);
  }, [categoryProducts]);

  useEffect(() => {
    readUrlMaterial();
    window.addEventListener("popstate", readUrlMaterial);
    return () => window.removeEventListener("popstate", readUrlMaterial);
  }, [readUrlMaterial]);

  const openMaterial = useCallback((product: Product, trigger: HTMLElement) => {
    openerRef.current = trigger;
    setSelected(product);
    const url = new URL(window.location.href);
    url.searchParams.set("material", product.slug);
    window.history.pushState({ material: product.slug }, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

  const closeMaterial = useCallback(() => {
    setSelected(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("material");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  return <LayoutGroup id={`catalogue-${productCategory}`}>
    <div className="explorer">
      <div className="filter-bar">
        {productCategory === "natural-veneer" && <div className="filter-tabs" aria-label={locale === "tr" ? "Malzeme tipi" : "Material type"}>{(["all","natural","exotic"] as const).map((item) => <button type="button" aria-pressed={subtype === item} className={subtype === item ? "active" : ""} onClick={() => setSubtype(item)} key={item}>{labels[item]}</button>)}</div>}
        <label className="filter-search"><SearchIcon/><span className="sr-only">{labels.search}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.search}/>{query && <button type="button" onClick={() => setQuery("")} aria-label={labels.clear}><CloseIcon/></button>}</label>
      </div>
      <div className="result-line"><span>{list.length} {labels.count}</span>{(query || subtype !== "all") && <button type="button" onClick={() => { setQuery(""); setSubtype("all"); }}>{labels.clear}</button>}</div>
      {list.length ? <div className="product-grid">{list.map((product, index) => <ProductCard key={product.id} product={product} locale={locale} priority={index < 4} onSelect={openMaterial}/>)}</div> : <div className="empty-state"><p>{labels.empty}</p><button type="button" className="button dark" onClick={() => { setQuery(""); setSubtype("all"); }}>{labels.clear}</button></div>}
    </div>
    <MaterialQuickView product={selected} locale={locale} onClose={closeMaterial}/>
  </LayoutGroup>;
}
