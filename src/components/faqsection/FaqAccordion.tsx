"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqData = [
  {
    category: "Getting Started & Verification",
    questions: [
      {
        q: "How do I create an ImproPay account?",
        a: "Download the ImproPay app, register using your mobile number, and complete the identity verification process. Once verification is complete, you can send money securely through ImproPay."
      },
      {
        q: "Why do I need to verify my identity before sending money?",
        a: "Identity verification is required to comply with applicable financial regulations and to protect your account against fraud. Verification must be completed before you can send money."
      },
      {
        q: "What documents do I need to verify my account?",
        a: "You need a valid Emirates ID and any additional information requested during the verification process. Ensure that all documents are clear, valid, and match the details registered on your account."
      },
      {
        q: "How long does account verification take?",
        a: "Account verification takes less than 2 minutes when all required documents are uploaded correctly and are clearly visible. Additional verification checks may require more time."
      },
      {
        q: "Why was my verification rejected?",
        a: "If your verification is rejected, contact our support team at support@impropay.global for assistance."
      },
      {
        q: "Can I use the app before my account is verified?",
        a: "Yes. You can access the app and view live exchange rates before completing verification. Identity verification is required before you can send money. For assistance, contact support@impropay.global."
      }
    ]
  },
  {
    category: "Sending & Receiving Money",
    questions: [
      {
        q: "How long does it take for my money to reach the recipient?",
        a: "ImproPay provides instant settlements for supported transfers. The settlement status can be viewed in the app."
      },
      {
        q: "Will I know the exchange rate and charges before I send money?",
        a: "Yes. Before you confirm the transfer, you will see the applicable exchange rate, transfer charges, and the exact amount the recipient will receive."
      },
      {
        q: "Can I track my money transfer?",
        a: "Yes. Once your transfer is initiated, you can track its status from the Track Transaction Status screen or view it at any time in Transaction History."
      },
      {
        q: "Can I cancel or edit my transfer after it's been sent?",
        a: "No. Once a transfer has been submitted, it cannot be cancelled or edited. Review all transfer details carefully before confirming the transaction."
      },
      {
        q: "What should I do if my recipient hasn't received the money?",
        a: "If the recipient has not received the transfer, contact our support team at support@impropay.global. We will verify the transaction status and assist with the next steps."
      }
    ]
  },
  {
    category: "ImproPay Rewards",
    questions: [
      {
        q: "How can I earn ImproPay Rewards?",
        a: "You earn ImproPay Rewards points when you complete a successful transfer. You can also earn points through the referral program when an eligible referral is completed."
      },
      {
        q: "Where can I see my ImproPay reward points?",
        a: "View your total reward points on the IMPRO Rewards screen in the ImproPay app. Your balance includes points earned through transfers and referrals."
      },
      {
        q: "When will my reward points be added?",
        a: "Reward points are credited immediately after a successful transfer. Points are not credited for transactions that fail, are cancelled, or are refunded."
      },
      {
        q: "Do my ImproPay reward points expire?",
        a: "No. ImproPay Rewards points do not expire and can be redeemed in accordance with the available rewards."
      },
      {
        q: "What can I redeem my reward points for?",
        a: "You can redeem your points for eligible coupons and gift cards available in the ImproPay Rewards Store."
      },
      {
        q: "Is there a limit to how many rewards I can earn or redeem?",
        a: "No. There are no limits on earning or redeeming reward points. Points can be earned through eligible transfers and referrals and redeemed through the ImproPay Rewards Store."
      }
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is ImproPay safe to use for sending money?",
        a: "Yes. ImproPay uses secure payment processing, industry-standard encryption, and KYC verification to protect your funds and personal information. Your account is also protected through OTP verification and biometric authentication."
      },
      {
        q: "Who regulates ImproPay?",
        a: "ImproPay operates through LuLu Exchange House, a licensed and regulated partner. LuLu Exchange House conducts the required fraud prevention and anti-money laundering (AML) checks for transactions."
      },
      {
        q: "How does ImproPay keep my account secure?",
        a: "Your account is protected through multiple security measures. Sign-in uses mobile and email OTP verification, with biometric authentication available for secure access. Customer data is restricted to authorised personnel."
      },
      {
        q: "How is my personal information protected?",
        a: "We use industry-standard encryption protocols to protect your personal and financial information and comply with applicable UAE data protection regulations. ImproPay maintains a strict privacy policy and does not sell your personal data to third parties."
      },
      {
        q: "What happens if my Emirates ID expires?",
        a: "Upload your new, valid Emirates ID before initiating another transfer. Keeping your identity documents up to date is required to maintain a secure and compliant account."
      },
      {
        q: "What should I do if I notice a suspicious or unauthorised transaction?",
        a: "Contact our support team immediately at support@impropay.global. We will review the transaction and guide you through the required next steps."
      }
    ]
  },
  {
    category: "Account Management & Troubleshooting",
    questions: [
      {
        q: "How do I add a beneficiary?",
        a: "Add a beneficiary while setting up an International Money Transfer. After starting the payment process, select Add Beneficiary and enter the required details. Bank details of an existing beneficiary cannot be edited. To use different bank details, add a new beneficiary with the correct information."
      },
      {
        q: "Can I have more than one ImproPay account?",
        a: "No. Each mobile number and email address can be linked to only one ImproPay account. This helps maintain the security and integrity of your account and transaction history."
      },
      {
        q: "What should I do if my transfer is taking longer than expected?",
        a: "First, check the transfer status in Track Transaction Status or Transaction History. ImproPay provides instant settlements for supported transfers. If the settlement has not been reflected, contact support@impropay.global for assistance."
      },
      {
        q: "I didn't receive my OTP. What should I do?",
        a: "Check your internet connection and confirm that your registered mobile number or email address is correct. Request the OTP again and check your spam or junk folder for email OTPs. If you still do not receive the OTP, contact support@impropay.global."
      },
      {
        q: "Why is my ImproPay account locked?",
        a: "Your account is temporarily locked after three unsuccessful password attempts as a security measure. You will then be asked security questions to recover your account and regain access."
      },
      {
        q: "How do I close my ImproPay account?",
        a: "You can deactivate your account from the app. Go to Settings → Deactivate My Account and follow the on-screen instructions."
      }
    ]
  },
  {
    category: "Support & Payments",
    questions: [
      {
        q: "How can I pay for my ImproPay transfer?",
        a: "You can fund your transfer using a Visa or Mastercard debit card or a UAE bank transfer. Available payment options are displayed at checkout before you confirm the transfer."
      },
      {
        q: "Can I see my payment options before I confirm a transfer?",
        a: "Yes. All available funding methods and applicable processing options are displayed at checkout before you confirm the transfer."
      },
      {
        q: "How can I contact ImproPay support?",
        a: "For basic assistance, contact us through the in-app chat. For transaction-specific or detailed support, email support@impropay.global with your registered account details and transaction reference number, if applicable."
      },
      {
        q: "Is ImproPay customer support available 24/7?",
        a: "Yes. Our support team monitors inquiries 24/7. We aim to respond to all queries within 24 business hours."
      },
      {
        q: "What should I do if I have an issue with a completed transfer?",
        a: "Contact support@impropay.global if you have an issue with a completed transfer. Include your transaction reference number and a clear description of the issue so our team can review it and guide you through the next steps."
      },
      {
        q: "How do I raise a formal complaint or dispute?",
        a: "Email support@impropay.global with the subject line \"Formal Complaint\". Include your account details, transaction reference number, if applicable, and a clear description of the issue. We will acknowledge your complaint within 24 hours and aim to provide a full resolution within 5 business days."
      }
    ]
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      className="space-y-12"
    >
      {faqData.map((section, sIndex) => (
        <motion.div variants={fadeUp} key={sIndex}>
          <h2 className="heading-md mb-6 text-[#217bc6]">{section.category}</h2>
          <div className="card overflow-hidden">
            {section.questions.map((faq, qIndex) => {
              const currentIndex = `${sIndex}-${qIndex}`;
              const isOpen = openIndex === currentIndex;
              return (
                <div key={qIndex} className="faq-item border-b border-slate-200 last:border-0">
                  <button
                    onClick={() => toggleAccordion(currentIndex)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-slate-800 pr-8">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

