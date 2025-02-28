import { create } from 'zustand';
import { supabase, Profile } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AuthState {
  user: any;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      set({ user: data.user });
      await useAuthStore.getState().fetchProfile(); // Fetch the user profile after sign-in
      toast.success('Signed in successfully!');
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  },
  signUp: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error || !data.user) throw error || new Error("User data is null");

      set({ user: data.user });

      // Create a new profile in the database
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          email: data.user.email,
          subscription_status: 'trialing', // Default status
          subscription_plan: 'basic', // Default plan
        });

      if (profileError) throw profileError;

      toast.success('Account created successfully!');
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, profile: null });
      toast.success('Signed out successfully');
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  },
  fetchProfile: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        set({ user: null, profile: null, loading: false });
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      set({ user, profile, loading: false });
    } catch (error) {
      set({ loading: false });
      console.error('Error fetching profile:', error);
    }
  },
}));