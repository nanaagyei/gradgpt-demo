import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { supabase } from '../lib/supabase';

export interface Subscription {
  status: 'active' | 'trialing' | 'canceled' | 'incomplete' | null;
  plan: 'basic' | 'pro' | 'premium' | null;
  current_period_end: string | null;
}

export function useSubscription() {
  const { user } = useAuthStore();
  const [subscription, setSubscription] = useState<Subscription>({
    status: null,
    plan: null,
    current_period_end: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription({
        status: null,
        plan: 'basic',
        current_period_end: null,
      });
      setLoading(false);
      return;
    }

    const channel = supabase
      .channel(`profile:${user.id}`)
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'profiles',
          filter: `id=eq.${user.id}` 
        },
        async (payload) => {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (!error && profile) {
            setSubscription({
              status: profile.subscription_status,
              plan: profile.subscription_plan,
              current_period_end: profile.subscription_period_end,
            });
          }
        }
      )
      .subscribe();

    // Initial fetch
    supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()
      .then(({ data: profile, error }) => {
        if (!error && profile) {
          setSubscription({
            status: profile.subscription_status,
            plan: profile.subscription_plan,
            current_period_end: profile.subscription_period_end,
          });
        }
        setLoading(false);
      });

    return () => {
      channel.unsubscribe();
    };
  }, [user]);

  return { subscription, loading };
}