'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <nav className="bg-white dark:bg-gray-800 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/"><span className="font-bold">FR-Nextfolio</span></Link>
          <div className="hidden md:flex gap-3">
            <Link href="/about" className="text-sm">About</Link>
            <Link href="/projects" className="text-sm">Projects</Link>
            <Link href="/contact" className="text-sm">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <Link href="/projects" className="text-sm">Projects</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
