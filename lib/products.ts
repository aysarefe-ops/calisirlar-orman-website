import type { Product, ProductSubtype } from "./types";

const source = "https://www.calisirlarormanurunleri.com.tr/en";
const trNames: Record<string, string> = {
  "Maple": "Akçaağaç", "Pine": "Çam", "Ash": "Dişbudak", "Milling Oak": "Freze Meşe",
  "Crown Oak": "Hareli Meşe", "Crown Mahogany": "Hareli Maun", "Iroko": "İroko",
  "Light Walnut": "Açık Ceviz", "Chestnut": "Kestane", "Cherry": "Kiraz", "Mahogany": "Maun",
  "USA Pear": "Amerikan Armut", "USA Walnut": "Amerikan Ceviz", "European Walnut Root": "Avrupa Ceviz Kök",
  "Birch": "Huş", "Elm": "Karaağaç", "Walnut Pyramid": "Ceviz Piramit", "Eucalyptus Root": "Okaliptüs Kök",
  "Mahogany Pyramid": "Maun Piramit", "USA Walnut Root": "Amerikan Ceviz Kök", "Oak Root": "Meşe Kök",
  "Oak Pyramid": "Meşe Piramit", "Smoked Eucalyptus": "Füme Okaliptüs", "Smoked Oak": "Füme Meşe",
  "Figured Crown Oak": "Figürlü Hareli Meşe", "Figure Walnut": "Figürlü Ceviz", "Natural Teak": "Doğal Teak"
};

const naturalRows = [
  ["Afrormosia","afromosia","AFRAMOSIA.jpg"],["Maple","akcaagac","akcaagacc.jpg"],["Aniegre","anigre","anigre.jpg"],["Anzem","anzem","anzemm.jpg"],["Bamboo","bamboo","bambooo.jpg"],["Pine","cam","cam.jpg"],["Ash","disbudak","disbudak.jpg"],["Milling Oak","freze-mese","frezemese.jpg"],["Milling Ovangkol","freze-ovenkol","frezeovenkol.jpg"],["Ghambi","ghambi","ghambii.jpg"],["Rose","gul","gul.jpg"],["Crown Oak","hareli-mese","hareli_mese.jpg"],["Crown Mahogany","hareli-maun","harelimaunn.jpg"],["Crown Ovangkol","hareli-ovenkol","hareli-ovenkol.jpg"],["Iroko","irako","irako.jpg"],["Light Walnut","kabak-ceviz","kabak-ceviz.jpg"],["Chestnut","kestane","kestanne.jpg"],["Cherry","kiraz","kiraz.jpg"],["Mahogany","maun","maunn.jpg"],["Paduk","paduk","padukk.jpg"],["Pamela","pamela","pamelaa.jpg"],["USA Pear","usa-armut","usa_armut.jpg"],["USA Walnut","usa-ceviz","usa_ceviz.jpg"],["Zebrano","zebrano","zebranoo.jpg"],["European Walnut Root","avrupa-ceviz-kok","avrupa-ceviz-kok.jpg"],["Birch","hus","hus.jpg"],["Elm","karaagac","karaagac.jpg"],["Limbe","limba","limba.jpg"],["Vavona Root","vavona-kok","vavona-kok.jpg"],["Beli","beli","beli.jpg"],["Fraise Ipe","freze-ipe","freze-ipe.jpg"],["Walnut Pyramid","ceviz-pramit","ceviz-pramit.jpg"],["Natural Pelesenk","dogal-pelesenk","doal-pelesenk.jpg"],["Crown Ipe","hareli-ipe","hareli-ipe.jpg"],["Eucalyptus Root","okaliptus-kok","okaliptus-kok.jpg"],["Ayous","ayous","ayaus.jpg"],["Mahogany Pyramid","maun-pramit","maun-pramit.jpg"],["USA Walnut Root","usa-ceviz-kok","usa-ceviz-kok.jpg"],["Mazel Root","mazel-kok","mazel-kok.jpg"],["Oak Myrti","mese-myrti","mese-mirti.jpg"],["Oak Root","mese-kok","mese-kok.jpg"],["Oak Pyramid","oak-piramit","mese-pramit.jpg"],["Light Ebony","light-abanoz","light-abanoz.jpg"],["Fraise USA Walnut","freze-usa-ceviz","freze-usa-ceviz.jpg"],["Figure Satin Walnut","figurlu-saten-ceviz","figurlu-saten-ceviz.jpg"],["Smoked Eucalyptus","dumanli-okaliptus","dumanli-okaliptus.jpg"],["Figured Larch","figurlu-karacam","figurlu-karacam.jpg"],["Smoked Oak","fume-mese","dumanli-mese.jpg"],["Figured Crown Oak","figurlu-hareli-mese","figurlu-hareli-mese.jpg"],["Figure Walnut","figurlu-ceviz","figurlu-ceviz.jpg"]
] as const;

