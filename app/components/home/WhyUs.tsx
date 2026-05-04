"use client";

type Reason =
  | {
      title: string;
      points: string[];
    }
  | {
      title: string;
      description: string;
    };

const reasons: Reason[] = [
  {
    title: "Top Performing Fund",
    points: [
      "Top 10 Performing PMS in 10Y, 5Y and 3Y returns (PMSBazaar, Altport Experts, PMS AIF world).",
      "#1 Risk Adjusted PMS for 10 years (2021 and 2022, by PMS AIF world)",
    ],
  },
  {
    title: "Proven, Time-Tested Technology",
    description:
      "Investment models are rigorously back-tested over 10+ years on proprietary funds.",
  },
  {
    title: "Rules-Based",
    description:
      "Decisions made independent of individual biases, based on systemic rules.",
  },
  {
    title: "Always Invested",
    description:
      "Focused on long-term wealth creation through disciplined investing.",
  },
  {
    title: "Skin in the Game",
    description:
      "Started as a family office, with proprietary capital invested in the same models that power client portfolios.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h2 className="text-[30px] sm:text-[35px] md:text-[42px] lg:text-[46.5px] text-black leading-[1.18] tracking-tight">
          Key <span className="italic">Differentiators</span>
        </h2>

        {/* Cards */}
        <div className="mt-5 md:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, i) => (
            <article
              key={i}
              className="group relative bg-white border border-border/70 rounded-2xl p-6 md:p-7 overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04),0_12px_28px_-14px_rgba(17,24,39,0.16)] hover:shadow-[0_6px_14px_rgba(17,24,39,0.08),0_36px_60px_-24px_rgba(17,24,39,0.28)] hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-500 ease-out"
            >
              {/* Gradient sheen overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-surface opacity-90" />

              {/* Subtle top highlight line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              {/* Accent glow corner — appears on hover */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Accent side-bar — grows on hover */}
              <span className="pointer-events-none absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-accent to-accent/40 rounded-r-full origin-top scale-y-[0.35] group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              {/* Content */}
              <div className="relative">
                {/* Title */}
                <h3 className="text-[20px] md:text-[22px] text-black leading-snug tracking-tight">
                  {item.title}
                </h3>

                {/* Body */}
                {"points" in item ? (
                  <ul className="mt-4 space-y-3">
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-[15.5px] md:text-[16px] text-black/65 leading-[1.65]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-[15.5px] md:text-[16px] text-black/65 leading-[1.65]">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
