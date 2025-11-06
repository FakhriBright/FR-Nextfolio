'use client'
import { useState } from 'react'
import { projects } from '../../data/projects'
import CardProject from '../../components/CardProject'

export default function Projects() {
  const [q, setQ] = useState("")
  const filtered = projects.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects..." className="mb-4 px-3 py-2 border rounded w-full" />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(p=>(
          <CardProject key={p.id} project={p} />
        ))}
        {filtered.length===0 && <p>Tidak ada project yang cocok.</p>}
      </div>
    </section>
  )
}
