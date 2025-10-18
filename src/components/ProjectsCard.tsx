import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">PROJECTS</h2>
        <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
      </div>
      
      <ScrollArea className="h-[420px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-3 pr-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-secondary/80 backdrop-blur-sm">
                <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};