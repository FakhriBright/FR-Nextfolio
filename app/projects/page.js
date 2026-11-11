"use client";

import { useState, useEffect } from "react";
import CardProject from "@/components/CardProject";
import { projects } from "@/data/projects";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Web Applications",
  "IoT & Embedded",
  "Graphic Design",
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("project-search")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = projects.filter((project) => {
    const query = search.toLowerCase();
    const matchSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech?.some((t) => t.toLowerCase().includes(query));

    const matchCategory =
      activeCategory === "All" || project.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 md:py-20 min-h-screen bg-[#F5F5F0] text-[#191919]">
      {/* Header Section: Clean Editorial */}
      <div className="pt-4 pb-10 mb-12 border-b border-[#191919]/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E9E4] border border-[#191919]/10 text-[#191919] text-xs font-mono font-medium tracking-wider uppercase">
            <span>Archive</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F36B]" />
            <span>All Works</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-[#191919] leading-[0.9]">
            All
            <br />
            <span className="font-serif italic font-light lowercase text-[#777873]">projects</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#777873] font-sans mt-4 max-w-2xl leading-relaxed">
          Index of web applications, responsive prototypes, and digital systems built during vocational education and personal practice.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777873]"
              />
              <input
                id="project-search"
                type="text"
                placeholder="Search by title, description, or technology (e.g. React, Next.js, Laravel)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-14 py-3.5 rounded-xl border border-[#191919]/15 bg-white text-[#191919] placeholder:text-[#777873]/60 outline-none focus:border-[#191919] focus:ring-1 focus:ring-[#191919] transition-all font-sans text-sm shadow-sm"
              />
              <kbd className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] bg-[#E9E9E4] border border-[#191919]/10 rounded-md text-[#777873] font-mono hidden md:block">
                ⌘K
              </kbd>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;

                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all
                      border flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#191919]
                      ${
                        isActive
                          ? "bg-[#191919] text-[#F5F5F0] border-[#191919] font-medium shadow-sm"
                          : "border-[#191919]/15 bg-white text-[#777873] hover:border-[#191919]/40 hover:text-[#191919]"
                      }
                    `}
                  >
                    <span>{category}</span>
                    <span
                      className={`
                        px-1.5 py-0.5 text-[9px] font-mono rounded-full
                        ${
                          isActive
                            ? "bg-[#B7F36B] text-[#191919] font-bold"
                            : "bg-[#E9E9E4] text-[#777873]"
                        }
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 rounded-2xl border border-dashed border-[#191919]/15 bg-white/60 p-8">
          <p className="text-3xl mb-3">🔍</p>
          <h2 className="text-lg font-bold font-heading text-[#191919] mb-1">
            No projects matched your search
          </h2>
          <p className="text-sm text-[#777873] max-w-sm mx-auto leading-relaxed">
            Try adjusting your search terms or selecting another category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <CardProject key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}
