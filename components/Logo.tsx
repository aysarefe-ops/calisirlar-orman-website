import Image from "next/image";
import Link from "next/link";

export function Logo({ href, light = false }: { href: string; light?: boolean }) {
  return <Link className={`logo ${light ? "logo-light" : ""}`} href={href} aria-label="Çalışırlar Orman Ürünleri">
    <span className="logo-mark" aria-hidden="true"><Image src="/images/brand/calisirlar-monogram-medallion.png" alt="" width={360} height={360} priority/></span>
    <span><b>ÇALIŞIRLAR</b><small>ORMAN ÜRÜNLERİ</small></span>
  </Link>;
}

export function BrandLockup({ href, className = "" }: { href: string; className?: string }) {
  return <Link className={`brand-lockup ${className}`} href={href} aria-label="Çalışırlar Orman Ürünleri ana sayfa">
    <Image src="/images/brand/calisirlar-logo-lockup.png" alt="Çalışırlar Orman Ürünleri" width={1100} height={815}/>
  </Link>;
}
