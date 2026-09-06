# Çalışırlar Orman Ürünleri

Çalışırlar Orman Ürünleri'nin Türkçe ve İngilizce kurumsal ürün sitesi. Proje GitHub üzerinden sürümlenir ve Vercel tarafından otomatik deploy edilir.

## Teknoloji

- Next.js 16 — App Router
- React 19
- TypeScript
- Node.js 24
- npm

## Yerel geliştirme

```bash
npm ci
npm run dev
```

Site: `http://localhost:3000/tr`

Değişiklik göndermeden önce:

```bash
npm run lint
npm run build
```

## Environment variable

`.env.example` içindeki değişkeni `.env.local` dosyasına kopyalayın. `.env.local` GitHub'a gönderilmez.

```bash
NEXT_PUBLIC_SITE_URL=https://calisirlarorman.com
```

Bu değişken canonical URL, metadata, `robots.txt` ve `sitemap.xml` için kullanılır. Gizli anahtar değildir; production değeri yine de Vercel Dashboard üzerinden tanımlanmalıdır.

## Güncelleme akışı

1. Güncel `main` branch'inden yeni bir branch açın: `git switch -c update/kisa-aciklama`
2. Kaynak kodu veya `public/` altındaki site varlıklarını değiştirin.
3. `npm run lint` ve `npm run build` çalıştırın.
4. Commit oluşturup branch'i GitHub'a gönderin.
5. Pull Request açın. Vercel bu branch için otomatik Preview Deployment üretir.
6. Önizlemeyi onayladıktan sonra Pull Request'i `main` branch'ine merge edin.
7. Vercel başarılı `main` build'ini otomatik olarak production'a ve `calisirlarorman.com` alan adına yayınlar.

Küçük ve acil değişiklikler doğrudan `main` branch'ine push edildiğinde de production deployment otomatik başlar; güvenli yöntem Preview + Pull Request akışıdır.

## Sık yapılan güncellemeler

- Ana sayfa ve bölüm yapıları: `components/`
- Metinler, rota adları ve iletişim bilgileri: `lib/`
- Ürün kataloğu: `lib/products.ts`
- Görsel, video ve fontlar: `public/`
- Genel tasarım ve responsive kurallar: `app/globals.css`
- Ana sayfa hareket sistemi: `app/homepage-motion.css`

Yeni ürün eklerken görseli `public/images/products/` altına koyun, ürünü `lib/products.ts` içinde tanımlayın ve production build'i çalıştırın.

## Vercel ayarları

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: otomatik; `package-lock.json` kullanılır
- Build Command: `npm run build`
- Output Directory: boş bırakın; `Next.js default` kullanılır
- Node.js: `24.x`
- Production Branch: `main`
- Production domain: `calisirlarorman.com`

Manuel `out/` veya ZIP yüklemesi kullanılmaz. `out/`, `outputs/`, `.next/`, `.vercel/`, yerel çalışma klasörleri ve environment dosyaları `.gitignore` ile repository dışında tutulur.
