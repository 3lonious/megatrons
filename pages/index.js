// pages/index.js
import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image"; // ⬅️ add this

const HERO_BG_URL = "/images/mts-bg-2.jpg";

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Mega Trons Survivors",
  url: "https://megatronssurvivors.com",
  image: "https://megatronssurvivors.com/og/mega-trons-survivors-og.jpg",
  description:
    "Mega Trons Survivors is a neon-drenched twin-stick bullet hell roguelike where you become insanely overpowered and obliterate thousands of enemies while you level up, explore, and complete side objectives each run.",
  genre: ["Action", "Roguelike", "Twin-stick shooter", "Bullet hell"],
  gamePlatform: ["PC", "Steam"],
  publisher: {
    "@type": "Organization",
    name: "Your Studio Name",
  },
  applicationCategory: "Game",
};

export default function HomePage() {
  const jsonLd = JSON.stringify(gameSchema);

  // Log on render (SSR + client)
  console.log("[HomePage] Rendering with hero background:", HERO_BG_URL);

  // Preload image + log result in browser console
  useEffect(() => {
    console.log("[Hero] Pre-loading hero background image:", HERO_BG_URL);

    if (typeof window === "undefined") {
      console.log("[Hero] Skipping hero image preload on server.");
      return;
    }

    const img = new window.Image();
    img.src = HERO_BG_URL;

    img.onload = () => {
      console.log("[Hero] Hero background loaded OK:", {
        width: img.width,
        height: img.height,
        src: img.src,
      });
    };

    img.onerror = (err) => {
      console.error("[Hero] FAILED to load hero background image:", {
        src: img.src,
        error: err,
      });
    };
  }, []);

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Mega Trons Survivors – Neon Bullet Hell Twin-Stick Roguelike
        </title>
        <meta
          name="description"
          content="Mega Trons Survivors is a Tron-inspired neon twin-stick bullet hell roguelike where you get insanely overpowered, destroy thousands of enemies, and clear side objectives across glowing cyber arenas."
        />
        <meta
          name="keywords"
          content="Mega Trons Survivors, bullet hell, twin-stick shooter, roguelike, roguelite, neon cyberpunk game, survival shooter, indie game, action game"
        />
        <link rel="canonical" href="https://megatronssurvivors.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mega Trons Survivors – Neon Bullet Hell Twin-Stick Roguelike"
        />
        <meta
          property="og:description"
          content="Dive into a Tron neon world, stack broken upgrades, and wipe out thousands of enemies in Mega Trons Survivors."
        />
        <meta property="og:url" content="https://megatronssurvivors.com" />
        <meta
          property="og:image"
          content="https://megatronssurvivors.com/og/mega-trons-survivors-og.jpg"
        />
        <meta property="og:site_name" content="Mega Trons Survivors" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mega Trons Survivors – Neon Bullet Hell Twin-Stick Roguelike"
        />
        <meta
          name="twitter:description"
          content="A Tron-inspired neon twin-stick bullet hell roguelike where you become absurdly overpowered and erase entire armies."
        />
        <meta
          name="twitter:image"
          content="https://megatronssurvivors.com/og/mega-trons-survivors-og.jpg"
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#020617] via-black to-[#020617] text-slate-100 overflow-hidden">
        {/* Neon background accents behind everything */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20"
        >
          <div className="absolute -top-40 left-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_#22d3ee,_transparent_60%)] opacity-40 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_#6366f1,_transparent_60%)] opacity-40 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-[32rem] bg-[radial-gradient(circle_at_center,_#f97316,_transparent_60%)] opacity-40 blur-3xl" />
        </div>

        {/* NAVBAR */}
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-cyan-500/20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              {/* <div className="relative h-10 w-10 rounded-2xl border border-cyan-400/70 bg-black/80 shadow-[0_0_20px_rgba(34,211,238,0.9)] overflow-hidden">
                <Image
                  src="/images/mts-logo.png"
                  alt="Mega Trons Survivors logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </div> */}
              <div className="flex flex-col">
                <div className="relative h-9 w-28 rounded-2xl border border-cyan-400/70 bg-black/80 shadow-[0_0_10px_rgba(34,211,238,0.85)] overflow-hidden">
                  <Image
                    src="/images/mts-logo.png"
                    alt="Mega Trons Survivors wordmark"
                    fill
                    className="object-contain brightness-150"
                    sizes="176px"
                    priority
                  />
                </div>
                {/* <span className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-400">
                  Neon Survival Protocol
                </span> */}
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 md:flex">
              <a href="#features" className="hover:text-cyan-300 transition">
                Features
              </a>
              <a href="#systems" className="hover:text-cyan-300 transition">
                Systems
              </a>
              <a href="#roadmap" className="hover:text-cyan-300 transition">
                Roadmap
              </a>
              <a href="#newsletter" className="hover:text-cyan-300 transition">
                Join Uplink
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#wishlist"
                className="hidden rounded-full border border-cyan-400/60 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-cyan-500/10 hover:text-cyan-100 md:inline-flex"
              >
                Wishlist on Steam
              </a>
            </div>
          </div>
        </header>

        {/* HERO with full-width background image */}
        <section id="wishlist" className="relative pb-24 pt-16 lg:pt-24">
          {/* Full-width hero background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_BG_URL})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/40" />
          </div>

          {/* Constrained content on top */}
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
            {/* Left column */}
            <div className="max-w-xl space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                Neon Twin-Stick • Bullet Hell Roguelike
              </p>

              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Get{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  insanely overpowered
                </span>{" "}
                and erase the Mega Trons.
              </h1>

              <p className="max-w-lg text-sm leading-relaxed text-slate-300">
                Mega Trons Survivors throws you into a Tron-style neon grid
                where swarms never stop spawning. Stack broken upgrades, melt
                thousands of robotic hordes, level up mid-fight, and clear side
                objectives in every glowing arena to push even deeper into the
                simulation.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://store.steampowered.com" // TODO: update to real Steam URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/70 bg-cyan-500/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.75)] transition hover:bg-cyan-400/20"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.35),transparent)] opacity-0 transition group-hover:opacity-100" />
                  <span>Wishlist on Steam</span>
                </a>

                <button className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-black/60 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-100 hover:border-cyan-400/50 hover:text-cyan-100">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  Watch gameplay trailer
                </button>
              </div>

              <div className="grid max-w-lg grid-cols-3 gap-4 pt-4 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                <div className="space-y-1">
                  <p className="text-[0.6rem] text-slate-300">Enemies erased</p>
                  <p className="text-sm font-semibold text-cyan-300">1,000s+</p>
                  <p>Robotic swarms on screen every run.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[0.6rem] text-slate-300">Build power</p>
                  <p className="text-sm font-semibold text-fuchsia-300">
                    Broken++
                  </p>
                  <p>Layer absurd synergies until the grid breaks.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[0.6rem] text-slate-300">
                    Side objectives
                  </p>
                  <p className="text-sm font-semibold text-amber-300">
                    High Risk
                  </p>
                  <p>Optional missions that supercharge each level.</p>
                </div>
              </div>
            </div>

            {/* Right column – Neon gameplay “card” */}
            <div className="relative mt-10 flex-1 lg:mt-0">
              <div className="relative mx-auto max-w-md rounded-3xl border border-cyan-400/50 bg-gradient-to-br from-slate-900/90 via-black/80 to-slate-900/80 p-[1px] shadow-[0_0_60px_rgba(34,211,238,0.75)]">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/40 via-black to-fuchsia-900/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.4),transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.35),transparent_55%)]" />

                  {/* “Screen” with hero background */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="absolute inset-[12%] rounded-[2rem] border border-cyan-400/40 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.4),transparent_60%)] opacity-70 blur-xl" />
                      <div className="absolute inset-[8%] rounded-[1.5rem] border border-fuchsia-400/40 bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.35),transparent_60%)] opacity-60 blur-xl" />

                      {/* Inner screen with background image */}
                      <div className="absolute inset-4 rounded-2xl border border-slate-800 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${HERO_BG_URL})` }}
                        />
                        <div className="absolute inset-0 bg-black/55" />
                        <div className="relative z-10 flex h-full items-center justify-center px-4">
                          <p className="max-w-xs text-center text-[0.65rem] uppercase tracking-[0.25em] text-slate-200">
                            <span className="block text-[0.6rem] text-cyan-300">
                              Gameplay Capture Placeholder
                            </span>
                            Neon arenas, twin-stick bullet sheets, and thousands
                            of Mega Trons closing in. Replace with real footage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HUD-like labels */}
                  <div className="grid grid-cols-3 gap-3 border-t border-cyan-500/20 bg-black/60 px-4 py-3 text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">
                    <div>
                      <p className="text-[0.55rem] text-slate-500">Protocol</p>
                      <p className="text-cyan-300">Twin-Stick</p>
                    </div>
                    <div>
                      <p className="text-[0.55rem] text-slate-500">Mode</p>
                      <p className="text-fuchsia-300">Roguelike</p>
                    </div>
                    <div>
                      <p className="text-[0.55rem] text-slate-500">Status</p>
                      <p className="text-emerald-300">Overpowered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="pointer-events-none absolute -right-4 top-10 space-y-3 text-[0.6rem]">
                <div className="rounded-xl border border-cyan-400/60 bg-black/80 px-3 py-2 shadow-[0_0_18px_rgba(34,211,238,0.7)]">
                  <p className="uppercase tracking-[0.22em] text-cyan-300">
                    x999 Chain
                  </p>
                  <p className="mt-1 text-[0.55rem] text-slate-300">
                    Endless multi-kills as the grid floods.
                  </p>
                </div>
                <div className="ml-6 rounded-xl border border-fuchsia-400/60 bg-black/80 px-3 py-2 shadow-[0_0_18px_rgba(244,114,182,0.7)]">
                  <p className="uppercase tracking-[0.22em] text-fuchsia-300">
                    Drone Swarm
                  </p>
                  <p className="mt-1 text-[0.55rem] text-slate-300">
                    Orbitals, beams, mines and lasers stacked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-6 pb-20 pt-4 lg:pb-24"
        >
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Core Systems
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
                A neon grid built for ridiculous power fantasies.
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-slate-300">
              Every run drops you into a remixed Mega Tron sector packed with
              robotic hordes, side missions, risk modifiers, and upgrade
              shrines. You&apos;re not just surviving—you&apos;re farming chaos
              for broken builds.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Overpowered builds",
                title: "Stack broken upgrades",
                body: "Combine ricochet beams, orbital drones, static mines, and dash barrages until the screen looks like a glitch in the simulation.",
              },
              {
                label: "Endless bullet curtains",
                title: "True bullet hell density",
                body: "Swarms don’t spawn in waves—they pour in. Dodge layered patterns, laser walls, and boss barrages that fill the grid with neon.",
              },
              {
                label: "Objective-driven chaos",
                title: "Side missions & contracts",
                body: "Escort data cores, purge Mega Tron nests, hack pylons, and race timers. Optional objectives crank up both the danger and the rewards.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/80 via-black/70 to-slate-950/70 p-[1px]"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-slate-950/90 via-black to-slate-950/80 p-5">
                  <div className="mb-4 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/5 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    {card.label}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SYSTEMS GRID */}
        <section id="systems" className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Combat Loop
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
                Dash, shred, and deliberately break the balance.
              </h2>

              <ul className="mt-6 space-y-4 text-xs leading-relaxed text-slate-300">
                <li>
                  <span className="mr-2 text-cyan-300">▹</span>
                  <span className="font-semibold text-slate-100">
                    Twin-stick mastery:
                  </span>{" "}
                  snappy movement and aiming tuned for gamepads and mouse +
                  keyboard.
                </li>
                <li>
                  <span className="mr-2 text-cyan-300">▹</span>
                  <span className="font-semibold text-slate-100">
                    Adaptive swarms:
                  </span>{" "}
                  Mega Trons escalate based on your build—the stronger you get,
                  the more ridiculous the screen becomes.
                </li>
                <li>
                  <span className="mr-2 text-cyan-300">▹</span>
                  <span className="font-semibold text-slate-100">
                    Persistent meta:
                  </span>{" "}
                  unlock new archetypes, starting weapons, blessings, and
                  difficulty protocols that reshape runs.
                </li>
                <li>
                  <span className="mr-2 text-cyan-300">▹</span>
                  <span className="font-semibold text-slate-100">
                    Sector micro-stories:
                  </span>{" "}
                  each district hides lore fragments, corrupted nodes, and
                  high-risk contracts that tempt you off the optimal path.
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-black/70 p-5 shadow-[0_0_40px_rgba(34,211,238,0.7)]">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Run Telemetry – Sample Build
                </p>
                <div className="mt-4 space-y-3 text-xs text-slate-200">
                  <div className="flex justify-between">
                    <span>Neon Beam Damage</span>
                    <span className="text-cyan-300">+380%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Orbital Drones</span>
                    <span className="text-fuchsia-300">14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dash Charges</span>
                    <span className="text-amber-300">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mega Trons Purged</span>
                    <span className="text-emerald-300">82,340</span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 px-4 py-3 text-[0.65rem] text-slate-200">
                  You&apos;re not meant to barely survive—your run should look
                  like the AI lost control of the difficulty slider.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP / CALL TO ACTION */}
        <section id="roadmap" className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-slate-950/90 via-black to-slate-950/90 px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-300">
                  Development Roadmap
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
                  Charging up for Early Access.
                </h2>
                <ul className="mt-5 space-y-3 text-xs text-slate-200">
                  <li>
                    <span className="mr-2 text-emerald-300">●</span>
                    Closed alpha: core survival loop, 3+ sectors, 50+ upgrades.
                  </li>
                  <li>
                    <span className="mr-2 text-amber-300">●</span>
                    Early Access: meta progression, difficulty ladders, weekly
                    survival modifiers.
                  </li>
                  <li>
                    <span className="mr-2 text-fuchsia-300">●</span>
                    Full Release: campaign arcs, Mega Tron bosses, co-op
                    protocol.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-300">
                  Boost the signal
                </p>
                <p className="text-xs text-slate-300">
                  Wishlists on Steam massively boost discoverability. If you
                  want more neon survival chaos in your library, this is the run
                  to back.
                </p>
                <a
                  href="https://store.steampowered.com" // TODO: update to real Steam URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-cyan-500/10 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.7)] hover:bg-cyan-400/20"
                >
                  Wishlist Mega Trons Survivors
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER / UPLINK */}
        <section
          id="newsletter"
          className="mx-auto max-w-6xl px-6 pb-24 lg:pb-28"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Uplink Protocol
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
                Get dev logs, early keys, and grid intel.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Subscribe to the Mega Trons Survivors broadcast. No spam, just
                transparent dev logs, design breakdowns, and chances to jump
                into early sectors before everyone else.
              </p>
            </div>

            <form className="space-y-3 rounded-2xl border border-cyan-500/40 bg-black/70 p-5 text-xs shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-300">
                Email uplink
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-cyan-400/80 bg-cyan-500/20 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-cyan-100 hover:bg-cyan-500/30"
              >
                Link to broadcast
              </button>
              <p className="text-[0.6rem] text-slate-500">
                Mission-critical updates only. Disconnect any time.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800/80 bg-black/90 py-6 text-[0.65rem] text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Mega Trons Survivors • All rights
              reserved.
            </p>
            <div className="flex gap-4 uppercase tracking-[0.24em]">
              <a href="#wishlist" className="hover:text-cyan-300">
                Wishlist
              </a>
              <a href="#features" className="hover:text-cyan-300">
                Features
              </a>
              <a href="#newsletter" className="hover:text-cyan-300">
                Uplink
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
