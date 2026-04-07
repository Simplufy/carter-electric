import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Mail, Phone } from "lucide-react";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleFooter from "../components/SimpleFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Carter Electric of Southwest Florida",
  description: "Privacy policy for Carter Electric of Southwest Florida. We do not share your information with third parties.",
  alternates: {
    canonical: "https://carterelectricfl.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <SimpleNavbar />
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-sky-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-slate-600">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                <p>
                  Carter Electric of Southwest Florida collects information that you provide directly to us, 
                  including your name, phone number, email address, and service address when you request a quote 
                  or consultation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your quote requests and consultation requests</li>
                  <li>Communicate with you about ongoing projects</li>
                  <li>Provide you with updates and information about our services</li>
                  <li>Schedule service appointments</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
                <p className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>We do not share your personal information with third parties.</strong> 
                    Your contact information is used solely by Carter Electric of Southwest Florida 
                    to communicate with you regarding quote requests, consultation requests, 
                    and ongoing projects.
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS Communications</h2>
                <p className="mb-4">
                  By providing your phone number, you consent to receive text messages from Carter Electric 
                  regarding your requests and ongoing projects.
                </p>
                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
                  <p className="font-medium text-slate-900 mb-2">Message Frequency:</p>
                  <p className="text-slate-600">You may receive up to 5 messages per request. Message and data rates may apply.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Opt-Out Instructions</h2>
                <p className="mb-4">
                  You can opt out of receiving text messages at any time by replying STOP to any message. 
                  You may also request to be removed by contacting us directly.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-medium text-slate-900 mb-2">For help or to unsubscribe:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-sky-500" />
                      <span>Reply HELP for Help</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-sky-500" />
                      <span>Reply STOP to Unsubscribe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sky-500" />
                      <span>contact@carterelectricflorida.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:contact@carterelectricflorida.com" className="text-sky-500 hover:text-sky-600">
                    contact@carterelectricflorida.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}