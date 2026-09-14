interface SectionHeadingProps {
  label: string;
  heading: string;
  body: string;
  headingId: string;
}

export default function SectionHeading({ label, heading, body, headingId }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-[620px]">
      <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-amber">{label}</span>
      <h2 id={headingId} className="text-[28px]">
        {heading}
      </h2>
      <p className="mt-2.5 text-[15px] normal-case tracking-normal text-muted">{body}</p>
    </div>
  );
}
