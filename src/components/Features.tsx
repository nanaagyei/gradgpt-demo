import React from 'react';
import { MessageSquare, BookOpen, Save, Clock, Lock, Zap } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Chat',
    description: 'Get instant answers to your graduate school questions with our advanced AI assistant.',
    icon: MessageSquare,
  },
  {
    name: 'Document Analysis',
    description: 'Upload and analyze academic papers, research proposals, and application materials.',
    icon: BookOpen,
  },
  {
    name: 'Save Conversations',
    description: 'Keep track of important discussions and recommendations for future reference.',
    icon: Save,
  },
  {
    name: '24/7 Availability',
    description: 'Access guidance and support whenever you need it, day or night.',
    icon: Clock,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is encrypted and protected with enterprise-grade security.',
    icon: Lock,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed about application deadlines and program updates.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for graduate and undergraduate application success
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive tools and features designed to streamline your college application journey.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative h-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}