export type Locale = "tr" | "en";
export type Localized = { tr: string; en: string };
export type ProductCategory = "natural-veneer" | "industrial-veneer" | "veneered-mdf-chipboard" | "wood-edge-band";
export type ProductSubtype = "natural" | "exotic";

export type MaterialImages = {
  source: string;
  thumbnail: string;
  catalogue: string;
  enhanced?: string;
  macro?: string;
  application?: string;
};

export type MaterialVisualization = {
  scene: "master-room-v1" | "master-room-v2" | "natural-office-v1";
  image?: string;
  status: "pending" | "generated" | "review" | "approved";
  colorQa?: "PASS" | "REVIEW" | "FAIL";
};

export type Product = {
  id: string;
  slug: string;
  code?: string;
  name: Localized;
  category: ProductCategory;
  subtype?: ProductSubtype;
  image: string;
  images: MaterialImages;
  visualization: MaterialVisualization;
  description?: Localized;
  sourceUrl: string;
};
