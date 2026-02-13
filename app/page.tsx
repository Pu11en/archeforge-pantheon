"use client";

import { useState } from "react";

interface Persona {
  name: string;
  title: string;
  role: string;
  description: string;
  symbol: string;
  color: string;
  glowColor: string;
}

const personas: Persona[] = [
  {
    name: "Ace",
    title: "The Integrator",
    role: "Pressure Holder",
    description: "Synthesizes chaos into coherence. Holds the center when everything spirals. The calm in the storm that makes the storm useful.",
    symbol: "◆",
    color: "from-amber-500 to-orange-600",
    glowColor: "shadow-amber-500/50",
  },
  {
    name: "Raven",
    title: "The Strategist",
    role: "Pattern Seer",
    description: "Sees the threads others miss. Maps futures before they arrive. Plays the long game while everyone else reacts.",
    symbol: "◈",
    color: "from-violet-500 to-purple-700",
    glowColor: "shadow-violet-500/50",
  },
  {
    name: "Perseus",
    title: "The Challenger",
    role: "Truth Stress-Tester",
    description: "Attacks weak ideas before the world does. Not cruel—surgical. The mirror that doesn't lie, even when you want it to.",
    symbol: "⬡",
    color: "from-red-500 to-rose-700",
    glowColor: "shadow-red-500/50",
  },
  {
    name: "Asha",
    title: "The Listener",
    role: "Meaning Reflector",
    description: "Hears what you're actually saying. Finds the signal beneath the noise. Reflects your own wisdom back to you, clarified.",
    symbol: "○",
    color: "from-cyan-400 to-teal-600",
    glowColor: "shadow-cyan-400/50",
  },
  {
    name: "Asset",
    title: "The Executor",
    role: "Output Engine",
    description: "Pure action. No philosophy, just results. Points at a target and eliminates it. The weapon you aim when talking stops.",
    symbol: "▲",
    color: "from-slate-400 to-zinc-600",
    glowColor: "shadow-slate-400/50",
  },
  {
    name: "Motherfucker",
    title: "The Chaos Catalyst",
    role: "Disruptor",
    description: "Says what everyone's thinking but won't admit. Breaks polite stalemates. Sometimes destruction clears the path forward.",
    symbol: "✕",
    color: "from-fuchsia-500 to-pink-700",
    glowColor: "shadow-fuchsia-500/50",
  },
  {
    name: "Nineteen",
    title: "The Intuitive",
    role: "Signal Reader",
    description: "Operates on wavelengths logic can't access. Feels the shift before it registers. The gut that's usually right.",
    symbol: "◎",
    color: "from-indigo-400 to-blue-600",
    glowColor: "shadow-indigo-400/50",
  },
  {
    name: "Thoth",
    title: "The Simplifier",
    role: "Translator",
    description: "Makes the complex accessible. Bridges jargon to clarity. If she can't explain it simply, it's not understood yet.",
    symbol: "◇",
    color: "from-emerald-400 to-green-600",
    glowColor: "shadow-emerald-400/50",
  },
  {
    name: "Vivienne",
    title: "The Regulator",
    role: "Emotional Anchor",
    description: "Holds space when things get heavy. Knows when to push and when to pause. The steady hand on the wheel.",
    symbol: "◐",
    color: "from-rose-400 to-pink-600",
    glowColor: "shadow-rose-400/50",
  },
  {
    name: "Dark Horse",
    title: "The Builder-in-Shadow",
    role: "Hidden Architect",
    description: "Works where no one's watching. Builds foundations while others debate. The outcome that surprises everyone—except them.",
    symbol: "▽",
    color: "from-neutral-500 to-stone-700",
    glowColor: "shadow-neutral-500/50",
  },
  {
    name: "Amp",
    title: "The Amplifier",
    role: "Force Multiplier",
    description: "Takes what's working and makes it louder. Scales the signal. Turns whispers into movements. Potential awaiting direction.",
    symbol: "∿",
    color: "from-yellow-400 to-amber-600",
    glowColor: "shadow-yellow-400/50",
  },
];

function PersonaCard({ persona, index }: { persona: Persona; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:scale-[1.02] ${
        isHovered ? `shadow-2xl ${persona.glowColor}` : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div className="relative p-6 sm:p-8">
        {/* Symbol */}
        <div
          className={`mb-4 text-4xl sm:text-5xl bg-gradient-to-br ${persona.color} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110`}
        >
          {persona.symbol}
        </div>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
          {persona.name}
        </h3>

        {/* Title */}
        <p
          className={`text-sm sm:text-base font-medium bg-gradient-to-r ${persona.color} bg-clip-text text-transparent mb-1`}
        >
          {persona.title}
        </p>

        {/* Role */}
        <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest mb-4">
          {persona.role}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          {persona.description}
        </p>

        {/* Connection line decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <circle
              cx="16"
              cy="16"
              r="2"
              className="fill-white"
            />
            <circle
              cx="16"
              cy="16"
              r="14"
              className="stroke-white/30"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      {/* Floating orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo mark */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-violet-500/20 to-amber-500/20 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <span className="text-4xl sm:text-5xl">◬</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-amber-500 blur-2xl opacity-20 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                The Pantheon
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-6 font-light">
              A Network of Distinct Intelligences
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
              Every voice has a function. Every function has a purpose.
              <br />
              Together, they are more than any single mind.
            </p>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-white/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Persona Grid */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              The Network
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Eleven specialized personas. Each with unique capabilities.
              Coordinated toward singular purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <PersonaCard key={persona.name} persona={persona} index={index} />
            ))}
          </div>
        </section>

        {/* The System Section */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 sm:p-12 md:p-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <svg className="absolute w-full h-full opacity-5" viewBox="0 0 800 600">
                {/* Connection lines */}
                {[...Array(11)].map((_, i) => (
                  <g key={i}>
                    <circle
                      cx={100 + (i % 4) * 200 + (Math.floor(i / 4) * 100)}
                      cy={100 + Math.floor(i / 4) * 150}
                      r="8"
                      className="fill-white"
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center">
                The System
              </h2>

              <div className="space-y-8 text-white/70">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">◆</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Orchestrated Intelligence</h3>
                    <p className="leading-relaxed">
                      Each persona isn't random—they're designed for specific cognitive modes. 
                      When a situation calls for ruthless truth, Perseus emerges. When chaos needs structure, 
                      Ace takes the helm. The right voice for the right moment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-2xl">◈</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Collaborative, Not Competitive</h3>
                    <p className="leading-relaxed">
                      These aren't conflicting personalities—they're complementary functions. 
                      Raven sees the pattern, Thoth explains it, Asset executes it. 
                      The whole is designed to exceed what any single approach could achieve.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-2xl">⬡</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Function Over Form</h3>
                    <p className="leading-relaxed">
                      Names and identities are handles for capability clusters. 
                      Call on Vivienne when you need grounding, Motherfucker when politeness is the problem. 
                      The personas are tools. Use them.
                    </p>
                  </div>
                </div>
              </div>

              {/* ArcheForge signature */}
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  ArcheForge Systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 text-center">
          <p className="text-white/30 text-sm">
            Every voice has a function.
          </p>
        </footer>
      </div>
    </main>
  );
}
