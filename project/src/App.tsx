import {
  Award,
  Building2,
  Calendar,
  Image as ImageIcon,
  Lightbulb,
  Link,
  Play,
  Star,
  Target,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';

// Type Definitions
interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  content: string;
  side: 'left' | 'right';
}

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  stats: string;
  description: string;
}

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  story: string;
}

interface EventPhotoProps {
  image: string;
  title: string;
  description: string;
}

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  description: string;
}

interface DriveLinkProps {
  title: string;
  link: string;
  count: string;
  description: string;
}
// Component Definitions

function TimelineItem({ icon, title, date, content, side }: TimelineItemProps) {
  return (
    <div className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}>
      <div className={`w-1/2 ${side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className={`bg-gray-800 p-6 rounded-lg border border-gray-700 ${side === 'left' ? 'ml-auto' : 'mr-auto'}`}>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-indigo-400 text-sm mb-2">{date}</p>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full z-10 text-white">
        {icon}
      </div>
      <div className="w-1/2" />
    </div>
  );
}

function AchievementCard({ icon, title, stats, description }: AchievementCardProps) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center hover:border-indigo-500 transition-colors">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900/50 text-indigo-400 rounded-full mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-4xl font-bold text-indigo-400 mb-4">{stats}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TeamMemberCard({ image, name, role, story }: TeamMemberCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-indigo-500 transition-colors">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-indigo-400 font-semibold mb-4">{role}</p>
        <p className="text-gray-400 leading-relaxed">{story}</p>
      </div>
    </div>
  );
}

function EventPhoto({ image, title, description }: EventPhotoProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ thumbnail, title, duration, description }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      {!playing ? (
        <div className="relative group cursor-pointer" onClick={() => setPlaying(true)}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-500 transition-colors">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 rounded text-sm">
            {duration}
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-gray-900 flex items-center justify-center">
          <p className="text-gray-400">Video player placeholder</p>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

function DriveLink({ title, link, count, description }: DriveLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ImageIcon className="w-6 h-6 text-indigo-400 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{count}</p>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>
        <Link className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
      </div>
    </a>
  );
}

const members = [
  {
    name: "Dr. H N Ramesh",
    position: "Principal",
    message: "Education is the key to unlocking the world, a passport to freedom.",
    image: "https://via.placeholder.com/200", // Replace with actual image
  },
  {
    name: "Dr. B K Manjunath",
    position: "Faculty Advisor",
    message: "Believe in your dreams and work hard to achieve them.",
    image: "https://via.placeholder.com/200", // Replace with actual image
  },
  {
    name: "Dr. E Saravanan",
    position: "Head of Department, CSE",
    message: "Innovation and persistence pave the way to success.",
    image: "https://via.placeholder.com/200", // Replace with actual image
  },
];

// Main App Component
const App = () => {
  // Team Data
  const coreTeam = [
    {
      image: "/api/placeholder/400/320",
      name: "Suhas",
      role: "Campus Ambassador",
      story: "Leading IgniteX has been transformative. From organizing our first workshop to representing Oxford at IIT Bombay, every challenge has shaped our vision for student entrepreneurship."
    },
    {
      image:"/api/placeholder/400/320",
      name: "Imthiyaz",
      role: "Secretary",
      story: "Building our startup incubation program from scratch taught me invaluable lessons in leadership. Seeing our mentored startups succeed makes it all worthwhile."
    },
    {
      image:"/api/placeholder/400/320",
      name: "Kavya",
      role: "Secretary",
      story: "Growing from small workshops to managing events with 300+ attendees has been incredible. The energy and innovation of student entrepreneurs inspire me daily."
    }
  ];

  const extendedTeam = [
    {
      image: "/api/placeholder/400/320",
      name: "Likhith",
      role: "Creative Head",
      story: "Crafting our brand identity and reaching hundreds of students has been rewarding."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Adhiti",
      role: "Creative Head",
      story: "Designing impactful visual content and streamlining creative processes to enhance community engagement."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Faizan Khan",
      role: "Event Coordinator",
      story: " Organizing and managing events that connect students with resources and opportunities to help them grow."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Pranjali",
      role: "Innovation and Research Head",
      story: " Leading research initiatives and crafting engaging content to educate and inspire young entrepreneurs."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Danish",
      role: "Student Coordinator",
      story: "Overseeing financial planning and ensuring sustainable growth for student-led initiatives."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Kirthi",
      role: "Innovation and Research Head",
      story: "Developing innovative programs and fostering a culture of entrepreneurship within the student community."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Ravannan",
      role: "Student Coordinator",
      story: "Driving new initiatives and experimental programs for entrepreneurs."
    },
    {
      image: "/public/pooja.jpg",
      name: "Pooja",
      role: "Student Coordinator",
      story: "Expanding our network and building valuable partnerships."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Dnyan",
      role: "Innovation and Research Head",
      story: "Organizing hands-on learning experiences, workshops, and research-driven activities for aspiring entrepreneurs."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Nidhi",
      role: "Innovation and Research Head",
      story: "Creating compelling visual and research-based content that embodies our innovative vision."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Sunil",
      role: "Event Coordinator",
      story: "Coordinating tech-driven events and fostering startup development initiatives."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Chandana",
      role: "Innovation and Research Head",
      story: " Managing external communications, media relations, and branding strategies for innovation initiatives."
    },
    {
      image: "/api/placeholder/400/320",
      name: "Tarun",
      role: "Event Coordinator",
      story: "Identifying emerging trends in entrepreneurship and planning insightful events that empower students."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%234F46E5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Hero Section */}
      <div className="relative h-[700px]">
  {/* Background Image with Overlay */}
  <img
    src="/api/placeholder/2000/700"
    alt="E-Cell Hero"
    className="w-full h-full object-cover opacity-30"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900" />

  {/* Header Section with College Name & Logos */}
  <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-8">
    {/* College Logo */}
    <img src="/path-to-college-logo.png" alt="College Logo" className="h-16 w-auto" />

    {/* College Name (Centered) */}
    <h2 className="text-xl md:text-xl font-bold text-white text-center">
      Children's Education Society ® <br />
      THE OXFORD COLLEGE OF ENGINEERING <br />
      Hosur Road, Bommanahalli, Bengaluru-560 068.<br />
      Approved by AICTE, New Delhi | Accredited by NBA, NAAC | Affiliated to VTU, Belgaum
    </h2>

    {/* E-Cell Logo */}
    <img src="/path-to-ecell-logo.png" alt="E-Cell Logo" className="h-16 w-auto" />
  </div>

  {/* Main Content Section */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-4 py-8">
      {/* IgniteX Branding */}
      <div className="flex items-center justify-center mb-6">
        <Zap className="w-16 h-16 mr-4 text-indigo-500" />
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 pb-4">
          IgniteX
        </h1>
      </div>

      {/* Description */}
      <p className="text-2xl max-w-3xl mx-auto mt-4 text-gray-300">
        Empowering Tomorrow's Entrepreneurs Today. We provide students with the
        platform, mentorship, and resources to launch impactful startups.
      </p>
    </div>
  </div>
</div>

<section className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">
        Our Leadership 
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg w-full md:w-1/3 hover:scale-105 transition-transform duration-300"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 mb-4"
            />

            {/* Member Details */}
            <h3 className="text-2xl font-semibold text-indigo-300">
              {member.name}
            </h3>
            <p className="text-lg text-gray-400">{member.position}</p>
            <p className="mt-4 text-gray-300 italic text-center">
              "{member.message}"
            </p>
          </div>
        ))}
      </div>
    </section>


      {/* Event Gallery */}
      <section className="py-20 bg-gray-800/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Events Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Competitions"
              description="Over 150 participants registered to our various competitions"
            />
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Vicharagni"
              description="22 startup ideas of various domains pitched at our flagship event "
            />
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Workshops"
              description="Hands-on learning experiences for budding entrepreneurs"
            />
          </div>
        </div>
      </section>

      {/* Video Showcase Section (continued) */}
      <section className="py-20 bg-gray-900/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <VideoCard
              thumbnail="/api/placeholder/2000/1000"
              title="IgniteX Journey: From Campus to National Stage"
              duration="5:24"
              description="Our journey from a small campus club to winning at IIT Bombay E-Summit"
            />
            <VideoCard
              thumbnail="/api/placeholder/2000/1000"
              title="Startup Success Stories 2024"
              duration="4:15"
              description="Meet the student founders who raised their first funding"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Journey to Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900" />
              
              <div className="space-y-12">
                <TimelineItem
                  icon={<Building2 className="w-6 h-6" />}
                  title="IgniteX Formation"
                  date="August 2024"
                  content="Started with 16 passionate students and 1 faculty mentor, focusing on building an entrepreneurial ecosystem"
                  side="left"
                />
                
                <TimelineItem
                  icon={<Calendar className="w-6 h-6" />}
                  title="First Major Event"
                  date="October 2024"
                  content="'Vicharagni' attracted 150+ participants, and resulted in 22 startup ideas"
                  side="right"
                />
                
                <TimelineItem
                  icon={<Trophy className="w-6 h-6" />}
                  title="First Recognition"
                  date="December 2024"
                  content="Became the top 150 Campus Ambassadors of the E-Cell IIT Bombay Initiative"
                  side="left"
                />
                
                <TimelineItem
                  icon={<Star className="w-6 h-6" />}
                  title="IIT Bombay E-Summit Selection"
                  date="January 2024"
                  content="Selected among top 100 E-Cells nationwide for innovation in entrepreneurship education"
                  side="right"
                />
                
                <TimelineItem
                  icon={<Award className="w-6 h-6" />}
                  title="College Achievement"
                  date="February 2024"
                  content="Secured 66th place at IIT Bombay E-Summit, recognized for our unique mentorship program"
                  side="left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Impact & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AchievementCard
              icon={<Users className="w-8 h-8" />}
              title="Student Engagement"
              stats="300+"
              description="Active participants across all programs and events"
            />
            <AchievementCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Startups Supported"
              stats="4"
              description="Student startups currently in operation with mentorship"
            />
            <AchievementCard
              icon={<Target className="w-8 h-8" />}
              title="Mentorship "
              stats="30%"
              description="Increase of student participation in mentorship programs"
            />
          </div>
        </div>
      </section>

      {/* Team Stories */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Meet Our Core Team</h2>
          
          {/* Core Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {coreTeam.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                story={member.story}
              />
            ))}
          </div>

          {/* Extended Team Horizontal Scroll */}
          <div className="mt-12">
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-6 min-w-max px-4">
                {extendedTeam.map((member, index) => (
                  <div key={index} className="w-72 flex-shrink-0">
                    <TeamMemberCard
                      image={member.image}
                      name={member.name}
                      role={member.role}
                      story={member.story}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Archive */}
      <section className="py-20 bg-indigo-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Event Gallery</h2>
          <div className="max-w-3xl mx-auto">
            <DriveLink
              title="In-College Events "
              link="#"
              count="20 photos"
              description="Complete photo coverage of our intensive program"
            />
            <DriveLink
              title="Flagship Event Vicharagni"
              link="#"
              count="43 photos"
              description="Highlights from our annual startup pitch event"
            />
            <DriveLink
              title="E-Summit 2023 Gallery"
              link="#"
              count="118 photos"
              description="Memories from our biggest entrepreneurship summit"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 mr-2 text-indigo-500" />
            <span className="text-2xl font-bold text-white">IgniteX</span>
          </div>
          <p className="mb-4">The Oxford College of Engineering</p>
          <p className="mb-8">Fostering Innovation & Entrepreneurship</p>
          <p> IgniteX - Oxford E-Cell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;