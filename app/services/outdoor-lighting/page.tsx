"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function OutdoorLightingPage() {
  return <ServiceLocalPage data={serviceContent["outdoor-lighting"]} />;
}
