export enum ConversionStatus {
  PENDING = 'pending',
  CLICKED_WHATSAPP = 'clicked_whatsapp',
  ORDERED = 'ordered',
  PAID = 'paid'
}

export interface ConversionRecord {
  id?: string;
  short_token: string;
  gclid: string | null;
  user_phone?: string | null;
  status: ConversionStatus;
  conversion_value?: number;
  created_at?: string;
}

export interface WebhookPayload {
  object: string;
  entry: {
    id: string;
    changes: {
      value: {
        messaging_product: string;
        metadata: {
          display_phone_number: string;
          phone_number_id: string;
        };
        contacts: {
          profile: {
            name: string;
          };
          wa_id: string;
        }[];
        messages: {
          from: string;
          id: string;
          timestamp: string;
          text: {
            body: string;
          };
          type: string;
        }[];
      };
      field: string;
    }[];
  }[];
}