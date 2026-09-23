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
  ["A1","Thin Narrow Oak","a1-ince-dar-mese","A1_incedamarmese.jpg"],["A2","Thick Narrow Oak","a2-kalin-dar-mese","A2_kalindamarmese.jpg"],["A3","Crown Oak","a3-hareli-mese","a3_harelimese.jpg"],["A4","Teak","a4-teak","a4_teak.jpg"],["A5","Light Teak","a5-acik-teak","a5_acikteak.jpg"],["A6","Crown Teak","a6-hareli-teak","a6_hareli_teak.jpg"],["A7","Zeytin","a7-zeytin","a7_zeytin.jpg"],["A8","Walnut","a8-ceviz","a8_ceviz.jpg"],["A9","Thin Line Walnut","a9-ince-cizgili-ceviz","a9_ince_cizgili_ceviz.jpg"],["A10","Wengue","a10-wenge","a10_wenge.jpg"],["A11","Ebony","a11-wenge","a11_wenge.jpg"],["A12","Black Ebony","a12-siyah-abanoz","a12_siyah_abanz.jpg"],["A13","Crown Ebony","a13-hareli-abanoz","a13_hareli_abanoz.jpg"],["A14","New Exotic","a14-yeni-egzotik","a14_yeni_egzotik.jpg"],["A15","Milling Rosewood","a15-freze-peleseng","a15_freze_pleseng.jpg"],["A16","Crown Rosewood","a16-hareli-peleseng","a16_harelipeleseng.jpg"],["A17","Crown Walnut","a17-hareli-duz","a17_hareliduz.jpg"],["A18","Sapelli","a18-sapelli","a18_sapelli.jpg"],["A19","Black","a19-siyah","a19_siyah.jpg"],["A20","Dark Teak","a20-koyu-teak","a20_koyuteak.jpg"],["A21","Aniegre","a21-anigre","a21_anigre.jpg"],["A22","Fraise Santos","a22-freze-santos","a22_frezesantos.jpg"],["A25","Milling Teak Extra","a25-freze-teak-ekstra","a25_frezeteakekstra.jpg"],["A26","Walnut Extra","a26-ceviz-ekstra","a26_cevizekstra.jpg"],["A27","Purple Rosewood","a27-mor-peleseng","a27_morpeleseng.jpg"],["A28","Milling Cherry","a28-freze-kiraz","a28_frezekiraz.jpg"],["A29","Crown Cherry","a29-hareli-kiraz","a29_harelikiraz.jpg"],["A30","Lime Milling Oak","a30-kirecli-freze-mese","a30_kireclifrezemese.jpg"],["A31","Lime Crown Oak","a31-kirecli-hareli-mese","a31_kirecliharelimese.jpg"],["C4","Lime Oak","c4-kirecli-mese","c4_kireclimese.jpg"],["C7","Milling Teak","c7-freze-teak","c7_frezeteak.jpg"],["C13","Walnut","c13-ceviz","c13_ceviz.jpg"],["C15","Exotic Brown","c15-egzotik-kahve","c15_egzotikkahve.jpg"],["C16","Exotic Black","c16-egzotik-siyah","c16_egzotiksiyah.jpg"],["C18","Alligator Pear","c18-avakado","c18_avakado.jpg"],["C22","Ebony Burl","c22-abanoz-kok","c22_abanozkok.jpg"],["C24","Burl","c24-kok","c24_kok.jpg"],["C28","Dark Burl","c28-koyu-kok","c28_koyukok.jpg"],["C29","Ebony","c29-abanoz","c29_abanoz.jpg"],["C31","Walnut","c31-ceviz","c31_ceviz.jpg"],["C37","Zebrano","c37-zebrano","c37_zebrano.jpg"],["C39","Crown Rosewood","c39-hareli-peleseng","c39_harelipeleseng.jpg"],["C41","Walnut","c41-ceviz","c41_ceviz.jpg"],["C43","Fraise Rosewood","c43-freze-peleseneg","c43_frezepeleseng.jpg"],["C43-T","Teak","c43-teak","c43_teak.jpg"],["C44","Alaca","c44-alaca","c44_alaca.jpg"],["C45","Crown Rosewood","c45-hareli-peleseng","c45_harelipeleseng.jpg"],["C48","Burl","c48-kok","c48_kok.jpg"],["C51","Burl","c51-kok","c51_kok.jpg"],["C53","Burl","c53-kok","c53_kok.jpg"],["C54","Burl","c54-kok","c54_kok.jpg"],["C55","Burl","c55-kok","c55_kok.jpg"],["C58","Walnut","c58-ceviz","c58_ceviz.jpg"],["NEW","New Ebony","new-ebony","newebony.jpg"],["BELI","Artificial Beli","yapay-beli","yapaybeli.jpg"],["ZIR","Artificial Ziricota","yapay-ziricota","yapayziricota.jpg"]
] as const;

const visualizationProducts = new Set(["akcaagac", "usa-ceviz", "wengue", "a1-ince-dar-mese", "a11-wenge"]);

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
  const isPoc = visualizationProducts.has(slug);
  const naturalOfficeFile = category === "natural" ? naturalOfficeApplications[slug] : undefined;
  const application = naturalOfficeFile
    ? `/images/applications/natural-office-v1/${naturalOfficeFile}`
    : isPoc
      ? `/images/applications/master-room-v2/${slug}-room.webp`
      : undefined;
  return {
    image: `${root}/catalog.webp`,
    images: {
      source: `/images/products/${sourceImage}`,
      thumbnail: `${root}/thumbnail.webp`,
      catalogue: `${root}/catalog.webp`,
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
  ...industrialRows.map(([code, name, slug, image]) => ({ id: `industrial-veneer-${slug}`, slug, code, name: { tr: trNames[name] ?? name, en: name }, category: "industrial-veneer" as const, ...materialAssets("industrial", slug, image), sourceUrl: `${source}/${slug}/` }))
];

export const featuredProducts = ["usa-ceviz", "fume-mese", "dogal-teak", "a11-wenge", "a4-teak", "zebrano"]
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is Product => Boolean(product));

export const categoryLabel = (category: Product["category"], locale: "tr" | "en") => ({
  "natural-veneer": locale === "tr" ? "Doğal Kaplama" : "Natural Veneer",
  "industrial-veneer": locale === "tr" ? "Endüstriyel Kaplama" : "Industrial Veneer",
  "veneered-mdf-chipboard": locale === "tr" ? "Kaplamalı MDF & Sunta" : "Veneered MDF & Chipboard",
  "wood-edge-band": locale === "tr" ? "Ahşap Kenar Bandı" : "Wood Edge Band"
}[category]);
