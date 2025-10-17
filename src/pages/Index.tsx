import { ProfileCard } from "@/components/ProfileCard";
import { TechStackCard } from "@/components/TechStackCard";
import { SocialLinksCard } from "@/components/SocialLinksCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { DailyStackCard } from "@/components/DailyStackCard";
import { TestimonialsCard } from "@/components/TestimonialsCard";
import { StoryCard } from "@/components/StoryCard";
import { MusicCard } from "@/components/MusicCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {/* Row 1 */}
          <TechStackCard />
          <ProfileCard />
          <SocialLinksCard />
          
          {/* Row 2 */}
          <DailyStackCard />
          <ProjectsCard />
          
          {/* Row 3 */}
          <TestimonialsCard />
          <StoryCard />
          
          {/* Row 4 */}
          <MusicCard />
        </div>
      </div>
    </div>
  );
};

export default Index;