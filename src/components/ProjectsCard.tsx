import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Settings } from "lucide-react";

export const ProjectsCard = () => {
  const { projects } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-2 row-span-2" hover={false}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          PROJECTS
          <Settings className="w-5 h-5" />
        </h2>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            className="bg-secondary rounded-2xl p-4 flex items-center gap-4 hover:bg-secondary/80 transition-all hover:scale-[1.02] group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-16 h-16 rounded-xl object-cover border border-bento-border"
            />
            <div className="flex-1">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </BentoCard>
  );
};