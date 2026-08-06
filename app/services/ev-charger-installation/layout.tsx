import type { ReactNode } from "react";
import { buildMetadata, serviceSeo, ServiceSeoLayout } from "../../seo";

const config = serviceSeo["ev-charger-installation"];

export const metadata = buildMetadata(config);

export default function EvChargerInstallationLayout({ children }: { children: ReactNode }) {
  return <ServiceSeoLayout config={config}>{children}</ServiceSeoLayout>;
}
