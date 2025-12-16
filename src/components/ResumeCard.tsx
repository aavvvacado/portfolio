import type React from "react";
import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";

export const ResumeCard: React.FC = () => {
  const href =
    "https://drive.google.com/file/d/1loGSKMTpNcqZbB4_R1dLS9uYfkjhVvCn/view?usp=sharing";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="h-full w-full pb-5 sm:pb-0"
      aria-label="Open resume in a new tab"
    >
      <div className="h-full w-full p-1 flex items-center justify-center sm:flex-col">
        <BentoCard
          hover
          className="bg-card/80 border-none shadow-sm h-full w-full group cursor-pointer relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/resume-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          {/* Mobile label */}
          <h3 className="text-sm sm:hidden tracking-widest uppercase font-bold text-center flex items-center justify-center">
            Resume
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </h3>

          {/* Desktop: Japanese label, swaps to English on hover */}
          <div className="hidden sm:flex flex-col items-center justify-center text-sm font-bold uppercase text-center transition-all duration-300 group-hover:hidden">
            <span className="inline-block">履</span>
            <span className="inline-block">歴</span>
            <span className="inline-block">書</span>
            <ArrowUpRight className="mt-1 h-4 w-4" />
          </div>

          <div className="hidden sm:flex flex-col items-center justify-center text-sm font-extrabold uppercase text-center tracking-[0.3em] group-hover:flex group-hover:opacity-100 opacity-0 transition-all duration-300">
            <span className="inline-block">R</span>
            <span className="inline-block">e</span>
            <span className="inline-block">s</span>
            <span className="inline-block">u</span>
            <span className="inline-block">m</span>
            <span className="inline-block">e</span>
            <ArrowUpRight className="mt-1 h-4 w-4" />
          </div>
        </BentoCard>
      </div>
    </a>
  );
}


