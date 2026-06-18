import { client } from "@/sanity/lib/client";
import { REGISTERED_OFFICE_QUERY } from "@/sanity/lib/queries";
import ContactForm from "./ContactForm";

// ISR: re-render from Sanity at most once every 60s so CMS edits appear live.
export const revalidate = 60;

type RegisteredOffice = {
  _id: string;
  heading: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
};

export default async function ContactPage() {
  const registeredOffice = await client.fetch<RegisteredOffice | null>(
    REGISTERED_OFFICE_QUERY
  );

  return (
    <main className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          Contact <span className="italic text-accent">Us</span>
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        <p className="mt-6 text-[16px] md:text-[17.5px] text-black/75 max-w-[640px] leading-[1.7]">
          For direct onboarding or any query, please contact us at{" "}
          <span className="text-black font-medium whitespace-nowrap">info@accuracap.com</span> or{" "}
          <span className="text-black font-medium whitespace-nowrap">+91 98216 53556</span>
        </p>

        {/* Content */}
        <div className="mt-5 md:mt-7 grid md:grid-cols-2 gap-7 md:gap-9">

          {/* Form */}
          <ContactForm />

          {/* Right side */}
          <div className="space-y-6">

            <div>
              <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-2">Corporate Office</p>
              <p className="text-black/75 text-[16px] md:text-[17.5px] leading-[1.7]">
                Office Number 919, 9th Floor,
                <br />
                Wave Silver Tower, Sector 18,
                <br />
                Noida, Uttar Pradesh 201301
                <br />
                Contact No: +91 98216 53556
              </p>
            </div>

            {registeredOffice && (
              <div>
                <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-2">
                  {registeredOffice.heading}
                </p>
                <p lang="en" className="text-black/75 text-[16px] md:text-[17.5px] leading-[1.7]">
                  {registeredOffice.addressLine1}
                  {registeredOffice.addressLine2 && (
                    <>
                      <br />
                      {registeredOffice.addressLine2}
                    </>
                  )}
                  {registeredOffice.addressLine3 && (
                    <>
                      <br />
                      {registeredOffice.addressLine3}
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-5 md:mt-7 border border-border overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Wave%20Silver%20Tower%20Noida&output=embed"
            className="w-full h-[300px] md:h-[380px]"
            loading="lazy"
            title="Map showing AccuraCap corporate office at Wave Silver Tower, Noida"
          ></iframe>
        </div>

      </div>
    </main>
  );
}
