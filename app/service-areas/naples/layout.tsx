import type { ReactNode } from "react";
import { AreaSeoLayout, areaSeo, buildMetadata } from "../../seo";

const config = areaSeo.naples;

export const metadata = buildMetadata(config);

export default function NaplesLayout({ children }: { children: ReactNode }) {
  return <AreaSeoLayout config={config}>{children}</AreaSeoLayout>;
}
