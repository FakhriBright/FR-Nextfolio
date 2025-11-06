'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}
