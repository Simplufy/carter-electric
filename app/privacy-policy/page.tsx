import type { Metadata } from "next";
import { Shield, Lock, Mail, Phone } from "lucide-react";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleFooter from "../components/SimpleFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Carter Electric Florida",
  description: "Privacy policy for Carter Electric Florida. We do not share your information with third parties.",
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
          <p className="text-slate-300 text-lg">Last Updated: April 7, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-600">
            <p>
              At Carter Electric Florida, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information submitted through our GoHighLevel chat widget, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
                <li><strong>Project Details:</strong> Address and specific electrical needs shared during chat or consultation requests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Your information is used strictly for business operations, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing project quotes and estimates.</li>
                <li>Scheduling and confirming consultations.</li>
                <li>Communicating regarding ongoing electrical projects.</li>
                <li>Sending service-related updates via SMS or email.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. SMS & Mobile Data Protection (A2P Compliance)</h2>
              <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
                <p className="text-slate-900">
                  No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <span>We implement industry-standard security measures to protect your information. We do not sell, rent, or lease our customer lists to third parties.</span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Choices</h2>
              <p className="mb-4">You can opt out of any communication at any time.</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium text-slate-900 mb-2">For SMS:</p>
                <p className="text-slate-600 mb-4">Reply STOP to unsubscribe.</p>
                <p className="font-medium text-slate-900 mb-2">For Email:</p>
                <p className="text-slate-600">Click the "unsubscribe" link or contact us at contact@carterelectricflorida.com.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="mailto:contact@carterelectricflorida.com" className="flex items-center gap-2 text-sky-500 hover:text-sky-600">
                  <Mail className="w-4 h-4" />
                  <span>contact@carterelectricflorida.com</span>
                </a>
                <a href="tel:+19413366811" className="flex items-center gap-2 text-sky-500 hover:text-sky-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 941-336-6811</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
