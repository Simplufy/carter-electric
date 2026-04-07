import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    console.log("Form submission received:", { name, phone, email, serviceType });

    const locationId = "nqFllJqrvntKsbfnRDoW";
    const apiKey = process.env.GHL_API_KEY || "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";
    
    const baseUrl = "https://services.leadconnectorhq.com";
    const version = "2021-07-28";

    const authHeader = `Bearer ${apiKey}`;

    const contactData = {
      locationId,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || "",
      phone: phone.replace(/\D/g, ""),
      email: email || "",
      source: "Website",
    };

    console.log("Sending to GHL:", JSON.stringify(contactData));

    const contactResponse = await fetch(
      `${baseUrl}/contacts/upsert`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authHeader,
          "Version": version,
        },
        body: JSON.stringify(contactData),
      }
    );

    console.log("GHL Response status:", contactResponse.status);
    const contactResult = await contactResponse.json();
    console.log("GHL Response:", JSON.stringify(contactResult));

    const contactId = contactResult?.contact?.id || contactResult?.id;
    
    if (!contactId) {
      console.error("No contact ID returned:", contactResult);
      return NextResponse.json({ 
        success: true, 
        debug: { contactResult, contactData }
      });
    }

    // Create deal
    const dealData = {
      locationId,
      name: `${name} - ${serviceType || "Electrical Lead"}`,
      pipelineId: "default",
      stageId: "lead",
      source: "Website",
      contactId: contactId,
      value: 0,
    };

    const dealResponse = await fetch(
      `${baseUrl}/deals/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authHeader,
          "Version": version,
        },
        body: JSON.stringify(dealData),
      }
    );

    const dealResult = await dealResponse.json();
    console.log("Deal response:", dealResult);

    return NextResponse.json({ 
      success: true, 
      contactId,
      dealId: dealResult?.deal?.id 
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}