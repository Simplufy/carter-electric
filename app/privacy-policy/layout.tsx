import type { ReactNode } from "react";
import { buildMetadata, WebPageSeoLayout } from "../seo";

const config = {
  title: "Privacy Policy",
  description: "Privacy policy for Carter Electric of Southwest Florida, including chat widget data collection, SMS consent protection, and customer privacy practices.",
  path: "/privacy-policy/",
  keywords: ["Carter Electric privacy policy", "SMS consent privacy", "A2P compliance", "customer data protection"],
};

export const metadata = buildMetadata(config);

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return <WebPageSeoLayout config={config}>{children}</WebPageSeoLayout>;
}
