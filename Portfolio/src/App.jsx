
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "AI-Powered Resume Screener",
      description: "Built a modern React.js + Vite frontend with fast HMR and optimized production builds. Implemented Tailwind CSS and Lucide React for clean, responsive UI. Added client-side routing and state management using React Router DOM and React Hooks with file upload features for PDF/DOC/DOCX.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Axios", "React Router"],
      color: "from-purple-500 to-pink-500",
      link: "https://github.com/Rikcr7"
    },
    {
      title: "Multi-Hop Relaying mmWave Vehicular Communication",
      description: "Simulated network nodes using SUMO simulator and Omnet++. Extracted key metrics like latency, throughput, and reliability. Focused on enhancing communication reliability and reducing accident probability in railway and vehicular systems.",
      tech: ["SUMO", "Omnet++", "Network Simulation", "Data Analysis"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const nextProject = () => setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x / 20}px`,
            top: `${mousePos.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"
          style={{
            right: `${mousePos.x / 30}px`,
            bottom: `${mousePos.y / 30}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Header Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
        
        <div 
          className="relative z-10 text-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500
          }}
        >
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-600 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-6xl font-bold">
                RD
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <Code className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
            Rik Das
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Web Developer & Data Analyst
          </p>
          
          <div className="flex gap-6 justify-center mb-8">
            <a href="https://github.com/Rikcr7" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-all transform hover:scale-110 hover:rotate-12">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rikdas" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rikdas7100@gmail.com" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500 transition-all transform hover:scale-110 hover:rotate-12">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <a href="#contact">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transform hover:scale-105 transition-all hover:from-cyan-400 hover:via-violet-400 hover:to-fuchsia-500">
              Let's Connect
            </button>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </header>

      {/* Objective Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Objective
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Detail-oriented and analytical B.Tech (ECE) student with hands-on experience in web development, data visualization,
              and problem-solving. Adept at collaborating in cross-functional teams, managing multiple tasks, and delivering client-
              focused solutions. Seeking to leverage technical and analytical skills to contribute as an Analyst.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">B.Tech in ECE</h3>
                  <p className="text-blue-300 font-semibold">Heritage Institute of Technology</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Electronics and Communication Engineering with focus on web development and data analysis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ISC</h3>
                  <p className="text-purple-300 font-semibold">The Modern Academy</p>
                  <p className="text-gray-400">2020 - 2022</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Completed higher secondary education with excellence in science and mathematics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ICSE</h3>
                  <p className="text-pink-300 font-semibold">Ram Mohan Mission High School</p>
                  <p className="text-gray-400">2008 - 2020</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Completed secondary education with strong foundation in core subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-3xl p-10 border border-emerald-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">Web Development Intern</h3>
                <p className="text-emerald-300 font-semibold text-xl">Microstax Technologies</p>
                <p className="text-gray-400 text-lg">June 2025 - August 2025</p>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Developed and implemented clean, client-focused UI designs aligned with requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Ensured mobile-first, responsive design across multiple devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Collaborated with a team of developers to troubleshoot and resolve design issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Slider */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className={`bg-gradient-to-br ${project.color} p-1 rounded-3xl`}>
                      <div className="bg-gray-900 rounded-3xl p-12 h-full">
                        <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                              View on GitHub <ExternalLink className="w-4 h-4" />
                            </button>
                          </a>
                        )}
                        {!project.link && (
                          <button className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-semibold cursor-default">
                            Academic Project
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {projects.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex justify-center gap-3 mt-8">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProject(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === activeProject ? 'bg-white w-12' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-3xl p-10 border border-amber-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-amber-500/20">
              <h3 className="text-3xl font-bold mb-8 text-amber-300">Web Development</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
                ].map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-110 hover:-translate-y-2 group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter brightness-100 group-hover:brightness-125 transition-all" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-3xl p-10 border border-blue-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-3xl font-bold mb-8 text-blue-300">Data & Analysis</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                  { name: "Excel", logo: "https://img.icons8.com/color/480/microsoft-excel-2019--v1.png" },
                  { name: "Power BI", logo: "https://img.icons8.com/color/480/power-bi.png" },
                  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
                ].map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-110 hover:-translate-y-2 group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter brightness-100 group-hover:brightness-125 transition-all" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-10 border border-rose-500/20 transform hover:scale-105 transition-all hover:shadow-2xl hover:shadow-rose-500/20">
            <h3 className="text-3xl font-bold mb-8 text-rose-300 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Communication", "Leadership", "Problem Solving", "Analytical", "Critical Thinking", "Collaboration"].map((skill, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 hover:-translate-y-1 cursor-pointer group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-rose-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-200 group-hover:text-white transition-colors font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-pink-500/20">
            <p className="text-2xl text-gray-300 mb-12">
              Interested in collaborating or just want to say hi? Drop me a message!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="mailto:rikdas7100@gmail.com" className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-gray-400 text-sm">rikdas7100@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+917003846417" className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <p className="text-gray-400 text-sm">+91 7003846417</p>
                </div>
              </a>
              
              <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Location</p>
                  <p className="text-gray-400 text-sm">Kolkata, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <a href="https://github.com/Rikcr7" target="_blank" rel="noopener noreferrer">
                <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-violet-500/50 transform hover:scale-105 transition-all hover:from-cyan-400 hover:via-violet-400 hover:to-fuchsia-500">
                  Connect on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2024 Rik Das. Crafted with passion and code.
        </p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}