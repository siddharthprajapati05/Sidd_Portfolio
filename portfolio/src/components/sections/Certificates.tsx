"use client";

import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";
import { certificates } from "~/data/certificates";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

export function Certificates() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...certificates, ...certificates];

  return (
    <AnimatedSection id="certificates">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Certificates" subtitle="CREDENTIALS · ACHIEVEMENTS · LEARNING" />

        {/* Marquee container */}
        <div className="relative overflow-hidden group/marquee">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

          {/* Scrolling track */}
          <div className="cert-marquee flex gap-6 py-4">
            {doubled.map((cert, index) => (
              <a
                key={`${cert.id}-${index}`}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card group relative flex-shrink-0 w-[320px] rounded-xl overflow-hidden border border-white/10 hover:border-red-500/40 bg-[#0f0f0f] transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] block"
              >
                {/* Certificate image */}
                <div className="relative w-full h-[200px] overflow-hidden bg-white/5">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="320px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-500/5 to-orange-500/5">
                      <Award className="h-16 w-16 text-red-500/30 group-hover:text-red-500/50 transition-colors duration-300" />
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Floating "View" badge on hover */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/80 backdrop-blur-sm text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-[#fafafa] leading-snug line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-500/10 flex-shrink-0">
                      <Award className="h-3 w-3 text-red-500" />
                    </div>
                    <span className="text-xs text-[#a1a1aa]/70 font-mono">{cert.issuer}</span>
                    <span className="text-[#a1a1aa]/30">·</span>
                    <span className="text-xs text-[#a1a1aa]/50 font-mono">{cert.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
