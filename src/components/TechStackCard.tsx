import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard className="col-span-1">
      <div className="mb-4">
        <div className="text-2xl font-mono mb-2">{"{  }"}</div>
        <h2 className="text-2xl font-bold leading-tight">
          TECH<br />STACK
        </h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Frontend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.frontend.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-tech-pill hover:bg-tech-pill/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-2">Backend:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.backend.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-tech-pill hover:bg-tech-pill/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};