import type { ReactNode } from "react";
import { AreaSeoLayout, areaSeo, buildMetadata } from "../../seo";

const config = areaSeo["bonita-springs"];

export const metadata = buildMetadata(config);

export default function BonitaSpringsLayout({ children }: { children: ReactNode }) {
  return <AreaSeoLayout config={config}>{children}</AreaSeoLayout>;
}
