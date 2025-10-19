import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard>
      <div className="mb-6">
        <div className="text-3xl md:text-4xl font-mono mb-4 text-white/80">{"{ }"}</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-none">
          TECH<br/>STACK
        </h2>
      </div>
      
      <div className="space-y-5">
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wider text-white/70">Frontend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="border-white/50 text-white text-xs px-3 py-1 hover:bg-white/10"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wider text-white/70">Backend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="border-white/50 text-white text-xs px-3 py-1 hover:bg-white/10"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};
