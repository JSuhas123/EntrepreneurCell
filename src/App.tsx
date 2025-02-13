import { motion } from "framer-motion";
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
import React, { useEffect, useState } from 'react';


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
  description: string;
}

// Component Definitions
function TimelineItem({ icon, title, date, content, side }: TimelineItemProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-indigo-400 text-sm mb-2">{date}</p>
          <p className="text-gray-400 text-sm md:text-base">{content}</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full z-10 text-white my-4 md:my-0">
        {icon}
      </div>
      <div className="w-full md:w-1/2" />
    </div>
  );
}

function AchievementCard({ icon, title, stats, description }: AchievementCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700 text-center hover:border-indigo-500 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-indigo-900/50 text-indigo-400 rounded-full mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-3xl md:text-4xl font-bold text-indigo-400 mb-3 md:mb-4">{stats}</p>
      <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </div>
  );
}

function TeamMemberCard({ image, name, role, story }: TeamMemberCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-indigo-500 transition-colors h-full">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={image || "/api/placeholder/400/320"}
          alt={name}
          className="w-full h-48 object-cover bg-gray-800  "
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/api/placeholder/400/320";
          }}
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-indigo-400 font-semibold mb-3 md:mb-4">{role}</p>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{story}</p>
      </div>
    </div>
  );
}

function EventPhoto({ image, title, description }: EventPhotoProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={image || "/api/placeholder/400/320"}
        alt={title}
        className="w-full h-48 md:h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/api/placeholder/400/320";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
        <div className="absolute bottom-0 p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base">{description}</p>
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
            src={thumbnail || "/api/placeholder/400/320"}
            alt={title}
            className="w-full h-48 md:h-64 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/api/placeholder/400/320";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-500 transition-colors">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
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

function DriveLink({ title, link, description }: DriveLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-4 p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ImageIcon className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mr-3 md:mr-4" />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>
        <Link className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
      </div>
    </a>
  );
}

// Data Definitions
const members = [
  {
    name: "Dr. S N V L Narasimha Raju",
    position: "Chairman",
    message: "The purpose of education is to create leaders who serve, inspire and bring change to the world.",
    image: "/public/images/chair.jpg",
  },
  {
    name: "Dr. H N Ramesh",
    position: "Principal",
    message: "Learning is a journey where knowledge fuels progress and wisdom guides the way.",
    image: "/public/images/principal.jpg",
  },
  {
    name: "Dr. B K Manjunath",
    position: "Faculty Advisor",
    message: "Entrepreneurship is not a career, it's a mindset of solving problems and creating impact.",
    image: "/public/images/manjusir.jpg",
  },
  {
    name: "Dr. E Saravana Kumar",
    position: "Head of Department, CSE",
    message: "An educated mind finds success; an educated heart finds purpose in serving others.",
    image: "/public/images/csehod.jpg",
  },
  {
    name: "Mrs Manjula L",
    position: "Assistant Professor, CSE",
    message: "Knowledge gains true value when shared for the betterment of others.",
    image: "/public/images/manjuphoto.JPG",
  },
];

const coreTeam = [
  {
    image: "/public/images/suhas.jpg",
    name: "Suhas",
    role: "Campus Ambassador",
    story: "Leading IgniteX has been transformative. From organizing our first workshop to representing Oxford at IIT Bombay."
  },
  {
    image: "/public/images/imthi.jpg",
    name: "Imthiyaz",
    role: "Secretary",
    story: "Building our startup incubation program from scratch taught me invaluable lessons in leadership."
  },
  {
    image: "/public/images/kavyabs.jpg",
    name: "Kavya",
    role: "Secretary",
    story: "Growing from small workshops to managing events with 300+ attendees has been incredible."
  }
];

