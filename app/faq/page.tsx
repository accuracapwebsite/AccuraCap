"use client";

import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <main className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          Frequently Asked <span className="italic text-accent">Questions</span>
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* FAQ Items */}
        <div className="mt-5 md:mt-7 max-w-[820px] border-t border-border">
          {faqData.map((item, i) => (
            <div key={i} className="border-b border-border">

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-0 py-4 md:py-5 text-left text-black font-medium hover:text-accent transition-colors"
              >
                <span className="text-[16px] md:text-[17.5px] leading-snug">{item.q}</span>
                <span className="text-lg shrink-0 text-muted">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div className="pb-5 text-muted text-[15.5px] md:text-[16px] leading-[1.7]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

/* === DATA === */

const faqData = [
  {
    q: "Is direct investing (without involving distributor) option available?",
    a: (
      <p>
        Yes, the option to invest directly is available. To avail it, kindly send an email to{" "}
        <span className="text-accent">clientservicing@accuracap.com</span> or call on +91 95408 34888.
      </p>
    ),
  },
  {
    q: "Is there any specified value of funds or securities below which a portfolio manager can’t accept from the client while opening the account?",
    a: (
      <p>
       As per SEBI guidelines, the minimum investment requirement for PMS is Rs. 50 lakhs/each. The
minimum investment requirement for AIF is Rs. 1 crore/each.
      </p>
    ),
  },
  {
    q: "How is PMS and AIF different from Mutual fund?",
    a: (
      <div className="overflow-x-auto mt-2">
        <table className="w-full min-w-[720px] text-[15px] md:text-[15.5px]">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Features</th>
              <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">PMS</th>
              <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">AIF</th>
              <th className="py-2.5 text-left text-black font-semibold tracking-wide">Mutual Fund</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-border">
              <td className="py-2.5 pr-4 font-medium text-black">Management</td>
              <td className="py-2.5 pr-4">Personalized portfolio management</td>
              <td className="py-2.5 pr-4">Actively managed pooled strategy</td>
              <td className="py-2.5">Standardized fund management</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2.5 pr-4 font-medium text-black">Customization</td>
              <td className="py-2.5 pr-4">High (tailored portfolios)</td>
              <td className="py-2.5 pr-4">Limited</td>
              <td className="py-2.5">None</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2.5 pr-4 font-medium text-black">Ownership</td>
              <td className="py-2.5 pr-4">Direct ownership of securities</td>
              <td className="py-2.5 pr-4">Units in pooled fund</td>
              <td className="py-2.5">Units in pooled fund</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2.5 pr-4 font-medium text-black">Minimum Investment</td>
              <td className="py-2.5 pr-4">₹50 Lakhs</td>
              <td className="py-2.5 pr-4">₹1 Crore</td>
              <td className="py-2.5">₹500–₹5,000</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-2.5 pr-4 font-medium text-black">Flexibility</td>
              <td className="py-2.5 pr-4">High</td>
              <td className="py-2.5 pr-4">Moderate (depends on fund structure)</td>
              <td className="py-2.5">Low</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 font-medium text-black">Investor Profile</td>
              <td className="py-2.5 pr-4">HNIs</td>
              <td className="py-2.5 pr-4">HNIs / Institutions</td>
              <td className="py-2.5">Retail + HNIs</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    q: "Who can sign up for PMS and AIF?",
    a: (
      <div className="space-y-3">
        <p>The following investors are eligible to invest through PMS/AIF:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hindu Undivided Families (HUF)</li>
          <li>Body corporate (Private/Public)</li>
          <li>Trust</li>
          <li>Partnership firms or any other eligible investor</li>
        </ul>
        <p className="text-xs text-muted/60">*For PMS, we accept Non-Resident Indian (NRI) except USA and Canada residents.</p>
      </div>
    ),
  },
  {
    q: "What is the Tax treatment?",
    a: (
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-black">PMS:</span> Taxation is similar to direct equity investing.
          Gains are taxed in the hands of the investor. The investor should consult his tax advisor for the same.
          The Portfolio Manager provides audited statements to assist.
        </p>
        <p>
          <span className="font-semibold text-black">AIF:</span> Tax is determined and paid at the fund (pool) level.
        </p>
      </div>
    ),
  },
  {
    q: "Is investment only in cash, or can securities be transferred?",
    a: (
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-black">PMS:</span> Apart from cash, the client can also hand over
          an existing portfolio of stocks, bonds or mutual funds. The Portfolio Manager may sell/rebalance these
          to align with the strategy.
        </p>
        <p>
          <span className="font-semibold text-black">AIF:</span> Typically cash investment; transfer of securities
          is generally not permitted.
        </p>
      </div>
    ),
  },
  {
    q: "Is premature withdrawal of Funds/securities by an investor allowed?",
    a: (
      <p>
        The funds or securities can be withdrawn or taken back before maturity. However, the terms of premature
        withdrawal depend on the agreement between the client and the portfolio manager.
      </p>
    ),
  },
  {
    q: "What is the fee structure?",
    a: (
      <div className="space-y-8 mt-2">

        {/* ═══ PMS Fee Structure ═══ */}
        <div>
          <h4 className="text-black font-semibold text-[15.5px] md:text-[16.5px] mb-3">
            PMS Fee Structure (For Distributors)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-[15px] md:text-[15.5px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Category</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Option 1: Fixed Fees</th>
                  <th className="py-2.5 text-left text-black font-semibold tracking-wide">Option 2: Fixed + Variable Fees</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">Less than 5 Crores</td>
                  <td className="py-2.5 pr-4">2.50%</td>
                  <td className="py-2.5">1.50% + 20% Incentive fees over hurdle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">Rs 5 Cr – 10 Cr</td>
                  <td className="py-2.5 pr-4">2.0%</td>
                  <td className="py-2.5">1.25% + 20% Incentive fees over hurdle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">Rs 10 Cr – 25 Cr</td>
                  <td className="py-2.5 pr-4">1.5%</td>
                  <td className="py-2.5">1.00% + 20% Incentive fees over hurdle</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4">&gt; Rs 25 Cr</td>
                  <td className="py-2.5 pr-4">1.25%</td>
                  <td className="py-2.5">0.75% + 20% Incentive fees over hurdle</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[14.5px]">
            <span className="font-medium text-black">Hurdle Rate:</span> 10% for Alpha10; 12% for PicoPower and AlphaGen; 14% for Dynamo.
          </p>
          <p className="mt-2 text-[14.5px]">
            For Direct Investors, a discount of <span className="font-medium text-black">0.5% on fixed fees</span> is applicable under both options.
          </p>
        </div>

        {/* ═══ AIF Fee Structure ═══ */}
        <div>
          <h4 className="text-black font-semibold text-[15.5px] md:text-[16.5px] mb-3">
            AIF Fee Structure (For Distributors)
          </h4>

          {/* Vectra Fund */}
          <p className="text-black font-medium text-[15px] md:text-[15.5px] mb-2">Vectra Fund</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-[15px] md:text-[15.5px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Option</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Class</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Investment Amount</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Fixed Fee (p.a.)</th>
                  <th className="py-2.5 text-left text-black font-semibold tracking-wide">Performance Fee</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4 font-medium text-black" rowSpan={3}>A) Fixed Only</td>
                  <td className="py-2.5 pr-4">A1</td>
                  <td className="py-2.5 pr-4">&lt; 10 Cr</td>
                  <td className="py-2.5 pr-4">2.0%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A2</td>
                  <td className="py-2.5 pr-4">10–25 Cr</td>
                  <td className="py-2.5 pr-4">2.0%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A3</td>
                  <td className="py-2.5 pr-4">&gt; 25 Cr</td>
                  <td className="py-2.5 pr-4">2.0%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4 font-medium text-black" rowSpan={3}>B) Fixed + Variable</td>
                  <td className="py-2.5 pr-4">A1</td>
                  <td className="py-2.5 pr-4">&lt; 10 Cr</td>
                  <td className="py-2.5 pr-4">1.25%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A2</td>
                  <td className="py-2.5 pr-4">10–25 Cr</td>
                  <td className="py-2.5 pr-4">1.0%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4">A3</td>
                  <td className="py-2.5 pr-4">&gt; 25 Cr</td>
                  <td className="py-2.5 pr-4">0.75%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* AlphaGen Next Fund */}
          <p className="text-black font-medium text-[15px] md:text-[15.5px] mt-6 mb-2">AlphaGen Next Fund</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-[15px] md:text-[15.5px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Option</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Class</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Investment Amount</th>
                  <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Fixed Fee (p.a.)</th>
                  <th className="py-2.5 text-left text-black font-semibold tracking-wide">Performance Fee</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4 font-medium text-black" rowSpan={4}>A) Fixed Only</td>
                  <td className="py-2.5 pr-4">A1</td>
                  <td className="py-2.5 pr-4">1–5 Cr</td>
                  <td className="py-2.5 pr-4">2.5%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A2</td>
                  <td className="py-2.5 pr-4">5–10 Cr</td>
                  <td className="py-2.5 pr-4">2.0%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A3</td>
                  <td className="py-2.5 pr-4">10–25 Cr</td>
                  <td className="py-2.5 pr-4">1.5%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A4</td>
                  <td className="py-2.5 pr-4">&gt; 25 Cr</td>
                  <td className="py-2.5 pr-4">1.25%</td>
                  <td className="py-2.5">—</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4 font-medium text-black" rowSpan={4}>B) Fixed + Variable</td>
                  <td className="py-2.5 pr-4">A1</td>
                  <td className="py-2.5 pr-4">1–5 Cr</td>
                  <td className="py-2.5 pr-4">1.5%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A2</td>
                  <td className="py-2.5 pr-4">5–10 Cr</td>
                  <td className="py-2.5 pr-4">1.25%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 pr-4">A3</td>
                  <td className="py-2.5 pr-4">10–25 Cr</td>
                  <td className="py-2.5 pr-4">1.0%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4">A4</td>
                  <td className="py-2.5 pr-4">&gt; 25 Cr</td>
                  <td className="py-2.5 pr-4">0.75%</td>
                  <td className="py-2.5">20% above 12% hurdle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[14.5px]">
            For Direct Investors, a discount on fixed fees is available under both options.
          </p>
        </div>

      </div>
    ),
  },
];
