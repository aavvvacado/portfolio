import React, { useEffect, useRef, useState } from "react";
import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings, ExternalLink, Download } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import assetwizeLogo from "@/assets/logo/assetwize.png";
import neoforgeLogo from "@/assets/logo/neoforge_atc.png";
import expenseManagerLogo from "@/assets/logo/expensemanager.svg";
import chargerrrLogo from "@/assets/logo/chargerrr.png";
import chargerrrApk from "@/assets/apk/app-release-chargerrr.apk?url";
import assetwizeApk from "@/assets/apk/app-release-assetwise.apk?url";

// Logo mapping for projects
const projectLogos: Record<string, string> = {
  chargerrr: chargerrrLogo,
  assetwize: assetwizeLogo,
  neoforge_atc: neoforgeLogo,
  expensemanager: expenseManagerLogo,
};

// APK download mapping for projects
const projectApks: Record<string, string> = {
  chargerrr: chargerrrApk,
  assetwize: assetwizeApk,
};

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  const scrollRootRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [open, setOpen] = useState(false);

  // Smooth auto-scroll for the projects list with user-interrupt support
  useEffect(() => {
    const root = scrollRootRef.current;
    if (!root) return;

    const viewport = root.querySelector<HTMLElement>("[data-radix-scroll-area-viewport]");
    if (!viewport) return;

    let frameId: number;
    let scrollPos = 0;
    let isRunning = true;
    let isPausedByUser = false;
    const maxScroll = () => viewport.scrollHeight - viewport.clientHeight;
    const speed = 0.25; // pixels per frame, tuned for gentle movement

    const step = () => {
      if (!isRunning || isPausedByUser) return;

      // Reset to top when we reach the end
      const limit = maxScroll();
      if (limit <= 0) {
        frameId = requestAnimationFrame(step);
        return;
      }

      scrollPos += speed;
      if (scrollPos >= limit) {
        scrollPos = 0;
      }

      viewport.scrollTop = scrollPos;
      frameId = requestAnimationFrame(step);
    };

    const handlePointerEnter = () => {
      isPausedByUser = true;
    };

    const handlePointerLeave = () => {
      if (!isRunning) return;
      isPausedByUser = false;
      frameId = requestAnimationFrame(step);
    };

    const handleTouchStart = () => {
      isPausedByUser = true;
    };

    const handleTouchEnd = () => {
      if (!isRunning) return;
      isPausedByUser = false;
      frameId = requestAnimationFrame(step);
    };

    viewport.addEventListener("pointerenter", handlePointerEnter);
    viewport.addEventListener("pointerleave", handlePointerLeave);
    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchend", handleTouchEnd);

    frameId = requestAnimationFrame(step);

    return () => {
      isRunning = false;
      if (frameId) cancelAnimationFrame(frameId);
      viewport.removeEventListener("pointerenter", handlePointerEnter);
      viewport.removeEventListener("pointerleave", handlePointerLeave);
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchend", handleTouchEnd);
    };
  }, [projects.length]);
  
  const handleOpenProject = (project: (typeof projects)[number]) => {
    setActiveProject(project);
    setOpen(true);
  };
  
  return (
    <>
    <BentoCard className="group relative glitter overflow-hidden max-h-[600px] p-6">
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            '--tx': `${(Math.random() - 0.5) * 20}px`,
            '--ty': `${(Math.random() - 0.5) * 20}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}
      <div className="flex items-center justify-between relative z-10 mb-4">
        <h2 className="text-2xl font-bold tracking-tight">PROJECTS</h2>
        <Settings className="w-5 h-5 text-white/70 hover:text-white transition-colors cursor-pointer settings-rotate" />
      </div>
      
      <ScrollArea
        ref={scrollRootRef}
        className="h-[260px] md:h-[320px] lg:h-[360px] relative z-10 pr-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <div className="space-y-3">
          {projects.map((project) => (
            <button 
              key={project.title}
              type="button"
              onClick={() => handleOpenProject(project)}
              className="group w-full text-left cursor-pointer rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all bg-transparent flex items-center gap-4 p-4"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center p-3">
                <img 
                  src={(project as any).logo && projectLogos[(project as any).logo] ? projectLogos[(project as any).logo] : project.image} 
                  alt={project.title}
                  className={`w-full h-full ${(project as any).logo ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base mb-1.5 text-white">{project.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
    
    {/* Centered iPhone-style project preview */}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-none bg-transparent shadow-none p-0">
        {activeProject && (
          <div className="mx-auto w-[320px] sm:w-[360px] aspect-[9/19.5] rounded-[40px] border border-white/20 bg-black overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.7)]">
            {/* iPhone notch / status bar */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-white/10" />
            <div className="absolute top-3 left-6 text-[10px] text-white/70">9:41</div>
            <div className="absolute top-3 right-6 flex items-center gap-1 text-[10px] text-white/70">
              <span>4G</span>
              <span className="inline-block w-4 h-[6px] rounded-full bg-white/70" />
            </div>

            {/* Screen */}
            <div className="flex flex-col h-full pt-12 pb-4 px-4 gap-3">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
                {activeProject.video ? (
                  <video
                    src={activeProject.video}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-48 object-contain bg-black/50"
                  />
                ) : (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-40 object-cover"
                  />
                )}
              </div>

              <div className="space-y-2 flex-1 overflow-y-auto">
                <h3 className="text-base font-semibold text-white leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed" style={{ lineHeight: '1.75' }}>
                  {activeProject.description}
                </p>

                {activeProject.tech && (
                  <div className="pt-1">
                    <h4 className="text-[10px] font-semibold text-white/90 mb-1.5 uppercase tracking-wide">Tech Stack</h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {activeProject.tech.map((t: string) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1.5 rounded-lg border border-white/15 text-white/80 bg-white/5 text-center"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex-1 h-9 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    onClick={() => {
                      const projectLogo = (activeProject as any).logo;
                      // Check if APK is available for this project
                      if (projectLogo && projectApks[projectLogo]) {
                        const link = document.createElement('a');
                        link.href = projectApks[projectLogo];
                        link.download = `${activeProject.title.replace(/\s+/g, '-').toLowerCase()}.apk`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else if (activeProject.url && activeProject.url !== "#") {
                        // Fallback to GitHub zip download
                        const downloadUrl = activeProject.url.endsWith('.git') 
                          ? activeProject.url.replace('.git', '/archive/refs/heads/main.zip')
                          : `${activeProject.url}/archive/refs/heads/main.zip`;
                        window.open(downloadUrl, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Project
                  </button>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 text-xs hover:bg-white/10 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <button
                  type="button"
                  className="w-full h-9 inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors"
                  onClick={() => {
                    if (activeProject.url && activeProject.url !== "#") {
                      window.open(activeProject.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
    </>
  );
};
