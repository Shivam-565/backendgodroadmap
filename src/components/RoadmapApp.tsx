'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData, Phase, Topic, Task } from '@/lib/roadmap-data';
import { useChecklist } from '@/hooks/useChecklist';
import LiveClock from '@/components/LiveClock';
import dynamic from 'next/dynamic';
import { Howl } from 'howler';

const SpaceBackground = dynamic(() => import('./SpaceBackground'), {
  ssr: false,
});

let globalHowlInstance: Howl | null = null;

export default function RoadmapApp() {
  const {
    progress,
    isLoaded,
    toggleTask,
    toggleMultipleTasks,
    isTaskCompleted,
    getCompletionStats
  } = useChecklist();

  // State to manage open/close accordions
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ '1': true });
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

  // Container refs for ScrollTrigger
  const containerRef = useRef<HTMLDivElement>(null);

  // Music Player State
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Sync state with global Howl instance if it already exists
    if (globalHowlInstance) {
      setIsPlaying(globalHowlInstance.playing());
    }
  }, []);

  const togglePlay = () => {
    if (typeof window === 'undefined') return;

    if (!globalHowlInstance) {
      globalHowlInstance = new Howl({
        src: ['/theme.mp3'],
        loop: true,
        volume: 0.3,
        html5: true, // stream file to avoid memory bloat/delay
        onloaderror: (id, err) => {
          console.error('Howler load error:', err);
        },
        onplayerror: (id, err) => {
          console.error('Howler play error:', err);
          setIsPlaying(false);
        }
      });
    }

    if (globalHowlInstance.playing()) {
      globalHowlInstance.pause();
      setIsPlaying(false);
    } else {
      globalHowlInstance.play();
      setIsPlaying(true);
    }
  };

  // Compute progress numbers
  const allTasks = roadmapData.flatMap((p) => p.topics.flatMap((t) => t.tasks));
  const totalTasksCount = allTasks.length;
  const completedTasksCount = allTasks.filter((t) => isTaskCompleted(t.id)).length;
  const overallPercentage = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  // Toggle Phase accordion
  const togglePhase = (phaseId: string) => {
    setOpenPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  // Toggle Topic accordion
  const toggleTopic = (topicId: string) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Toggle all tasks in a topic
  const handleTopicCheckboxClick = (e: React.MouseEvent, topic: Topic) => {
    e.stopPropagation(); // Avoid triggering topic accordion toggle
    const taskIds = topic.tasks.map((t) => t.id);
    const allCompleted = topic.tasks.every((t) => isTaskCompleted(t.id));
    toggleMultipleTasks(taskIds, !allCompleted);
  };

  // Check if all tasks in a topic are completed
  const isTopicCompleted = (topic: Topic) => {
    return topic.tasks.length > 0 && topic.tasks.every((t) => isTaskCompleted(t.id));
  };

  // Get Phase progress stats
  const getPhaseCompletedCount = (phase: Phase) => {
    const phaseTasks = phase.topics.flatMap((t) => t.tasks);
    const completed = phaseTasks.filter((t) => isTaskCompleted(t.id)).length;
    return { completed, total: phaseTasks.length };
  };

  // Helper to alternate style accents based on phase sequence
  const getPhaseAccentClasses = (index: number) => {
    const accents = [
      {
        bg: 'bg-secondary-container/20',
        text: 'text-secondary',
        border: 'border-secondary-container/30'
      },
      {
        bg: 'bg-tertiary-container/20',
        text: 'text-tertiary',
        border: 'border-tertiary-container/30'
      },
      {
        bg: 'bg-primary-container/20',
        text: 'text-primary',
        border: 'border-primary-container/30'
      }
    ];
    return accents[index % accents.length];
  };

  // Helper to render a single topic card
  const renderTopicCard = (topic: Topic) => {
    const isTopicOpen = !openTopics[topic.id]; // Default open
    const topicDone = isTopicCompleted(topic);

    return (
      <div
        key={topic.id}
        className="topic-card topic-accordion border border-outline-variant/10 rounded-lg overflow-hidden bg-surface transition-all duration-300"
      >
        {/* Topic Accordion Button */}
        <button
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-surface-container-low text-left outline-none"
          onClick={() => toggleTopic(topic.id)}
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Topic Checklist Checkbox */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`w-5 h-5 rounded-lg bg-surface flex items-center justify-center cursor-pointer group/check topic-checkbox flex-shrink-0 transition-all duration-200 ${
                topicDone ? 'inset' : 'extruded'
              }`}
              onClick={(e) => handleTopicCheckboxClick(e, topic)}
            >
              <span className={`material-symbols-outlined text-[14px] text-primary transition-opacity duration-200 ${
                topicDone ? 'opacity-100' : 'opacity-0'
              }`}>
                check
              </span>
            </motion.div>
            <span className="font-bold text-xs sm:text-sm text-on-surface leading-tight pr-2 break-words min-w-0">
              {topic.title}
            </span>
          </div>
          <span className={`material-symbols-outlined text-xs rotate-icon text-outline p-1 flex-shrink-0 ${isTopicOpen ? 'active-rotate' : ''}`}>
            expand_more
          </span>
        </button>

        {/* Topic Content (List of Tasks) with Framer Motion */}
        <AnimatePresence initial={false}>
          {isTopicOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden inset"
            >
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 bg-surface-container-lowest">
                {topic.tasks.map((task) => {
                  const done = isTaskCompleted(task.id);

                  return (
                    <div
                      key={task.id}
                      className={`flex items-start gap-2 sm:gap-3 transition-opacity duration-200 ${
                        done ? 'completed-task' : ''
                      }`}
                    >
                      {/* Task Checkbox */}
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className={`w-5 h-5 mt-0.5 rounded-lg bg-surface flex items-center justify-center cursor-pointer topic-checkbox flex-shrink-0 transition-all duration-200 ${
                          done ? 'inset' : 'extruded'
                        }`}
                        onClick={() => toggleTask(task.id)}
                      >
                        <span className={`material-symbols-outlined text-[14px] text-primary transition-opacity duration-200 ${
                          done ? 'opacity-100' : 'opacity-0'
                        }`}>
                          check
                        </span>
                      </motion.div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-semibold task-title text-on-surface leading-snug break-words">
                          {task.title}
                        </p>
                        {task.bullets.length > 0 && (
                          <ul className="text-[11px] sm:text-xs text-outline list-disc ml-3 sm:ml-4 space-y-1">
                            {task.bullets.map((bullet, idx) => (
                              <li key={idx} className="leading-relaxed break-words">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Mini Project Specs (if present in topic) */}
                {topic.miniProject && (
                  <div className="mt-3 bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary-container/20 inset">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-secondary text-on-secondary rounded text-[9px] font-bold uppercase select-none flex-shrink-0">
                          Project spec
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-on-surface-variant whitespace-pre-line leading-relaxed break-words">
                        {topic.miniProject.replace(/>>\s*(MINI PROJECT|FINAL PROJECT)[^:]*:\s*/i, '').trim()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex-1 w-full" ref={containerRef}>
      <SpaceBackground />
      {/* Sticky Header */}
      <header className="w-full bg-primary sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white select-none">
              Backend God Roadmap
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <LiveClock />
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1000px] mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Global Progress Header Card */}
        <motion.div 
          className="bg-surface rounded-lg p-4 sm:p-6 extruded space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex justify-between items-center">
            <span className="text-[10px] sm:text-xs font-bold text-outline uppercase tracking-wider">Overall Progress</span>
            <span className="text-base sm:text-lg font-bold text-primary">{overallPercentage}% Complete</span>
          </div>
          <div className="w-full bg-surface-container rounded-lg h-3 overflow-hidden inset">
            <div 
              className="bg-primary h-full transition-all duration-500 ease-out" 
              style={{ width: `${overallPercentage}%` }} 
            />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-xs text-outline justify-between sm:justify-start items-center">
            <span><strong>{completedTasksCount}</strong> of <strong>{totalTasksCount}</strong> tasks completed</span>
            <span className="hidden sm:inline">•</span>
            <span>All status saved automatically in local storage</span>
          </div>
        </motion.div>

        {/* Phase List */}
        <div className="space-y-6 sm:space-y-8">
          {roadmapData.map((phase, phaseIndex) => {
            const accent = getPhaseAccentClasses(phaseIndex);
            const { completed, total } = getPhaseCompletedCount(phase);
            const isPhaseOpen = !!openPhases[phase.id];
            const phasePercent = total > 0 ? Math.round((completed / total) * 100) : 0;

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`phase-card phase-accordion group bg-surface rounded-lg extruded overflow-hidden transition-all duration-300`}
              >
                {/* Phase Accordion Button Header */}
                <button
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-surface-container-low transition-colors outline-none focus:bg-surface-container-low"
                  onClick={() => togglePhase(phase.id)}
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${accent.bg} flex items-center justify-center ${accent.text} font-bold extruded flex-shrink-0 select-none text-sm sm:text-base`}>
                      {phase.id}
                    </span>
                    <div>
                      <span className={`text-[9px] sm:text-[10px] font-bold ${accent.text} uppercase tracking-widest`}>
                        Phase {phase.id} • {phase.time}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-on-surface leading-tight">
                        {phase.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-outline px-3 py-1 rounded-lg inset select-none">
                      {completed}/{total} TASKS ({phasePercent}%)
                    </span>
                    <span className={`material-symbols-outlined rotate-icon text-outline group-hover:text-primary p-1 ${isPhaseOpen ? 'active-rotate' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </button>

                {/* Phase Accordion Body with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isPhaseOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden bg-surface-container-lowest"
                    >
                      <div className="p-4 sm:p-6 border-t border-outline-variant/20 space-y-4 sm:space-y-6">
                        <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed max-w-2xl">
                          {phase.goal}
                        </p>

                        {/* Topics Layout */}
                        {/* Mobile Layout (Flat sequential list) */}
                        <div className="space-y-4 md:hidden">
                          {phase.topics.map((topic) => renderTopicCard(topic))}
                        </div>

                        {/* Desktop Layout (Two columns Masonry-like stacking) */}
                        <div className="hidden md:flex md:flex-row gap-6 items-start">
                          <div className="flex-1 space-y-6">
                            {phase.topics
                              .filter((_, idx) => idx % 2 === 0)
                              .map((topic) => renderTopicCard(topic))}
                          </div>
                          <div className="flex-1 space-y-6">
                            {phase.topics
                              .filter((_, idx) => idx % 2 !== 0)
                              .map((topic) => renderTopicCard(topic))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Floating Music Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-12 h-12 bg-surface text-primary border border-outline-variant/30 rounded-full extruded flex items-center justify-center cursor-pointer select-none outline-none"
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          <span className="material-symbols-outlined text-xl">
            {isPlaying ? 'volume_up' : 'volume_off'}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
