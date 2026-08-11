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
              Last updated: October 2023
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-slate max-w-none text-slate-700">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Impropay ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p className="leading-relaxed mt-4">
                  You agree that by accessing the Site and using our services, you have read, understood, and agree to be bound by all of these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The Services</h2>
                <p className="leading-relaxed">
                  Impropay provides international money transfer services, allowing you to send funds to recipients in supported countries. We reserve the right to modify, suspend, or discontinue the Services at any time, for any reason, without notice to you.
                </p>
                <p className="leading-relaxed mt-4">
                  We may also impose limits on certain features or restrict your access to parts or all of the Services without notice or liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
                <p className="leading-relaxed">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                  <li>You are not a minor in the jurisdiction in which you reside.</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Fees and Exchange Rates</h2>
                <p className="leading-relaxed">
                  You agree to pay the fees for the Services as displayed on the Site at the time you initiate a transaction. Exchange rates are subject to fluctuation and may change between the time you initiate a transaction and the time it is processed. The final rate will be clearly displayed before you confirm your transfer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
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
