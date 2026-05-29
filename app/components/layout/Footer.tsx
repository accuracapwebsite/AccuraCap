"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F4F4] border-t border-black/10">
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12 py-7 md:py-9 lg:py-10">

        {/* Top */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-row lg:items-start lg:justify-between gap-y-6 gap-x-6 sm:gap-x-8 lg:gap-12 xl:gap-14">

          {/* Logo */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 shrink-0">
            <Link href="/" aria-label="AccuraCap home">
              <Image
                src="/Accuracap-logo.png"
                alt="AccuraCap company logo"
                width={140}
                height={52}
                className="object-contain w-[110px] md:w-[110px] lg:w-[120px] h-auto"
              />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <p role="heading" aria-level={2} className="text-[12.5px] md:text-[13px] tracking-[0.18em] uppercase text-black/65 mb-3 font-medium">Company</p>
            <nav aria-label="Company links" className="flex flex-col gap-2 text-[15px] md:text-[15.5px] text-black/75">
              <Link href="/philosophy" className="hover:text-black transition-colors">Philosophy</Link>
              <Link href="/people" className="hover:text-black transition-colors">People</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <p role="heading" aria-level={2} className="text-[12.5px] md:text-[13px] tracking-[0.18em] uppercase text-black/65 mb-3 font-medium">Products</p>
            <nav aria-label="Product links" className="flex flex-col gap-2 text-[15px] md:text-[15.5px] text-black/75">
              <Link href="/products/#pms" className="hover:text-black transition-colors">PMS</Link>
              <Link href="/products/#aif" className="hover:text-black transition-colors">AIF</Link>
              <Link href="/faq" className="hover:text-black transition-colors">FAQ&apos;s</Link>
            </nav>
          </div>

          {/* Office info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 text-[15px] md:text-[15.5px] text-black/75 leading-relaxed lg:max-w-[280px] xl:max-w-[320px]">
            <p role="heading" aria-level={2} className="text-[12.5px] md:text-[13px] tracking-[0.18em] uppercase text-black/65 mb-3 font-medium">Corporate Office</p>
            <p>
              Office Number 919, 9th Floor,
              <br />
              Wave Silver Tower, Sector 18,
              <br />
              Noida, Uttar Pradesh 201301
            </p>
            <p className="mt-3 text-black font-medium">+91 9821653556</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 md:mt-7 pt-4 border-t border-black/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[13.5px] md:text-[14px] text-black/65">
            &copy; {new Date().getFullYear()} AccuraCap. All rights reserved.
          </p>
          <div className="flex gap-5 text-[13.5px] md:text-[14px] text-black/65">
            <Link href="/grievance" className="hover:text-black transition-colors">Grievance</Link>
            <Link href="/kyc_status_check" className="hover:text-black transition-colors">KYC Status Check</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
