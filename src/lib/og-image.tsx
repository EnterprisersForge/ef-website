import { ImageResponse } from "next/og";
import { siteConfig } from "./data";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

type OgImageOptions = {
  title?: string;
  subtitle?: string;
};

export function generateOgImage({ title, subtitle }: OgImageOptions = {}) {
  const headline = title ?? siteConfig.name;
  const description = subtitle ?? siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #060b18 0%, #0a0f1e 45%, #111827 100%)",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.28), transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            right: "-100px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.3), transparent 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px", zIndex: 1 }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              background: "linear-gradient(135deg, #0891B2 0%, #6D28D9 100%)",
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", zIndex: 1, maxWidth: "920px" }}>
          <div
            style={{
              fontSize: headline === siteConfig.name ? "68px" : "58px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.35,
              color: "#94A3B8",
              maxWidth: "860px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            fontSize: "22px",
            color: "#64748B",
          }}
        >
          <span>{siteConfig.email}</span>
          <span>B2B · ERP · AI · Mobile</span>
        </div>
      </div>
    ),
    ogImageSize
  );
}
