import { useState, useCallback, useEffect } from 'react';
import { generateResponse } from '../lib/openai';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../stores/authStore';
import toast from 'react-hot-toast';

export interface Message {
  id?: string;
  text: string;
  created_at: string;
  user_id: string;
  type: 'user' | 'assistant';
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();

  const sendMessage = useCallback(async (text: string) => {
    if (!user) return;

    setIsLoading(true);
    try {
      // Add user message to the database
      const { data: userMessage, error: userMessageError } = await supabase
        .from('messages')
        .insert({
          text,
          user_id: user.id,
          type: 'user'
        })
        .select()
        .single();

      if (userMessageError) throw userMessageError;

      setMessages(prev => [...prev, userMessage]);

      // Generate AI response
      const aiResponse = await generateResponse(
        messages.concat(userMessage).map(msg => ({
          role: msg.type,
          content: msg.text
        }))
      );

      // Add AI response to the database
      const { data: assistantMessage, error: aiMessageError } = await supabase
        .from('messages')
        .insert({
          text: aiResponse,
          user_id: user.id,
          type: 'assistant'
        })
        .select()
        .single();

      if (aiMessageError) throw aiMessageError;
      
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error: any) {
      toast.error('Failed to send message');
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [messages, user]);

  const loadMessages = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(50);

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      toast.error('Failed to load messages');
      console.error('Load messages error:', error);
    }
  }, [user]);

  // Set up real-time subscription
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel(`messages:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [user]);

  // Load initial messages
  useEffect(() => {
    if (user) {
      loadMessages();
    }
  }, [user, loadMessages]);

  return {
    messages,
    isLoading,
    sendMessage
  };
}