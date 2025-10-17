import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="mb-4 group cursor-pointer">
        <h2 className="text-sm mb-1">VOICES</h2>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">OF TRUST</h3>
          <div className="h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-8"></div>
        </div>
      </div>
      
      <ScrollArea className="h-[400px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
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