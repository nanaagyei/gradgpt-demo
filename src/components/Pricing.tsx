import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for exploring grad school options',
    features: [
      'AI chat assistance (100 messages/month)',
      'Basic document analysis',
      'Program recommendations',
      'Email support'
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for active applicants',
    features: [
      'Unlimited AI chat assistance',
      'Advanced document analysis',
      'Personalized recommendations',
      'Application tracking',
      'Priority support',
      'Save chat history'
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For institutions and organizations',
    features: [
      'All Pro features',
      'Custom AI training',
      'API access',
      'Dedicated support',
      'Analytics dashboard',
      'Bulk user management'
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose your perfect plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Start free and upgrade as you need. No hidden fees.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 space-y-4 sm:space-y-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="p-6 sm:p-8 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-6 sm:mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <button className="mt-6 sm:mt-8 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                  Get Started
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-8">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}