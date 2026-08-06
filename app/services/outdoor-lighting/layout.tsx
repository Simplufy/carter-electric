import type { ReactNode } from "react";
import { buildMetadata, serviceSeo, ServiceSeoLayout } from "../../seo";

const config = serviceSeo["outdoor-lighting"];

export const metadata = buildMetadata(config);

export default function OutdoorLightingLayout({ children }: { children: ReactNode }) {
  return <ServiceSeoLayout config={config}>{children}</ServiceSeoLayout>;
}
