import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    const locationId = "nqFllJqrvntKsbfnRDoW";
    const apiKey = "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";

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

    const contactResponse = await fetch(
      `https://api.gohighlevel.com/v1/contacts/upsert`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(contactData),
      }
    );

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json();
      console.error("GoHighLevel Contact API error:", errorData);
      return NextResponse.json(
        { error: "Failed to create contact in CRM", details: errorData },
        { status: 500 }
      );
    }

    const contactResult = await contactResponse.json();
    const contactId = contactResult.contact?.id;
    
    if (!contactId) {
      console.error("No contact ID returned:", contactResult);
      return NextResponse.json(
        { error: "Contact created but no ID returned" },
        { status: 500 }
      );
    }

    // Now create a deal/opportunity
    const dealData = {
      locationId,
      name: `New ${serviceType || "Electrical"} Lead - ${name}`,
      pipelineId: "default", // This may need to be adjusted to your specific pipeline ID
      pipelineStage: "lead", // Initial stage
      source: "Website",
      assignedTo: "",
      contactId: contactId,
      monetaryValue: 0,
      tags: serviceType ? [serviceType] : ["Website Lead"],
    };

    const dealResponse = await fetch(
      `https://api.gohighlevel.com/v1/deals`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(dealData),
      }
    );

    if (!dealResponse.ok) {
      const dealErrorData = await dealResponse.json();
      console.error("GoHighLevel Deal API error:", dealErrorData);
      // Contact was created, so we return success but note the deal failed
      return NextResponse.json({ 
        success: true, 
        warning: "Contact created but deal not created",
        contactId 
      });
    }

    const dealResult = await dealResponse.json();
    
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