const confRoomEquipment = [
  "Neat video conferencing systems for each location",
  "65-inch conference room displays",
  "Wall mounts for all displays — Neat Board Pro mounts being replaced with correct 115 lb-rated units",
];

const confRoomFacilities = [
  {
    site: "Virginia Facility",
    tone: "amber",
    items: [
      "Scheduling wall paint for Roanoke conference room before Neat install.",
      "All new video conferencing equipment on-site and ready to go.",
      "Video conf installer on standby — awaiting bandwidth upgrade and wall paint.",
    ],
  },
  {
    site: "Hauppauge Facility",
    tone: "blue",
    items: [
      "Awaiting confirmed wallpaper install date.",
      "All new video conferencing equipment on-site and ready to go.",
      "Video conf installer on standby — awaiting wallpaper completion.",
    ],
  },
];

const confRoomInstall = [
  "Install quote received: $2,808 for 4 technicians (4-hour minimum).",
  "All new video conf equipment ready at both VA and Hauppauge locations.",
  "Video conf installer on standby for both sites.",
  "Hauppauge: awaiting wallpaper install date before Neat install can proceed.",
  "Roanoke: scheduling wall paint for conf room — install pending bandwidth upgrade.",
  "Neat staff training being coordinated for IT and Curtis — scheduled once install date is confirmed.",
  "Final testing will include Microsoft Teams meeting functionality and room device validation.",
];

const warehouse = {
  site: "Roanoke Warehouse (ROC)",
  statusLabel: "Switch Mounted",
  statusTone: "blue",
  note: "Switch is mounted in the rack and in place. Curtis decommissioning old switch and cutting over to new switch this weekend (7/18). Access points have not arrived from Jordan — Curtis getting vendor tracking ETA. Once APs arrive: Curtis will register and provision, then RCI scheduled to install/mount/replace old WiFi APs.",
  details: [
    ["Switch", "Mounted in rack and in place ✓"],
    ["Cutover", "Curtis on-site 7/18 — decommission old switch, migrate to new"],
    ["Access Points", "Not yet arrived from Jordan — Curtis tracking ETA with vendor"],
    ["Next Step", "Curtis provisions APs once received"],
    ["Install", "Schedule RCI to mount/replace old WiFi APs after provisioning"],
  ],
};

const currentStatus = [
  {
    emoji: "✅",
    site: "Hauppauge, NY — Bandwidth",
    headline: "Fully upgraded to Gigabit!",
    detail: "1 Gbps is live and performing. Steve Viola reports much faster VPN speeds working from home.",
    tone: "green",
  },
  {
    emoji: "🔧",
    site: "Roanoke, VA — Bandwidth",
    headline: "Verizon — in progress",
    detail: "Verizon verified physical layer and spliced new fiber. Circuit not provisioned yet. Back on-site 7/17 to replace equipment. Second team will contact for provisioning once physical work is done.",
    tone: "amber",
  },
  {
    emoji: "📺",
    site: "Video Conf — Both Sites",
    headline: "All gear ready — installer on standby",
    detail: "All new video conf equipment ready at VA and Hauppauge. Installer on standby for both. Haupp awaiting wallpaper date. Roanoke scheduling wall paint.",
    tone: "green",
  },
  {
    emoji: "🔌",
    site: "Roanoke Warehouse",
    headline: "Switch mounted — cutover 7/18",
    detail: "New switch mounted in rack. Curtis cutting over this weekend (7/18). APs not arrived from Jordan — tracking ETA. RCI install after Curtis provisions APs.",
    tone: "blue",
  },
  {
    emoji: "🎓",
    site: "Neat Training",
    headline: "Training date in progress",
    detail: "Coordinating training for IT and Curtis with Neat staff. Will be scheduled once install dates are confirmed.",
    tone: "blue",
  },
];

const carrierTimelineNote =
  "Carrier upgrade timelines with our last-mile providers average approximately 90-120 days, although in some cases the turnaround time may be sooner.";

