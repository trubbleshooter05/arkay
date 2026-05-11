const carrierTimelineNote =
  "Carrier upgrade timelines with our last-mile providers average approximately 90-120 days, although in some cases the turnaround time may be sooner.";

const statusPills = [
  { label: "Bandwidth Upgrade", value: "In Progress", tone: "amber" },
  { label: "Video Conferencing Upgrade", value: "Planning / Install Prep", tone: "blue" },
  { label: "Sites", value: "Roanoke VA + Hauppauge NY", tone: "green" },
];

const summaries = [
  {
    eyebrow: "Fusion bandwidth upgrade",
    title: "300 Mbps -> 1 Gbps E-LAN",
    copy:
      "Fusion upgrade increases intersite bandwidth between Roanoke and Hauppauge from 300 Mbps to 1 Gbps, with 1 Gb DIA, managed router, and backup circuit included. " +
      carrierTimelineNote,
    metric: "3.3x",
    metricLabel: "intersite capacity",
  },
  {
    eyebrow: "Video modernization",
    title: "Polycom Group Series 500 -> Neat Board Pro 65 inch",
    copy:
      "Conference rooms are being modernized from legacy Polycom Group Series 500 systems to Neat Board Pro 65 inch conferencing with dual 65 inch display layouts.",
    metric: "65 in",
    metricLabel: "dual display layout",
  },
];

const sites = [
  {
    city: "Roanoke, VA",
    address: "350 East Park Dr, Roanoke, VA 24019",
    details: [
      ["Bandwidth", "300 Mbps to 1 Gbps"],
      ["DIA", "1 Gb"],
      ["E-LAN", "1 Gb"],
      ["Backup Circuit", "Included"],
      ["Managed Router", "Included"],
      ["Video Room", "Polycom to Neat Board Pro 65 inch"],
    ],
  },
  {
    city: "Hauppauge, NY",
    address: "700 Veterans Hwy, Suite 300, Hauppauge, NY 11788",
    details: [
      ["Bandwidth", "300 Mbps to 1 Gbps"],
      ["DIA", "1 Gb"],
      ["E-LAN", "1 Gb"],
      ["Backup Circuit", "Included"],
      ["Managed Router", "Included"],
      ["Video Room", "Polycom to Neat Board Pro 65 inch"],
    ],
  },
];

const timeline = [
  { label: "Planning", state: "complete" },
  { label: "Carrier order submitted", state: "complete" },
  { label: "Site access and scheduling coordination", state: "active" },
  { label: "Carrier upgrade window", state: "upcoming" },
  { label: "Bandwidth upgrade implementation", state: "upcoming" },
  { label: "Conference room hardware layout finalized", state: "active" },
  { label: "Install / cutover", state: "upcoming" },
  { label: "Validation and user testing", state: "upcoming" },
  { label: "Completed", state: "upcoming" },
];

const comparisons = [
  {
    title: "Network",
    before: ["300 Mbps E-LAN", "Existing WAN capacity", "Existing conferencing traffic limitations"],
    after: [
      "1 Gbps E-LAN",
      "1 Gb DIA at both sites",
      "Better bandwidth for conferencing, file access, cloud apps, and site to site traffic",
    ],
  },
  {
    title: "Video Conferencing",
    before: ["Polycom Group Series 500", "Dual 55 inch displays", "Legacy conference workflow"],
    after: [
      "Neat Board Pro 65 inch",
      "Samsung BE65FX-H 65 inch 4K display",
      "Dual 65 inch side by side setup",
      "Neat Board sits about 2 to 3 inches higher than adjacent Samsung display",
      "Cleaner Teams/Zoom style collaboration experience",
    ],
  },
];

const projectDetails = [
  ["Vendor", "Fusion"],
  ["Bandwidth", "1 Gb DIA + 1 Gb E-LAN"],
  ["Backup", "Diverse Business Class Backup Circuit"],
  ["Router", "Managed Router included"],
  ["Sites", "Roanoke VA and Hauppauge NY"],
  ["Video Upgrade", "Polycom Group Series 500 to Neat Board Pro 65 inch"],
  ["Displays", "Samsung BE65FX-H 65 inch 4K"],
  ["Timeline Note", carrierTimelineNote],
];

const benefits = [
  "Faster site to site traffic",
  "Better video conferencing stability",
  "More headroom for cloud apps",
  "Cleaner conference room experience",
  "Modern touchscreen collaboration",
  "Improved reliability with backup circuit",
];

const nextSteps = [
  "Confirm install schedule",
  "Confirm site access windows for both locations",
  "Confirm final display mounting height",
  "Confirm Neat Board Pro installation location",
  "Test 1 Gbps circuit performance",
  "Test conferencing audio, camera, screen sharing",
  "Document final network and AV setup",
];

