import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pnlccjimpjsxprppkeis.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubGNjamltcGpzeHBycHBrZWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1NjgxMTMsImV4cCI6MjA0ODE0NDExM30.q_4XDpDJ37yXiW8ALr-NNTuksNzQt5BarYZDqbAWtbU';

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