const exoticRows = [
  ["Cezerye","cezerye","Cezerye.jpg"],["Elderado","elderado","Elderado.jpg"],["Louro Preto","louro-preto","Louro-Preto.jpg"],["Ofram","ofram","Ofram.jpg"],["Palacenta","palacenta","Palacenta.jpg"],["Satin Walnut","saten-ceviz","Saten-Ceviz.jpg"],["Tiger Wood","tiger-wood","Tiger-Wood.jpg"],["Tineo","tineo","Tineo.jpg"],["USA Fraise Poplar","usa-freze-kavak","Usa-Freze-Kavak.jpg"],["USA Crown Poplar","usa-hareli-kavak","Usa-Hareli-Kavak.jpg"],["Wengue","wengue","Wengue.jpg"],["Ziricota","ziricota","Ziricota.jpg"],["Natural Teak","dogal-teak","Dogal-Teak.jpg"]
] as const;

const industrialRows = [
  ["CLS-01","İnce Freze Meşe","Thin Rift Oak","cls-01-ince-freze-mese"],
  ["CLS-02","Kalın Freze Meşe","Thick Rift Oak","cls-02-kalin-freze-mese"],
  ["CLS-03","Hareli Meşe","Crown Oak","cls-03-hareli-mese"],
  ["CLS-04","Kireçli Freze Meşe","Limed Rift Oak","cls-04-kirecli-freze-mese"],
  ["CLS-05","Kireçli Hareli Meşe","Limed Crown Oak","cls-05-kirecli-hareli-mese"],
  ["CLS-06","Tütsülü Meşe","Smoked Oak","cls-06-tutsulu-mese"],
  ["CLS-07","Açık Freze Ceviz","Light Rift Walnut","cls-07-acik-freze-ceviz"],
  ["CLS-08","Freze Ceviz","Rift Walnut","cls-08-freze-ceviz"],
  ["CLS-09","Hareli Ceviz","Crown Walnut","cls-09-hareli-ceviz"],
  ["CLS-10","Sütlü Kahve Ceviz","Milk Coffee Walnut","cls-10-sutlu-kahve-ceviz"],
  ["CLS-11","Special Ceviz","Special Walnut","cls-11-special-ceviz"],
  ["CLS-12","Hareli Teak","Crown Teak","cls-12-hareli-teak"],
  ["CLS-13","Freze Teak","Rift Teak","cls-13-freze-teak"],
  ["CLS-14","Hareli Pelesenk","Crown Rosewood","cls-14-hareli-pelesenk"],
  ["CLS-15","Freze Pelesenk","Rift Rosewood","cls-15-freze-pelesenk"],
  ["CLS-16","Wenge","Wenge","cls-16-wenge"],
  ["CLS-17","Siyah","Black","cls-17-siyah"],
  ["CLS-18","Gri","Grey","cls-18-gri"],
  ["CLS-19","Gri Hareli","Grey Crown","cls-19-gri-hareli"],
  ["CLS-20","Gri Kireçli Freze","Grey Limed Rift","cls-20-gri-kirecli-freze"],
  ["CLS-21","Siyah Freze","Black Rift","cls-21-siyah-freze"],
  ["CLS-22","Siyah Hareli","Black Crown","cls-22-siyah-hareli"],
  ["CLS-23","Mavi Hareli","Blue Crown","cls-23-mavi-hareli"],
  ["CLS-24","Herringbone","Herringbone","cls-24-herringbone"],
  ["CLS-25","Gri Kök","Grey Burl","cls-25-gri-kok"],
  ["CLS-26","Beyaz Abanoz","White Ebony","cls-26-beyaz-abanoz"],
  ["CLS-27","Purple","Purple","cls-27-purple"],
  ["CLS-28","Extra Freze Meşe","Extra Rift Oak","cls-28-extra-freze-mese"],
  ["CLS-29","Dumanlı Hareli Meşe","Smoked Crown Oak","cls-29-dumanli-hareli-mese"],
  ["CLS-30","Teak","Teak","cls-30-teak"],
  ["CLS-31","Kök","Burl","cls-31-kok"],
  ["CLS-32","Kök","Burl","cls-32-kok"],
  ["CLS-33","Kök","Burl","cls-33-kok"],
  ["CLS-34","CLS-34","CLS-34","cls-34"],
  ["CLS-35","CLS-35","CLS-35","cls-35"],
  ["CLS-36","CLS-36","CLS-36","cls-36"],
  ["CLS-37","Meşe Yarım Hare","Half Crown Oak","cls-37-mese-yarim-hare"],
  ["CLS-38","Gri Yarım Hare","Grey Half Crown","cls-38-gri-yarim-hare"],
  ["CLS-39","Füme Meşe","Smoked Oak","cls-39-fume-mese"],
  ["CLS-40","Extra Hareli Meşe","Extra Crown Oak","cls-40-extra-hareli-mese"]
] as const;

