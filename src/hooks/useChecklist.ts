'use client';

import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'roadmap_progress';

export type ProgressState = Record<string, boolean>;

export function useChecklist() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage once mounted
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
          setProgress(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Error loading checklist progress:', e);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (newState: ProgressState) => {
    setProgress(newState);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      } catch (e) {
        console.error('Error saving checklist progress:', e);
      }
    }
  };

  const toggleTask = (taskId: string) => {
    const newState = {
      ...progress,
      [taskId]: !progress[taskId]
    };
    saveProgress(newState);
  };

  const toggleMultipleTasks = (taskIds: string[], complete: boolean) => {
    const newState = { ...progress };
    taskIds.forEach((id) => {
      newState[id] = complete;
    });
    saveProgress(newState);
  };

  const isTaskCompleted = (taskId: string) => {
    return !!progress[taskId];
  };

  // Helper to get overall completion percentage
  const getCompletionStats = (taskIds: string[]) => {
    if (taskIds.length === 0) return 0;
    const completedCount = taskIds.filter(id => !!progress[id]).length;
    return Math.round((completedCount / taskIds.length) * 100);
  };

  return {
    progress,
    isLoaded,
    toggleTask,
    toggleMultipleTasks,
    isTaskCompleted,
    getCompletionStats
  };
}
