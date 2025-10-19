import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="row-span-2">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">VOICES</h2>
        <h3 className="text-xl font-bold tracking-tight">OF <span className="text-white">TRUST</span></h3>
      </div>
      
      <ScrollArea className="h-[300px] md:h-[450px]">
        <div className="space-y-6 pr-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="pb-6 border-b border-white/20 last:border-0">
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