const extendedTeam = [
  {
    image: "/public/images/likhi.jpg",
    name: "Likhith",
    role: "Creative Head",
    story: "Crafting our brand identity and reaching hundreds of students."
  },
    {
      image: "/public/images/adit.jpg",
      name: "Adhiti",
      role: "Creative Head",
      story: "Designing impactful visual content and streamlining creative processes to enhance community engagement."
    },
    {
      image: "/public/images/Faiz.JPG",
      name: "Faizan Khan",
      role: "Event Coordinator",
      story: " Organizing and managing events that connect students with resources and opportunities to help them grow."
    },
    {
      image: "/public/images/pranjali.jpg",
      name: "Pranjali",
      role: "Innovation and Research Head",
      story: " Leading research initiatives and crafting engaging content to educate and inspire young entrepreneurs."
    },
    {
      image: "/public/images/dani.jpg",
      name: "Danish",
      role: "Student Coordinator",
      story: "Overseeing financial planning and ensuring sustainable growth for student-led initiatives."
    },
    {
      image: "/public/images/kirthi.jpg",
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
      image: "/public/images/pooja.jpg",
      name: "Pooja",
      role: "Student Coordinator",
      story: "Expanding our network and building valuable partnerships."
    },
    {
      image: "/public/images/SATISH.jpg",
      name: "Dnyan",
      role: "Innovation and Research Head",
      story: "Organizing hands-on learning experiences, workshops, and research-driven activities for aspiring entrepreneurs."
    },
    {
      image: "/public/images/nidgi.jpg",
      name: "Nidhi",
      role: "Innovation and Research Head",
      story: "Creating compelling visual and research-based content that embodies our innovative vision."
    },
    {
      image: "/public/images/sunil.png",
      name: "Sunil",
      role: "Event Coordinator",
      story: "Coordinating tech-driven events and fostering startup development initiatives."
    },
    {
      image: "/public/images/chandana.jpg",
      name: "Chandana",
      role: "Innovation and Research Head",
      story: " Managing external communications, media relations, and branding strategies for innovation initiatives."
    },
    {
      image: "/public/images/taru.jpg",
      name: "Tarun",
      role: "Event Coordinator",
      story: "Identifying emerging trends in entrepreneurship and planning insightful events that empower students."
    },
  ];
  const config = {
    ecellName: "IgniteX",
    tagline: "Empowering Tomorrow's Entrepreneurs Today.",
    description:
      "We provide students with the platform, mentorship, and resources to launch impactful startups.",
    images: {
      ecellLogo: "/images/ecell.jpg",
      collegeLogo: "/images/clglogo.jpg",
      heroBg: "/images/ecell.jpg",
    },
  };
  const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 30); // Shrink when scrolled 50px down
        };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
         <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md py-2" : "bg-transparent "
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? "p-2 md:p-4" : "p-2 md:p-3"
        }`}
      >
        {/* College Logo */}
        <img
          src={config.images.collegeLogo}
          alt="College Logo"
          className={`transition-all duration-300 ${
            isScrolled ? "h-10 md:h-14" : "h-14 md:h-20"
          } w-auto`}
          onError={(e) => (e.currentTarget.src = "/api/placeholder/200/200")}
        />

        {/* College Information */}
        <h2
          className={`text-center text-white font-bold transition-all duration-300 ${
            isScrolled ? "text-sm md:text-lg px-1 md:px-2" : "text-lg md:text-xl px-2 md:px-4"
          }`}
        >
          Children's Education Society ® <br />
          THE OXFORD COLLEGE OF ENGINEERING <br />
          Hosur Road, Bommanahalli, Bengaluru-560 068. <br />
          Approved by AICTE, New Delhi | Accredited by NBA, NAAC | Affiliated to VTU, Belgaum
        </h2>

        {/* E-Cell Logo */}
        <img
          src={config.images.ecellLogo}
          alt="E-Cell Logo"
          className={`transition-all duration-300 ${
            isScrolled ? "h-10 md:h-14" : "h-14 md:h-20"
          } w-auto`}
          onError={(e) => (e.currentTarget.src = "/api/placeholder/200/200")}
        />
      </div>
    </header>
        {/* Hero Section - IgniteX */}
        <div id="hero" className="relative min-h-[500px] md:h-[700px] flex items-center justify-center">
          <img
            src={config.images.heroBg}
            alt="E-Cell Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            onError={(e) => (e.currentTarget.src = "/api/placeholder/1200/700")}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900" />
  
          {/* Hero Content */}
          <div className="flex items-center justify-center min-h-screen">
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-6 md:mb-10">
              <Zap className="w-10 h-10 md:w-16 md:h-16 mr-3 md:mr-4 text-indigo-500" />
              <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 pb-2 md:pb-4">
                {config.ecellName}
              </h1>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-4 text-gray-300 px-4">
              {config.tagline}
            </p>
            <p className="text-lg max-w-2xl mx-auto mt-2 text-gray-400 px-4">
              {config.description}
            </p>
          </motion.div>
          </div>
        </div>

        {/* Leadership Section */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-indigo-400">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-500 mx-auto mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/200/200";
                }}
              />
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 text-center">
                {member.name}
              </h3>
              <p className="text-base md:text-lg text-gray-400 text-center mt-2">
                {member.position}
              </p>
              <p className="mt-4 text-gray-300 italic text-center text-sm md:text-base">
                "{member.message}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-800/95">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Events Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <EventPhoto
              image="/public/images/competition.jpg"
              title="Competitions"
              description="Over 150 participants registered to our various competitions"
            />
            <EventPhoto
              image="/public/images/vichar.jpg"
              title="Vicharagni"
              description="22 startup ideas of various domains pitched at our flagship event"
            />
            <EventPhoto
              image="/public/images/workshops.jpg"
              title="Workshops"
              description="Hands-on learning experiences for budding entrepreneurs"
            />
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 md:py-20 bg-gray-900/95">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
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

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Our Journey to Excellence
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900" />
              <div className="space-y-8 md:space-y-12">
                <TimelineItem
                  icon={<Building2 className="w-4 h-4 md:w-6 md:h-6" />}
                  title="IgniteX Formation"
                  date="August 2024"
                  content="Started with 16 passionate students and 1 faculty mentor"
                  side="left"
                />
                <TimelineItem
                  icon={<Calendar className="w-4 h-4 md:w-6 md:h-6" />}
                  title="First Major Event"
                  date="October 2024"
                  content="'Vicharagni' attracted 150+ participants"
                  side="right"
                />
                <TimelineItem
                  icon={<Trophy className="w-4 h-4 md:w-6 md:h-6" />}
                  title="First Recognition"
                  date="December 2024"
                  content="Top 150 Campus Ambassadors - E-Cell IIT Bombay"
                  side="left"
                />
                <TimelineItem
                  icon={<Star className="w-4 h-4 md:w-6 md:h-6" />}
                  title="E-Summit Selection"
                  date="January 2024"
                  content="Selected among top 100 E-Cells nationwide"
                  side="right"
                />
                <TimelineItem
                  icon={<Award className="w-4 h-4 md:w-6 md:h-6" />}
                  title="National Achievement"
                  date="February 2024"
                  content="Secured 66th place at IIT Bombay E-Summit"
                  side="left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Impact & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AchievementCard
              icon={<Users className="w-6 h-6 md:w-8 md:h-8" />}
              title="Student Engagement"
              stats="300+"
              description="Active participants across all programs"
            />
            <AchievementCard
              icon={<Lightbulb className="w-6 h-6 md:w-8 md:h-8" />}
              title="Startups Supported"
              stats="4"
              description="Student startups under mentorship"
            />
            <AchievementCard
              icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
              title="Growth"
              stats="30%"
              description="Increase in student participation"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Meet Our Team
          </h2>
          
          {/* Core Team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
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

          {/* Extended Team */}
          <div className="mt-8 md:mt-12">
            <div className="overflow-x-auto">
              <div className="flex gap-4 md:gap-6 pb-6 px-4 snap-x snap-mandatory overflow-x-auto">
                {extendedTeam.map((member, index) => (
                  <div key={index} className="w-72 flex-shrink-0 snap-center">
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

      {/* Photo Archive Section */}
      <section className="py-16 md:py-20 bg-indigo-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-white">
            Event Gallery
          </h2>
          <div className="max-w-3xl mx-auto">
            <DriveLink
              title="In-College Events"
              link="#"
              description="Complete photo coverage of our intensive program"
            />
            <DriveLink
              title="Flagship Event Vicharagni"
              link="https://drive.google.com/drive/folders/1Dm90K92v6OoTHP2WeZZl27NX-uVODpv_"
              description="Highlights from our annual startup pitch event"
            />
            <DriveLink
              title="E-Summit 2024 Gallery"
              link="#"
              description="Memories from our biggest entrepreneurship summit"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 md:py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Zap className="w-6 h-6 md:w-8 md:h-8 mr-2 text-indigo-500" />
            <span className="text-xl md:text-2xl font-bold text-white">IgniteX</span>
          </div>
          <p className="mb-2 md:mb-4 text-sm md:text-base">
            The Oxford College of Engineering
          </p>
          <p className="mb-4 md:mb-8 text-sm md:text-base">
            Fostering Innovation & Entrepreneurship
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
