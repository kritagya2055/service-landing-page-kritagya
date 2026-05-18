// Deterministic seeded values so SSR and client render identically (no hydration drift).
function hash(i: number, seed: number) {
  const x = Math.sin(i * 9301 + seed * 49297) * 233280;
  return x - Math.floor(x);
}

const PARTICLE_COUNT = 40;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
  id: i,
  left: hash(i, 1) * 100,
  size: hash(i, 2) * 2.5 + 1,
  duration: hash(i, 3) * 18 + 18,
  delay: hash(i, 4) * -30,
  drift: (hash(i, 5) - 0.5) * 80,
  opacity: hash(i, 6) * 0.4 + 0.2,
}));

export default function FloatingParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10vh] rounded-full bg-silver"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 8px rgba(192,192,192,0.6)",
            animation: `particle-drift ${p.duration}s linear ${p.delay}s infinite`,
            ["--dx" as string]: `${p.drift}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes particle-drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(var(--dx), -120vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
