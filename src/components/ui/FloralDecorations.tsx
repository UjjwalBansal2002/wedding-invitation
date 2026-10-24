import React from 'react';

/**
 * Luxury Wedding Stationery Divider
 * Elegant, minimalist gold foil hairline divider used in premium Indian wedding stationery
 * (No cartoon vectors, no flat illustrated flowers).
 */
export function FloralDivider({
  height = 'medium',
  className = '',
}: {
  color1?: string;
  color2?: string;
  height?: 'small' | 'medium' | 'large';
  className?: string;
}) {
  const heightClasses = {
    small: 'my-4 md:my-6',
    medium: 'my-6 md:my-8',
    large: 'my-8 md:my-12',
  };

  return (
    <div className={`w-full flex items-center justify-center ${heightClasses[height]} ${className} px-4`}>
      <div className="flex items-center justify-center gap-3 w-full max-w-md">
        <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-[#E5A93C]/60" />
        <div className="flex items-center gap-1.5 text-[#E5A93C]">
          <span className="w-1.5 h-1.5 rotate-45 border border-[#E5A93C] bg-[#FFF4E5]" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FDD835] via-[#E5A93C] to-[#B71C1C] shadow-xs" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#E5A93C] bg-[#FFF4E5]" />
        </div>
        <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E5A93C] to-[#E5A93C]/60" />
      </div>
    </div>
  );
}

/**
 * Subtle Gold Foil Corner Ornament for Luxury Wedding Cards
 * Ultra-thin geometric gold brackets (classic luxury letterpress style, zero cartoon drawings)
 */
export function FloralCorner({
  position = 'top-left',
  size = 'medium',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  size?: 'small' | 'medium' | 'large';
}) {
  const positionClasses = {
    'top-left': 'top-3 left-3 md:top-5 md:left-5',
    'top-right': 'top-3 right-3 md:top-5 md:right-5 scale-x-[-1]',
    'bottom-left': 'bottom-3 left-3 md:bottom-5 md:left-5 scale-y-[-1]',
    'bottom-right': 'bottom-3 right-3 md:bottom-5 md:right-5 scale-x-[-1] scale-y-[-1]',
  };

  const sizeClasses = {
    small: 'w-6 h-6 md:w-8 md:h-8',
    medium: 'w-8 h-8 md:w-12 md:h-12',
    large: 'w-12 h-12 md:w-16 md:h-16',
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none z-10 opacity-70`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Crisp gold foil letterpress corner bracket */}
        <path d="M 2 40 V 6 C 2 3.8 3.8 2 6 2 H 40" stroke="#E5A93C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 8 36 V 10 C 8 8.9 8.9 8 10 8 H 36" stroke="#E5A93C" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="6" cy="6" r="2" fill="#E5A93C" />
      </svg>
    </div>
  );
}

/**
 * Empty backwards compatibility helper (no cartoon garland)
 */
export function MarigoldGarland({ className = '' }: { className?: string }) {
  return null;
}

/**
 * Empty backwards compatibility helper (no cartoon diya)
 */
export function DiyaMotif({ size = 48 }: { size?: number }) {
  return null;
}

/**
 * Realistic Cinematic Ambient Drift:
 * Soft, natural out-of-focus golden light bokeh and delicate rose petals
 * (Natural photography depth of field, no cartoon emoji)
 */
export function FloralPetals() {
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: (i * 8.3) % 100,
    delay: (i * 0.7) % 5,
    duration: 10 + (i % 5) * 2,
    size: 8 + (i % 4) * 3,
    isRose: i % 2 === 0,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size * 1.2}px`,
            background: p.isRose
              ? 'radial-gradient(circle at 30% 30%, #D81B60, #8A1538)'
              : 'radial-gradient(circle at 30% 30%, #F9A825, #D97706)',
            borderRadius: '50% 50% 50% 0',
            filter: 'blur(0.6px) drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
            animation: `driftPetal ${p.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes driftPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 0.65;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
