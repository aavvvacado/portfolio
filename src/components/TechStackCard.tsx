import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard className="col-span-1">
      <div className="mb-6">
        <div className="text-3xl font-mono mb-3 text-muted-foreground">{"{  }"}</div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight">
          TECH<br />STACK
        </h2>
      </div>
      
      <div className="space-y-5">
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wide">Frontend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary border border-border hover:bg-secondary/80 transition-all duration-300 text-xs px-3 py-1"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-bold mb-3 tracking-wide">Backend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary border border-border hover:bg-secondary/80 transition-all duration-300 text-xs px-3 py-1"
                style={{ animationDelay: `${(index + techStack.frontend.length) * 0.05}s`, animationFillMode: 'both' }}
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