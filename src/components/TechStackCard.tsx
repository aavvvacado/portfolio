import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";

export const TechStackCard = () => {
  const { techStack } = portfolioData;
  
  return (
    <BentoCard className="group max-w-[90%] relative glitter overflow-hidden">
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            '--tx': `${(Math.random() - 0.5) * 20}px`,
            '--ty': `${(Math.random() - 0.5) * 20}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}
      <div className="mb-6 relative z-10">
        <div className="text-4xl md:text-5xl mb-4 text-white transition-all duration-300 ease-out group-hover:tracking-[0.4em] whitespace-nowrap">
          {"{ }"}
        </div>
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none text-white transition-all duration-300 ease-out group-hover:tracking-wider">
            TECH<br/>STACK
          </h2>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-out group-hover:w-[calc(100%+0.5rem)]"></div>
        </div>
      </div>
      
      <div className="space-y-4 max-h-[280px] overflow-y-auto scrollbar-hide relative z-10">
        {techStack.frontend && techStack.frontend.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Frontend:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {techStack.backend && techStack.backend.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Backend:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.languages && techStack.languages.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Languages:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.languages.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.databases && techStack.databases.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Databases:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.databases.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.stateManagement && techStack.stateManagement.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">State Management:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.stateManagement.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.testing && techStack.testing.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Testing:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.testing.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.architecture && techStack.architecture.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Architecture:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.architecture.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {techStack.tools && techStack.tools.length > 0 && (
          <div>
            <h3 className="text-xs font-bold mb-2 tracking-wider text-white/70 uppercase">Tools:</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border border-white/50 text-white text-xs px-3 py-1.5 rounded-md bg-transparent hover:bg-white/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </BentoCard>
  );
};
