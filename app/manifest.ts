import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manthan Ank — Full-Stack Engineer & SaaS Architect",
    short_name: "ManthanAnk",
    description: "Portfolio of 10 modern full-stack web applications built with Next.js 15, PostgreSQL, and Stripe.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
