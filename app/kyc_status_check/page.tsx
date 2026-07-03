"use client";

export default function KYCPage() {
  return (
    <div className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          KYC Status <span className="italic text-accent">Check</span>
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Alert */}
        <div className="mt-5 md:mt-7 border border-accent/30 bg-accent/5 px-5 md:px-6 py-3.5 max-w-[920px]">
          <p className="text-accent font-semibold text-[14.5px] md:text-[15px] uppercase tracking-[0.14em]">
            Has your KYC status changed?
          </p>
        </div>

        {/* Content */}
        <div className="mt-5 md:mt-7 space-y-5 md:space-y-7 text-muted text-[16px] md:text-[16.5px] leading-[1.75] max-w-[920px]">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              What is the change from <span className="text-[18px]">1</span><sup>st</sup> April 2024?
            </h2>

            <p>
              SEBI vide circular SEBI/HO/MIRSD/FATF/P/CIR/2023/0144 dated 11th August 2023,
              as a risk management framework advised that KYC Registration Agencies (KRAs)
              shall verify the following attributes of KYC:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>PAN (including PAN Aadhaar linkage, as referred to in rule 114 AAA of the Income Tax Rules, 1962)</li>
              <li>Name</li>
              <li>Address</li>
              <li>Client&apos;s Mobile Number and Email ID</li>
            </ul>

            <p>
              The records of those clients in respect of which all the above attributes are verified by KRAs
              with an official database (such as the Income Tax database on PAN, Aadhaar XML/DigiLocker/M-Aadhaar)
              shall be considered as validated records.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              What are the attributes affecting your KYC status?
            </h2>

            <p>
              The KRAs have changed the KYC status of all existing KYC complied investors after validating
              above 4 attributes such as PAN, Name and Address with the official database and Email ID/Mobile
              number (where provided) as follows:
            </p>

            <div className="flex flex-wrap gap-3">
              {["KYC Validated", "KYC Registered", "KYC On Hold"].map((status) => (
                <span key={status} className="px-3.5 py-1.5 bg-surface border border-border text-[13px] font-medium text-black uppercase tracking-[0.16em]">
                  {status}
                </span>
              ))}
            </div>
          </section>

          {/* Table */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              What are the implications?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-[15px] md:text-[15.5px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">KYC Status</th>
                    <th className="py-2.5 pr-4 text-left text-black font-semibold tracking-wide">Existing AMC</th>
                    <th className="py-2.5 text-left text-black font-semibold tracking-wide">New AMC</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-2.5 pr-4 font-medium text-black">KYC Validated</td>
                    <td className="py-2.5 pr-4">No implications.</td>
                    <td className="py-2.5">No implications.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2.5 pr-4 font-medium text-black">KYC Registered</td>
                    <td className="py-2.5 pr-4">
                      All financial transactions only in the AMC where investor already has investment are allowed.
                    </td>
                    <td className="py-2.5">
                      Investors need to submit the set of KYC documents every time they invest with a new AMC.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-medium text-black">KYC On Hold</td>
                    <td className="py-2.5 pr-4">
                      Investor will be able to transact after remediating the reason for KYC status On Hold.
                    </td>
                    <td className="py-2.5">
                      Investor will be able to transact after remediating the reason for KYC status On Hold.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              How can investors check their KYC status?
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Visit your KRA website (links below)</li>
              <li>Click on KYC enquiry</li>
              <li>Enter your PAN details and submit</li>
              <li>The details displayed will indicate the proof used for your KYC</li>
            </ul>

            <p>For further assistance, contact the Mutual Fund or RTA helpline.</p>
          </section>

          {/* Links */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              KYC Contact Details Validation Links
            </h2>

            <ul className="space-y-2 text-[15.5px] md:text-[16px]">
              {[
                { name: "CAMS KRA", url: "https://camskra.com/PanDetailsUpdate.aspx" },
                { name: "CVL KRA", url: "https://validate.cvlindia.com/CVLKRAVerification_V1" },
                { name: "NDML KRA", url: "https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" },
                { name: "KARVY KRA", url: "https://www.karvykra.com/KYC_Validation/Default.aspx" },
              ].map((link) => (
                <li key={link.name} className="flex flex-wrap items-center gap-2">
                  <span className="h-px w-3 bg-accent" />
                  <span className="font-medium text-black">{link.name}:</span>
                  <a href={link.url} target="_blank" className="text-accent hover:text-accent-dark transition-colors break-all">
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* PAN Aadhaar Links */}
          <section className="space-y-3">
            <h2 className="font-semibold text-black uppercase text-[13px] tracking-[0.2em]">
              KYC PAN Aadhaar Validation Links
            </h2>

            <ul className="space-y-2 text-[15.5px] md:text-[16px]">
              {[
                { name: "CAMS KRA", url: "https://camskra.com/pan_aadhaarlink.aspx" },
                { name: "CVL KRA", url: "https://validate.cvlindia.com/CVLKRAVerification_V1" },
                { name: "NDML KRA", url: "https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientInitiatedKYC" },
              ].map((link) => (
                <li key={link.name} className="flex flex-wrap items-center gap-2">
                  <span className="h-px w-3 bg-accent" />
                  <span className="font-medium text-black">{link.name}:</span>
                  <a href={link.url} target="_blank" className="text-accent hover:text-accent-dark transition-colors break-all">
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
