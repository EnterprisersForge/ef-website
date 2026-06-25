import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "88px",
          borderRadius: "36px",
          background: "linear-gradient(135deg, #0891B2 0%, #6D28D9 100%)",
        }}
      >
        ⚡
      </div>
    ),
    size
  );
}
