import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PMS_DOCUMENTS_QUERY } from "@/sanity/lib/queries";

// ISR: re-render this page from Sanity at most once every 60s so CMS
// edits (e.g. updated PDFs) appear on the live site without a redeploy.
export const revalidate = 60;

type PmsDocument = {
  _id: string;
  title: string;
  displayType: "embed" | "download";
  fileUrl: string;
  order: number;
};

export default async function PMSPage() {
  const allDocs = await client.fetch<PmsDocument[]>(PMS_DOCUMENTS_QUERY);

  return (
    <main className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          PMS
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Details */}
        <div className="mt-5 md:mt-7 grid md:grid-cols-2 gap-7 md:gap-9 items-center">

          {/* Left — info */}
          <div className="space-y-5">
            <div>
              <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-1.5">SEBI Registration Number</p>
              <p className="text-[16px] md:text-[17.5px] text-black">INP000008844</p>
            </div>

            <div>
              <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-1.5">UPI ID for Additional Investment</p>
              <p className="text-[16px] md:text-[17.5px] text-black font-medium">accuracap.pms@validibl</p>
            </div>

            <div>
              <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-1.5">Authorised Person</p>
              <p className="text-[16px] md:text-[17.5px] text-muted">Motilal Oswal Financial Services Pvt Ltd</p>
              <p className="text-[13.5px] text-muted mt-1">NSE: AP0297117363, BSE: AP01044601104990</p>
            </div>
          </div>

          {/* Right — QR centered */}
          <div className="flex flex-col items-center">
            <div className="border border-border rounded-lg p-5 bg-surface shadow-sm">
              <Image
                src="/pms-qr.png"
                alt="QR code linking to AccuraCap PMS additional investment UPI"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-[13px] text-black/65 tracking-[0.18em] uppercase">Scan to invest</p>
          </div>

        </div>

        {/* Documents — driven entirely by Sanity CMS */}
        {allDocs.length > 0 && (
          <div className="mt-5 md:mt-7">
            <h2 className="text-[26px] sm:text-[30px] md:text-[35px] text-black mb-6 md:mb-8 leading-[1.2] tracking-tight">
              Disclosures &amp; Compliance
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {allDocs.map((doc) =>
                doc.displayType === "download" ? (
                  <div key={doc._id} className="border border-border p-7 flex flex-col items-center justify-center text-center">
                    <h3 className="text-[16px] md:text-[17.5px] font-semibold text-black mb-3">{doc.title}</h3>
                    <a
                      href={`${doc.fileUrl}?dl=`}
                      download
                      className="text-accent text-[15px] font-medium hover:text-accent-dark transition-colors"
                    >
                      Click here to download
                    </a>
                  </div>
                ) : (
                  <div key={doc._id} className="border border-border overflow-hidden">
                    <div className="px-5 md:px-6 py-3.5 bg-surface border-b border-border">
                      <h3 className="text-[16px] md:text-[17.5px] font-semibold text-black">{doc.title}</h3>
                    </div>
                    <iframe src={doc.fileUrl} title={doc.title} className="w-full h-[260px] md:h-[300px]" />
                  </div>
                )
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
