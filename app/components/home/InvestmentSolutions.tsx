import { client } from "@/sanity/lib/client";
import {
  HOME_PMS_CARDS_QUERY,
  HOME_AIF_CARDS_QUERY,
  HOME_PMS_DISCLAIMER_QUERY,
  HOME_AIF_DISCLAIMER_QUERY,
} from "@/sanity/lib/queries";

type HomeCard = {
  _id: string;
  title: string;
  category: string;
  returns: string;
  marketCap: string;
  stocks?: string;
  benchmark: string;
  order: number;
};

type HomeDisclaimer = {
  _id: string;
  text: string;
};

function gridColsFor(count: number) {
  if (count >= 4) return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1";
}

export default async function InvestmentSolutions() {
  const [pmsCards, aifCards, pmsDisclaimer, aifDisclaimer] = await Promise.all([
    client.fetch<HomeCard[]>(HOME_PMS_CARDS_QUERY),
    client.fetch<HomeCard[]>(HOME_AIF_CARDS_QUERY),
    client.fetch<HomeDisclaimer | null>(HOME_PMS_DISCLAIMER_QUERY),
    client.fetch<HomeDisclaimer | null>(HOME_AIF_DISCLAIMER_QUERY),
  ]);

  const renderCard = (p: HomeCard) => (
    <div
      key={p._id}
      className="group bg-white border border-border p-4 md:p-5 flex flex-col hover:bg-surface transition-colors duration-300"
    >
      {/* Name */}
      <h3 className="text-[26px] md:text-[30px] text-accent tracking-tight">
        {p.title}
      </h3>

      {/* Category tag */}
      <span className="text-muted text-[12.5px] tracking-[0.2em] uppercase font-medium pt-1">
        {p.category}
      </span>

      {/* Returns — hero number */}
      <p className="mt-5 text-[30px] md:text-[35px] text-black tracking-tight">
        {p.returns}
      </p>
      <p className="mt-1 text-muted text-[13px]">
        *Absolute Returns
      </p>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-border" />

      {/* Details */}
      <div className="flex flex-col gap-3.5 text-[15px]">
        <div>
          <p className="text-muted/60 text-[12.5px] uppercase tracking-[0.14em] mb-1">Market Cap</p>
          <p className="text-black/75">{p.marketCap}</p>
        </div>
        {p.stocks && (
          <div>
            <p className="text-muted/60 text-[12.5px] uppercase tracking-[0.14em] mb-1">Stocks</p>
            <p className="text-black/75">{p.stocks}</p>
          </div>
        )}
        <div>
          <p className="text-muted/60 text-[12.5px] uppercase tracking-[0.14em] mb-1">Benchmark</p>
          <p className="text-black/75">{p.benchmark}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ════════════ PMS — Dark Section ════════════ */}
      <section id="solutions" className="relative w-full bg-white py-9 md:py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 md:mb-8">
            <h2 className="text-[30px] sm:text-[35px] md:text-[42px] lg:text-[46.5px] text-black leading-[1.18] tracking-tight">
              Portfolio Management <span className="italic text-accent">Services</span>
            </h2>
          </div>

          {/* Product cards */}
          <div className={`grid ${gridColsFor(pmsCards.length)} gap-4 md:gap-5`}>
            {pmsCards.map(renderCard)}
          </div>

          {/* Disclaimer + CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-5 md:mt-7 gap-5">
            {pmsDisclaimer?.text && (
              <p className="text-[13.5px] text-muted">
                {pmsDisclaimer.text}
              </p>
            )}
            <a
              href="/products"
              className="inline-block px-6 md:px-7 py-3 bg-black text-white text-[14px] tracking-[0.14em] uppercase font-medium hover:bg-black/85 transition-colors duration-300"
            >
              View All Products
            </a>
          </div>

        </div>
      </section>

      {/* ════════════ AIF — Light Section ════════════ */}
      <section className="relative w-full bg-surface py-9 md:py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 md:mb-8">
            <h2 className="text-[30px] sm:text-[35px] md:text-[42px] lg:text-[46.5px] text-black leading-[1.18] tracking-tight">
              Alternative Investment <span className="italic text-accent">Funds</span>
            </h2>
          </div>

          {/* AIF cards — same structure as PMS */}
          <div className={`grid ${gridColsFor(aifCards.length)} gap-4 md:gap-5`}>
            {aifCards.map(renderCard)}
          </div>

          {aifDisclaimer?.text && (
            <p className="mt-5 md:mt-7 text-[13.5px] text-muted">
              {aifDisclaimer.text}
            </p>
          )}

        </div>
      </section>
    </>
  );
}
