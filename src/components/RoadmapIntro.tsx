'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoadmapIntroProps {
  isTaskCompleted: (id: string) => boolean;
  toggleTask: (id: string) => void;
}

export default function RoadmapIntro({ isTaskCompleted, toggleTask }: RoadmapIntroProps) {
  const [isOpen, setIsOpen] = useState(false);

  const introChecklist = [
    {
      id: '0-3-1',
      title: 'Read the phase goal before starting',
      desc: "Know what you're building toward.",
    },
    {
      id: '0-3-2',
      title: 'Use the markers',
      desc: '[T] topics get ChatGPT and docs. [P] topics get code.',
    },
    {
      id: '0-3-3',
      title: 'Do every mini project',
      desc: 'They chain into a real product by Phase 10.',
    },
    {
      id: '0-3-4',
      title: 'Move on when you can explain the topic and have working code',
      desc: 'Not before, not after.',
    },
    {
      id: '0-3-5',
      title: "When you're stuck on a [T] topic for more than 2 days, use ChatGPT",
      desc: 'Ask it to explain the concept 5 different ways. Then move on.',
    },
    {
      id: '0-3-6',
      title: "When you're stuck on a [P] topic, build something broken first",
      desc: "Fix it. That's the learning.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-surface border border-outline-variant/10 rounded-lg extruded overflow-hidden transition-all duration-300"
    >
      {/* Header Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-surface-container-low transition-colors outline-none focus:bg-surface-container-low"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold extruded flex-shrink-0 select-none text-sm sm:text-base">
            0
          </span>
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-widest">
              Introduction Guide
            </span>
            <h2 className="text-base sm:text-lg font-bold text-on-surface leading-tight">
              How To Use This Roadmap
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold text-outline px-3 py-1 rounded-lg inset select-none">
            {isOpen ? 'HIDE GUIDE' : 'SHOW GUIDE'}
          </span>
          <span
            className={`material-symbols-outlined rotate-icon text-outline p-1 ${
              isOpen ? 'active-rotate' : ''
            }`}
          >
            expand_more
          </span>
        </div>
      </button>

      {/* Collapsible Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden bg-surface-container-lowest"
          >
            <div className="p-4 sm:p-6 border-t border-outline-variant/20 space-y-8">
              
              {/* Asymmetric Intro Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column (Philosophy & Rules) - 5 Cols */}
                <div className="md:col-span-5 space-y-6">
                  {/* Philosophy Panel */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                        What This Roadmap Is
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        This is a sequenced, opinionated learning path for building production-grade SaaS, Fintech, and AI backends with Node.js. Every phase has a goal, every topic has subtopics, and every subphase ends with a mini project that proves you understood it — not just read it.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-outline uppercase tracking-wider mb-2">
                        What It Is Not
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        It is not a collection of passive tutorials. It is not a syllabus where you must master everything before moving on. It is not a substitute for building a real product.
                      </p>
                    </div>
                  </div>

                  {/* Overwhelm Rule Callout */}
                  <div className="p-4 rounded-lg bg-secondary/5 border-l-4 border-secondary inset">
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                      The Overwhelm Rule
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      If you feel overwhelmed, you are probably over-indexing on theory. The fix is always the same: open your editor and build something small with what you know so far. Momentum beats perfection every time.
                    </p>
                  </div>

                  {/* ChatGPT Callout */}
                  <div className="p-4 rounded-lg bg-tertiary/5 border-l-4 border-tertiary inset">
                    <h4 className="text-xs font-bold text-tertiary uppercase tracking-wider mb-1">
                      Using AI (ChatGPT/Claude)
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      Use AI to explain concepts in 5 different ways, quiz yourself, debug errors, or compare two approaches. **Do NOT** use it to write your mini projects for you. Avoid fooling yourself.
                    </p>
                  </div>

                  {/* Progress Criteria */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-outline uppercase tracking-wider">
                      Minimum Viable Progress
                    </h3>
                    <p className="text-[11px] sm:text-xs text-outline leading-relaxed">
                      You are done with a phase when:
                    </p>
                    <ol className="list-decimal list-inside text-xs text-on-surface-variant space-y-1 pl-1">
                      <li>You can explain every major topic without notes.</li>
                      <li>Your mini project runs without errors.</li>
                      <li>You could rebuild the mini project from scratch in half the time.</li>
                    </ol>
                  </div>
                </div>

                {/* Right Column (Checklist & Future) - 7 Cols */}
                <div className="md:col-span-7 space-y-6">
                  {/* Interactive Checklist */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                      Interactive Guide Checklist
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {introChecklist.map((item) => {
                        const done = isTaskCompleted(item.id);
                        return (
                          <div
                            key={item.id}
                            className={`flex items-start gap-3 transition-opacity duration-200 ${
                              done ? 'completed-task' : ''
                            }`}
                          >
                            <motion.div
                              whileTap={{ scale: 0.95 }}
                              className={`w-5 h-5 mt-0.5 rounded-lg bg-surface flex items-center justify-center cursor-pointer topic-checkbox flex-shrink-0 transition-all duration-200 ${
                                done ? 'inset' : 'extruded'
                              }`}
                              onClick={() => toggleTask(item.id)}
                            >
                              <span
                                className={`material-symbols-outlined text-[14px] text-primary transition-opacity duration-200 ${
                                  done ? 'opacity-100' : 'opacity-0'
                                }`}
                              >
                                check
                              </span>
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs sm:text-sm font-semibold task-title text-on-surface leading-snug">
                                {item.title}
                              </p>
                              <p className="text-[11px] sm:text-xs text-outline leading-normal mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Where this takes you */}
                  <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                      Where This Roadmap Takes You
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      Complete this path and you will be ready to be a founding engineer at a serious startup who can architect, build, secure, and ship a production SaaS backend without hand-holding.
                    </p>
                    <div className="bg-surface-container-low rounded-lg p-4 space-y-3 border border-outline-variant/10 inset">
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-sm text-secondary mt-0.5">arrow_forward</span>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          <strong>TypeScript:</strong> Use it from Phase 2 onwards. Untyped Node at scale becomes painful quickly.
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-sm text-secondary mt-0.5">arrow_forward</span>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          <strong>Architect Level:</strong> Read <em>"Designing Data-Intensive Applications"</em> by Martin Kleppmann alongside Phase 13.
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-sm text-secondary mt-0.5">arrow_forward</span>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          <strong>Production Ready:</strong> Acquire hands-on AWS or GCP experience (VPC, IAM, RDS) after Phase 12.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
