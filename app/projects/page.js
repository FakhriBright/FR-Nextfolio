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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[80px] top-[-200px] right-[-100px] animate-float-slow" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[80px] bottom-[-150px] left-[-100px] animate-float-medium" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-fast" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 px-6 h-[72px] flex items-center justify-between
        transition-all duration-300 border-b
        ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-gray-800 shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        }
      `}
      >
        <a href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 
                          flex items-center justify-center font-bold text-white text-sm
                          group-hover:scale-105 transition-transform"
          >
            NF
          </div>
          <span className="font-bold text-white text-lg">
            Nextfolio<span className="text-gray-500 font-normal">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["Home", "Projects", "Certificates", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  item === "Projects"
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="w-10 h-10 rounded-xl border border-gray-700 bg-white/5 
                          text-gray-400 flex items-center justify-center hover:text-white 
                          hover:border-gray-600 transition-all"
        >
          🌙
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-14">
        {/* Header Title */}
<div className="mb-6 pt-4">
  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
    Projects
  </h1>
</div>

        {/* Search & Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                🔍
              </span>
              <input
                id="project-search"
                type="text"
                placeholder="Cari project..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-14 py-3 rounded-xl border border-gray-700/60 
                          bg-slate-900/60 text-white placeholder:text-gray-500 
                          outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          transition-all duration-200"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs 
                            bg-white/5 border border-gray-700 rounded-md text-gray-500 
                            font-mono hidden md:block">
                ⌘K
              </kbd>
            </div>

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
                      px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                      border backdrop-blur-sm flex items-center gap-2
                      ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-400"
                          : "border-gray-700/60 bg-white/5 text-gray-400 hover:border-gray-600 hover:text-white"
                      }
                    `}
                  >
                    {category}
                    <span
                      className={`
                      px-2 py-0.5 rounded-full text-xs font-semibold
                      ${
                        activeCategory === category
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-white/10 text-gray-500"
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

        {/* Projects Layout */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Project tidak ditemukan
            </h3>
            <p className="text-gray-400">
              Coba gunakan kata kunci lain atau pilih kategori berbeda.
            </p>
          </div>
        ) : showFeaturedLayout ? (
          <>
            {/* Featured Section */}
            <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6 mb-6 items-stretch">
              <div className="h-full">
                <CardProject {...featuredProject} featured />
              </div>

              <div className="h-full">
                <CardProject {...tallProject} tall />
              </div>
            </div>

            {/* Remaining Grid */}
            {remainingProjects.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardProject {...project} />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardProject {...project} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Animations & Styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -40px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(40px, 30px) scale(1.02);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-25px, 30px) scale(1.03);
          }
          50% {
            transform: translate(15px, -25px) scale(0.97);
          }
          75% {
            transform: translate(-30px, -15px) scale(1.01);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          25% {
            transform: translate(-45%, -55%) scale(1.02);
          }
          50% {
            transform: translate(-55%, -45%) scale(0.98);
          }
          75% {
            transform: translate(-48%, -52%) scale(1.01);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0e1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1f2a40;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </>
  );
}