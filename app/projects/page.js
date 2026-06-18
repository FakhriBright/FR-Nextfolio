"use client";

import { useState, useEffect } from "react";
import CardProject from "@/components/CardProject";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "IoT & Hardware",
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
    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || project.category === activeCategory;

    return matchSearch && matchCategory;
  });

  const showFeaturedLayout = activeCategory === "All" && filtered.length >= 2;
  const featuredProject = filtered[0];
  const tallProject = filtered[1];
  const remainingProjects = filtered.slice(2);

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
      {/* Sticky Header Section */}
      <div className="sticky top-[77px] z-30 bg-background/95 backdrop-blur-md pt-8 pb-6 mb-12 border-b border-border/10">
        {/* Editorial Title */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase text-foreground">
            Project <span className="font-serif italic font-light lowercase text-primary">showcase</span>
          </h1>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-heading font-bold mt-3 max-w-2xl leading-relaxed">
            An archive of digital solutions, high-fidelity user interfaces, and full-stack experiments
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center">
            {/* Search Box */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                🔍
              </span>
              <input
                id="project-search"
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-14 py-3.5 rounded-none border border-border/80 
                          bg-card text-foreground placeholder:text-muted-foreground 
                          outline-none focus:border-primary/50 
                          transition-all duration-300 font-sans text-sm"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] 
                            bg-card border border-border rounded text-muted-foreground 
                            font-mono hidden md:block">
                ⌘K
              </kbd>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-4 py-2.5 rounded-none text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300
                      border backdrop-blur-sm flex items-center gap-2
                      ${
                        activeCategory === category
                          ? "bg-primary/10 border-primary text-primary"
                          : "border-border bg-card/30 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      }
                    `}
                  >
                    {category}
                    <span
                      className={`
                        px-1.5 py-0.5 text-[9px] font-mono font-bold border
                        ${
                          activeCategory === category
                            ? "bg-primary/20 text-primary border-primary/20"
                            : "bg-background/80 text-muted-foreground border-border/40"
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

      {/* Projects Layout Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-border/60">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-bold font-heading text-foreground mb-2">
            No projects found
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Try adjusting your search terms or filter to another category.
          </p>
        </div>
      ) : showFeaturedLayout ? (
        <div className="space-y-8">
          {/* Featured Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-stretch">
            <div className="h-full">
              <CardProject {...featuredProject} />
            </div>

            <div className="h-full">
              <CardProject {...tallProject} />
            </div>
          </div>

          {/* Remaining Grid */}
          {remainingProjects.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingProjects.map((project) => (
                <div key={project.id} className="h-full">
                  <CardProject {...project} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="h-full">
              <CardProject {...project} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}