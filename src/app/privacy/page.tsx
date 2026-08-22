import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | ImproPay",
  description: "Learn how ImproPay protects your privacy and secures your personal data according to PDPL.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden w-full pt-24 pb-20 min-h-screen bg-[#f4f7fa]">
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-white/40 to-transparent"></div>
          <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-blue-300/10 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
          <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-purple-300/5 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
        </div>
        <div className="container-main max-w-4xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono">
              Privacy Policy (PDPL-Compliant)
            </span>
            <h1 className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight">
              Privacy Policy
            </h1>
            <p className="body-md text-[--text-body] max-w-lg mx-auto">
              Published Date: 28th July’2026
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-slate max-w-none text-slate-700">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Document Description and Version Control</h2>
                <p className="leading-relaxed">
                  <strong>Document Name:</strong> Privacy Policy (PDPL-Compliant)<br/>
                  <strong>Published Date:</strong> 28th July’2026<br/>
                  <strong>Purpose of the document:</strong> The purpose of this document is to establish the legal framework for personal data processing in accordance with the UAE Personal Data Protection Law (PDPL). This document fulfills the mandatory transparency requirements where Lulu International Exchange acts as the Data Controller and Impronics acts as the Data Processor. It also defines the detailing of the technical processing of personal data and outlining the rights of data subjects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h2>
                <p className="leading-relaxed">
                  Impronics Digitech L.L.C-FZ (“Impronics”, “we”, “us”, or “our”), a free zone limited liability company registered in Meydan Free Zone, Dubai, UAE, is committed to protecting the privacy and personal data of users (“User”, “you”) of the Impropay platform. This Privacy Policy outlines how personal data is processed in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (“PDPL”).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. ROLES AND RESPONSIBILITIES</h2>
                <p className="leading-relaxed">
                  <strong>2.1 Data Controller:</strong><br/>
                  Lulu International Exchange L.L.C (“Lulu”), a CBUAE-licensed exchange house, acts as the Data Controller. Lulu determines the purposes and means of processing personal data for remittance and financial services.
                </p>
                <p className="leading-relaxed mt-4">
                  <strong>2.2 Data Processor:</strong><br/>
                  Impronics acts strictly as a Data Processor. We provide the front-end technology (UI/UX) and secure transmission protocols to facilitate the collection of data for Lulu. Impronics processes data only upon the instructions of the Controller or as required to facilitate the technical transmission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. DATA COLLECTION AND TRANSMISSION</h2>
                <p className="leading-relaxed">
                  The IMPROPAY application, developed and operated by Impronics Digitech LLC-FZ, collects only the minimum Personal Data necessary to facilitate the remittance services offered through Lulu International Exchange LLC. All data captured through the front-end interface is securely transmitted to Lulu via HTTPS/TLS encrypted communication channels, ensuring the confidentiality and integrity of the data in transit. The information retained is strictly limited to transactional response data generated by the backend processing system as a direct result of transactions initiated by the user.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. LEGAL BASIS FOR PROCESSING</h2>
                <p className="leading-relaxed mb-4">Processing is conducted based on:</p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span><strong>(a)</strong> The necessity to perform a contract to which the Data Subject is a party (facilitating the remittance request).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong>(b)</strong> Compliance with legal obligations (AML/CFT requirements) handled by the Controller.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong>(c)</strong> Consent provided by the User at the point of data entry.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. USER RIGHTS (Data Subjects Rights)</h2>
                <p className="leading-relaxed mb-4">Under the PDPL, Users have the right to:</p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span><strong>(a)</strong> Access their personal data held by the Controller.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong>(b)</strong> Request rectification or erasure of personal data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong>(c)</strong> Restrict or object to processing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong>(d)</strong> Data portability. As Impronics do store the minimal user data and transmit the data in a secure manner to Lulu International Exchange L.L.C.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. CROSS-BORDER DATA TRANSFER</h2>
                <p className="leading-relaxed">
                  Personal data may be transferred by the Controller (Lulu International Exchange LLC) to recipients located outside the United Arab Emirates where such transfer is necessary for the facilitation and settlement of international remittance services. All such transfers shall remain subject to the data protection safeguards required under the UAE Personal Data Protection Law (PDPL) and the regulatory framework of the Central Bank of the UAE (CBUAE), ensuring that an adequate level of protection is maintained at all times.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. SECURITY MEASURES</h2>
                <p className="leading-relaxed">
                  Impronics implements industry-standard security measures, including OWASP Top 10 compliance, TLS 1.2+ encryption, and regular vulnerability assessments to ensure the integrity of data during transmission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. CONTACT</h2>
                <p className="leading-relaxed mb-4">
                  For UI-related privacy inquiries:
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-[#217bc6] font-medium">
                  <a href="mailto:support@impropay.global" className="hover:underline">support@impropay.global</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
