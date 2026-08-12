"use client";

import ServiceLocalPage from "../../components/ServiceLocalPage";
import { serviceContent } from "../../content/services";

export default function PanelUpgradesPage() {
  return <ServiceLocalPage data={serviceContent["panel-upgrades"]} />;
}
