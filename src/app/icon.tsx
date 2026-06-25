import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #0891B2 0%, #6D28D9 100%)",
        }}
      >
        ⚡
      </div>
    ),
    size
  );
}
