import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    const locationId = "nqFllJqrvntKsbfnRDoW";
    const apiKey = "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";
    
    const baseUrl = "https://services.leadconnectorhq.com";
    const version = "2021-07-28";

    const authHeader = `Bearer ${apiKey}`;

    // Create or update contact using upsert
    const contactData = {
      locationId,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || "",
      phone,
      email,
      source: "Website",
    };

    console.log("Creating contact with:", contactData);

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

    console.log("Contact response status:", contactResponse.status);
    
    const contactResult = await contactResponse.json();
    console.log("Contact response:", contactResult);

    const contactId = contactResult?.contact?.id || contactResult?.id;
    
    if (!contactId) {
      console.error("No contact ID returned:", contactResult);
      // Still return success to user but log the error for debugging
      return NextResponse.json({ 
        success: true, 
        warning: "Form submitted but CRM contact creation failed",
        debug: contactResult 
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