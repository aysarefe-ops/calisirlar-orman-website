"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export type MarqueeImage = {
  src: string;
  alt: string;
  label?: string;
  width?: "narrow" | "regular" | "wide";
  position?: string;
};

type Props = {
  images: MarqueeImage[];
  direction?: "left" | "right";
  duration?: number;
  variant?: "hero" | "material" | "architecture";
  controls?: boolean;
  paused?: boolean;
  onPausedChange?: (paused: boolean) => void;
  pauseOnHover?: boolean;
  priorityCount?: number;
  locale?: "tr" | "en";
};

export function MaterialMarquee({ images, direction="left", duration=48, variant="material", controls=true, paused: controlledPaused, onPausedChange, pauseOnHover=false, priorityCount=0, locale="tr" }: Props) {
  const reducedMotion = useReducedMotion();
  const [internalPaused, setInternalPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const paused = reducedMotion || controlledPaused || internalPaused;
  const setPaused = (next: boolean) => onPausedChange ? onPausedChange(next) : setInternalPaused(next);
  const style = { "--marquee-duration": `${duration}s` } as CSSProperties;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin:"120px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef} className={`material-marquee marquee-${variant}`} data-direction={direction} data-paused={paused || !inView ? "true" : "false"} data-pause-hover={pauseOnHover ? "true" : "false"} style={style}>
    <div className="marquee-track">
      <MarqueeGroup images={images} variant={variant} priorityCount={priorityCount}/>
      <MarqueeGroup images={images} variant={variant} priorityCount={0} duplicate/>
    </div>
    {controls && <button type="button" className="marquee-control" aria-pressed={paused} onClick={() => setPaused(!paused)}>
      <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
      {paused ? (locale === "tr" ? "HAREKETİ BAŞLAT" : "PLAY MOTION") : (locale === "tr" ? "HAREKETİ DURDUR" : "PAUSE MOTION")}
    </button>}
  </div>;
}

function MarqueeGroup({ images, variant, priorityCount, duplicate=false }: { images: MarqueeImage[]; variant: Props["variant"]; priorityCount: number; duplicate?: boolean }) {
  return <div className="marquee-group" aria-hidden={duplicate || undefined}>
    {images.map((item,index) => <figure className={`marquee-item marquee-${item.width ?? "regular"}`} key={`${item.src}-${index}-${duplicate ? "copy" : "original"}`}>
      <Image src={item.src} alt={duplicate ? "" : item.alt} fill priority={!duplicate && index < priorityCount} sizes={variant === "hero" ? "(max-width:760px) 60vw, 34vw" : "(max-width:760px) 72vw, 34vw"} style={item.position ? { objectPosition:item.position } : undefined}/>
      {item.label && <figcaption>{item.label}</figcaption>}
    </figure>)}
  </div>;
}
