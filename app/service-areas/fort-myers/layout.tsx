import type { ReactNode } from "react";
import { AreaSeoLayout, areaSeo, buildMetadata } from "../../seo";

const config = areaSeo["fort-myers"];

export const metadata = buildMetadata(config);

export default function FortMyersLayout({ children }: { children: ReactNode }) {
  return <AreaSeoLayout config={config}>{children}</AreaSeoLayout>;
}
