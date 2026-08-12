"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function EvChargerInstallationPage() {
  return <ServiceLocalPage data={serviceContent["ev-charger-installation"]} />;
}
