import { ArrowRight, Users, Github, Send, Twitter, Youtube, Globe, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h1 className="m3-display-medium mb-4">Incubated <span className="gradient-text">Projects</span></h1>
          <p className="m3-title-large text-[var(--color-m3-on-surface-variant)] max-w-2xl mx-auto">Startups born and scaled from within the Hacker House ecosystem</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link to={`/projects/${project.id}`} className="block m3-card-elevated p-8 hover-glow group h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center m3-headline-small text-white`}>
                    {project.shortName}
                  </div>
                  <div className="flex space-x-2">
                    {project.grantsReceived.amount !== 'N/A' && (
                      <span className="m3-chip bg-[var(--color-m3-secondary-container)] text-[var(--color-m3-on-secondary-container)] border-none">
                        {project.grantsReceived.amount} Grant
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="m3-headline-small mb-2 group-hover:text-[var(--color-m3-primary)] transition-colors">{project.name}</h3>
                <p className="m3-body-large text-[var(--color-m3-on-surface-variant)] mb-6">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  {project.grantsReceived.partners.length > 0 && (
                    <div className="flex items-center space-x-2 m3-body-medium text-[var(--color-m3-on-surface-variant)]">
                      <Users className="w-4 h-4" />
                      <span>Grants: {project.grantsReceived.partners.join(', ')}</span>
                    </div>
                  )}
                  {project.links.github && (
                    <div className="flex items-center space-x-2 m3-body-medium text-[var(--color-m3-on-surface-variant)]">
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
              <Link to={`/projects/${project.id}`} className="block m3-card-filled p-6 text-center hover-glow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white mx-auto mb-3`}>
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="m3-title-medium text-[var(--color-m3-on-surface)]">{project.name}</h4>
                <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mt-1">{project.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
