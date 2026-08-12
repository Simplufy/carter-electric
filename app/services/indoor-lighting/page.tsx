"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function IndoorLightingPage() {
  return <ServiceLocalPage data={serviceContent["indoor-lighting"]} />;
}
