"use client";

import { achievements } from "~/data/achievements";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <AnimatedSection id="achievements">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Achievements"
          subtitle="MILESTONES · ACCOMPLISHMENTS · RECOGNITION"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="achievement-card group relative rounded-xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 transition-all duration-500 hover:border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/[0.03] to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] text-2xl group-hover:border-red-500/20 transition-colors duration-300">
                {achievement.icon}
              </div>

              {/* Category label */}
              <span className="relative inline-block text-xs font-bold tracking-[0.15em] text-amber-500 mb-2">
                {achievement.category}
              </span>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-[#fafafa] mb-4 group-hover:text-red-400 transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Topic pill */}
              <div className="relative mb-4 flex items-start gap-0">
                <div className="w-[3px] flex-shrink-0 self-stretch rounded-full bg-amber-500/70" />
                <span className="pl-3 text-sm text-[#a1a1aa] leading-relaxed">
                  <span className="font-semibold text-[#d4d4d8]">Topic:</span>{" "}
                  {achievement.topic}
                </span>
              </div>

              {/* Description */}
              <p className="relative text-sm text-[#a1a1aa]/80 leading-relaxed">
                {achievement.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
