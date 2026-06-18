import Hero from "@/app/components/home/Hero";
import InvestmentSolutions from "@/app/components/home/InvestmentSolutions";
import WhyUs from "@/app/components/home/WhyUs";

// ISR: re-render from Sanity at most once every 60s so CMS edits (home
// cards/disclaimers/hero stats) appear live without a redeploy.
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <InvestmentSolutions />
      <WhyUs />
    </>
  );
}
