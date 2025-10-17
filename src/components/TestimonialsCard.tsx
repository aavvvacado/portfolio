import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <h2 className="text-sm mb-1">VOICES</h2>
      <h3 className="text-xl font-bold mb-4">OF TRUST</h3>
      
      <ScrollArea className="h-[400px]">
        <div className="space-y-4 pr-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="pb-4 border-b border-bento-border last:border-0">
              <p className="text-muted-foreground text-xs leading-relaxed italic mb-2">
                "{testimonial.text}"
              </p>
              <div className="text-xs">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};