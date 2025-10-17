import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">PROJECTS</h2>
        <Settings className="w-4 h-4" />
      </div>
      
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-bento-border rounded-xl p-3 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-24 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};