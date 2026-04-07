import type { Metadata } from "next";
import { FileText, AlertTriangle, CheckCircle, Mail, Phone } from "lucide-react";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleFooter from "../components/SimpleFooter";

export const metadata: Metadata = {
  title: "Terms and Conditions | Carter Electric Florida",
  description: "Terms and conditions for Carter Electric Florida electrical services.",
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
          <p className="text-slate-300 text-lg">Last Updated: April 7, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-600">
            <p>
              By accessing our services or submitting a contact form, you agree to the following terms and conditions.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Services Provided</h2>
              <p>
                Carter Electric Florida provides electrical contracting services. Estimates provided are subject to on-site verification and may change based on actual site conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Consent to Communication</h2>
              <p>
                By providing your phone number and email, you grant Carter Electric Florida express written consent to contact you regarding:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Requested quotes and estimates.</li>
                <li>Appointment reminders.</li>
                <li>Updates on active work orders.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. SMS Messaging Program</h2>
              
              <div className="space-y-4">
                <div className="bg-sky-50 p-4 rounded-xl">
                  <p className="font-medium text-slate-900 mb-1">Program Description</p>
                  <p className="text-slate-600">Our SMS program is used to provide project updates and scheduling information.</p>
                </div>
                
                <div className="bg-sky-50 p-4 rounded-xl">
                  <p className="font-medium text-slate-900 mb-1">Frequency</p>
                  <p className="text-slate-600">Message frequency varies based on your project status.</p>
                </div>
                
                <div className="bg-sky-50 p-4 rounded-xl">
                  <p className="font-medium text-slate-900 mb-1">Opt-Out</p>
                  <p className="text-slate-600">You can cancel the SMS service at any time. Just text STOP to our number. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed.</p>
                </div>
                
                <div className="bg-sky-50 p-4 rounded-xl">
                  <p className="font-medium text-slate-900 mb-1">Help</p>
                  <p className="text-slate-600">If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or reach out directly to contact@carterelectricflorida.com.</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
                  <p className="font-medium text-slate-900 mb-1">Rates</p>
                  <p className="text-slate-600">Message and data rates may apply for any messages sent to you from us and to us from you.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Liability</h2>
              <p className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <span>Carter Electric Florida is not responsible for delays caused by material shortages, weather, or unforeseen structural issues at the project site. All work is performed according to Florida building codes.</span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us at:</p>
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