"use client";

export default function AccessibilityStatementPage() {
  return (
    <div className="w-full bg-white pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
          Accessibility Statement
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Content */}
        <div className="mt-5 md:mt-7 space-y-5 md:space-y-7 text-muted text-[16px] md:text-[16.5px] leading-[1.75] max-w-[920px]">

          {/* Commitment */}
          <section className="space-y-3.5">
            <p>
              At AccuraCap, we are committed to providing an accessible, inclusive, and user-friendly digital
              experience for all users, including persons with disabilities.
            </p>

            <p>
              We believe that every investor should be able to access information and use our digital services with
              independence and ease. As part of this commitment, we continuously work to improve the accessibility
              of our website and investor-facing content in accordance with applicable regulatory requirements and
              recognised accessibility standards, including WCAG 2.1 or the latest applicable version, GIGW,
              IS 17802, and the Rights of Persons with Disabilities Act, 2016.
            </p>
          </section>

          {/* Programme */}
          <section className="space-y-3.5">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-black tracking-tight leading-snug">
              Our Accessibility Programme
            </h2>

            <p>
              To support our digital accessibility programme, AccuraCap has partnered with an IAAP-certified
              digital accessibility services provider, to assess and improve the accessibility of our website and
              support our ongoing accessibility compliance initiatives.
            </p>

            <p>
              As part of this engagement, our website has undergone a comprehensive accessibility assessment
              involving automated testing, manual testing, keyboard navigation, and assistive technology testing.
              The assessment was conducted by an IAAP-certified accessibility professional.
            </p>

            <p>
              The accessibility issues identified during the assessment were addressed through remediation,
              followed by a final verification audit. Based on the final assessment, the website conforms to the
              applicable accessibility requirements and standards within the scope of the audit.
            </p>

            <p>
              We remain committed to continuously monitoring and improving the accessibility of our digital
              platforms and investor-facing content.
            </p>
          </section>

          {/* Feedback */}
          <section className="space-y-3.5">
            <h2 className="text-[22px] md:text-[26px] font-semibold text-black tracking-tight leading-snug">
              Accessibility Feedback
            </h2>

            <p>
              We value your feedback and encourage you to let us know if you experience any accessibility barriers
              while using our website.
            </p>

            <p>
              If you experience difficulty accessing any information, content, or functionality on our website, or
              require information in an accessible format, please contact our Accessibility Nodal Officer:
            </p>

            {/* Contact Box */}
            <div className="border border-border p-4 md:p-5 space-y-1.5 bg-surface/40">
              <p>
                <span className="font-medium text-black">Accessibility Nodal Officer:</span>{" "}
                Ishu Singhania
              </p>
              <p>
                <span className="font-medium text-black">Email:</span>{" "}
                <a
                  href="mailto:griviences@accuracap.com"
                  className="text-accent underline hover:text-accent-dark transition-colors"
                >
                  griviences@accuracap.com
                </a>
              </p>
              <p>
                <span className="font-medium text-black">Phone:</span>{" "}
                <a
                  href="tel:+919821653556"
                  className="text-accent underline hover:text-accent-dark transition-colors"
                >
                  9821653556
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