const statusPills = [
  { label: "Hauppauge Bandwidth", value: "Gigabit Live ✓", tone: "green" },
  { label: "Roanoke Bandwidth", value: "Verizon In Progress", tone: "amber" },
  { label: "Video Conf", value: "Ready · Installer on Standby", tone: "green" },
  { label: "Warehouse WiFi", value: "Switch Mounted · Cutover 7/18", tone: "blue" },
  { label: "Hauppauge", value: "Awaiting Wallpaper Date", tone: "amber" },
];

const videoEquipNotice =
  "Neat Board Pro equipment order placed May 27, 2026 — purchased ahead of 5% price increase effective June 1, 2026.";

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
    statusLabel: "Bandwidth In Progress",
    statusTone: "amber",
    note: "Verizon verified physical layer and spliced new fiber — circuit not provisioned yet. Verizon back on-site 7/17 to replace more equipment. Per Curtis (7/17): second team will contact for provisioning once physical work is complete. Scheduling wall paint for conf room. All video conf equipment ready — installer on standby.",
    details: [
      ["Bandwidth", "In progress — not done yet ⏳"],
      ["Verizon Update", "Physical layer verified, fiber spliced — circuit not provisioned"],
      ["Verizon (7/17)", "On-site today to replace equipment; provisioning team to follow"],
      ["Curtis Update (7/17)", "Second team will contact once physical work complete"],
      ["DIA", "1 Gb — Pending provisioning"],
      ["E-LAN", "1 Gb — Pending provisioning"],
      ["Backup Circuit", "Included — available during cutover"],
      ["Managed Router", "Included"],
      ["Equipment", "All new video conf gear on-site and ready ✓"],
      ["Wall Prep", "Scheduling wall paint for conf room"],
      ["Video Install", "Installer on standby — pending bandwidth + wall paint"],
    ],
  },
  {
    city: "Hauppauge, NY",
    address: "700 Veterans Hwy, Suite 300, Hauppauge, NY 11788",
    statusLabel: "Awaiting Wallpaper",
    statusTone: "amber",
    note: "Bandwidth fully upgraded to Gigabit. Awaiting wallpaper install date. All new video conf equipment on-site and ready. Video conf installer on standby for Hauppauge.",
    details: [
      ["Bandwidth", "1 Gbps — fully upgraded and live ✓"],
      ["User Feedback", "Steve Viola — faster VPN speeds from home"],
      ["DIA", "1 Gb"],
      ["E-LAN", "1 Gb"],
      ["Backup Circuit", "Included"],
      ["Managed Router", "Included"],
      ["Equipment", "All new video conf gear on-site and ready ✓"],
      ["Wallpaper", "Awaiting install date — blocks Neat install"],
      ["Video Install", "Installer on standby — pending wallpaper date"],
      ["Training", "Neat staff training for IT + Curtis — pending install date"],
    ],
  },
];

