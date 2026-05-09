"use client";

import Image from "next/image";

const principles = [
  {
    title: "Data Over Intuition",
    desc: "Our systematic model removes emotional bias and human preferences, relying on data and proven mathematical frameworks back-tested since 1999.",
  },
  {
    title: "Patience as a Strategy",
    desc: "We believe in the power of compounding and long-term holding. Our model identifies winners early and rides them for years, not weeks.",
  },
  {
    title: "Rigorous Risk Mitigation",
    desc: "Every portfolio is built with strict equi-weighting and sectoral caps to ensure no single point of failure.",
  },
];

const steps = [
  {
    step: "I",
    title: "Universe Selection",
    desc: "We track the top 800 companies by market cap, filtering out weak or poorly governed entities.",
  },
  {
    step: "II",
    title: "Fundamental Assessment",
    desc: "18 parameters including Growth, Value, Strength & Risk evaluate margins, ROCE, and competitive moat.",
  },
  {
    step: "III",
    title: "Portfolio Construction",
    desc: "Stocks are placed in equi-weight portfolios and reviewed quarterly to maintain top performance.",
  },
];

export default function PhilosophyPage() {
  return (
    <main className="w-full bg-white">

      {/* ═══ Hero: Philosophy + Guiding Principles side-by-side ═══ */}
      <section className="relative pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-surface/40 to-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch">

            {/* ─── Philosophy (left) ─── */}
            <div className="text-left lg:col-span-7 flex flex-col">
              <h1 className="text-[35px] sm:text-[42px] md:text-[49px] lg:text-[56px] text-black leading-[1.15] tracking-tight">
                The Art of
                <br />
                <span className="italic text-accent">Disciplined Investing.</span>
              </h1>

              <div className="mt-6 h-[2px] w-12 bg-accent" />

              <p className="mt-7 text-[16.5px] md:text-[18px] text-black/70 leading-[1.75]">
                At AccuraCap, we believe the markets move like a pendulum
                &mdash; swinging between overvaluation and undervaluation. Our
                philosophy is rooted in capturing these swings through a
                systematic, fundamental approach.
              </p>

              {/* Image below text */}
              <div className="group relative mt-7 w-full flex-1 min-h-[300px] overflow-hidden rounded-2xl cursor-pointer shadow-[0_1px_2px_rgba(17,24,39,0.04),0_16px_40px_-20px_rgba(17,24,39,0.22)]">
                <Image
                  src="/Disciplined investing photo.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/25 transition duration-500 rounded-2xl" />
              </div>
            </div>

            {/* ─── Guiding Principles (right) ─── */}
            <div className="lg:col-span-5">
              <div className="text-left">
                <span className="text-[13px] tracking-[0.28em] uppercase text-accent font-medium">
                  Guiding Principles
                </span>
                <div className="mt-5 h-[2px] w-10 bg-accent" />
              </div>

              <div className="mt-7 space-y-4 md:space-y-5">
                {principles.map((item, i) => (
                  <article
                    key={i}
                    className="group relative bg-white border border-border/70 rounded-2xl p-5 md:p-6 overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04),0_12px_28px_-14px_rgba(17,24,39,0.16)] hover:shadow-[0_6px_14px_rgba(17,24,39,0.08),0_32px_56px_-20px_rgba(17,24,39,0.26)] hover:border-accent/30 hover:-translate-y-1 transition-all duration-500 ease-out"
                  >
                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-surface opacity-90" />
                    {/* Top highlight line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    {/* Hover accent glow */}
                    <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Left accent side-bar */}
                    <span className="pointer-events-none absolute left-0 top-5 bottom-5 w-[3px] bg-gradient-to-b from-accent to-accent/40 rounded-r-full origin-top scale-y-[0.35] group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                    {/* Content */}
                    <div className="relative flex items-start gap-4">
                      <span className="shrink-0 mt-[3px] text-[13px] tracking-[0.24em] uppercase text-accent font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[18px] md:text-[19.5px] font-semibold text-black leading-snug tracking-tight">
                          {item.title}
                        </h3>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="block h-[2px] w-7 bg-accent rounded-full" />
                          <span className="block h-[2px] w-1.5 bg-accent/40 rounded-full" />
                        </div>
                        <p className="mt-3 text-[14.5px] md:text-[15.5px] text-black/65 leading-[1.65]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ Core Strategy ═══ */}
      <section className="py-9 md:py-12 px-6 md:px-10 lg:px-16 bg-surface border-t border-border">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading + image */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-9 items-center">

            {/* Text */}
            <div className="text-left lg:col-span-3">
              <h2 className="text-[32.5px] sm:text-[37.5px] md:text-[46.5px] lg:text-[51.5px] text-black leading-[1.18] tracking-tight">
                Our Core <span className="italic text-accent">Strategy</span>
              </h2>

              <div className="mt-6 h-[2px] w-12 bg-accent" />

              <div className="mt-7 max-w-[580px] space-y-4 text-[16.5px] md:text-[18px] text-black/70 leading-[1.75]">
                <p>
                  AccuraCap has developed a unique{" "}
                  <span className="font-semibold text-black">ranking algorithm</span>{" "}
                  that conducts extensive{" "}
                  <span className="font-semibold text-black">&ldquo;Spatio-temporal&rdquo;</span>{" "}
                  analysis of every business in the investment universe,
                  comparing it against others across space and time.
                </p>

                <p>
                  Using the{" "}
                  <span className="font-semibold text-black">&ldquo;Pendulum Hypothesis&rdquo;</span>,
                  we buy high-quality businesses at reasonable valuations
                  &mdash; forming equi-weight portfolios designed to hold
                  winners and systematically exit
underperformers with minimal manual intervention.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-2">
              <div className="group relative w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-[0_1px_2px_rgba(17,24,39,0.04),0_16px_40px_-20px_rgba(17,24,39,0.22)]">
                <Image
                  src="/Philosophy page.png"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/25 transition duration-500 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Steps heading */}
          <div className="mt-8 md:mt-10 text-left">
            <h3 className="text-[26px] sm:text-[30px] md:text-[34px] text-black leading-[1.18] tracking-tight">
              Step by Step <span className="italic">Process</span>
            </h3>
            <div className="mt-5 h-[2px] w-10 bg-accent" />
          </div>

          {/* Steps */}
          <div className="mt-5 md:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {steps.map((item, i) => (
              <article
                key={i}
                className="group relative bg-white border border-border/70 rounded-2xl p-6 md:p-7 overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04),0_12px_28px_-14px_rgba(17,24,39,0.16)] hover:shadow-[0_6px_14px_rgba(17,24,39,0.08),0_36px_60px_-24px_rgba(17,24,39,0.28)] hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-500 ease-out"
              >
                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-surface opacity-90" />
                {/* Top highlight line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                {/* Hover accent glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Left accent side-bar */}
                <span className="pointer-events-none absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-accent to-accent/40 rounded-r-full origin-top scale-y-[0.35] group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                {/* Content */}
                <div className="relative text-left">
                  <span className="text-[13px] tracking-[0.28em] uppercase text-accent font-semibold">
                    Step {item.step}
                  </span>

                  <h3 className="mt-3 text-[20px] md:text-[22px] text-black font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="block h-[2px] w-8 bg-accent rounded-full" />
                    <span className="block h-[2px] w-1.5 bg-accent/40 rounded-full" />
                  </div>

                  <p className="mt-4 text-[15.5px] md:text-[16px] text-black/65 leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
