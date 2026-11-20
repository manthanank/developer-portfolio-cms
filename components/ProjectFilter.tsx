"use client";

import React from "react";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

export function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const count = counts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              isSelected
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            <span>{category}</span>
            <span
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                isSelected ? "bg-indigo-700 text-indigo-100" : "bg-slate-800 text-slate-400"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

