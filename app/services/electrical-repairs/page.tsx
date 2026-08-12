"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function ElectricalRepairsPage() {
  return <ServiceLocalPage data={serviceContent["electrical-repairs"]} />;
}
