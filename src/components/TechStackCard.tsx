import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard>
      <div className="mb-3">
        <div className="text-xl md:text-2xl font-bold mb-2">{ }</div>
        <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">USES</h2>
        <h3 className="text-lg md:text-xl font-bold tracking-tight">TECH STACK</h3>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="text-[10px] font-bold mb-1.5 tracking-wider opacity-70">Frontend:</h3>
          <div className="flex flex-wrap gap-1.5">
            {techStack.frontend.map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="bg-tech-pill border-none text-[10px] px-2 py-0.5 hover:bg-tech-pill/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-[10px] font-bold mb-1.5 tracking-wider opacity-70">Backend:</h3>
          <div className="flex flex-wrap gap-1.5">
            {techStack.backend.map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="bg-tech-pill border-none text-[10px] px-2 py-0.5 hover:bg-tech-pill/80"
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
