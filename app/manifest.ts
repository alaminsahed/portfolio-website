import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Al-Amin Sahed | Senior Software Engineer",
    short_name: "Al-Amin Sahed",
    description:
      "Portfolio of Md. Al-Amin Sahed, senior software engineer and frontend specialist (React.js, Next.js, TypeScript).",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#040c2c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
