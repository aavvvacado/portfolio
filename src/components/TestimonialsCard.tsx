import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-2">
      <h2 className="text-xl mb-2">VOICES</h2>
      <h3 className="text-2xl font-bold mb-6">OF TRUST</h3>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <p className="text-muted-foreground text-sm leading-relaxed italic mb-3">
              "{testimonial.text}"
            </p>
            <div className="text-sm">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-muted-foreground text-xs">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};