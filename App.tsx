import React, { useState, useEffect } from 'react';
import { Clock, ChefHat, Flame, Star, ShoppingBag, Info, ArrowDown, MapPin } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import MusaazLogo from './components/MusaazLogo';
import { initializeConversion } from './services/bridgeService';

export default function App() {
  const [shortToken, setShortToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initBridge = async () => {
      const params = new URLSearchParams(window.location.search);
      const gclid = params.get('gclid');
      const token = await initializeConversion(gclid);
      setShortToken(token);
    };
    initBridge();
  }, []);

  return (
    <div className="min-h-screen bg-[#2A0404] font-sans flex flex-col items-center relative overflow-hidden">
      
      {/* BACKGROUND TEXTURE (Subtle Grain) */}
      <div className="fixed inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-maroon-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* --- TOP SECTION (Maroon Background) --- */}
      <div className="relative z-10 w-full flex flex-col items-center pt-8 pb-10 px-6 text-center">
        
        {/* Header Nav */}
        <div className="w-full flex justify-between items-start mb-6">
           <MusaazLogo variant="light" className="scale-90 origin-top-left" />
           <div className="border border-gold-400/30 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md">
             <span className="text-[10px] font-display font-semibold tracking-[0.15em] text-gold-100 uppercase">
               • Pre-Order Open
             </span>
           </div>
        </div>

        {/* Typography Hero */}
        <div className="mt-6 mb-4 relative">
           <p className="text-gold-400/90 font-display text-[11px] uppercase tracking-[0.4em] font-semibold mb-2 ml-1">
             The Royal Offering
           </p>
           
           <div className="flex flex-col items-center relative">
             <h1 className="text-5xl md:text-7xl text-ivory font-display tracking-tight leading-none drop-shadow-2xl">
               BUCKET
             </h1>
             <span className="text-6xl md:text-8xl text-gold-500 font-script -mt-4 md:-mt-6 relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] rotate-[-6deg]">
               Feast
             </span>
           </div>
        </div>

        <div className="mt-8 max-w-xs mx-auto">
          <div className="h-[1px] w-12 bg-gold-500/50 mx-auto mb-4"></div>
          <p className="text-ivory/80 text-sm font-serif italic leading-relaxed">
            "A culinary masterpiece from the lost recipes of Mumbai."
          </p>
        </div>

        <div className="mt-8 animate-bounce text-gold-400/40">
          <ArrowDown size={18} />
        </div>

      </div>

      {/* --- BOTTOM SECTION (White Sheet) --- */}
      <div className="relative z-20 w-full flex-grow bg-ivory rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.7)] px-6 pt-10 pb-40 -mt-6">
         
         {/* Gold Accent Line Top */}
         <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-maroon-900/10 rounded-full"></div>

         <div className="max-w-md mx-auto">
            
            {/* PRICE HEADER */}
            <div className="flex justify-between items-end border-b border-maroon-900/10 pb-5 mb-8">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-maroon-900/40 mb-1">
                  Family Pack
                </span>
                <h2 className="text-2xl font-display text-maroon-900 font-bold tracking-tight">
                  THE 5KG BUCKET
                </h2>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-display text-maroon-900 font-semibold leading-none">
                  ₹1,299
                </span>
                <span className="text-[9px] font-sans font-bold text-gold-600 uppercase tracking-wider mt-1 block">
                  Limited Privilege
                </span>
              </div>
            </div>

            {/* CHEF QUOTE (Editorial Style) */}
            <div className="mb-10 text-center px-2">
               <p className="text-maroon-900/80 text-sm leading-8 font-serif italic relative inline-block">
                 <span className="text-3xl text-gold-500 absolute -top-2 -left-4">“</span>
                 We cook each bucket individually in its own handi. No batch mixing. No reheating. Just pure, layered Dum Biryani that steams when you open it.
                 <span className="text-3xl text-gold-500 absolute -bottom-4 -right-2 leading-none">”</span>
               </p>
               <div className="mt-6">
                  <span className="font-script text-3xl text-maroon-800 relative z-10">Chef Siraj</span>
               </div>
            </div>

            {/* SPECS GRID (Clean Layout) */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-8">
               
               {/* Spec 1 */}
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 text-maroon-700">
                   <Flame size={18} strokeWidth={1.5} />
                 </div>
                 <p className="text-[9px] text-maroon-900/40 font-display uppercase tracking-widest font-bold mb-1">
                   Technique
                 </p>
                 <p className="text-sm font-sans font-semibold text-maroon-900">
                   Slow Dum Cooked
                 </p>
               </div>
               
               {/* Spec 2 */}
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 text-maroon-700">
                   <Clock size={18} strokeWidth={1.5} />
                 </div>
                 <p className="text-[9px] text-maroon-900/40 font-display uppercase tracking-widest font-bold mb-1">
                   Preparation
                 </p>
                 <p className="text-sm font-sans font-semibold text-maroon-900">
                   3 Hours Notice
                 </p>
               </div>

               {/* Spec 3 */}
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 text-maroon-700">
                   <ShoppingBag size={18} strokeWidth={1.5} />
                 </div>
                 <p className="text-[9px] text-maroon-900/40 font-display uppercase tracking-widest font-bold mb-1">
                   Contents
                 </p>
                 <p className="text-sm font-sans font-semibold text-maroon-900">
                   1KG Meat + 1KG Rice
                 </p>
               </div>

               {/* Spec 4 */}
               <div className="flex flex-col items-center text-center">
                 <div className="mb-2 text-maroon-700">
                   <Star size={18} strokeWidth={1.5} />
                 </div>
                 <p className="text-[9px] text-maroon-900/40 font-display uppercase tracking-widest font-bold mb-1">
                   Rice Type
                 </p>
                 <p className="text-sm font-sans font-semibold text-maroon-900">
                   Royal Basmati
                 </p>
               </div>
            </div>

            {/* Delivery Info */}
             <div className="bg-maroon-50 rounded-xl p-4 flex items-start gap-3 border border-maroon-100/50">
                <MapPin size={16} className="text-maroon-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-maroon-900/80 font-sans font-medium leading-tight">
                    Exclusive Delivery to <span className="font-bold text-maroon-900">HSR Layout & Indiranagar</span>
                  </p>
                  <p className="text-[10px] text-gold-600 font-bold mt-1 uppercase tracking-wide">
                    ₹120 Delivery Credit included
                  </p>
                </div>
             </div>

         </div>
      </div>

      <WhatsAppButton shortToken={shortToken} loading={loading} />
    </div>
  );
}