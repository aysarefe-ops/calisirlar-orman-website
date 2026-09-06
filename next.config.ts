import type { NextConfig } from "next";

const redirects: NonNullable<NextConfig["redirects"]> = async () => [
  { source: "/", destination: "/tr", permanent: false },
  { source: "/en/dogal-kaplamalar", destination: "/en/products/natural-veneers", permanent: true },
  { source: "/en/egzotik-kaplamalar", destination: "/en/products/natural-veneers", permanent: true },
  { source: "/en/endustriyel-kaplamalar", destination: "/en/products/industrial-veneers", permanent: true },
  { source: "/en/kurumsal", destination: "/en/company", permanent: true },
  { source: "/en/contact-us", destination: "/en/contact", permanent: true },
  { source: "/tr/parke", destination: "/tr/urunler", permanent: true },
  { source: "/tr/ahsap-parke", destination: "/tr/urunler", permanent: true },
  { source: "/en/parquet", destination: "/en/products", permanent: true },
  { source: "/en/ahsap-parke", destination: "/en/products", permanent: true },
  { source: "/tr/urunler/egzotik-kaplamalar", destination: "/tr/urunler/dogal-kaplamalar", permanent: true },
  { source: "/en/products/exotic-veneers", destination: "/en/products/natural-veneers", permanent: true },
  { source: "/tr/kaplamali-levhalar", destination: "/tr/urunler/kaplamali-mdf-sunta", permanent: true },
  { source: "/en/veneered-boards", destination: "/en/products/veneered-mdf-chipboard", permanent: true },
  { source: "/en/kaplamali-plakalar", destination: "/en/products/veneered-mdf-chipboard", permanent: true },
  { source: "/tr/ahsap-kenar-bantlari", destination: "/tr/urunler/ahsap-kenar-bantlari", permanent: true },
  { source: "/en/edge-bands", destination: "/en/products/wood-edge-bands", permanent: true },
  { source: "/en/ahsap-kenar-bantlari", destination: "/en/products/wood-edge-bands", permanent: true },
  { source: "/en/foto-galeri", destination: "/en/gallery", permanent: true }
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  redirects,
};

export default nextConfig;
