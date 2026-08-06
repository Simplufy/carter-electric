import type { ReactNode } from "react";
import { buildMetadata, serviceSeo, ServiceSeoLayout } from "../../seo";

const config = serviceSeo["indoor-lighting"];

export const metadata = buildMetadata(config);

export default function IndoorLightingLayout({ children }: { children: ReactNode }) {
  return <ServiceSeoLayout config={config}>{children}</ServiceSeoLayout>;
}
