import React from 'react';

const teamMembers = [
  {
    name: 'Prince Agyei Tuffour',
    role: 'Co-Founder and Team Lead',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEeLsS9kS1t2A/profile-displayphoto-shrink_200_200/B56ZT8TMmbHsAc-/0/1739399678800?e=1746057600&v=beta&t=JdIJjGEhgA_ljelDFooSnxhS4vwmJM3joK7MK8TiUZg',
  },
  {
    name: 'George Birikorang',
    role: 'Co-Founder',
    image: 'https://lelandscholars.stanford.edu/sites/g/files/sbiybj17151/files/styles/large/public/media/image/george_img_2329_0.jpeg?itok=GeDeMvE0',
  },
  {
    name: 'Iddah Ashley Kudakwashe Mlauzi',
    role: 'CTO',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQHoWtGB8iUbKA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660146515765?e=2147483647&v=beta&t=UV1s_kkrPfzDis8qOySXfEzrKJgioCUtkjSXHMhkaVg',
  },
];

export default function MeetTheTeam() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet the Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Leadership
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-sm p-6">
              <img
                className="h-24 w-24 rounded-full object-cover mx-auto"
                src={member.image}
                alt={member.name}
              />
              <div className="text-center mt-4">
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}