const visualizationProducts = new Set(["akcaagac", "usa-ceviz", "wengue"]);

const naturalOfficeApplications: Record<string, string> = {
  afromosia: "afromosia-room.jpg",
  anigre: "anigre-room.jpg",
  anzem: "anzem-room.jpg",
  ayous: "ayous-room.jpg",
  bamboo: "bamboo-room.jpg",
  cam: "cam-room.jpg",
  disbudak: "disbudak-room.jpg",
  "dogal-pelesenk": "dogal-pelesenk-room.jpg",
  "dogal-teak": "dogal-teak-room.jpg",
  "figurlu-ceviz": "figurlu-ceviz-room.jpg",
  "freze-mese": "freze-mese-room.jpg",
  "freze-ovenkol": "freze-ovenkol-room.jpg",
  "freze-usa-ceviz": "freze-usa-ceviz-room.jpg",
  gul: "gul-room.jpg",
  "hareli-mese": "hareli-mese-room.jpg",
  "hareli-ovenkol": "hareli-ovenkol-room.jpg",
  irako: "irako-room.jpg",
  kestane: "kestane-room.jpg",
  kiraz: "kiraz-room.jpg",
  "light-abanoz": "light-abanoz-room.jpg",
  pamela: "pamela-room.jpg",
  "saten-ceviz": "saten-ceviz-room.jpg",
  zebrano: "zebrano-room.jpg",
};

function materialAssets(category: "natural" | "industrial", slug: string, sourceImage: string) {
  const root = `/materials/${category}/${slug}`;
  const catalogue = `${root}/${category === "industrial" ? "catalog.jpg" : "catalog.webp"}`;
  const thumbnail = category === "industrial" ? catalogue : `${root}/thumbnail.webp`;
  const isPoc = visualizationProducts.has(slug);
  const naturalOfficeFile = category === "natural" ? naturalOfficeApplications[slug] : undefined;
  const application = naturalOfficeFile
    ? `/images/applications/natural-office-v1/${naturalOfficeFile}`
    : isPoc
      ? `/images/applications/master-room-v2/${slug}-room.webp`
      : undefined;
  return {
    image: catalogue,
    images: {
      source: category === "industrial" ? catalogue : `/images/products/${sourceImage}`,
      thumbnail,
      catalogue,
      enhanced: isPoc ? `${root}/enhanced.webp` : undefined,
      macro: isPoc ? `${root}/macro.webp` : undefined,
      application,
    },
    visualization: {
      scene: naturalOfficeFile ? "natural-office-v1" as const : isPoc ? "master-room-v2" as const : "master-room-v1" as const,
      image: application,
      status: naturalOfficeFile ? "approved" as const : application ? "review" as const : "pending" as const,
      colorQa: application && !naturalOfficeFile ? "PASS" as const : undefined,
    },
  };
}

function surface(row: readonly [string,string,string], subtype: ProductSubtype): Product {
  const [name, slug, image] = row;
  return { id: `natural-veneer-${slug}`, slug, name: { tr: trNames[name] ?? name, en: name }, category:"natural-veneer", subtype, ...materialAssets("natural", slug, image), sourceUrl: `${source}/${slug}/` };
}

export const products: Product[] = [
  ...naturalRows.map((row) => surface(row, "natural")),
  ...exoticRows.map((row) => surface(row, "exotic")),
  ...industrialRows.map(([code, trName, enName, slug]) => ({ id: `industrial-veneer-${slug}`, slug, code, name: { tr: trName, en: enName }, category: "industrial-veneer" as const, ...materialAssets("industrial", slug, "catalog.jpg"), sourceUrl: `${source}/${slug}/` }))
];

export const featuredProducts = ["usa-ceviz", "fume-mese", "dogal-teak", "cls-16-wenge", "cls-30-teak", "zebrano"]
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is Product => Boolean(product));

export const categoryLabel = (category: Product["category"], locale: "tr" | "en") => ({
  "natural-veneer": locale === "tr" ? "Doğal Kaplama" : "Natural Veneer",
  "industrial-veneer": locale === "tr" ? "Endüstriyel Kaplama" : "Industrial Veneer",
  "veneered-mdf-chipboard": locale === "tr" ? "Kaplamalı MDF & Sunta" : "Veneered MDF & Chipboard",
  "wood-edge-band": locale === "tr" ? "Ahşap Kenar Bandı" : "Wood Edge Band"
}[category]);
