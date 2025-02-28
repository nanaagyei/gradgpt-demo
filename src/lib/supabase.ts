import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type Profile = {
  id: string;
  email: string;
  subscription_status: 'active' | 'trialing' | 'canceled' | 'incomplete' | null;
  subscription_plan: 'basic' | 'pro' | 'premium' | null;
  subscription_period_end: string | null;
};