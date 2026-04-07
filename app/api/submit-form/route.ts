import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, phone, email, address, serviceType, message } = body;

    // Return success immediately for now - CRM integration can be debugged separately
    // This allows the form to work while we troubleshoot the GHL connection
    console.log("Form submitted with data:", body);
    
    // Try GHL integration but don't block form success if it fails
    try {
      const locationId = "nqFllJqrvntKsbfnRDoW";
      const apiKey = "pit-9006dca6-d606-45b7-bd8b-a0fb02e1d5b0";
      
      const baseUrl = "https://services.leadconnectorhq.com";
      
      const contactData = {
        locationId,
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" ") || "",
        phone,
        email,
        source: "Website",
      };

      const contactResponse = await fetch(
        `${baseUrl}/contacts/upsert`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": apiKey,
            "Version": "2021-07-28",
          },
          body: JSON.stringify(contactData),
        }
      );

      console.log("GHL Contact Response status:", contactResponse.status);
      
      if (contactResponse.ok) {
        const result = await contactResponse.json();
        console.log("GHL Contact created:", result);
      }
    } catch (ghlError) {
      console.error("GHL Error (non-blocking):", ghlError);
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}