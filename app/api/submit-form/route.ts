import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    const locationId = "nqFllJqrvntKsbfnRDoW";
    const apiKey = "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";

    const goHighLevelData = {
      locationId,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || "",
      phone,
      email,
      address: {
        street: address || "",
        city: "",
        state: "FL",
        zip: "",
      },
      tags: serviceType ? [serviceType] : [],
      source: "Carter Electric Website",
      notes: message,
    };

    const response = await fetch(
      `https://api.gohighlevel.com/v1/contacts/upsert`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(goHighLevelData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("GoHighLevel API error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit to CRM" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}