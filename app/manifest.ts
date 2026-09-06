import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"Çalışırlar Orman Ürünleri",short_name:"Çalışırlar",description:"Natural and industrial wood surfaces",start_url:"/tr",display:"standalone",background_color:"#F4F1EA",theme_color:"#243128",icons:[{src:"/images/brand/calisirlar-monogram-medallion.png",sizes:"360x360",type:"image/png"}]};}
