import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="row-span-2">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">SELECTED</h2>
          <h3 className="text-lg md:text-xl font-bold tracking-tight">PROJECTS</h3>
        </div>
        <Settings className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
      
      <ScrollArea className="h-[250px] md:h-[350px]">
        <div className="space-y-2 pr-2">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group cursor-pointer rounded-lg border border-border/50 hover:border-border transition-all overflow-hidden"
            >
              <div className="aspect-video overflow-hidden bg-secondary/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2">
                <h4 className="font-semibold text-xs mb-0.5">{project.title}</h4>
                <p className="text-[10px] text-muted-foreground line-clamp-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
