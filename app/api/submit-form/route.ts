import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    const locationId = "nqFllJqrvntKsbfnRDoW";
    const apiKey = "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";

    // GoHighLevel v2.0 API - using Private Integration format
    const baseUrl = "https://services.leadconnectorhq.com";
    const version = "2021-07-28";

    // First, create or update the contact
    const contactData = {
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
      notes: message ? `Service Type: ${serviceType || 'Not specified'}\n\nMessage: ${message}` : `Service Type: ${serviceType || 'Not specified'}`,
    };

    console.log("Submitting contact to GHL with data:", JSON.stringify(contactData, null, 2));

    const contactResponse = await fetch(
      `${baseUrl}/contacts/upsert`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": apiKey,
          "Version": version,
        },
        body: JSON.stringify(contactData),
      }
    );

    const contactResult = await contactResponse.json();
    console.log("Contact API response:", contactResult);

    if (!contactResponse.ok) {
      console.error("GoHighLevel Contact API error:", contactResult);
      return NextResponse.json(
        { error: "Failed to create contact in CRM", details: contactResult },
        { status: 500 }
      );
    }

    const contactId = contactResult.contact?.id;
    
    if (!contactId) {
      console.error("No contact ID returned:", contactResult);
      return NextResponse.json(
        { error: "Contact created but no ID returned", details: contactResult },
        { status: 500 }
      );
    }

    // Create a deal/opportunity
    const dealData = {
      locationId,
      name: `New ${serviceType || "Electrical"} Lead - ${name}`,
      pipelineId: "default",
      pipelineStage: "lead",
      source: "Website",
      contactId: contactId,
      value: 0,
    };

    console.log("Creating deal with data:", JSON.stringify(dealData, null, 2));

    const dealResponse = await fetch(
      `${baseUrl}/deals`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": apiKey,
          "Version": version,
        },
        body: JSON.stringify(dealData),
      }
    );

    const dealResult = await dealResponse.json();
    console.log("Deal API response:", dealResult);

    if (!dealResponse.ok) {
      console.error("GoHighLevel Deal API error:", dealResult);
      // Contact was created, so we return success but note the deal failed
      return NextResponse.json({ 
        success: true, 
        warning: "Contact created but deal not created",
        contactId 
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      contactId,
      dealId: dealResult.deal?.id 
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}