import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Globe,
  Image as ImageIcon,
  Lightbulb,
  Link,
  PenTool,
  Play,
  Star,
  Target,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';

// Type Definitions
interface AgendaCardProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

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
function AgendaCard({ icon, title, date, description }: AgendaCardProps) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-900/50 text-indigo-400 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-indigo-400 text-sm mb-3">{date}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

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
      <img src={image} alt={name} className="w-full h-64 object-cover" />
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

// Main App Component
const App = () => {
  // Team Data
  const coreTeam = [
    {
      name: "Likhith",
      role: "E-Cell President",
      story: "Leading IgniteX has been transformative. From organizing our first workshop to representing VIT at IIT Bombay, every challenge has shaped our vision for student entrepreneurship."
    },
    {
      name: "Rahul Verma",
      role: "Technical Lead",
      story: "Building our startup incubation program from scratch taught me invaluable lessons in leadership. Seeing our mentored startups succeed makes it all worthwhile."
    },
    {
      name: "Aisha Patel",
      role: "Events Director",
      story: "Growing from small workshops to managing events with 1000+ attendees has been incredible. The energy and innovation of student entrepreneurs inspire me daily."
    }
  ];

  const extendedTeam = [
    {
      name: "Arjun Kumar",
      role: "Marketing Head",
      story: "Crafting our brand identity and reaching thousands of students has been rewarding."
    },
    {
      name: "Zara Sheikh",
      role: "Operations Manager",
      story: "Streamlining processes and building efficient systems for our growing community."
    },
    {
      name: "Dev Patel",
      role: "Startup Relations",
      story: "Connecting startups with mentors and resources to help them thrive."
    },
    {
      name: "Maya Singh",
      role: "Content Strategist",
      story: "Creating engaging content that educates and inspires young entrepreneurs."
    },
    {
      name: "Rohan Mehta",
      role: "Finance Lead",
      story: "Managing budgets and ensuring sustainable growth of our initiatives."
    },
    {
      name: "Neha Gupta",
      role: "Community Manager",
      story: "Building a vibrant ecosystem of student entrepreneurs and mentors."
    },
    {
      name: "Kabir Shah",
      role: "Innovation Lead",
      story: "Driving new initiatives and experimental programs for entrepreneurs."
    },
    {
      name: "Ananya Reddy",
      role: "Outreach Coordinator",
      story: "Expanding our network and building valuable partnerships."
    },
    {
      name: "Vikram Malhotra",
      role: "Workshop Coordinator",
      story: "Organizing hands-on learning experiences for aspiring entrepreneurs."
    },
    {
      name: "Riya Kapoor",
      role: "Design Lead",
      story: "Creating visual experiences that reflect our innovative spirit."
    },
    {
      name: "Aditya Nair",
      role: "Technical Coordinator",
      story: "Supporting tech initiatives and startup technical development."
    },
    {
      name: "Sana Qureshi",
      role: "PR Manager",
      story: "Managing external communications and media relations."
    },
    {
      name: "Karthik Iyer",
      role: "Research Lead",
      story: "Analyzing trends and opportunities in student entrepreneurship."
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
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
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


      {/* Current Semester Agenda */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Even Semester 2024 Agenda</h2>
            <p className="text-xl text-gray-300">Transforming ideas into impact this semester</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AgendaCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Startup Bootcamp"
              date="February 15-28, 2024"
              description="Two-week intensive program covering ideation, business modeling, and pitch preparation with industry mentors"
            />
            <AgendaCard
              icon={<Globe className="w-6 h-6" />}
              title="Global Founders Meet"
              date="March 10-12, 2024"
              description="Virtual conference featuring successful entrepreneurs from Silicon Valley, Europe, and Asia"
            />
            <AgendaCard
              icon={<PenTool className="w-6 h-6" />}
              title="Innovation Challenge"
              date="April 5-20, 2024"
              description="Collaborate with industry partners to solve real-world problems through technological innovation"
            />
            <AgendaCard
              icon={<Briefcase className="w-6 h-6" />}
              title="Venture Capital Day"
              date="May 15, 2024"
              description="Exclusive pitching opportunity with leading VCs and angel investors from across India"
            />
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 bg-gray-800/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Startup Bootcamp 2023"
              description="Over 200 participants learned from 20+ industry experts"
            />
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Innovation Summit"
              description="Featured keynotes from founders of 5 unicorn startups"
            />
            <EventPhoto
              image="/api/placeholder/2000/1000"
              title="Pitch Competition Finals"
              description="₹10 Lakhs in equity-free funding distributed"
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
              title="Startup Success Stories 2023"
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
                  date="January 2023"
                  content="Started with 16 passionate students and 1 faculty mentor, focusing on building an entrepreneurial ecosystem"
                  side="left"
                />
                
                <TimelineItem
                  icon={<Calendar className="w-6 h-6" />}
                  title="First Major Event"
                  date="October 2024"
                  content="'Vicharagni' attracted 150+ participants, and resulted in 18 startup ideas"
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
              title="Success Rate"
              stats="40%"
              description="Of incubated startups secured external funding"
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
                image="/api/placeholder/400/320"
                name={member.name}
                role={member.role}
                story={member.story}
              />
            ))}
          </div>

          {/* Extended Team Horizontal Scroll */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white"></h3>
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-6 min-w-max px-4">
                {extendedTeam.map((member, index) => (
                  <div key={index} className="w-72 flex-shrink-0">
                    <TeamMemberCard
                      image="/api/placeholder/400/320"
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
              title="Startup Bootcamp 2023 Photos"
              link="#"
              count="156 photos"
              description="Complete photo coverage of our two-week intensive program"
            />
            <DriveLink
              title="E-Summit 2023 Gallery"
              link="#"
              count="243 photos"
              description="Memories from our biggest entrepreneurship summit"
            />
            <DriveLink
              title="Innovation Challenge Photos"
              link="#"
              count="98 photos"
              description="Capturing moments of creativity and collaboration"
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
          <p>© 2024 IgniteX - Oxford E-Cell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;