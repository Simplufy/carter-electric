import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const address = typeof body?.address === "string" ? body.address.trim() : "";

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      return NextResponse.json({ error: "Server not configured." }, { status: 500 });
    }

    const parts = name.split(/\s+/);
    const firstName = parts.shift() ?? name;
    const lastName = parts.join(" ");

    const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        name,
        phone,
        address1: address || undefined,
        source: "Website Quote Form",
        tags: ["website-quote"],
      }),
    });

    if (!ghlRes.ok) {
      const detail = await ghlRes.text();
      return NextResponse.json({ error: "Upstream error", detail }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
