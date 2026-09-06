# 4K Visual Production Report

Date: 2026-08-08

## Outcome

- 21 coherent editorial images generated with the built-in image generation tool.
- 21 landscape/portrait 4K masters persisted in both WebP and AVIF.
- 168 responsive web derivatives persisted: desktop, tablet, mobile and thumb in WebP + AVIF.
- 5 product POC sets created: 3200×4000 enhanced, 2400×2400 source-derived macro and 3840×2160 locked-room application.
- 1 locked 3840×2160 master room created.
- Product quick view now supports **MALZEME / DETAY / MEKÂNDA GÖR**.
- `/dev/material-qa` now compares **ORIGINAL / ENHANCED / MACRO / APPLICATION**.

## Editorial coverage

| Group | Unique generated masters | Notes |
|---|---:|---|
| Hero/editorial selections | 6 | Selected across veneer, forest, architecture and craftsmanship groups |
| Forest | 5 | Morning forest, upward canopy, bark macro, beech grove, blue-hour forest |
| Architecture | 5 editorial + 5 room applications | Living wall, cabinetry, meeting room, reception, material gallery; POC rooms add five locked-camera applications |
| Veneer / wood macro | 3 editorial + 5 product macros + related bark/joinery detail | Exceeds eight usable close material studies |
| MDF / panel detail | 4 | Stack, corner macro, full panels, routed detail |
| Edge-band detail | 3 | Loops, applied edge, side profile |
| Dedicated “Doğa hiçbir yüzeyi iki kez üretmez” | 1 | Two related but non-duplicated walnut veneer leaves |

## Product fidelity

The 119 official product images remain the sole color/grain identity source. No product texture was generated from text. POC enhancement uses Lanczos resampling only; no hue, saturation or generative grain reconstruction is applied.

- 119 products audited.
- Grade A: 0.
- Grade B: 89 — useful, but still below premium 4K source quality.
- Grade C: 30 — **NEW PHOTOGRAPHY REQUIRED**.
- Grade D: 0.
- 5 POC application color-drift checks: PASS, mean-RGB distance 1–9.
- Akçaağaç POC: **NEEDS SOURCE** because the original is only 800×427 / 21 KB.
- Other four POC products: **REVIEW**, not approved.
- Full-catalogue 4K enhancement and same-room generation: **PENDING POC APPROVAL**.

## Asset weight and performance

- `assets/generated-master`: approximately 84 MB, master/archive use only.
- `assets/visual-source`: approximately 38 MB, source/archive use only.
- `public/images/editorial/campaign`: approximately 23 MB across 168 responsive derivatives.
- `public/images/applications/master-room-v2`: approximately 2.3 MB across the master room and five applications.
- Homepage references desktop campaign derivatives; Next Image supplies responsive optimized requests at runtime.
- AVIF and WebP exist for every campaign derivative. Source masters are not directly referenced by public pages.

## Prompt set

All generated images used the built-in image generation mode. Shared direction:

> Ultra-photorealistic premium architectural material campaign; warm ivory, natural oak/walnut, restrained deep forest green; directional soft daylight; honest tactile pores and matte surfaces; calm editorial composition; no text, logos, watermark or people; avoid glossy CGI, impossible grain, oversaturation and generic stock styling.

Primary requests by saved slug:

- `veneer-gallery`: curved natural veneer sheets in a quiet gallery studio.
- `walnut-curve-macro`: one warm walnut veneer leaf in a restrained sculptural curve.
- `walnut-living-wall`: contemporary living room with full-height walnut veneer feature wall.
- `mature-forest-morning`: mature temperate forest with honest biodiverse understory.
- `layered-veneer-leaves`: staggered stack of thin natural veneer leaves.
- `oak-cabinetry-junction`: precise veneered cabinetry junction and shadow gap.
- `canopy-upward`: upward view through mature trunks into the canopy.
- `bark-moss-macro`: mature bark, moss and lichen in real forest light.
- `beech-grove`: quiet pale-trunk beech forest.
- `forest-blue-hour`: layered forest interior after rain at blue hour.
- `light-oak-meeting-room`: executive meeting room with light oak veneer wall.
- `walnut-reception`: curved walnut reception desk and slatted wall.
- `veneer-material-gallery`: architectural gallery of full-height veneer samples.
- `veneered-panel-stack`: veneered panel stack with visible composite cores.
- `mdf-corner-macro`: thin oak veneer face over dense uniform MDF core.
- `full-size-veneered-panels`: pale oak and dark walnut full-size panels.
- `routed-mdf-detail`: routed groove and drilling detail in walnut-veneered MDF.
- `edge-band-loops`: real wood edge-band rolls as restrained sculptural loops.
- `applied-walnut-edge`: applied walnut edge band at a precise panel corner.
- `oak-edge-band-profile`: side profile of oak edge band beside panel edge.
- `nature-never-repeats`: two same-species walnut leaves with distinct natural grain.

## Remaining gate

This work is not represented as a finished 119-product premium catalogue. Manual POC approval and new photography for 30 Grade C sources are required before the full rollout can truthfully be completed.
