import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AuthState {
  user: any;
  profile: any;
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
      if (error) throw error;
      set({ user: data.user });
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