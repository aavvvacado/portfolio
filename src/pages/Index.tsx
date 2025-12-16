import { ProfileCard } from "@/components/ProfileCard";
import { TechStackCard } from "@/components/TechStackCard";
import { SocialLinksCard } from "@/components/SocialLinksCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { DailyStackCard } from "@/components/DailyStackCard";
import { TestimonialsCard } from "@/components/TestimonialsCard";
import { StoryCard } from "@/components/StoryCard";
import { MusicCard } from "@/components/MusicCard";
import { MarqueeCard } from "@/components/MarqueeCard";
import { AnimeCard } from "@/components/AnimeCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="max-w-[1600px] mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="animate-fade-in md:order-1 lg:order-none" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <TechStackCard />
          </div>
          <div className="animate-fade-in md:col-span-2 md:order-2 lg:order-none flex gap-4" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <ProfileCard />
            <div className="flex-1">
              <SocialLinksCard />
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="animate-fade-in md:order-4 lg:order-none" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <ProjectsCard />
          </div>
          <div className="animate-fade-in md:order-5 lg:order-none" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <MarqueeCard />
          </div>
          <div className="animate-fade-in row-span-2 md:order-6 lg:order-none" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <DailyStackCard />
          </div>
          <div className="animate-fade-in md:order-7 lg:order-none" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <MusicCard />
          </div>
          
          {/* Row 3 */}
          <div className="animate-fade-in row-span-2 md:order-8 lg:order-none" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <StoryCard />
          </div>
          <div className="animate-fade-in md:order-9 lg:order-none" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            <TestimonialsCard />
          </div>
          <div className="animate-fade-in md:order-10 lg:order-none" style={{ animationDelay: '0.95s', animationFillMode: 'both' }}>
            <AnimeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;