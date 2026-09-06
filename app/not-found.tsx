import Link from "next/link";

export default function NotFound(){return <main><section className="page-hero dark"><div className="page-hero-content"><span className="eyebrow">404 · MATERIAL NOT FOUND</span><h1>Aradığınız yüzeyi burada bulamadık.</h1><p>The surface or page you requested may have moved.</p><div className="hero-actions" style={{marginTop:32}}><Link className="button light" href="/tr/urunler">Ürünlere dön</Link><Link className="text-link light" href="/tr">Ana sayfa</Link></div></div></section></main>}
