import type { ReactNode } from "react";
import { buildMetadata, WebPageSeoLayout } from "../seo";

const config = {
  title: "Terms and Conditions",
  description: "Terms and conditions for Carter Electric of Southwest Florida electrical services, scheduling, project communication, and SMS messaging program.",
  path: "/terms-and-conditions/",
  keywords: ["Carter Electric terms", "electrical service terms", "SMS terms", "Southwest Florida electrician terms"],
};

export const metadata = buildMetadata(config);

export default function TermsAndConditionsLayout({ children }: { children: ReactNode }) {
  return <WebPageSeoLayout config={config}>{children}</WebPageSeoLayout>;
}
