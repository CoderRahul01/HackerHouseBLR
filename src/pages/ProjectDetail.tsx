import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Send,
  Twitter,
  Youtube,
  Globe,
  Presentation,
  Users,
  Code2,
  Banknote,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiSolidity,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPolygon,
  SiIpfs,
  SiPython,
  SiTensorflow,
  SiPostgresql,
  SiObsstudio,
  SiAdobepremierepro,
  SiShopify,
  SiWeb3Dotjs,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import FadeIn from "../components/FadeIn";
import { projects } from "../data/projects";

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("react"))
    return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
  if (t.includes("node"))
    return <SiNodedotjs className="w-4 h-4 text-[#339933]" />;
  if (t.includes("ethers") || t.includes("web3"))
    return <SiWeb3Dotjs className="w-4 h-4 text-[#F16822]" />;
  if (t.includes("solidity"))
    return <SiSolidity className="w-4 h-4 text-[#363636]" />;
  if (t.includes("typescript"))
    return <SiTypescript className="w-4 h-4 text-[#3178C6]" />;
  if (t.includes("next"))
    return <SiNextdotjs className="w-4 h-4 text-white" />;
  if (t.includes("tailwind"))
    return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
  if (t.includes("polygon"))
    return <SiPolygon className="w-4 h-4 text-[#8247E5]" />;
  if (t.includes("ipfs"))
    return <SiIpfs className="w-4 h-4 text-[#65C2CB]" />;
  if (t.includes("python"))
    return <SiPython className="w-4 h-4 text-[#3776AB]" />;
  if (t.includes("tensorflow"))
    return <SiTensorflow className="w-4 h-4 text-[#FF6F00]" />;
  if (t.includes("azure"))
    return <VscAzure className="w-4 h-4 text-[#0078D4]" />;
  if (t.includes("postgres"))
    return <SiPostgresql className="w-4 h-4 text-[#4169E1]" />;
  if (t.includes("obs"))
    return <SiObsstudio className="w-4 h-4 text-[#302E31]" />;
  if (t.includes("premiere") || t.includes("davinci"))
    return <SiAdobepremierepro className="w-4 h-4 text-[#9999FF]" />;
  if (t.includes("shopify"))
    return <SiShopify className="w-4 h-4 text-[#95BF47]" />;
  return <FaCode className="w-4 h-4 text-gray-400" />;
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="m3-display-medium mb-4">Project Not Found</h1>
          <Link to="/projects" className="m3-button-tonal with-icon">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <Link to="/projects" className="m3-button-outlined with-icon mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] sm:rounded-[28px] bg-gradient-to-br ${project.color} flex items-center justify-center m3-display-small text-white m3-elevation-3 shrink-0`}
            >
              {project.shortName}
            </div>
            <div>
              <h1 className="m3-display-medium mb-2">{project.name}</h1>
              <p className="m3-title-large text-[var(--color-m3-on-surface-variant)]">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.links.website && (
              <a
                href={`https://${project.links.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Globe className="w-4 h-4" />
                <span>Website</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.links.pitchDeck && (
              <a
                href={
                  project.links.pitchDeck.startsWith("http")
                    ? project.links.pitchDeck
                    : `https://${project.links.pitchDeck}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Presentation className="w-4 h-4" />
                <span>Pitch Deck</span>
              </a>
            )}
            {project.links.telegram && (
              <a
                href={project.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            )}
            {project.links.twitter && (
              <a
                href={project.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
            )}
            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            )}
            {project.links.openhouse2024 && (
              <a
                href={project.links.openhouse2024}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Youtube className="w-4 h-4" />
                <span>2024 Videos</span>
              </a>
            )}
            {project.links.techStackDetails && (
              <a
                href={project.links.techStackDetails}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-tonal with-icon"
              >
                <Code2 className="w-4 h-4" />
                <span>Tech Details</span>
              </a>
            )}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <FadeIn delay={0.1} className="m3-card-elevated p-8">
              <h2 className="m3-headline-small mb-4 flex items-center space-x-3">
                <span className="w-10 h-10 rounded-xl bg-[var(--color-m3-primary-container)] flex items-center justify-center text-[var(--color-m3-on-primary-container)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </span>
                <span>Problem Statement</span>
              </h2>
              <p className="m3-body-large text-[var(--color-m3-on-surface-variant)]">
                {project.problemStatement}
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="m3-card-elevated p-8">
              <h2 className="m3-headline-small mb-4 flex items-center space-x-3">
                <span className="w-10 h-10 rounded-xl bg-[var(--color-m3-secondary-container)] flex items-center justify-center text-[var(--color-m3-on-secondary-container)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>Project Solution</span>
              </h2>
              <p className="m3-body-large text-[var(--color-m3-on-surface-variant)]">
                {project.projectSolution}
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn delay={0.3} className="m3-card-filled p-8">
              <h3 className="m3-title-large mb-4 flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-[var(--color-m3-primary)]" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="m3-chip with-icon">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="m3-card-filled p-8">
              <h3 className="m3-title-large mb-4 flex items-center space-x-2">
                <Banknote className="w-6 h-6 text-[var(--color-m3-primary)]" />
                <span>Grants</span>
              </h3>
              <div className="mb-4">
                <div className="m3-label-medium text-[var(--color-m3-on-surface-variant)] mb-1">
                  Total Received
                </div>
                <div className="m3-headline-medium">
                  {project.grantsReceived.amount}
                </div>
              </div>
              {project.grantsReceived.partners.length > 0 && (
                <div>
                  <div className="m3-label-medium text-[var(--color-m3-on-surface-variant)] mb-2">
                    Partners
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.grantsReceived.partners.map((partner) => (
                      <span key={partner} className="m3-chip">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
