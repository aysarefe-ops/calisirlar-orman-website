# Material Visualization

## Status

The 4K proof of concept uses one locked 3840×2160 scene, `master-room-v2`. Five representative products are mapped to the same rectangular wall zone. Camera, crop, furniture, floor, window, lighting, exposure and room geometry remain unchanged.

- Light natural: Maple (`akcaagac`) — **NEEDS SOURCE**
- Medium natural: USA Walnut (`usa-ceviz`) — **REVIEW**
- Dark natural: Wengue (`wengue`) — **REVIEW**
- Light industrial: A1 Thin Narrow Oak (`a1-ince-dar-mese`) — **REVIEW**
- Dark industrial: A11 Ebony (`a11-wenge`) — **REVIEW**

The official product image—not a text description—controls each wall surface. The source is rotated for plausible vertical panel grain, fitted to the locked planar zone, and receives only the neutral room's existing light/shadow response plus architectural seams. No hue or saturation adjustment is applied.

## Asset structure

```text
assets/generated-master/4k/applications/
  master-room-v2.png

public/images/applications/master-room-v2/
  master-room-v2.webp
  <slug>-room.webp

public/materials/natural|industrial/<slug>/
  thumbnail.webp
  catalog.webp
  enhanced.webp
  enhanced.avif
  macro.webp
  macro.avif
  application-room-v2.webp
```

Original verified assets remain untouched in `public/images/products/` and are mirrored under `assets/visual-source/products/`. The 4K enhanced and macro files are conservative resampling outputs; they do not claim recovered microdetail.

## Color QA

`work/build-product-poc-4k.mjs` compares mean RGB values from the source and mapped wall texture as a drift detector. All five POC products return `PASS`, with Euclidean mean-RGB drift between 1 and 9. This is not a claim of physical color accuracy. Photography, finishing, installation, room light and consumer displays affect perception.

The development-only route `/dev/material-qa` shows **ORIGINAL / ENHANCED / MACRO / APPLICATION** side by side. It returns 404 in production builds and is not linked from public navigation.

## Publication gate

The full 119-product 4K enhancement and same-room rollout remains intentionally paused until the five POC materials are manually approved against physical or client-approved references. For each future product:

1. Confirm the official source texture and product code.
2. Reject or request new photography where source detail is insufficient.
3. Create conservative 4:5 and macro derivatives without color reinterpretation.
4. Map the verified source to `master-room-v2` without changing scene geometry.
5. Run drift detection and manually review grain scale, orientation and perceived hue.
6. Mark `APPROVED` only after review.

Application views retain the label “Uygulama Görselleştirmesi / Application Visualization” and the screen/lighting disclaimer.
