import { supabase } from '../lib/supabase';
import { WebhookPayload } from '../types';

/**
 * Task 4: The Webhook for WhatsApp Bot
 * 
 * This file represents the logic that would reside in `/api/webhook/whatsapp` 
 * in a Next.js App Router application.
 */

export const handleWhatsAppWebhook = async (payload: WebhookPayload) => {
  try {
    // 1. Extract the message details from the complex WhatsApp payload structure
    const messageEntry = payload.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    
    if (!messageEntry || messageEntry.type !== 'text') {
      return { status: 200, message: 'No text message found' };
    }

    const messageBody = messageEntry.text.body;
    const senderPhone = messageEntry.from; // e.g., "919999999999"

    console.log(`Received message from ${senderPhone}: ${messageBody}`);

    // 2. Extract the "Ref: 1234" code using Regex
    // Looks for "Ref:" or "Ref" followed by optional whitespace and 4-6 digits
    const refRegex = /Ref:\s*(\d{4,6})/i;
    const match = messageBody.match(refRegex);

    if (match && match[1]) {
      const extractedToken = match[1];
      console.log(`Found Bridge Token: ${extractedToken}`);

      // 3. Update Supabase
      // We map the phone number to the conversion record created by the "Bridge"
      // This completes the "Invisible Bridge": GCLID -> Token -> Phone Number
      const { error } = await supabase
        .from('conversions')
        .update({ user_phone: senderPhone })
        .eq('short_token', extractedToken);

      if (error) {
        console.error('Supabase update failed:', error);
        return { status: 500, error: error.message };
      }

      console.log('Attribution successful. Phone number linked to GCLID.');
      return { status: 200, message: 'Attribution successful' };
    }

    return { status: 200, message: 'No reference code found' };

  } catch (error) {
    console.error('Webhook processing error:', error);
    return { status: 500, error: 'Internal Server Error' };
  }
};