const toneClasses: Record<string, string> = {
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  green: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">{title}</h2>
      {copy ? <p className="mt-3 text-base leading-7 text-slate-600">{copy}</p> : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
      ✓
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Internal IT project dashboard
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Arkay Packaging Network & Conferencing Upgrade
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Tracking the Fusion 1 Gbps bandwidth upgrade and the conference room video modernization across
                Roanoke VA and Hauppauge NY.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {statusPills.map((pill) => (
                  <span
                    key={pill.label}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${toneClasses[pill.tone]}`}
                  >
                    {pill.label}: {pill.value}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white shadow-xl shadow-slate-200/70">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-slate-300">Current Phase</span>
                <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-200">
                  Scheduling / Install Prep
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-semibold">42%</span>
                  <span className="text-sm text-slate-300">overall readiness</span>
                </div>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[42%] rounded-full bg-blue-400" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">{carrierTimelineNote}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <section>
          <SectionHeader eyebrow="Executive Summary" title="Two upgrades, one coordinated modernization track" />
          <div className="grid gap-5 lg:grid-cols-2">
            {summaries.map((summary) => (
              <article key={summary.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                      {summary.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">{summary.title}</h3>
                  </div>
                  <div className="rounded-xl bg-blue-50 px-4 py-3 text-right">
                    <p className="text-2xl font-semibold text-blue-800">{summary.metric}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{summary.metricLabel}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-slate-600">{summary.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader eyebrow="Site Status" title="Roanoke and Hauppauge readiness view" />
          <div className="grid gap-5 lg:grid-cols-2">
            {sites.map((site) => (
              <article key={site.city} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{site.city}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{site.address}</p>
                  </div>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                    Active
                  </span>
                </div>
                <dl className="mt-6 grid gap-3">
                  {site.details.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 border-t border-slate-100 pt-3">
                      <dt className="text-sm font-medium text-slate-500">{label}</dt>
                      <dd className="text-right text-sm font-semibold text-slate-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader
            eyebrow="Progress Timeline"
            title="Current phase: Scheduling / Install Prep"
            copy={carrierTimelineNote}
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              {timeline.map((step, index) => {
                const isComplete = step.state === "complete";
                const isActive = step.state === "active";
                return (
                  <div
                    key={step.label}
                    className={`rounded-xl border p-4 ${
                      isComplete
                        ? "border-emerald-200 bg-emerald-50"
                        : isActive
                          ? "border-amber-200 bg-amber-50"
                          : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isComplete
                            ? "bg-emerald-600 text-white"
                            : isActive
                              ? "bg-amber-500 text-white"
                              : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold text-slate-900">{step.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader eyebrow="Before vs After" title="Capacity and room experience comparison" />
          <div className="grid gap-5 lg:grid-cols-2">
            {comparisons.map((comparison) => (
              <article key={comparison.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{comparison.title}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-700">Before</p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                      {comparison.before.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <p className="font-semibold text-blue-900">After</p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-blue-950">
                      {comparison.after.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader
            eyebrow="Room Mockup"
            title="Dual 65 inch conferencing display layout"
            copy="New layout based on attached conference room reference photos"
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 p-5 sm:p-8">
              <div className="mb-5 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-slate-800 px-4 py-2 text-white">Current: dual 55 inch</span>
                <span className="rounded-full bg-blue-700 px-4 py-2 text-white">New: dual 65 inch</span>
              </div>
              <div className="mx-auto flex max-w-5xl items-start justify-center gap-3 sm:gap-5">
                <div className="aspect-video w-1/2 rounded-lg border-4 border-slate-900 bg-slate-950 p-3 shadow-2xl">
                  <div className="flex h-full items-center justify-center rounded bg-blue-900 text-center text-xs font-semibold text-blue-100 sm:text-base">
                    Neat Board Pro 65 inch
                  </div>
                </div>
                <div className="aspect-video w-1/2 rounded-lg border-4 border-slate-800 bg-slate-950 p-3 shadow-xl">
                  <div className="flex h-full items-center justify-center rounded bg-slate-800 text-center text-xs font-semibold text-slate-100 sm:text-base">
                    Samsung BE65FX-H 65 inch 4K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader eyebrow="Project Details" title="Static project source data" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {projectDetails.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-100 last:border-0">
                      <th className="w-40 bg-slate-50 px-4 py-4 font-semibold text-slate-700">{label}</th>
                      <td className="px-4 py-4 leading-6 text-slate-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Next Steps" title="Install readiness checklist" />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <ul className="space-y-4">
                {nextSteps.map((step) => (
                  <li key={step} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                    <CheckIcon />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader eyebrow="Benefits" title="Operational improvements expected from the upgrade" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 h-2 w-12 rounded-full bg-emerald-500" />
                <p className="font-semibold leading-6 text-slate-900">{benefit}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
