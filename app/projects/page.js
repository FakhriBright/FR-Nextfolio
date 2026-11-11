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
    <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 md:py-20 min-h-screen bg-[#F3EFE5] text-[#171918]">
      {/* Header Section: Clean & Natural */}
      <div className="pt-4 pb-8 mb-12 border-b border-[#171918]/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9FF66]/30 border border-[#B9FF66] text-[#171918] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Archive</span>
            <span className="text-[#3157D5]">&bull;</span>
            <span>All Works</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-[#171918] leading-[0.9]">
            All
            <br />
            <span className="font-serif italic font-light lowercase text-[#3157D5]">projects</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#171918]/70 font-sans mt-4 max-w-2xl leading-relaxed">
          Index of web development applications, responsive prototypes, and digital systems built during vocational education and personal practice.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
              />
              <input
                id="project-search"
                type="text"
                placeholder="Search by title, description, or technology (e.g. React, Next.js, Laravel)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-14 py-3.5 rounded-xl border border-black/15 bg-white text-[#131411] placeholder:text-black/40 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-sans text-sm shadow-sm"
              />
              <kbd className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] bg-black/5 border border-black/10 rounded-md text-black/50 font-mono hidden md:block">
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
                      border flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                      ${
                        isActive
                          ? "bg-[#131411] text-white border-black font-semibold shadow-sm"
                          : "border-black/15 bg-white text-black/65 hover:border-black/35 hover:text-black"
                      }
                    `}
                  >
                    <span>{category}</span>
                    <span
                      className={`
                        px-1.5 py-0.2 text-[9px] font-mono rounded-full
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-black/5 text-black/60"
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
        <div className="text-center py-24 rounded-2xl border border-dashed border-black/15 bg-white/50 p-8">
          <p className="text-3xl mb-3">🔍</p>
          <h2 className="text-lg font-bold font-heading text-[#131411] mb-1">
            No projects matched your search
          </h2>
          <p className="text-sm text-black/60 max-w-sm mx-auto leading-relaxed">
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
