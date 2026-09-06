import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default function MaterialQaPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return <main className="material-qa-page">
    <header>
      <span className="eyebrow">DEVELOPMENT ONLY / MATERIAL QA</span>
      <h1>Original, enhanced, macro, application.</h1>
      <p>Original imagery remains the material identity reference. Five proof-of-concept surfaces have conservative 4K resampling, source-derived macro detail and one locked master-room application. PASS confirms color drift only; REVIEW and NEEDS SOURCE still require human or photography approval.</p>
    </header>
    <section aria-label="Material image quality review">
      {products.map((product) => <article className="material-qa-row" key={product.id}>
        <div className="material-qa-meta"><small>{product.code ?? product.category}</small><h2>{product.name.tr}</h2><p>{product.slug === "akcaagac" ? "NEEDS SOURCE" : product.images.enhanced ? "REVIEW" : "PENDING"} / {product.visualization.colorQa ?? "PENDING"}</p></div>
        <QaImage src={product.images.source} alt={`${product.name.tr} original source`} label="ORIGINAL"/>
        <QaImage src={product.images.enhanced ?? product.images.catalogue} alt={`${product.name.tr} conservative enhanced derivative`} label={product.images.enhanced ? "ENHANCED 4K" : "CATALOGUE 4:5"}/>
        {product.images.macro ? <QaImage src={product.images.macro} alt={`${product.name.tr} source-derived macro`} label="MACRO"/> : <div className="material-qa-image material-qa-empty">MACRO PENDING</div>}
        {product.images.application ? <QaImage src={product.images.application} alt={`${product.name.tr} same-room application visualization`} label="APPLICATION / ROOM V2"/> : <div className="material-qa-image material-qa-empty">APPLICATION PENDING</div>}
      </article>)}
    </section>
  </main>;
}

function QaImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return <div className="material-qa-image"><Image src={src} alt={alt} fill sizes="30vw"/><span>{label}</span></div>;
}
