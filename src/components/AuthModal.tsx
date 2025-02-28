import React from 'react';
import { X } from 'lucide-react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-md transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-8">
                  {isSignIn ? 'Sign in to GradGPT' : 'Create your account'}
                </h3>
                
                {isSignIn ? (
                  <SignInForm onSuccess={onClose} />
                ) : (
                  <SignUpForm onSuccess={onClose} />
                )}
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-600">
                    {isSignIn ? "Don't have an account? " : "Already have an account? "}
                  </span>
                  <button
                    onClick={() => setIsSignIn(!isSignIn)}
                    className="text-purple-600 hover:text-purple-500 font-medium"
                  >
                    {isSignIn ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}