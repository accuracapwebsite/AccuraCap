import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import {
  HERO_STATS_QUERY,
  HERO_STATS_DISCLAIMER_QUERY,
} from "@/sanity/lib/queries";

type HeroStat = {
  _id: string;
  value: string;
  heading: string;
  subheading?: string;
  order: number;
};

type HeroStatsDisclaimer = {
  _id: string;
  text: string;
};

export default async function Hero() {
  const [stats, disclaimer] = await Promise.all([
    client.fetch<HeroStat[]>(HERO_STATS_QUERY),
    client.fetch<HeroStatsDisclaimer | null>(HERO_STATS_DISCLAIMER_QUERY),
  ]);

  return (
    <section className="relative w-full min-h-[680px] md:min-h-[760px] lg:min-h-screen flex items-center overflow-hidden pt-9 md:pt-12 lg:pt-20 pb-7 md:pb-9 lg:pb-10">
      {/* Background Image */}
      <Image src="/hero-bg-new.png" alt="" fill priority className="object-cover" />

      {/* Left-to-right overlay: fully solid light grey on the left, slow fade to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d8d8d8] from-30% to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto text-left px-6 md:px-12 lg:px-16">
        {/* Accent tag */}
        <div className="flex items-center gap-3 mb-7">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[#1a1a1a]/70 text-[13px] tracking-[0.28em] uppercase font-medium">
            Established 2011
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[37.5px] sm:text-[44.5px] md:text-[53.5px] lg:text-[65.5px] text-[#1a1a1a] leading-[1.15] tracking-tight max-w-[920px]">
          Boutique Fund Management
          <br />
          <span className="italic  text-accent">for Long-Term Investors</span>
        </h1>

        {/* Red accent line below heading */}
        <div className="mt-6 h-[2px] w-12 bg-accent" />

        {/* Subtext */}
        <p className="mt-6 text-[#1a1a1a]/80 max-w-[620px] text-[16.5px] md:text-[18px] leading-[1.7]">
          AccuraCap is a SEBI-registered Portfolio Management Service and
          Category III Alternative Investment Fund manager. We manage long-only
          equity portfolios through proprietary quantitative, AI-driven algorithms that have
           outperformed benchmark returns across multiple periods.
        </p>

        {/* CTA */}
        <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="/products"
            className="inline-block px-6 md:px-7 py-3 bg-[#1a1a1a] text-white text-[14px] tracking-[0.14em] uppercase font-medium hover:bg-[#1a1a1a]/85 transition-colors duration-300"
          >
            Explore Strategies
          </a>
          <a
            href="/contact"
            className="inline-block px-6 md:px-7 py-3 border border-[#1a1a1a]/40 text-[#1a1a1a] text-[14px] tracking-[0.14em] uppercase font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Stats strip — driven entirely by Sanity CMS */}
        {stats.length > 0 && (
          <div className="mt-5 md:mt-8 lg:mt-10 relative px-3 md:px-5 pt-4 md:pt-6 pb-3 md:pb-4">
            <div className="grid grid-cols-3 w-full">
              {stats.map((stat, index) => (
                <div
                  key={stat._id}
                  className={`px-2 md:px-3 py-2 md:py-3 text-center ${
                    index < stats.length - 1
                      ? "border-r border-[#1a1a1a]/15"
                      : ""
                  }`}
                >
                  <p className="text-[21.5px] sm:text-[26px] md:text-[34.5px] lg:text-[39px] text-black tracking-tight font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 md:mt-2 text-black text-[11px] sm:text-[12px] md:text-[13.5px] tracking-[0.14em] md:tracking-[0.16em] uppercase font-medium leading-tight">
                    {stat.heading}
                  </p>
                  {stat.subheading && (
                    <p className="mt-1 text-black text-[11px] sm:text-[11.5px] md:text-[13px] leading-tight">{stat.subheading}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {disclaimer?.text && (
          <p className="mt-3 md:mt-4 text-[12.5px] md:text-[13.5px] text-[#1a1a1a]/70">
            {disclaimer.text}
          </p>
        )}
      </div>
    </section>
  );
}
