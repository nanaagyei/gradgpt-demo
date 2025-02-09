import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Derrick Dwamena',
    role: 'PhD Student at Temple University',
    image: 'https://i0.wp.com/sites.duke.edu/huettellab/files/2021/02/WhatsApp-Image-2021-02-07-at-1.44.19-PM.jpeg',
    quote: 'GradGPT was instrumental in my PhD application journey. From tailored program recommendations to AI-assisted statement of purpose reviews, it made the process significantly smoother and more efficient.',
  },
  {
    name: 'George Birikorang',
    role: 'Undergraduate at Stanford University',
    image: 'https://lelandscholars.stanford.edu/sites/g/files/sbiybj17151/files/styles/large/public/media/image/george_img_2329_0.jpeg?itok=GeDeMvE0',
    quote: 'As an undergrad preparing for graduate school, GradGPT gave me a clear roadmap. The AI’s insights into programs and scholarship opportunities have been a game-changer in planning my next steps.',
  },
  {
    name: 'Ferdinand Quayson',
    role: 'Owner & Chief College Advisor at Quayson College Consulting',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQHxQ4KrEmCXcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711018698748?e=2147483647&v=beta&t=mO3HHdgWMDAqZQL-apU1-pH7EJwSRpmaJ6_lpgiozj0',
    quote: 'Having guided students through the admissions process for years, I highly recommend GradGPT. Its ability to analyze programs, refine essays, and provide strategic advice makes it an invaluable tool for any applicant.',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by students worldwide
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}