const timeline = [
  { label: "Planning", state: "complete" },
  { label: "Carrier order submitted", state: "complete" },
  { label: "Site access and scheduling coordination", state: "complete" },
  { label: "Equipment ordered — Neat Board Pro, displays, wall mounts (5/27)", state: "complete" },
  { label: "All equipment on-site at both locations ✓", state: "complete" },
  { label: "Hauppauge: fully upgraded to Gigabit — VPN performance improved ✓", state: "complete" },
  { label: "Roanoke: Verizon physical layer work — fiber spliced, provisioning pending (7/17)", state: "active" },
  { label: "Warehouse: switch mounted — Curtis cutover 7/18; APs pending from Jordan", state: "active" },
  { label: "Video conf: all gear ready both sites — installer on standby", state: "active" },
  { label: "Hauppauge: awaiting wallpaper date · Roanoke: scheduling wall paint", state: "active" },
  { label: "Install / cutover — both sites", state: "upcoming" },
  { label: "Validation and user testing (incl. Microsoft Teams)", state: "upcoming" },
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
  ["Hauppauge Bandwidth", "Fully upgraded to Gigabit — Steve Viola reporting faster VPN from home ✓"],
  ["Hauppauge Neat Install", "Awaiting wallpaper date — all gear ready, installer on standby"],
  ["Roanoke Bandwidth", "Verizon in progress — physical layer done, circuit not provisioned (7/17 update)"],
  ["Roanoke Conf Room", "Scheduling wall paint — all gear ready, installer on standby"],
  ["Roanoke Warehouse WiFi", "Switch mounted — Curtis cutover 7/18; APs pending from Jordan, RCI after provision"],
  ["Video Conf Install", "All new equipment ready at both locations — installer on standby VA/Haupp"],
  ["Roanoke Equipment", "Neat Board Pro 65\", 65\" TV, wall mount — all on-site ✓"],
  ["Install Quote", "$2,808 — 4 techs, 4-hour minimum"],
  ["Neat Training", "Coordinating with Neat staff for IT + Curtis — pending install date"],
  ["Video Upgrade", "Polycom Group Series 500 to Neat Board Pro 65 inch"],
  ["Video Equipment", "Neat Board Pro ordered May 27, 2026 (ahead of 6/1 price increase)"],
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
  "Confirm Hauppauge wallpaper install date",
  "Schedule Roanoke conf room wall paint",
  "Monitor Verizon provisioning team contact after 7/17 equipment replacement",
  "Curtis warehouse switch cutover — weekend 7/18",
  "Track Jordan AP delivery ETA with vendor; Curtis to provision once received",
  "Schedule RCI for warehouse WiFi AP install after provisioning",
  "Schedule video conf install at both sites once wall prep + bandwidth are ready",
  "Schedule Neat staff training once install dates confirmed",
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
  const statusToneMap: Record<string, { bar: string; bg: string; border: string; badge: string; badgeText: string; text: string }> = {
    green: {
      bar: "bg-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-800",
      badgeText: "text-emerald-900",
      text: "text-emerald-800",
    },
    amber: {
      bar: "bg-amber-400",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-800",
      badgeText: "text-amber-900",
      text: "text-amber-800",
    },
    blue: {
      bar: "bg-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800",
      badgeText: "text-blue-900",
      text: "text-blue-800",
    },
    red: {
      bar: "bg-red-400",
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-100 text-red-800",
      badgeText: "text-red-900",
      text: "text-red-800",
    },
  };

  return (
    <main className="min-h-screen">

      {/* ── PROJECT UPDATE SUMMARY ── */}
      <section className="border-b border-blue-100 bg-blue-600 px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Project Update</p>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">July 17, 2026</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-200">Roanoke — Bandwidth</p>
              <ul className="space-y-2 text-sm leading-6 text-white">
                <li>🔧 Verizon — in progress (not done)</li>
                <li>Fiber spliced, circuit not provisioned</li>
                <li>Back 7/17 for equipment; provisioning team to follow</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-200">Video Conf — Both Sites</p>
              <ul className="space-y-2 text-sm leading-6 text-white">
                <li>✅ All new gear ready VA + Haupp</li>
                <li>Installer on standby both locations</li>
                <li>Haupp: awaiting wallpaper · Roanoke: scheduling paint</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-200">Warehouse WiFi (ROC)</p>
              <ul className="space-y-2 text-sm leading-6 text-white">
                <li>✅ Switch mounted in rack</li>
                <li>Curtis cutover 7/18 — old → new switch</li>
                <li>APs pending from Jordan · RCI after provision</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-200">Next Up</p>
              <ul className="space-y-2 text-sm leading-6 text-white">
                <li>Verizon provisioning team contact</li>
                <li>Wallpaper + wall paint dates</li>
                <li>Schedule installs once ready</li>
              </ul>
              <div className="mt-3 border-t border-white/20 pt-3">
                <p className="text-xs font-bold text-blue-200">Overall Readiness</p>
                <p className="text-2xl font-bold text-white">83%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT STATUS ── big, plain, impossible to miss ── */}
      <section className="border-b-2 border-slate-900 bg-slate-950 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">What&apos;s happening right now</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Current Status</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {currentStatus.map((item) => {
              const t = statusToneMap[item.tone];
              return (
                <div key={item.site} className={`rounded-2xl border-2 ${item.tone === "green" ? "border-emerald-400" : item.tone === "amber" ? "border-amber-400" : item.tone === "red" ? "border-red-400" : "border-blue-400"} bg-white p-5`}>
                  <div className={`mb-3 h-1.5 w-full rounded-full ${t.bar}`} />
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{item.emoji}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>{item.site}</span>
                  </div>
                  <p className={`mt-3 text-xl font-bold ${t.badgeText}`}>{item.headline}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr] lg:items-end">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/arkay-logo.png" alt="Arkay Packaging" className="mb-5 h-14 w-auto" />
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
                  Verizon · Video Ready · Warehouse Cutover
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-semibold">83%</span>
                  <span className="text-sm text-slate-300">overall readiness</span>
                </div>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[83%] rounded-full bg-blue-400" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">{carrierTimelineNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFERENCE ROOM MODERNIZATION ── */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Project Milestone"
            title="Conference Room Modernization"
            copy="Video conferencing equipment has been ordered for all Arkay facilities as of May 27, 2026."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {/* Equipment ordered */}
            <article className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">Equipment Ordered</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Equipment ordered includes:</h3>
              <ul className="mt-4 space-y-3">
                {confRoomEquipment.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <span className="mt-1 text-emerald-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Facility prep */}
            <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Facility Preparation</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Site prep before install:</h3>
              <div className="mt-4 space-y-5">
                {confRoomFacilities.map((fac) => (
                  <div key={fac.site}>
                    <p className={`mb-2 text-xs font-bold uppercase tracking-wide ${fac.tone === "amber" ? "text-amber-700" : "text-blue-700"}`}>
                      {fac.site}
                    </p>
                    <ul className="space-y-2">
                      {fac.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                          <span className="mt-1 text-slate-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            {/* Install plan */}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🔧</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">Installation Plan</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950">How it gets installed:</h3>
              <ul className="mt-4 space-y-3">
                {confRoomInstall.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <span className="mt-1 text-blue-500">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Business benefit */}
          <div className="mt-5 rounded-2xl border border-slate-900 bg-slate-950 px-6 py-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Business Benefit</p>
            <p className="mt-2 text-base leading-7 text-slate-200">
              The conference room modernization project will provide a consistent meeting experience across all facilities,
              improve audio and video quality, simplify meeting participation, and support the broader Microsoft Teams,
              Copilot, and AI collaboration initiatives.
            </p>
          </div>
        </div>
      </div>

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
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
            <span className="mt-0.5 text-lg">📦</span>
            <p className="text-sm font-medium leading-6 text-blue-900">{videoEquipNotice}</p>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader eyebrow="Site Status" title="Roanoke, Hauppauge, and Warehouse readiness view" />
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {sites.map((site) => {
              const isGreen = site.statusTone === "green";
              const isBlue = site.statusTone === "blue";
              return (
                <article key={site.city} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">{site.city}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{site.address}</p>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${
                        isGreen
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : isBlue
                            ? "border-blue-200 bg-blue-50 text-blue-800"
                            : "border-amber-200 bg-amber-50 text-amber-800"
                      }`}
                    >
                      {site.statusLabel}
                    </span>
                  </div>
                  {site.note && (
                    <p
                      className={`mt-3 rounded-lg px-3 py-2 text-sm font-medium ${
                        isGreen ? "bg-emerald-50 text-emerald-800" : isBlue ? "bg-blue-50 text-blue-800" : "bg-amber-50 text-amber-800"
                      }`}
                    >
                      {site.note}
                    </p>
                  )}
                  <dl className="mt-4 grid gap-3">
                    {site.details.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 border-t border-slate-100 pt-3">
                        <dt className="text-sm font-medium text-slate-500">{label}</dt>
                        <dd className="text-right text-sm font-semibold text-slate-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{warehouse.site}</h3>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                  {warehouse.statusLabel}
                </span>
              </div>
              <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800">{warehouse.note}</p>
              <dl className="mt-4 grid gap-3">
                {warehouse.details.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border-t border-slate-100 pt-3">
                    <dt className="text-sm font-medium text-slate-500">{label}</dt>
                    <dd className="text-right text-sm font-semibold text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader
            eyebrow="Progress Timeline"
            title="Current phase: Hauppauge bandwidth live · Roanoke awaiting Verizon"
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
