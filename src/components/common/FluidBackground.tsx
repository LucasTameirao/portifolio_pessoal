import React from 'react';

export const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-950">
      {/* Base Vertical Gradient layer matching wireframe: Dark top -> Warm Amber/Orange -> Deep Slate */}
      <div 
        className="absolute inset-0 opacity-90 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(180deg, #18202c 0%, #c45d1d 22%, #9a4417 45%, #253342 75%, #0b111a 100%)',
        }}
      />

      {/* Fluid Floating Orbs (Liquid animation effect) */}
      <div className="absolute inset-0 overflow-hidden filter blur-[90px] opacity-75">
        {/* Orb 1: Warm Amber Liquid Blob (Top Left / Center) */}
        <div 
          className="absolute -top-[10%] left-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-500 via-orange-600 to-amber-300 animate-fluid-1 mix-blend-screen opacity-90"
        />

        {/* Orb 2: Bright Orange / Coral Liquid Blob (Top Right) */}
        <div 
          className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500 via-rose-600 to-amber-400 animate-fluid-2 mix-blend-screen opacity-80"
        />

        {/* Orb 3: Deep Slate / Cyan Glow Blob (Middle & Bottom) */}
        <div 
          className="absolute top-[45%] left-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-cyan-900 via-slate-800 to-teal-900 animate-fluid-3 mix-blend-hard-light opacity-75"
        />

        {/* Orb 4: Dark Navy / Indigo Deep Blob (Bottom Right) */}
        <div 
          className="absolute bottom-[0%] right-[5%] w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-slate-950 via-indigo-950 to-slate-900 animate-fluid-4 mix-blend-multiply opacity-90"
        />

        {/* Orb 5: Subtle Golden Shimmer (Center) */}
        <div 
          className="absolute top-[25%] left-[35%] w-[450px] h-[450px] rounded-full bg-amber-400/50 animate-fluid-5 mix-blend-screen opacity-60"
        />
      </div>

      {/* Subtle Noise / Texture overlay for realistic high-end fluid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
