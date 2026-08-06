import type { ReactNode } from "react";
import { AreaSeoLayout, areaSeo, buildMetadata } from "../../seo";

const config = areaSeo.venice;

export const metadata = buildMetadata(config);

export default function VeniceLayout({ children }: { children: ReactNode }) {
  return <AreaSeoLayout config={config}>{children}</AreaSeoLayout>;
}
