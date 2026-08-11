"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqData = [
  {
    category: "Getting started & verification",
    questions: [
      {
        q: "What is ImproPay and how does it work?",
        a: "ImproPay is a smart cross-border remittance app designed to make sending money from the UAE fast, secure, and affordable. In partnership with licensed financial institutions like Lulu International Exchange, ImproPay connects directly to global banking rails and mobile wallets to deliver your money internationally within minutes."
      },
      {
        q: "Which countries can I send money to from the UAE?",
        a: "You can send money across major remittance corridors including India, Pakistan, Egypt, the Philippines, Bangladesh, Sri Lanka, Nepal, Nigeria, and more than 190 destinations worldwide."
      },
      {
        q: "Is ImproPay available on both Android and iOS?",
        a: "Yes, the ImproPay mobile application is available for free download on both the Apple App Store (iOS) and Google Play Store (Android)."
      },
      {
        q: "How do I create an ImproPay account?",
        a: "Simply download the ImproPay app, enter your UAE mobile number and email address, confirm the verification OTP, and complete the quick digital ID verification using your valid Emirates ID."
      },
      {
        q: "What documents do I need to register?",
        a: "To register as a UAE resident, you only need a valid original Emirates ID for digital scanning and a UAE-registered mobile number."
      },
      {
        q: "Can I use ImproPay without a UAE bank account?",
        a: "Yes! You can easily fund your transfers using UAE-issued debit cards, credit cards, Apple Pay, Google Pay, or supported digital payment methods without needing a direct net-banking login."
      },
      {
        q: "Why do I need to verify my identity?",
        a: "Identity verification (KYC) is a mandatory legal requirement under the Central Bank of the UAE (CBUAE) and global Anti-Money Laundering (AML) regulations to protect your account against identity theft and financial fraud."
      },
      {
        q: "How long does verification take?",
        a: "Our automated digital verification system scans and verifies your Emirates ID in under 2 to 5 minutes so you can start sending money right away."
      },
      {
        q: "My Emirates ID verification failed — what should I do?",
        a: "Ensure your physical card is valid (not expired), clean, and placed on a flat, well-lit surface without camera glare during scanning. If you still encounter issues, contact our 24/7 support at support@impropay.global for quick assistance."
      },
      {
        q: "Can I send money before my account is fully verified?",
        a: "No. In strict compliance with UAE regulatory safeguards, every user account must complete full identity verification before executing any financial transaction."
      },
      {
        q: "Why is the exchange rate different today than it was yesterday?",
        a: "Foreign currency exchange rates fluctuate continuously based on real-time global market trends, interest rates, and trade dynamics. ImproPay tracks live interbank rates to consistently offer transparent, competitive pricing."
      }
    ]
  },
  {
    category: "Sending & receiving money",
    questions: [
      {
        q: "How do I send money using ImproPay?",
        a: "Open the app, pick your destination country, enter the transfer amount to view the live rate and fees, select or add a recipient, choose the payout method (Bank, Mobile Wallet, or Cash Pickup), pay securely with your card, and track the delivery in real-time."
      },
      {
        q: "What are the transfer fees?",
        a: "ImproPay provides transparent low-cost pricing with zero hidden markups. The exact transfer fee and guaranteed exchange rate are always shown clearly before you confirm the transaction."
      },
      {
        q: "Can I use my corporate/business debit card to fund a personal transfer?",
        a: "No. Under UAE financial regulations, personal remittance accounts can only be funded using personal cards or accounts registered under your own legal name."
      },
      {
        q: "What should I do if my transaction fails but the money was deducted from my bank account?",
        a: "If a transaction fails due to a network timeout, the deducted funds are automatically reversed to your bank account within 24 to 48 banking hours. You can also share your reference ID with support@impropay.global for immediate tracking."
      },
      {
        q: "Do I need to pay any taxes on the money I send abroad from the UAE?",
        a: "No. The UAE does not charge any personal income tax or remittance tax on outbound overseas money transfers."
      },
      {
        q: "What happens if I accidentally close the app while a transfer is processing?",
        a: "Once your payment authorization goes through, the transfer continues processing securely on our backend servers. You can reopen the app anytime to view the live status in your transaction history."
      },
      {
        q: "Can I send money to someone who does not have a bank account?",
        a: "Yes! You can select instant mobile wallets (such as GCash, bKash, Easypaisa, or JazzCash) or Cash Pickup at thousands of partner agent branches worldwide."
      },
      {
        q: "Is there a limit on how many Recipient (Receiver)s I can save in my account?",
        a: "No, there is no limit. You can save as many frequent beneficiaries (family, friends, or associates) as you like for fast 1-tap re-sends."
      },
      {
        q: "Can I send money during weekends or public holidays?",
        a: "Yes! ImproPay operates 24/7/365. Instant mobile wallet and real-time bank transfers process seamlessly around the clock, even on public holidays."
      },
      {
        q: "What exchange rate does ImproPay use?",
        a: "ImproPay offers competitive mid-market rates powered by our institutional liquidity network, with transparent pricing and no inflated foreign exchange margins."
      },
      {
        q: "What is the minimum and maximum transfer amount?",
        a: "The minimum transfer typically starts at 50 AED. Maximum daily and monthly limits depend on your account tier and destination country regulations, viewable inside your app profile."
      },
      {
        q: "How long does a transfer take to reach my Recipient (Receiver)?",
        a: "Most transfers to instant mobile wallets and major bank accounts arrive in under 2 minutes. Standard bank transfers to regional branches typically complete within 1 business day."
      },
      {
        q: "Can I schedule a recurring transfer?",
        a: "Yes, you can easily configure recurring auto-transfers on a weekly or monthly schedule to manage family support or overseas bills effortlessly."
      },
      {
        q: "Can I cancel a transfer after it is sent?",
        a: "If the funds have already been deposited or collected, the transfer cannot be cancelled. However, if the payment is still pending processing, you can request an instant cancellation directly in the app or via support."
      },
      {
        q: "How will I know when my transfer is complete?",
        a: "Both you and your recipient receive real-time push notifications, SMS updates, and an official email receipt as soon as the funds are successfully delivered."
      },
      {
        q: "What payout methods are available for Recipient (Receiver)s?",
        a: "We support Direct Bank Account Deposit, Instant Mobile Wallet Transfers (e.g. bKash, GCash, UPI, etc.), and Cash Pickup at authorized agent counters."
      },
      {
        q: "Can I send money to a joint bank account abroad?",
        a: "Yes, provided the recipient name on your ImproPay transfer matches one of the primary legal account holders on the joint account."
      },
      {
        q: "Does my Recipient (Receiver) need an ImproPay account to receive money?",
        a: "No! Your recipient does not need to download the app or create an account. The funds go directly into their local bank account, wallet, or cash collection point."
      },
      {
        q: "What happens if my Recipient (Receiver)'s bank details are incorrect?",
        a: "If the beneficiary bank rejects the transfer due to incorrect details, the transaction will fail and your funds will be credited back to your funding source."
      },
      {
        q: "What details do I need to send money straight to a bank account?",
        a: "You'll need the recipient's full legal name, bank name, account number/IBAN, and the relevant routing identifier (e.g. IFSC code for India, Sort Code for the UK, Routing Number, etc.)."
      },
      {
        q: "Why must the Recipient (Receiver)'s name matches their government ID exactly?",
        a: "Banking networks and AML compliance filters require an exact match with official government IDs to prevent erroneous credits and financial fraud."
      },
      {
        q: "Can I edit or change or delete a Recipient (Receiver)'s details after saving them?",
        a: "Yes, you can edit, update, or remove any saved recipient details at any time by heading to the 'Recipients' section in your app settings."
      }
    ]
  },
  {
    category: "ImproPay rewards",
    questions: [
      {
        q: "What is the ImproPay rewards program?",
        a: "ImproPay Rewards is our exclusive loyalty program designed to thank you for sending money. You collect points with every transfer that can be redeemed for fee discounts, rate boosters, and partner vouchers."
      },
      {
        q: "How do I earn rewards points?",
        a: "Points are automatically credited to your account whenever you complete an international transfer, refer friends, or participate in seasonal promotional campaigns."
      },
      {
        q: "How can my Recipient (Receiver) redeem rewards?",
        a: "Senders can redeem points inside the app for rate boosters or digital gift vouchers that can be shared directly with recipients for use at partner merchant stores."
      },
      {
        q: "Do rewards points expire?",
        a: "Reward points generally remain valid for 12 months from the date they are earned. You can track your points and upcoming expirations directly on the Rewards dashboard."
      },
      {
        q: "Can I transfer my rewards to someone else?",
        a: "Rewards points are non-transferable between individual accounts, but you can redeem them for digital vouchers and gift cards to share with loved ones."
      },
      {
        q: "Which merchants or partners are part of the rewards program?",
        a: "We partner with leading regional retail, lifestyle, dining, and utility partners across the UAE and destination corridors to bring you valuable discounts."
      }
    ]
  },
  {
    category: "Security & compliance",
    questions: [
      {
        q: "Is ImproPay Licensed and Regulated?",
        a: "Yes. Financial and remittance services on the ImproPay platform are executed through Lulu International Exchange L.L.C, licensed and regulated by the Central Bank of the UAE (CBUAE). ImproPay operates in strict compliance with UAE Federal Decree-Law No. 45 of 2021 (PDPL)."
      },
      {
        q: "Is my personal data safe with ImproPay?",
        a: "Your data is protected with 256-bit TLS 1.3 encryption, biometric authentication, and strict adherence to the UAE Personal Data Protection Law (PDPL). We never sell your personal information."
      },
      {
        q: "What should I do if my Emirates ID is about to expire?",
        a: "You will receive an in-app reminder to scan your renewed Emirates ID. Simply follow the prompts in your Profile settings to maintain uninterrupted service."
      },
      {
        q: "What should I do if I notice an unauthorised transaction?",
        a: "Immediately lock your account from the Security Settings inside the app and contact our emergency fraud desk at support@impropay.global for immediate investigation."
      },
      {
        q: "Does ImproPay use two-factor authentication (2FA)?",
        a: "Yes. Every login, sensitive action, and transaction authorization is safeguarded with multi-factor authentication (SMS OTP, Email verification, and Biometrics)."
      },
      {
        q: "How does ImproPay prevent fraud and money laundering?",
        a: "We implement advanced real-time AI fraud monitoring, continuous sanctions screening, and automated risk scoring in compliance with UAE and global AML/CFT standards."
      },
      {
        q: "What happens to my data if I deactivate my account?",
        a: "Upon deactivation, your data is retained strictly as mandated by Central Bank statutory record-keeping regulations, after which it is securely deleted or anonymized."
      }
    ]
  },
  {
    category: "Account management & troubleshooting",
    questions: [
      {
        q: "How do I Reset/Change my password?",
        a: "Tap 'Forgot Password' on the login screen, enter your registered phone number or email, and verify your identity via OTP to create a new secure password."
      },
      {
        q: "Can I have more than one ImproPay account?",
        a: "No. In accordance with UAE banking regulations, each user is permitted only one individual account linked to their unique Emirates ID."
      },
      {
        q: "How do I add Recipient (Receiver)s?",
        a: "Go to the 'Recipients' tab in the app, click 'Add New Recipient', choose the destination country and payout method, and fill in the required beneficiary details."
      },
      {
        q: "How do I close/Delete my ImproPay account?",
        a: "You can request account deletion directly from the 'Privacy & Security' settings in your app or by emailing contact@impropay.global."
      },
      {
        q: "My transfer is delayed — what should I do?",
        a: "Check the in-app transfer status tracker. Delays may occasionally arise from beneficiary bank processing windows or routine compliance checks. You can also reach our 24/7 support team with your transaction reference number."
      },
      {
        q: "The app is not Loading or Crashing — how do I fix it?",
        a: "Make sure you have installed the latest app update from the App Store or Google Play. If the issue persists, clear the app cache or reinstall the application."
      },
      {
        q: "I did not receive my OTP — what should I do?",
        a: "Check that your mobile device has active cellular reception and is not filtering automated SMS. Wait 60 seconds and tap 'Resend OTP', or request verification via email."
      },
      {
        q: "Why is my account locked or suspended?",
        a: "Accounts may be temporarily restricted due to repeated incorrect password attempts, expired ID documents, or routine security reviews. Contact support@impropay.global for fast reactivation."
      }
    ]
  },
  {
    category: "Support & payments",
    questions: [
      {
        q: "What payment methods can I use to fund my transfer?",
        a: "You can fund transfers using UAE-issued Visa/Mastercard debit cards, credit cards, Apple Pay, Google Pay, and supported instant digital payment methods."
      },
      {
        q: "Is my card information stored securely?",
        a: "Yes. All card payments are processed via PCI-DSS Level 1 certified gateways with end-to-end tokenization. ImproPay never stores raw card numbers or CVV codes."
      },
      {
        q: "Why was my card payment declined?",
        a: "Declines typically happen due to insufficient funds, 3D-Secure OTP failure, or your bank's security filters on remittance payments. Contact your bank to ensure international/remittance transactions are enabled."
      },
      {
        q: "How do I contact ImproPay customer support?",
        a: "You can reach us 24/7 via in-app live chat, email at support@impropay.global, or through our official WhatsApp support channel."
      },
      {
        q: "What are your customer support hours?",
        a: "Our customer support team is available 24 hours a day, 7 days a week, 365 days a year to assist you whenever you need help."
      },
      {
        q: "How do I raise a complaint or dispute?",
        a: "Please email support@impropay.global with your transaction number and issue details. Our dedicated dispute resolution team investigates and addresses complaints within 24 to 48 business hours."
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
          <h2 className="heading-md mb-6 text-blue-900">{section.category}</h2>
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
