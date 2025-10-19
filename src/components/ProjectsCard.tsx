import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="row-span-2">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">PROJECTS</h2>
        <Settings className="w-5 h-5 text-white/70 hover:text-white transition-colors cursor-pointer" />
      </div>
      
      <ScrollArea className="h-[300px] md:h-[450px]">
        <div className="space-y-3 pr-2">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-black/95">
                <h4 className="font-bold text-base mb-2">{project.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
