import { createClient } from '@supabase/supabase-js';

// In a real Next.js app, these would be process.env.NEXT_PUBLIC_SUPABASE_URL
// For this environment, we are mocking the client if env vars are missing to prevent crashes.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);