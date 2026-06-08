'use client';

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dd = String(now.getDate()).padStart(2, '0');
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const yyyy = now.getFullYear();
      const hh = String(now.getHours()).padStart(2, '0');
      const min = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${dd}-${mm}-${yyyy} : ${hh}:${min}:${ss}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) {
    // SSR fallback skeleton to avoid hydration mismatches
    return (
      <div className="w-[180px] h-[32px] animate-pulse bg-surface-container-high rounded-lg" />
    );
  }

  return (
    <div
      className="px-4 py-2 bg-surface rounded-lg text-primary font-semibold text-xs extruded flex items-center gap-2 cursor-default select-none"
      id="live-clock-btn"
    >
      <span className="material-symbols-outlined text-sm">calendar_today</span>
      <span id="live-clock-text">{timeStr}</span>
    </div>
  );
}
