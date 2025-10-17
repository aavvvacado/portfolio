import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="flex items-center justify-between mb-4 group cursor-pointer">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">PROJECTS</h2>
          <div className="h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-8"></div>
        </div>
        <Settings className="w-4 h-4" />
      </div>
      
      <ScrollArea className="h-[400px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-3 pr-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-bento-border rounded-xl p-3 transition-all cursor-pointer group/item"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-24 object-cover rounded-lg mb-2 transition-transform duration-300"
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