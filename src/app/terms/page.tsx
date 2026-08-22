import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | ImproPay",
  description: "Read the terms and conditions for using ImproPay's international money transfer services.",
};

export default function TermsPage() {
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
              Legal Information
            </span>
            <h1 className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight">
              Terms & Conditions
            </h1>
            <p className="body-md text-[--text-body] max-w-lg mx-auto">
              Published Date: 28th July’2026
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-slate max-w-none text-slate-700">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Purpose of the Document</h2>
                <p className="leading-relaxed">
                  The purpose of this document is to define the contractual relationship between the User and IMPRONICS regarding the use of the IMPROPAY front-end interface. It establishes the legal boundaries for liability related to data transmission, defines the governing law as Dubai/UAE Federal law, and sets forth the user's obligations when interacting with the technology stack.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION AND ACCEPTANCE</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>1.1.</strong> These Terms of Service (“Terms”) constitute a legally binding agreement between you, individual customer (“User”, “you”, or “your”), and Impronics Digitech L.L.C-FZ (“Impronics”, “we”, “us”, or “our”), a company established in the United Arab Emirates.</li>
                  <li><strong>1.2.</strong> These Terms govern your access to and use of the front-end user interface, mobile application provided by Impronics (the “Impropay”) which facilitates access to remittance services provided by Lulu International Exchange L.L.C (“Lulu”).</li>
                  <li><strong>1.3.</strong> By accessing or using the impropay, you acknowledge that you have read, understood, and agree to be bound by these Terms & Services. If you do not agree to these Terms, you must immediately reject using the Partner Application.</li>
                  <li><strong>1.4.</strong> You acknowledge that Impronics is a technology provider and not a financial institution. All regulated financial services, including but not limited to remittance, currency exchange, and payment processing, are provided exclusively by Lulu.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. DEFINITIONS</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>2.1.</strong> “AML/CFT Laws” means the UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism and Financing of Illegal Organisations, and its executive regulations.</li>
                  <li><strong>2.2.</strong> “CBUAE” means the Central Bank of the United Arab Emirates.</li>
                  <li><strong>2.3.</strong> “Customer Data” means any personal data, identification documents, or financial information provided by the User through the Partner Application.</li>
                  <li><strong>2.4.</strong> “Lulu” means Lulu International Exchange L.L.C, a limited liability company licensed by the CBUAE to conduct exchange and remittance business.</li>
                  <li><strong>2.5.</strong> “Impropay” means the digital interface, UI/UX, and technology platform developed and maintained by Impronics.</li>
                  <li><strong>2.6.</strong> “PDPL” means UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data.</li>
                  <li><strong>2.7.</strong> “Remittance Services” means the regulated financial activity of transferring funds, currency conversion, and settlement performed solely by Lulu.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. ROLE OF IMPRONICS (TECHNOLOGY PROVIDER ONLY)</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>3.1.</strong> Impronics acts strictly as a technology partner for Lulu.</li>
                  <li><strong>3.2.</strong> The scope of Impronics’ services is limited to:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>3.2.1.</strong> Providing the front-end UI/UX for Impropay;</li>
                      <li><strong>3.2.2.</strong> Facilitating the minimal capture and secure transmission of Customer Data to Lulu;</li>
                      <li><strong>3.2.3.</strong> Providing system integration and Tier-1 technical support related to UI/UX issues; and</li>
                      <li><strong>3.2.4.</strong> Maintaining the SDK/API integration with Lulu’s backend systems.</li>
                    </ul>
                  </li>
                  <li><strong>3.3.</strong> Impronics does not:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>3.3.1.</strong> Hold, handle, or process any User funds;</li>
                      <li><strong>3.3.2.</strong> Perform KYC, eKYC, AML, or sanctions screening;</li>
                      <li><strong>3.3.3.</strong> Validate or verify identity documents;</li>
                      <li><strong>3.3.4.</strong> Approve or reject User registrations or transactions;</li>
                      <li><strong>3.3.5.</strong> Provide financial advice or determine regulatory requirements; or</li>
                      <li><strong>3.3.6.</strong> Access Lulu’s backend financial systems.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. ROLE OF LULU (LICENSED REMITTANCE PROVIDER)</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>4.1.</strong> Lulu is the sole provider of Remittance Services. Lulu is a CBUAE-licensed entity and is exclusively responsible for:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>4.1.1.</strong> Validation and verification of Emirates ID and other identity documents;</li>
                      <li><strong>4.1.2.</strong> Performing all KYC, eKYC, AML, CFT, and sanctions screening;</li>
                      <li><strong>4.1.3.</strong> Transaction processing, FX conversion, and settlement;</li>
                      <li><strong>4.1.4.</strong> Regulatory reporting to the CBUAE and other authorities; and</li>
                      <li><strong>4.1.5.</strong> Compliance with all UAE financial regulations.</li>
                    </ul>
                  </li>
                  <li><strong>4.2.</strong> All financial transactions are subject to Lulu’s internal compliance policies and the laws of the UAE. Lulu reserves the right to reject any User or transaction at its sole discretion without liability to Impronics.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. USER ELIGIBILITY</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>5.1.</strong> The Impropay is intended for use by individual customers only. Corporate or institutional use is strictly prohibited.</li>
                  <li><strong>5.2.</strong> To be eligible to use the Impropay, you must:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>5.2.1.</strong> Be at least 18 years of age;</li>
                      <li><strong>5.2.2.</strong> Possess the legal capacity to enter into a binding contract;</li>
                      <li><strong>5.2.3.</strong> Be a resident of the United Arab Emirates with a valid Emirates ID; and</li>
                      <li><strong>5.2.4.</strong> Not be subject to any economic or trade sanctions under UAE law or international law applicable in the UAE.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. CUSTOMER ONBOARDING DISCLAIMER</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>6.1.</strong> You acknowledge that the submission of your data through Impropay does not guarantee the opening of an account or the execution of a transaction.</li>
                  <li><strong>6.2.</strong> Onboarding is subject to Lulu’s successful completion of eKYC and AML checks. Impronics has no influence over Lulu’s decision to approve or reject your application.</li>
                  <li><strong>6.3.</strong> You agree to provide accurate, current, and complete information. Providing false or misleading information may result in the termination of your access and potential legal action under the UAE Cybercrime Law and AML/CFT Laws.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. PROHIBITED ACTIVITIES</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>7.1.</strong> You agree not to:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>7.1.1.</strong> Use Impropay application for any fraudulent or illegal purpose;</li>
                      <li><strong>7.1.2.</strong> Attempt to bypass any security measures or API restrictions;</li>
                      <li><strong>7.1.3.</strong> Reverse engineer, decompile, or disassemble any part of the Impropay Application;</li>
                      <li><strong>7.1.4.</strong> Use the Impropay Application to transmit any viruses, malware, or harmful code;</li>
                      <li><strong>7.1.5.</strong> Impersonate any person or entity or misrepresent your affiliation with any person or entity; or</li>
                      <li><strong>7.1.6.</strong> Use the Impropay Application in a manner that violates the UAE Cybercrime Law (Federal Decree-Law No. 34 of 2021).</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. DATA PROTECTION AND PDPL COMPLIANCE</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>8.1.</strong> Impronics is committed to protecting the privacy in accordance with the PDPL.</li>
                  <li><strong>8.2.</strong> Impronics acts as a "Processor" on behalf of Lulu for the limited purpose of capturing and transmitting Customer Data. Lulu acts as the "Controller" of the data including the personal data for the purpose of providing Remittance Services.</li>
                  <li><strong>8.3.</strong> Impronics stores and retains, the minimal User Data. And transmit successfully to Lulu.</li>
                  <li><strong>8.4.</strong> By using the Impropay Application, you provide your express consent for the collection and transmission of your data to Lulu and its authorized third-party service providers for the purpose of identity verification and transaction processing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. CUSTOMER DATA HANDLING (FRONT-END ONLY)</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>9.1.</strong> The Impropay Application serves as a secure conduit for ID&V (Identity and Verification) data capture.</li>
                  <li><strong>9.2.</strong> All identity verification, including Emirates ID checks and Electronic Facial Recognition (EFR), is performed by Lulu or its designated regulated partners.</li>
                  <li><strong>9.3.</strong> Impronics employs industry-standard encryption protocols to ensure the secure transmission of data from the Impropay Application to Lulu’s backend system.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. NO FINANCIAL SERVICES DISCLAIMER</h2>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>IMPRONICS IS NOT A BANK, AN EXCHANGE HOUSE, OR A STORED VALUE FACILITY.</li>
                  <li>IMPRONICS DOES NOT PROVIDE FINANCIAL ADVICE, INVESTMENT ADVICE, OR TAX ADVICE.</li>
                  <li>ANY INFORMATION PROVIDED WITHIN THE IMPROPAY APPLICATION REGARDING EXCHANGE RATES OR TRANSACTION FEES IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND IS SOURCED DIRECTLY FROM LULU. THE FINAL RATE APPLICABLE TO YOUR TRANSACTION IS DETERMINED EXCLUSIVELY BY LULU AT THE TIME OF EXECUTION.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. API DEPENDENCY AND THIRD-PARTY SERVICES</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>11.1.</strong> The functionality of the Impropay Application is dependent on APIs and WebViews provided by Lulu and other third-party service providers.</li>
                  <li><strong>11.2.</strong> Impronics shall not be liable for any service interruptions, delays, or failures caused by Lulu’s backend systems, API downtime, or issues with third-party telecommunications providers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. LIMITATION OF LIABILITY</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>12.1.</strong> To the maximum extent permitted by UAE law, Impronics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or funds, arising out of or related to:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>12.1.1.</strong> Your use or inability to use the Impropay Application;</li>
                      <li><strong>12.1.2.</strong> Any transaction rejected, delayed, or cancelled by Lulu;</li>
                      <li><strong>12.1.3.</strong> Any error in the Remittance Services provided by Lulu;</li>
                      <li><strong>12.1.4.</strong> Any unauthorized access to or use of Lulu’s backend systems; or</li>
                      <li><strong>12.1.5.</strong> Any regulatory action taken by the CBUAE or other authorities.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. SUSPENSION AND TERMINATION</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>13.1.</strong> Impronics may suspend or terminate your access to the Partner Application immediately and without notice if:
                    <ul className="list-none pl-6 space-y-1 mt-1">
                      <li><strong>13.1.1.</strong> You breach these Terms;</li>
                      <li><strong>13.1.2.</strong> We suspect fraudulent or illegal activity;</li>
                      <li><strong>13.1.3.</strong> We are required to do so by Lulu or any regulatory authority; or</li>
                      <li><strong>13.1.4.</strong> The agreement between Impronics and Lulu is terminated.</li>
                    </ul>
                  </li>
                  <li><strong>13.2.</strong> Upon termination, your right to use the Impropay Application will cease immediately. Termination shall not affect the validity of any transactions already processed by Lulu.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. COMPLIANCE WITH UAE AML, SANCTIONS, AND CYBERCRIME LAWS</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>14.1.</strong> You agree to comply with all applicable UAE laws, including but not limited to AML/CFT Laws and the UAE Cybercrime Law.</li>
                  <li><strong>14.2.</strong> You acknowledge that Lulu is required to report suspicious transactions to the UAE Financial Intelligence Unit (FIU).</li>
                  <li><strong>14.3.</strong> Any attempt to use the Impropay Application for money laundering, terrorist financing, or to circumvent UAE sanctions will result in immediate termination and reporting to the relevant authorities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">15. INTELLECTUAL PROPERTY</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>15.1.</strong> All intellectual property rights in the Impropay Application, including but not limited to software, code, UI/UX design, logos, and trademarks, are owned by or licensed to Impronics.</li>
                  <li><strong>15.2.</strong> You are granted a limited, non-exclusive, non-transferable, and revocable license to use the Impropay Application for your personal, non-commercial use in accordance with these Terms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">16. GOVERNING LAW AND JURISDICTION</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>16.1.</strong> These Terms shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates applicable therein.</li>
                  <li><strong>16.2.</strong> Any dispute, difference, controversy, or claim arising out of or in connection with these Terms, including any question regarding its existence, validity, interpretation, performance, or termination, shall be subject to the exclusive jurisdiction of the Dubai Courts (Onshore).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">17. SEVERABILITY</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>17.1.</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">18. FORCE MAJEURE</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>18.1.</strong> Impronics shall not be liable for any failure or delay in performing its obligations under these Terms due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, pandemic, strikes, or failure of public utilities or the internet.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">19. NOTICES</h2>
                <ul className="list-none space-y-2 leading-relaxed">
                  <li><strong>19.1.</strong> All notices to Impronics shall be sent in writing to the contact information provided below. Notices to the User may be sent via the Partner Application.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">20. CONTACT INFORMATION</h2>
                <div className="bg-slate-100 p-6 rounded-xl space-y-2 leading-relaxed">
                  <p><strong>Impronics Digitech L.L.C-FZ</strong></p>
                  <p><strong>Address:</strong> Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE</p>
                  <p><strong>Email:</strong> <a href="mailto:support@impropay.global" className="text-[#217bc6] hover:underline">support@impropay.global</a></p>
                  <p><strong>Website:</strong> <a href="https://www.impronics.com" target="_blank" rel="noopener noreferrer" className="text-[#217bc6] hover:underline">https://www.impronics.com</a></p>
                </div>
              </section>

              <section className="border-t border-slate-200 pt-8 text-sm text-slate-500 leading-relaxed">
                <p>
                  <strong>Disclaimer:</strong> Impronics Digitech L.L.C-FZ is a technology provider. Remittance services are provided by Lulu International Exchange L.L.C, which is licensed and regulated by the Central Bank of the UAE.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
