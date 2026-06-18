import Image from "next/image";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { LEADERSHIP_QUERY, TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";

// ISR: re-render from Sanity at most once every 60s so CMS edits appear live.
export const revalidate = 60;

type Member = {
  _id: string;
  name: string;
  role?: string;
  image?: { asset: { _ref: string } };
  bio?: Array<{ _type: string; [key: string]: unknown }>;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/* ─────────── Photo on the left, all text on the right ─────────── */
function MemberCard({ member }: { member: Member }) {
  const hasBio = member.bio && member.bio.length > 0;

  return (
    <article className="group flex flex-row gap-5 md:gap-6 bg-white border border-border rounded-xl p-4 md:p-5 hover:shadow-md hover:border-black/15 hover:-translate-y-0.5 transition-all duration-300">
      {/* Square photo, fixed size, top-aligned */}
      <div className="relative shrink-0 self-start aspect-square w-20 sm:w-24 md:w-28 lg:w-32 bg-surface overflow-hidden rounded-md">
        {member.image ? (
          <Image
            src={urlFor(member.image).width(320).height(320).url()}
            alt={`Portrait photo of ${member.name}${member.role ? `, ${member.role}` : ""}`}
            fill
            sizes="128px"
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-black/25 text-xl md:text-2xl font-bold tracking-tight">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* All text fills the right side, no clipping */}
      <div className="flex-1 min-w-0">
        <h2 className="text-[17.5px] md:text-[20px] font-semibold text-black leading-snug break-words">
          {member.name}
        </h2>
        {member.role && (
          <p className="mt-1 text-[14px] md:text-[15px] text-black/65 font-medium tracking-wide break-words">
            {member.role}
          </p>
        )}

        {hasBio && (
          <div className="mt-3 space-y-2 text-[15px] md:text-[15.5px] text-black/70 leading-[1.7] [&_p]:m-0 [&_p+p]:mt-2 break-words">
            <PortableText value={member.bio!} />
          </div>
        )}
      </div>
    </article>
  );
}

export default async function PeoplePage() {
  const [leadership, teamMembers] = await Promise.all([
    client.fetch<Member[]>(LEADERSHIP_QUERY),
    client.fetch<Member[]>(TEAM_MEMBERS_QUERY),
  ]);

  return (
    <main className="w-full bg-white">
      <section className="pt-9 md:pt-12 pb-9 md:pb-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
            Meet Our <span className="italic text-accent">Team</span>
          </h1>
          <div className="mt-4 h-[2px] w-10 bg-accent" />

          {/* Leadership — one member per row, full width */}
          {leadership.length > 0 && (
            <div className="mt-5 md:mt-7 flex flex-col gap-4 md:gap-5">
              {leadership.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}

          {/* All team members — same horizontal card layout, one per row */}
          {teamMembers.length > 0 && (
            <div className="mt-4 md:mt-5 flex flex-col gap-4 md:gap-5">
              {teamMembers.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
