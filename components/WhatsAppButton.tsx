import React from 'react';
import { trackWhatsAppClick } from '../services/bridgeService';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  shortToken: string | null;
  loading: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ shortToken, loading }) => {
  const WHATSAPP_NUMBER = "918095550440"; 

  const handleOrderClick = () => {
    if (!shortToken) return;
    const message = `Hi, I want to pre-order the 5KG Bucket.%0a%0a(Ref: ${shortToken})`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    trackWhatsAppClick(shortToken);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <button
        onClick={handleOrderClick}
        disabled={loading || !shortToken}
        className="group relative w-full max-w-md bg-gradient-to-r from-maroon-800 to-maroon-700 rounded-full p-2 pr-2 shadow-[0_15px_30px_-5px_rgba(42,4,4,0.4)] border border-gold-400/40 flex items-center justify-between transition-all active:scale-95 hover:shadow-xl hover:-translate-y-0.5"
      >
         <div className="flex flex-col items-start pl-6">
           <span className="text-[10px] text-gold-400 font-display font-bold tracking-[0.15em] uppercase mb-0.5">
             Reserve Your Bucket
           </span>
           <span className="text-ivory font-display text-sm tracking-widest font-semibold group-hover:text-white transition-colors">
             PLACE ORDER ON WHATSAPP
           </span>
         </div>

         <div className="bg-[#25D366] h-11 w-11 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/10 group-hover:scale-105 transition-transform">
            {loading ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/> : <MessageCircle size={24} fill="white" />}
         </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;