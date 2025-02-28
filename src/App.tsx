import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { useAuthStore } from './stores/authStore';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chat from './components/Chat';
import MeetTheTeam from './components/MeetTheTeam';

function App() {
  const { user, fetchProfile } = useAuthStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      { user ? (
        <Chat />
      ) : (
        <>
        <div className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <MeetTheTeam />
        <Contact />
      </div>
        </>
      )}
      
    </div>
  );
}

export default App;