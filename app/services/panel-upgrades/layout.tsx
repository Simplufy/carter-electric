import type { ReactNode } from "react";
import { buildMetadata, serviceSeo, ServiceSeoLayout } from "../../seo";

const config = serviceSeo["panel-upgrades"];

export const metadata = buildMetadata(config);

export default function PanelUpgradesLayout({ children }: { children: ReactNode }) {
  return <ServiceSeoLayout config={config}>{children}</ServiceSeoLayout>;
}
