"use client";
import { useState } from "react";
import CardProject from "@/components/CardProject";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Projects</h1>

      <input
        type="text"
        placeholder="Cari project..."
        className="border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 rounded-md w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <CardProject key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
