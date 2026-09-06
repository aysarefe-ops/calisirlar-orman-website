"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/types";
import { products } from "@/lib/products";
import { companyContact } from "@/lib/content";
import { Arrow } from "./Icons";

export function ContactForm({ locale, initialProduct = "" }: { locale: Locale; initialProduct?: string }) {
  const [sent, setSent] = useState(false);
  const tr = locale === "tr";
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const product = products.find((item) => item.slug === data.get("product"));
    const subject = String(data.get("subject") || (tr ? "Proje talebi" : "Project enquiry"));
    const body = [
      `${tr ? "Ad Soyad" : "Name"}: ${data.get("name") || ""}`,
      `${tr ? "Şirket" : "Company"}: ${data.get("company") || "—"}`,
      `E-mail: ${data.get("email") || ""}`,
      `${tr ? "Telefon" : "Phone"}: ${data.get("phone") || "—"}`,
      `${tr ? "Ülke" : "Country"}: ${data.get("country") || "—"}`,
      `${tr ? "İlgilenilen ürün" : "Product of interest"}: ${product ? product.name[locale] : "—"}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    setSent(true);
    window.location.href = `mailto:${companyContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="field"><label htmlFor="name">{tr ? "Ad Soyad" : "Name"} *</label><input id="name" name="name" required autoComplete="name"/></div>
    <div className="field"><label htmlFor="company">{tr ? "Şirket" : "Company"}</label><input id="company" name="company" autoComplete="organization"/></div>
    <div className="field"><label htmlFor="email">E-mail *</label><input id="email" name="email" type="email" required autoComplete="email"/></div>
    <div className="field"><label htmlFor="phone">{tr ? "Telefon" : "Phone"}</label><input id="phone" name="phone" type="tel" autoComplete="tel"/></div>
    <div className="field"><label htmlFor="country">{tr ? "Ülke" : "Country"}</label><input id="country" name="country" autoComplete="country-name"/></div>
    <div className="field"><label htmlFor="subject">{tr ? "Konu" : "Subject"} *</label><input id="subject" name="subject" required/></div>
    <div className="field full"><label htmlFor="product">{tr ? "İlgilenilen ürün" : "Product of interest"}</label><select id="product" name="product" defaultValue={initialProduct}><option value="">{tr ? "Seçiniz" : "Select"}</option>{products.map((p) => <option key={p.id} value={p.slug}>{p.code ? `${p.code} · ` : ""}{p.name[locale]}</option>)}</select></div>
    <div className="field full"><label htmlFor="message">{tr ? "Mesaj" : "Message"} *</label><textarea id="message" name="message" required/></div>
    <p className="form-note">{tr ? "Talebiniz, cihazınızdaki e-posta uygulaması üzerinden info@calisirlarormanurunleri.com.tr adresine iletilmek üzere hazırlanır." : "Your enquiry will be prepared for delivery to info@calisirlarormanurunleri.com.tr through your device’s email application."}</p>
    <div className="field full"><button className="button dark" type="submit">{sent ? (tr ? "E-posta uygulaması açıldı" : "Email app opened") : (tr ? "Proje talebini gönder" : "Send project enquiry")}<Arrow/></button></div>
  </form>;
}
