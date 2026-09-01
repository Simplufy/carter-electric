import type { ReactNode } from "react";
import { buildMetadata, WebPageSeoLayout } from "../seo";

const config = {
  title: "About Carter Electric | Port Charlotte, North Port & Punta Gorda",
  description: "Learn about Carter Electric, Jeff Carter's 37 years in the electrical trade, and our service in Port Charlotte, North Port, and Punta Gorda.",
  path: "/about/",
  keywords: ["about Carter Electric", "Jeff Carter electrician", "Port Charlotte electrician", "North Port electrician", "Punta Gorda electrician", "master electrician Florida"],
};

export const metadata = buildMetadata(config);

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <WebPageSeoLayout config={config}>{children}</WebPageSeoLayout>;
}
