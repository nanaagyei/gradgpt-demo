import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { Menu, X, GraduationCap, User } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { user, loading, signOut } = useAuthStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GradGPT.pro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              {!loading && (
                user ? (
                  <div className='flex items-center space-x-4'>
                    <span className='flex items-center'>
                      <User className='w-5 h-5 mr-2' />
                      {user.email}
                    </span>
                    <button
                      onClick={signOut}
                      className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors'
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors'
                  >
                    Sign In
                  </button>
                )
              )}
              {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button> */}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">About</a>
              {!loading && (
                user ? (
                  <>
                    <div className="px-3 py-2">
                      <span className="flex items-center text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {user.email}
                      </span>
                    </div>
                    <button
                      onClick={signOut}
                      className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Sign In
                  </button>
                )
              )}
              {/* <div className="px-3 py-2">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Get Started
                </button>
              </div> */}
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}