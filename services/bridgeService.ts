import { supabase } from '../lib/supabase';
import { ConversionStatus } from '../types';

/**
 * Task 2: The "Invisible Bridge" Logic
 * 
 * 1. Generates a short numeric token (Ref Code).
 * 2. Saves the mapping of { short_token <-> gclid } in Supabase.
 * 3. This allows us to attribute the offline conversion (WhatsApp message) 
 *    back to the specific Google Ad click later.
 */

export const generateShortToken = (): string => {
  // Generates a random 4-digit number between 1000 and 9999
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const initializeConversion = async (gclid: string | null): Promise<string> => {
  const shortToken = generateShortToken();
  
  // Check if we are in a demo environment (Mock URL or missing env vars)
  // This prevents the [object Object] error when running without a real Supabase backend.
  const isMock = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('mock.supabase');

  if (isMock) {
    console.warn("Supabase not configured. Running in demo mode (Simulating DB).");
    console.log(`[Mock DB] Insert: { short_token: ${shortToken}, gclid: ${gclid}, status: 'pending' }`);
    return shortToken;
  }

  try {
    const { error } = await supabase
      .from('conversions')
      .insert({
        short_token: shortToken,
        gclid: gclid,
        status: ConversionStatus.PENDING,
      });

    if (error) {
      // Improved error logging to show the actual error message
      console.error('Error creating conversion record:', JSON.stringify(error, null, 2));
      // In production, handle token collisions here. 
      // For now, we return the token anyway so the UI doesn't break.
    } else {
        console.log(`Bridge initialized. Token: ${shortToken} linked to GCLID: ${gclid ? 'Yes' : 'No'}`);
    }
  } catch (err) {
    console.error('Unexpected error in bridge service:', err);
  }

  return shortToken;
};

export const trackWhatsAppClick = async (shortToken: string) => {
  // Check if we are in a demo environment
  const isMock = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('mock.supabase');

  if (isMock) {
    console.log(`[Mock DB] Update status to 'clicked_whatsapp' for token: ${shortToken}`);
    return;
  }

  try {
    const { error } = await supabase
      .from('conversions')
      .update({ status: ConversionStatus.CLICKED_WHATSAPP })
      .eq('short_token', shortToken);

    if (error) {
      console.error('Error tracking click:', JSON.stringify(error, null, 2));
    }
  } catch (err) {
    console.error('Error tracking click:', err);
  }
};