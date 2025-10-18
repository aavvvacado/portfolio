import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard className="col-span-1">
      <div className="mb-6">
        <div className="text-4xl font-mono mb-4 text-muted-foreground">{"{  }"}</div>
        <h2 className="text-4xl font-bold leading-none tracking-tight">
          TECH<br />STACK
        </h2>
      </div>
      
      <div className="space-y-5">
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wider opacity-70">Frontend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary border-0 hover:bg-secondary/80 transition-all text-xs px-3 py-1.5 font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wider opacity-70">Backend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary border-0 hover:bg-secondary/80 transition-all text-xs px-3 py-1.5 font-medium"
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
