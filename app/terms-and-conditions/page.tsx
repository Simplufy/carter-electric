import type { Metadata } from "next";
import Link from "next/link";
import { FileText, AlertTriangle, CheckCircle, Mail, Phone } from "lucide-react";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleFooter from "../components/SimpleFooter";

export const metadata: Metadata = {
  title: "Terms and Conditions | Carter Electric of Southwest Florida",
  description: "Terms and conditions for Carter Electric of Southwest Florida electrical services.",
  alternates: {
    canonical: "https://carterelectricfl.com/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      <SimpleNavbar />
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-sky-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-slate-300 text-lg">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
              <p>
                By requesting services from Carter Electric of Southwest Florida, you acknowledge 
                and agree to these Terms and Conditions. These terms govern your use of our 
                electrical services and website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Services Provided</h2>
              <p className="mb-4">
                Carter Electric of Southwest Florida provides professional electrical services 
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indoor and outdoor lighting installation</li>
                <li>EV charger installation</li>
                <li>Electrical repairs</li>
                <li>Panel upgrades</li>
                <li>Commercial electrical services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quote Requests and Consultations</h2>
              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg mb-4">
                <p className="text-slate-900">
                  When you submit a quote request or consultation request, you consent to 
                  being contacted by Carter Electric via phone, email, or text message regarding 
                  your request.
                </p>
              </div>
              <p>
                We use your contact information solely to provide you with quotes, schedule 
                consultations, and discuss ongoing projects. We do not share your information 
                with any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Communication Consent</h2>
              <p className="mb-4">
                By providing your contact information, you consent to receive communications 
                from Carter Electric regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quote requests and estimates</li>
                <li>Consultation requests</li>
                <li>Ongoing project updates</li>
                <li>Service appointments</li>
              </ul>
              <div className="mt-4 bg-slate-50 p-4 rounded-xl">
                <p className="flex items-center gap-2 text-slate-900 font-medium mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  SMS/Text Message Terms
                </p>
                <p className="text-slate-600">
                  Message frequency varies. Reply STOP to unsubscribe. Reply HELP for assistance.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy</h2>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <span>
                  Your privacy is important to us. We do not share, sell, or distribute your 
                  personal information to any third parties. All information collected is used 
                  solely by Carter Electric to provide you with electrical services.
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Area</h2>
              <p>
                Carter Electric of Southwest Florida provides electrical services throughout 
                Southwest Florida, including but not limited to Sarasota, Venice, Englewood, 
                Port Charlotte, Punta Gorda, Cape Coral, Fort Myers, Bonita Springs, Naples, 
                and Marco Island.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="mb-2">For questions about these terms, contact us at:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-500" />
                    <span>contact@carterelectricflorida.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-500" />
                    <span>+1 941-336-6811</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}