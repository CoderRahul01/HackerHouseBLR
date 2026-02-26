import { ArrowRight, Monitor, Video, Shirt, Utensils, Heart, Trophy, Gift, Users, Github, Globe, Code2, ShoppingBag, Youtube, Handshake, Building2, Send, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-gray-400">Applications Open for Q2 2025</span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="m3-display-large mb-6">
              Build the <br />
              <span className="gradient-text">Future</span> Here
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="m3-headline-small text-[var(--color-m3-on-surface-variant)] max-w-3xl mx-auto mb-12">
              India's premier residential incubator for AI, Web3, and Blockchain enthusiasts. 
              Where underdogs become legends.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/apply" className="m3-button-filled h-14 px-8 text-lg">
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="#projects" className="m3-button-outlined h-14 px-8 text-lg">
              <span>View Projects</span>
            </a>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">5-6</div>
              <div className="text-sm text-gray-500">Residents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">8</div>
              <div className="text-sm text-gray-500">Workstations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">₹10K</div>
              <div className="text-sm text-gray-500">MacBook Grant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">$35K+</div>
              <div className="text-sm text-gray-500">Grants Raised</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="m3-display-medium mb-6">Empowering the <br /><span className="gradient-text">Underdogs</span></h2>
              <p className="m3-body-large text-[var(--color-m3-on-surface-variant)] mb-6">
                Hacker House is a 3-bedroom residential incubator in Bangalore designed for Indian students and developers passionate about AI, Web3, and Blockchain. We provide not just a place to stay, but a launchpad for your ambitions.
              </p>
              <p className="m3-body-large text-[var(--color-m3-on-surface-variant)] mb-8">
                Our vision is to become a world-class incubation center for Indian students interested in software development and content creation. We believe in the power of community, collaboration, and relentless building.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-primary-container)] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[var(--color-m3-on-primary-container)]" />
                  </div>
                  <div>
                    <h4 className="m3-title-medium mb-1">Vision</h4>
                    <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">World-class incubation center for Indian builders and creators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-secondary-container)] flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-[var(--color-m3-on-secondary-container)]" />
                  </div>
                  <div>
                    <h4 className="m3-title-medium mb-1">Mission</h4>
                    <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">To empower the underdogs and turn ideas into reality</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative m3-card-elevated p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="m3-label-large text-[var(--color-m3-on-surface-variant)]">Advisory Board</span>
                  <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">2024-25</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-m3-surface-container-highest)] transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">A</div>
                    <div>
                      <h4 className="m3-title-medium">Arjun</h4>
                      <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Strategy & Growth</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-m3-surface-container-highest)] transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">S</div>
                    <div>
                      <h4 className="m3-title-medium">Suraj</h4>
                      <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Technical Advisor</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-m3-surface-container-highest)] transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">K</div>
                    <div>
                      <h4 className="m3-title-medium">Karnika</h4>
                      <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Community & Ops</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-m3-surface-container-highest)] transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">M</div>
                    <div>
                      <h4 className="m3-title-medium">Mr. Key</h4>
                      <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Investor Relations</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-32 relative bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className="m3-display-medium mb-4">World-Class <span className="gradient-text">Amenities</span></h2>
            <p className="m3-title-large text-[var(--color-m3-on-surface-variant)] max-w-2xl mx-auto">Everything you need to build, create, and scale your next big idea</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-primary-container)] flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-[var(--color-m3-on-primary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Work Setup</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">8 dedicated workstations with high-speed fiber internet and ergonomic setup</p>
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">8 Stations</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">1Gbps WiFi</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1} className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-secondary-container)] flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-[var(--color-m3-on-secondary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Recording Studio</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">Professional content creation setup with teleprompter, Godox lights, and 10ft greenscreen</p>
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Teleprompter</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">DJI Mic</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">GoPro</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-primary-container)] flex items-center justify-center mb-4">
                <Shirt className="w-6 h-6 text-[var(--color-m3-on-primary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Merch Lab</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">In-house hoodie printing machine for your startup merch and team apparel</p>
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">DTG Printing</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Custom Merch</span>
              </div>
            </FadeIn>
            
            <FadeIn className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-secondary-container)] flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-[var(--color-m3-on-secondary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Full Kitchen</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">Fully furnished kitchen with modern appliances and cooking essentials</p>
            </FadeIn>
            
            <FadeIn delay={0.1} className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-primary-container)] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[var(--color-m3-on-primary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Wellness Center</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">Pool, Gym, Spa, Steam & Sauna for work-life balance and rejuvenation</p>
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Pool</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Gym</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Spa</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="m3-card-filled p-6 hover-glow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-m3-secondary-container)] flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-[var(--color-m3-on-secondary-container)]" />
              </div>
              <h3 className="m3-title-large mb-2">Sports Facilities</h3>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-4">Basketball turf, Cricket turf, and jogging area for active breaks</p>
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Basketball</span>
                <span className="m3-chip border-none bg-[var(--color-m3-surface-container-highest)]">Cricket</span>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn className="mt-12 m3-card-elevated p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="m3-headline-small">Resident Benefits</h3>
                  <p className="m3-body-large text-[var(--color-m3-on-surface-variant)]">All-paid quarterly access + Tool subscriptions + ₹10,000/mo MacBook Air fund</p>
                </div>
              </div>
              <Link to="/apply" className="m3-button-filled h-12 px-8">
                Apply Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Incubated <span className="gradient-text">Projects</span></h2>
              <p className="text-gray-400 max-w-2xl">Startups born and scaled from within the Hacker House ecosystem</p>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0 text-purple-400 hover:text-purple-300 flex items-center space-x-2 transition-colors">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="block project-card rounded-2xl p-8 hover-glow group h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl font-bold text-white`}>
                      {project.shortName}
                    </div>
                    <div className="flex space-x-2">
                      {project.grantsReceived.amount !== 'N/A' && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                          {project.grantsReceived.amount} Grant
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.name}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {project.grantsReceived.partners.length > 0 && (
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>Grants: {project.grantsReceived.partners.join(', ')}</span>
                      </div>
                    )}
                    {project.links.github && (
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Github className="w-4 h-4" />
                        <span>Open Source</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.links.telegram && (
                      <a href={project.links.telegram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onClick={e => e.stopPropagation()}>
                        <Send className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                    {project.links.twitter && (
                      <a href={project.links.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onClick={e => e.stopPropagation()}>
                        <Twitter className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onClick={e => e.stopPropagation()}>
                        <Github className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                    {project.links.youtube && (
                      <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onClick={e => e.stopPropagation()}>
                        <Youtube className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                    {project.links.website && (
                      <a href={`https://${project.links.website}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onClick={e => e.stopPropagation()}>
                        <Globe className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(4).map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="block glass-card rounded-xl p-6 text-center hover-glow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white mx-auto mb-3`}>
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white">{project.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
