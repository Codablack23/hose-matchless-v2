import { useState } from "react";

const faqs = [
    {
        q: "What is an invitation letter and why do I need one?",
        a: "An invitation letter is an official document from Hose Matchless Global Ltd confirming your registration for ICEC Canada 2026. You use this letter to apply for a Canadian visitor visa at your nearest Canadian embassy or visa application centre. Every letter includes your name, passport details, event details, a unique reference number, and a verification QR code.",
    },
    {
        q: "Does the invitation letter guarantee a Canadian visa?",
        a: "No. The invitation letter confirms your conference registration only. Visa decisions are made solely by the Government of Canada and its immigration officers. Hose Matchless Global Ltd bears no responsibility for any visa outcome.",
    },
    {
        q: "When will I receive my invitation letter?",
        a: "Within 2 minutes of your payment being confirmed. The letter is automatically generated as a PDF and emailed to you. You can also download it directly from the confirmation page.",
    },
    {
        q: "What is the difference between the four packages?",
        a: "$100 — Online Delegate: watch all 6 days from home via Zoom. $250 — In-Person Standard: attend venue Nov 21–22, receive conference bag, T-shirt, and training materials. $500 — MVP/VIP: front-row seating, personalised bag, VIP dinner, speaker meet & greet. $1,500 — Keynote Speaker: present at the conference, receive the ICEC Excellence Award, Speaker Certificate, and full VIP treatment.",
    },
    {
        q: "How do I apply to be a keynote speaker?",
        a: 'Scroll to the "Apply to Speak" section on this page. Fill in the application form and select your area of interest — your presentation topic is assigned automatically. After your application is reviewed and approved, you will receive a payment link for $1,500 for your Keynote Speaker Invitation Letter.',
    },
    {
        q: "Can I verify my invitation letter?",
        a: "Yes. Any invitation letter can be verified at www.hosematchless.com/verify using the reference number printed on the letter or your passport number. Embassy officers can also use this portal to verify your letter is genuine.",
    },
    {
        q: "What payment methods are accepted?",
        a: "We accept credit cards, debit cards, Apple Pay, and Google Pay via Stripe — and PayPal as an alternative. All payments are secured with 256-bit SSL encryption.",
    },
    {
        q: "Is there accommodation support for in-person delegates?",
        a: "Yes. We have partner hotels near the Grand Victorian Convention Centre in Mississauga. Hotel details and conference discount codes are sent to all in-person delegates after their invitation letter is issued. Contact info@hosematchless.com for recommendations.",
    },
];

export function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    function toggleFaq(i: number) {
        setOpenIndex((prev) => (prev === i ? null : i));
    }

    return (
        <section id="faq" className="alt-bg">
            <div className="sec-label">Questions</div>
            <h2 className="sec-title">Frequently asked questions</h2>
            <div className="sec-div"></div>

            <div className="faq-list" id="faq-list">
                {faqs.map((f, i) => (
                    <div key={i} className="faq-item">
                        <div
                            className={`faq-q${openIndex === i ? " open" : ""}`}
                            onClick={() => toggleFaq(i)}
                        >
                            {f.q}
                            <i>⌄</i>
                        </div>
                        <div
                            className={`faq-a${openIndex === i ? " show" : ""}`}
                        >
                            {f.a}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                    href="mailto:info@hosematchless.com"
                    style={{
                        fontSize: "12px",
                        color: "var(--blue)",
                        textDecoration: "none",
                    }}
                >
                    ✉ Can't find your answer? Email info@hosematchless.com
                </a>
            </div>
        </section>
    );
}
