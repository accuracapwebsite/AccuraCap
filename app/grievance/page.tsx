"use client";

export default function GrievancePage() {
  return (
    <main className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          Grievance
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Content */}
        <div className="mt-5 md:mt-7 space-y-5 md:space-y-7 text-muted text-[16px] md:text-[16.5px] leading-[1.75] max-w-[920px]">

          {/* Policy */}
          <section className="space-y-3.5">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-black tracking-tight leading-snug">
              Grievance Redressal Policy
            </h2>

            <p>
              Accuracap Consultancy Services Pvt. Ltd. endeavors to address all complaints regarding
              service deficiencies or causes for grievance, for whatever reason, in a reasonable time and manner.
              Accuracap realizes that quick and effective handling and resolution of customer&apos;s complaints is
              essential to provide excellent customer service.
            </p>

            <p>
              To achieve this company has a clearly documented policy for redressal of customer grievances.
              Through this policy, the company shall ensure that a suitable mechanism exists for receiving and
              addressing complaints from its customers with specific emphasis on resolving such complaints fairly
              and expeditiously.
            </p>

            <p className="font-medium text-black">
              The Policy seeks to ensure that:
            </p>

            <p>
              Grievance, if any, that may arise pursuant to the Portfolio Management Services Agreement entered
              into shall as far as possible be redressed through the administrative mechanism of the Portfolio
              Manager and in compliant to the SEBI (Portfolio Managers) Regulations 2020 and any amendments made
              thereto from time to time.
            </p>

            <p>
              Complaints shall be resolved in a proper and time bound manner with detailed advice to the customer.
              In case the resolution needs time, an interim response, acknowledging the complaint shall be issued.
              The Principal Officer/Compliance Officer shall give quarterly report of the client&apos;s complaint to the
              Directors with the details as Name of the Client, Nature of the Complaint, Date of Receipt of the
              Complaint and Status of resolving the same. For complaints remaining unresolved for a period of more
              than 15 days from the date of receipt, the Principal Officer/Compliance Officer shall provide the
              justification to the Directors.
            </p>

            <p>
              The Principal Officer shall also keep proper records of all the grievances/complaints received and
              resolved. All employees at the customer facing channels and other support departments will be
              periodically trained in handling of complaints. The quality of customer service rendered by the
              Portfolio Manager shall be reviewed/examined by Company&apos;s Top Management at regular intervals.
              The Grievance Redressal Mechanism with updated contact details and dedicated email ID shall be a part
              of Disclosure Document for Portfolio Management Services and shall be uploaded on the Portfolio
              Manager&apos;s website.
            </p>
          </section>

          {/* Mechanism */}
          <section className="space-y-3.5">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-black tracking-tight leading-snug">
              Grievance Redressal and Dispute Handling Mechanism
            </h2>

            <p>
              For the timely and proper redressal of client&apos;s complaints and grievances, the Portfolio Manager
              shall have the following Grievance Redressal and Dispute Handling Mechanism at place: The Portfolio
              Manager has appointed Mr. Ishu Singhania, Compliance Officer as a first point for the redressal of
              the Client&apos;s complaints. The Client can approach to the Compliance Officer at below mentioned
              contacts:
            </p>

            {/* Contact Box */}
            <div className="border border-border p-4 md:p-5 space-y-1.5 bg-surface/40">
              <p className="font-medium text-black">Corporate Office:</p>
              <p>Accuracap Consultancy Services Pvt. Ltd.</p>
              <p>
                <span className="font-medium text-black">Mobile:</span>{" "}
                90155 25932 / 9821653556
              </p>
              <p>
                <span className="font-medium text-black">Email:</span>{" "}
                <span className="text-accent">compliance@accuracap.com</span>
              </p>
            </div>

            <p>
              Clients can also email their complaints to a dedicated email ID i.e{" "}
              <span className="text-accent">grievances@accuracap.com</span>
            </p>

            <p>
              If the client remains dissatisfied with the remedies offered or the stand taken by the Compliance
              Officer, he/she can contact the Director(s) at: Accuracap Consultancy Services Pvt. Ltd.
            </p>

            <p>
              <span className="font-medium text-black">Email:</span>{" "}
              <span className="text-accent">director@accuracap.com</span>
            </p>

            <p>
              For disputes or differences arising between the Client and Portfolio Manager which could not be
              resolved amicably, shall be settled in accordance with and subject to the provisions of the
              Arbitration and Conciliation Act, 1996 or any statutory requirement, modification or re-enactment
              thereof for the time being in force. Such Arbitration proceedings shall be held at New Delhi.
              All the legal actions and proceedings are subject to the jurisdiction of court in Delhi only and are
              governed by Indian Law.
            </p>

            <p>
              Investors may also register/lodge complaints to SEBI through its online portal SCORES
              (SEBI COMPLAINTS REDRESS SYSTEM). The link to access SCORES is{" "}
              <a
                href="http://scores.gov.in/"
                target="_blank"
                className="text-accent underline hover:text-accent-dark transition-colors"
              >
                http://scores.gov.in/
              </a>{" "}
              and investors can file complaints by clicking &ldquo;Complaint Registration&rdquo; and &ldquo;Investor Corner&rdquo;.
              SCORES facilitates investors to lodge complaint online with SEBI and subsequently view its status.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
