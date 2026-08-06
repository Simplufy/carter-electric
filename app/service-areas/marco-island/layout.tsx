import type { ReactNode } from "react";
import { AreaSeoLayout, areaSeo, buildMetadata } from "../../seo";

const config = areaSeo["marco-island"];

export const metadata = buildMetadata(config);

export default function MarcoIslandLayout({ children }: { children: ReactNode }) {
  return <AreaSeoLayout config={config}>{children}</AreaSeoLayout>;
}
