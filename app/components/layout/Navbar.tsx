"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

type MenuItem = {
  name: string;
  href?: string;
  children?: MenuItem[];
};

const menu: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Philosophy",
    href: "/philosophy",
  },
  {
    name: "Products",
    children: [
      { name: "PMS", href: "/products/#pms" },
      { name: "AIF", href: "/products/#aif" },
    ],
  },
  {
    name: "People",
    href: "/people",
  },
  {
    name: "Investor Information",
    children: [
      { name: "PMS", href: "/pms" },
      { name: "AIF", href: "/aif" },
      { name: "KYC Status Check", href: "/kyc_status_check" },
      { name: "Grievance", href: "/grievance" },
      { name: "FAQ's", href: "/faq" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(index);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 100);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1600px] mx-auto flex items-center px-5 md:px-8 lg:px-12 py-3 lg:py-3.5">

        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="AccuraCap home">
          <Image
            src="/Accuracap-logo.png"
            alt=""
            width={220}
            height={116}
            priority
            fetchPriority="high"
            style={{ height: "auto" }}
            className="object-contain w-[110px] md:w-[120px] lg:w-[130px]"
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 text-muted hover:text-black"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <nav className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-9 ml-8 relative">
          {menu.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.children && openMenu(index)}
              onMouseLeave={scheduleClose}
            >
              {/* Main Item */}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-muted hover:text-black transition-colors duration-200 text-[15.5px] xl:text-[16.5px] font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center gap-1 text-muted hover:text-black transition-colors duration-200 text-[15.5px] xl:text-[16.5px] font-medium whitespace-nowrap"
                >
                  {item.name}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${active === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}

              {/* Dropdown */}
              {item.children && active === index && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-border p-1"
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={scheduleClose}
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href || "#"}
                      className="block px-3.5 py-2 text-[15px] text-muted hover:text-black hover:bg-surface transition-colors duration-150"
                      onClick={() => setActive(null)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-white max-h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="flex flex-col px-5 py-1">
            {menu.map((item, index) => (
              <li key={index} className="border-b border-border last:border-b-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block py-3 text-muted hover:text-black text-[16px] font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === index ? null : index)
                      }
                      className="flex items-center justify-between w-full py-3 text-muted hover:text-black text-[16px] font-medium"
                    >
                      {item.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === index ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === index && item.children && (
                      <ul className="pb-2 pl-3">
                        {item.children.map((child, i) => (
                          <li key={i}>
                            <Link
                              href={child.href || "#"}
                              onClick={closeMobile}
                              className="block py-2 text-[15px] text-muted hover:text-black"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
