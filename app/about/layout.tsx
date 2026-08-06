import type { ReactNode } from "react";
import { buildMetadata, WebPageSeoLayout } from "../seo";

const config = {
  title: "About Carter Electric of Southwest Florida",
  description: "Learn about Carter Electric of Southwest Florida, Jeff Carter's 37 years in the electrical trade, and the company's roots in Northern Illinois.",
  path: "/about/",
  keywords: ["about Carter Electric", "Jeff Carter electrician", "Southwest Florida electrical contractor", "master electrician Florida"],
};

export const metadata = buildMetadata(config);

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <WebPageSeoLayout config={config}>{children}</WebPageSeoLayout>;
}
