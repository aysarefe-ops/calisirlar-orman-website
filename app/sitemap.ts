import type { MetadataRoute } from "next";
import { paths, siteUrl } from "@/lib/content";
import { products } from "@/lib/products";
import { productCategories, productCategoryPath, productDetailPath } from "@/lib/categories";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const now=new Date();const pagePaths=new Set((["tr","en"] as const).flatMap(locale=>[...Object.values(paths[locale]),...productCategories.map(category=>productCategoryPath(locale,category.id))]));const pages=[...pagePaths].map(path=>({url:`${siteUrl}${path}`,lastModified:now,changeFrequency:"monthly" as const,priority:path==="/tr"||path==="/en"?1:.7}));const items=(["tr","en"] as const).flatMap(locale=>products.map(product=>({url:`${siteUrl}${productDetailPath(locale,product)}`,lastModified:now,changeFrequency:"monthly" as const,priority:.65})));return[...pages,...items];}
