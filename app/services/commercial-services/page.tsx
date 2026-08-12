"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function CommercialServicesPage() {
  return <ServiceLocalPage data={serviceContent["commercial-services"]} />;
}
