# Content Migration Report

Source audited: `https://www.calisirlarormanurunleri.com.tr` (English pages and shared WordPress catalogue assets), accessed 8 August 2026.

## Migrated pages

The new application implements paired TR/EN routes for:

- Homepage
- Company
- Four-family product landing, natural/industrial catalogues, search, and subtype filters
- Individual material detail pages
- Veneered MDF and chipboard
- Wooden edge bands
- Production
- Material gallery
- Documents
- Contact
- Branded 404, sitemap, robots, and web manifest

## Product migration

- 50 natural veneer records
- 13 exotic-species records integrated as a subtype under Natural Veneers
- 56 industrial veneer records, preserving published A/C codes and the source’s non-contiguous numbering
- 119 total searchable product records
- Four active top-level product families: Natural Veneers, Industrial Veneers, Veneered MDF & Chipboard, and Wood Edge Bands

The source lists `C43` twice for different industrial surfaces. The new internal key uses `C43-T` for Teak to avoid a data collision while retaining the published context in documentation; client confirmation is recommended before final catalogue sign-off.

## Image migration

- 121 full-size first-party catalogue and category assets downloaded from the official WordPress uploads library
- Images are served locally from `public/images/products/`
- No third-party stock photography is presented as company photography
- Gallery currently focuses on verified material imagery

Still needed: approved high-resolution hero alternatives, factory/production photography, office/team photography, project/application imagery, and document scans/previews.

### Campaign narrative placeholders

- `public/images/campaign/forest-hero.jpg` is an AI-generated art-direction image for the opening forest narrative.
- `public/images/campaign/forest-interlude.jpg` is an AI-generated art-direction image for the mid-page forest interlude.
- `public/images/campaign/architectural-application.png` is an AI-generated campaign image illustrating a premium architectural use context; it is not a completed Çalışırlar reference project.
- These images are presented as atmospheric visual storytelling, not as evidence of a specific veneer species, timber origin, forestry operation, supplier, company-owned forest, or completed client installation.
- Replace them with brand-approved, licensed campaign and reference photography before final legal/brand sign-off if the generated assets will not be retained.

## Verified content used

- 1993 expansion into natural and industrial veneer
- 2007 Torbalı production facility
- Approximate factory area of 11,000 m²
- Veneered MDF and chipboard standard dimensions and published thickness range
- Edge-band width and roll formats
- Head office/factory addresses, phones, and email published on the source contact page
- Company themes of family experience, expert process control, integrity, and long-term partnerships

## Documents

The source references:

- İzmir trade/taxation-related recognition
- Aegean Region Chamber of Industry achievement document
- Turkish Patent Institute trademark document
- ISO 9001 reference

The redesign does not claim current validity, expiry, or certification status. Download/preview actions remain withheld until approved files and dates are supplied.

## Main legacy redirects

| Legacy route | New route |
| --- | --- |
| `/en/dogal-kaplamalar` | `/en/products/natural-veneers` |
| `/en/egzotik-kaplamalar` | `/en/products/natural-veneers` |
| `/en/endustriyel-kaplamalar` | `/en/products/industrial-veneers` |
| `/en/kurumsal` | `/en/company` |
| `/en/contact-us` | `/en/contact` |
| `/tr/parke`, `/tr/ahsap-parke` | `/tr/urunler` |
| `/en/parquet`, `/en/ahsap-parke` | `/en/products` |
| `/en/kaplamali-plakalar`, `/en/veneered-boards` | `/en/products/veneered-mdf-chipboard` |
| `/en/ahsap-kenar-bantlari`, `/en/edge-bands` | `/en/products/wood-edge-bands` |
| `/en/foto-galeri` | `/en/gallery` |

Product source slugs are preserved in canonical detail URLs under `/tr/urunler/[kategori]/[slug]` and `/en/products/[category]/[slug]`. The former flat detail URLs return permanent redirects to these canonical routes. A launch migration should supplement these rules with all indexed legacy variants from Search Console/server logs.

The former flooring product family is no longer part of active navigation, product data, search, metadata, schema, sitemap, or commercial content. Its old public routes are retained only as isolated permanent redirect rules to the main Products page. Any past production-line references have been removed from active company and production copy; confirm with the client if that history should later appear in a non-commercial archive.

## Could not be safely verified or migrated

- Current certificate validity and expiry dates
- Original downloadable document files
- Complete factory/gallery image groupings exposed by the old gallery scripts
- A reliable corporate film embed URL/ownership status
- Exact detailed factory process sequence
- Current product availability, stock, lead times, samples, prices, or minimum orders
- Legal/privacy text and a working form delivery endpoint
- Complete reviewed DE/RU/AR copy

## Recommended client verification

1. Approve all contact details, timeline wording, and bilingual company copy.
2. Review the 119-item catalogue, especially translated names and the duplicate C43 source code.
3. Reconfirm technical specifications with current production documentation.
4. Provide active certificates and approved document scans.
5. Provide high-resolution official photography and the current corporate film.
6. Confirm redirects using analytics, Search Console, and production server logs.
7. Configure contact-form delivery, privacy disclosure, retention, and spam protection.
