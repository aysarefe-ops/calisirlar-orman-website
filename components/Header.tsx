"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/types";
import { copy, getPath, paths } from "@/lib/content";
import { findProductCategoryBySlug, productCategories, productCategoryPath, productDetailPath } from "@/lib/categories";
import { products, categoryLabel } from "@/lib/products";
import { Arrow, CloseIcon, MenuIcon, SearchIcon } from "./Icons";
import { Logo } from "./Logo";

export function Header({ locale }: { locale: Locale }) {
  const pathname=usePathname();
  const [scrolled,setScrolled]=useState(false);
  const [menu,setMenu]=useState(false);
  const [search,setSearch]=useState(false);
  const [query,setQuery]=useState("");
  const c=copy[locale];
  const otherLocale:Locale=locale==="tr"?"en":"tr";
  const currentKey=(Object.keys(paths[locale]) as Array<keyof typeof paths.tr>).find(key=>pathname===getPath(locale,key));
  const productPrefix=`${getPath(locale,"products")}/`;
  const productRemainder=pathname.startsWith(productPrefix)?pathname.slice(productPrefix.length).split("/"):[];
  const currentCategory=productRemainder[0]?findProductCategoryBySlug(locale,productRemainder[0]):undefined;
  const currentProduct=productRemainder[1]?products.find(product=>product.slug===productRemainder[1]):undefined;
  const alternatePath=currentProduct?productDetailPath(otherLocale,currentProduct):currentCategory?productCategoryPath(otherLocale,currentCategory.id):currentKey?getPath(otherLocale,currentKey):getPath(otherLocale,"home");
  const solid=scrolled||!(pathname===getPath(locale,"home")||pathname===getPath(locale,"production"));
  const navKeys=(["company","production","gallery","documents","contact"] as const);
  const productResults=query.trim()?products.filter(product=>`${product.code??""} ${product.name.tr} ${product.name.en}`.toLowerCase().includes(query.toLowerCase())).slice(0,8):[];
  const categoryResults=query.trim()?productCategories.filter(category=>`${category.name.tr} ${category.name.en}`.toLowerCase().includes(query.toLowerCase())):[];

  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24);onScroll();addEventListener("scroll",onScroll,{passive:true});return()=>removeEventListener("scroll",onScroll);},[]);
  useEffect(()=>{document.body.style.overflow=menu||search?"hidden":"";return()=>{document.body.style.overflow="";};},[menu,search]);
  useEffect(()=>{const key=(event:KeyboardEvent)=>{if(event.key==="Escape"){setMenu(false);setSearch(false);}};addEventListener("keydown",key);return()=>removeEventListener("keydown",key);},[]);

  return <>
    <header className={`site-header ${solid?"is-scrolled":""}`}>
      <Logo href={getPath(locale,"home")} light={!solid}/>
      <nav className="desktop-nav" aria-label={locale==="tr"?"Ana menü":"Main navigation"}>
        <Link href={getPath(locale,"company")}>{c.nav.company}</Link>
        <div className="nav-products"><Link href={getPath(locale,"products")}>{c.nav.products}</Link><div className="product-mega">{productCategories.map(category=><Link href={productCategoryPath(locale,category.id)} key={category.id}><span>{category.order}</span><strong>{category.name[locale]}</strong></Link>)}</div></div>
        {navKeys.slice(1).map(key=><Link key={key} href={getPath(locale,key)}>{c.nav[key]}</Link>)}
      </nav>
      <div className="header-actions"><button className="icon-button desktop-search" onClick={()=>setSearch(true)} aria-label={locale==="tr"?"Arama aç":"Open search"}><SearchIcon/></button><Link className="locale-link" href={alternatePath}>{locale==="tr"?"EN":"TR"}</Link><button className="icon-button menu-button" onClick={()=>setMenu(true)} aria-label={locale==="tr"?"Menüyü aç":"Open menu"}><MenuIcon/></button></div>
    </header>
    <div className={`menu-overlay ${menu?"open":""}`} aria-hidden={!menu}>
      <div className="overlay-top"><Logo href={getPath(locale,"home")} light/><button className="icon-button" onClick={()=>setMenu(false)} aria-label="Close"><CloseIcon/></button></div>
      <nav><Link onClick={()=>setMenu(false)} href={getPath(locale,"company")}><span>01</span>{c.nav.company}<Arrow/></Link><Link onClick={()=>setMenu(false)} href={getPath(locale,"products")}><span>02</span>{c.nav.products}<Arrow/></Link><div className="mobile-product-links">{productCategories.map(category=><Link onClick={()=>setMenu(false)} href={productCategoryPath(locale,category.id)} key={category.id}><span>{category.order}</span>{category.name[locale]}</Link>)}</div>{navKeys.slice(1).map((key,index)=><Link onClick={()=>setMenu(false)} key={key} href={getPath(locale,key)}><span>0{index+3}</span>{c.nav[key]}<Arrow/></Link>)}</nav>
      <button className="menu-search" onClick={()=>{setMenu(false);setSearch(true);}}><SearchIcon/>{locale==="tr"?"Malzeme ara":"Search materials"}</button>
    </div>
    <div className={`search-overlay ${search?"open":""}`} role="dialog" aria-modal="true" aria-label={locale==="tr"?"Site araması":"Site search"}>
      <div className="overlay-top"><span className="eyebrow">{locale==="tr"?"MALZEME ARAMA":"MATERIAL SEARCH"}</span><button className="icon-button" onClick={()=>setSearch(false)} aria-label="Close"><CloseIcon/></button></div>
      <div className="search-shell"><SearchIcon/><input value={query} onChange={event=>setQuery(event.target.value)} autoFocus={search} placeholder={locale==="tr"?"İsim, kategori veya ürün kodu yazın…":"Type a name, category or product code…"}/></div>
      <div className="search-results" aria-live="polite">
        {query&&categoryResults.length===0&&productResults.length===0&&<p>{locale==="tr"?"Aradığınız yüzeyi burada bulamadık.":"We could not find that surface."}</p>}
        {categoryResults.map(category=><Link onClick={()=>setSearch(false)} key={category.id} href={productCategoryPath(locale,category.id)}><span><small>{locale==="tr"?"ÜRÜN AİLESİ":"PRODUCT FAMILY"} · {category.order}</small>{category.name[locale]}</span><Arrow/></Link>)}
        {productResults.map(product=><Link onClick={()=>setSearch(false)} key={product.id} href={productDetailPath(locale,product)}><span><small>{categoryLabel(product.category,locale)} {product.code&&`· ${product.code}`}</small>{product.name[locale]}</span><Arrow/></Link>)}
      </div>
    </div>
  </>;
}
