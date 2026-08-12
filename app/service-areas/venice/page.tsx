"use client";

import AreaLocalPage from "../../components/AreaLocalPage";
import { areaContent } from "../../content/areas";

export default function VenicePage() {
  return <AreaLocalPage data={areaContent["venice"]} />;
}
