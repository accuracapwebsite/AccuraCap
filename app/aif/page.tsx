import { client } from "@/sanity/lib/client";
import { AIF_DOCUMENTS_QUERY } from "@/sanity/lib/queries";

type AifDocument = {
  _id: string;
  title: string;
  fileUrl: string;
  order: number;
};

export default async function AIFPage() {
  const documents = await client.fetch<AifDocument[]>(AIF_DOCUMENTS_QUERY);

  return (
    <main className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          AIF
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Details */}
        <div className="mt-5 md:mt-7 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-[720px]">
          {[
            { label: "AIF Category", value: "Category III Investment Fund" },
            { label: "Registration Number", value: "IN/AIF3/17-18/0521" },
            { label: "Minimum Investment", value: "1 Crore" },
            { label: "Fund Manager", value: "Accuracap Technologies LLP" },
            { label: "Sponsor", value: "Accuracap Consultancy Services Pvt Ltd" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-black/65 text-[13px] uppercase tracking-[0.18em] mb-1.5">{item.label}</p>
              <p className="text-[16px] md:text-[17.5px] text-black">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Documents — driven entirely by Sanity CMS */}
        {documents.length > 0 && (
          <div className="mt-5 md:mt-7">
            <h2 className="text-[26px] sm:text-[30px] md:text-[35px] text-black mb-6 md:mb-8 leading-[1.2] tracking-tight">
              Policies &amp; Voting Records
            </h2>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {documents.map((doc) => (
                <div key={doc._id} className="border border-border overflow-hidden">
                  <div className="px-5 md:px-6 py-3.5 bg-surface border-b border-border">
                    <h3 className="text-[16px] md:text-[17.5px] font-semibold text-black">{doc.title}</h3>
                  </div>
                  <iframe src={doc.fileUrl} title={doc.title} className="w-full h-[280px] md:h-[340px]" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
