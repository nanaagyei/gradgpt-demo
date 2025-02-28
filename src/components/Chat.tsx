import React, { useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useChat } from '../hooks/useChat';
import { useAuthStore } from '../stores/authStore';
import Markdown from 'react-markdown';

export default function Chat() {
  const { user } = useAuthStore();
  const { messages, isLoading, sendMessage } = useChat();
  const [input, setInput] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user || isLoading) return;

    const message = input.trim();
    setInput('');
    await sendMessage(message);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${
              msg.type === 'assistant' ? 'justify-start' : 'justify-end'
            }`}
          >
            {msg.type === 'assistant' && (
              <div className="flex-shrink-0">
                <Bot className="h-8 w-8 rounded-full bg-purple-100 p-1 text-purple-600" />
              </div>
            )}
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                msg.type === 'assistant'
                  ? 'bg-white shadow-sm'
                  : 'bg-purple-600 text-white'
              }`}
            >
              {msg.type === 'assistant' ? (
                <div className="text-sm whitespace-pre-wrap">  
                  <Markdown>{msg.text}</Markdown>
                </div>
              ) : (
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              )}
            </div>
            {msg.type === 'user' && (
              <div className="flex-shrink-0">
                <User className="h-8 w-8 rounded-full bg-purple-100 p-1 text-purple-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about grad school..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}