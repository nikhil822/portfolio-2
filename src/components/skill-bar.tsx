"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
  className?: string;
}

export function SkillBar({ name, level, color = "bg-primary", className }: SkillBarProps) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    // Small delay to trigger the animation after component mount
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div 
          className={cn("h-2.5 rounded-full transition-all duration-1000 ease-out", color)}
          style={{ 
            width: show ? `${level}%` : '0%'
          }}
        />
      </div>
    </div>
  );
}
