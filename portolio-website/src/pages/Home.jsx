export default function Home() {
  return (
    <div
      className="flex-1 h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c6b 0%, #4a1a8a 30%, #8b2f7a 60%, #c2476b 85%, #e8637a 100%)',
      }}
    >
      {/* Main text content */}
      <div className="z-10" style={{ marginLeft: '10rem' }}>
        <h1 className="text-white font-bold leading-tight mb-1" style={{ fontSize: '5.5rem' }}>
          Hi
        </h1>
        <h1 className="text-white font-bold leading-tight mb-1" style={{ fontSize: '5.5rem' }}>
          I&apos;m Ryan,
        </h1>
        <h1 className="text-white font-bold leading-tight" style={{ fontSize: '5.5rem' }}>
          full stack developer.
        </h1>
        <p className="text-white/60 mt-6 text-sm tracking-widest uppercase">
          Computer Science Technology, 2026 at Dawson College
        </p>
        <a
          href="mailto:vinhryan@outlook.com"
          className="inline-block mt-10 px-10 py-4 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a84c] hover:text-[#0d1b4b] transition-all duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Terminal window */}
      <div
        className="absolute right-28 top-1/2 -translate-y-1/2 pointer-events-none rounded-lg overflow-hidden"
        style={{
          width: '380px',
          background: 'rgba(10, 8, 30, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
          <span className="ml-3 text-xs text-white/30 tracking-widest">~/ryan</span>
        </div>
        {/* Code lines */}
        <div className="font-mono text-sm leading-7" style={{ padding: '1.5rem 2rem' }}>
          <p><span className="text-pink-400">const</span> <span className="text-blue-300">ryan</span> <span className="text-white/50">=</span> <span className="text-white/50">{'{'}</span></p>
          <p className="pl-5"><span className="text-purple-300">name</span><span className="text-white/50">:</span> <span className="text-green-300">&quot;Ryan Vinh Bui&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-5"><span className="text-purple-300">role</span><span className="text-white/50">:</span> <span className="text-green-300">&quot;Full Stack Developer&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-5"><span className="text-purple-300">school</span><span className="text-white/50">:</span> <span className="text-green-300">&quot;Dawson College&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-5"><span className="text-purple-300">skills</span><span className="text-white/50">: [</span></p>
          <p className="pl-10"><span className="text-green-300">&quot;React&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;Node.js&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;Python&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-10"><span className="text-green-300">&quot;Docker&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;Flask&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;PostgreSQL&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-10"><span className="text-green-300">&quot;Java&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;SQL&quot;</span><span className="text-white/50">,</span> <span className="text-green-300">&quot;Tailwind CSS&quot;</span><span className="text-white/50">,</span></p>
          <p className="pl-5"><span className="text-white/50">],</span></p>
          <p><span className="text-white/50">{'}'}</span><span className="text-white/50">;</span></p>
          <p className="mt-2"><span className="text-white/30">$</span> <span className="text-white/60">_</span><span className="animate-pulse text-pink-400">|</span></p>
        </div>
      </div>
    </div>
  )
}
