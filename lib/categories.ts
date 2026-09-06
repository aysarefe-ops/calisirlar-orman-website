import type { Locale, Localized, Product, ProductCategory } from "./types";
import { getPath } from "./content";

export type ProductCategoryDefinition = {
  id: ProductCategory;
  order: string;
  name: Localized;
  slug: Localized;
  short: Localized;
  description: Localized;
  image: string;
};

export const productCategories: readonly ProductCategoryDefinition[] = [
  { id:"natural-veneer", order:"01", name:{tr:"Doğal Kaplamalar",en:"Natural Veneers"}, slug:{tr:"dogal-kaplamalar",en:"natural-veneers"}, short:{tr:"DOĞAL KAPLAMALAR",en:"NATURAL VENEERS"}, description:{tr:"Benzersiz damar, ton ve doku seçeneklerinden oluşan doğal yüzey arşivi.",en:"A natural surface archive defined by individual grain, tone and texture."}, image:"/images/products/usa_ceviz.jpg" },
  { id:"industrial-veneer", order:"02", name:{tr:"Endüstriyel Kaplamalar",en:"Industrial Veneers"}, slug:{tr:"endustriyel-kaplamalar",en:"industrial-veneers"}, short:{tr:"ENDÜSTRİYEL KAPLAMALAR",en:"INDUSTRIAL VENEERS"}, description:{tr:"Desen ve ton bütünlüğü gerektiren projeler için kontrollü, tekrarlanabilir yüzeyler.",en:"Controlled, repeatable surfaces for projects requiring pattern and colour consistency."}, image:"/images/products/a11_wenge.jpg" },
  { id:"veneered-mdf-chipboard", order:"03", name:{tr:"Kaplamalı MDF & Sunta",en:"Veneered MDF & Chipboard"}, slug:{tr:"kaplamali-mdf-sunta",en:"veneered-mdf-chipboard"}, short:{tr:"KAPLAMALI MDF & SUNTA",en:"VENEERED MDF & CHIPBOARD"}, description:{tr:"Doğal veya endüstriyel kaplamayla projeye göre üretilen panel çözümleri.",en:"Panel solutions produced to project requirements with natural or industrial veneer."}, image:"/images/editorial/web-icin4.jpg" },
  { id:"wood-edge-band", order:"04", name:{tr:"Ahşap Kenar Bantları",en:"Wood Edge Bands"}, slug:{tr:"ahsap-kenar-bantlari",en:"wood-edge-bands"}, short:{tr:"AHŞAP KENAR BANTLARI",en:"WOOD EDGE BANDS"}, description:{tr:"Yüzey ve panel seçimini aynı malzeme diliyle tamamlayan kenar çözümleri.",en:"Edge solutions that complete the surface and panel in one material language."}, image:"/images/editorial/bandbanner2.jpg" }
] as const;

export const getProductCategory = (id: ProductCategory) => productCategories.find((category) => category.id === id)!;
export const findProductCategoryBySlug = (locale: Locale, slug: string) => productCategories.find((category) => category.slug[locale] === slug);
export const productCategoryPath = (locale: Locale, category: ProductCategory) => `${getPath(locale,"products")}/${getProductCategory(category).slug[locale]}`;
export const productDetailPath = (locale: Locale, product: Product) => `${productCategoryPath(locale,product.category)}/${product.slug}`;
