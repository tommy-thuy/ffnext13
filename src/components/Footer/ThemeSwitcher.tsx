'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/helpers/helper'
import Search from '../SearchBar';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex items-center gap-5'>
      <button
        className={cn(
          theme === 'light' &&
            'bg-accent transition-colors duration-300 animate-in fade-in', 'p-1 rounded-md'
        )}
        onClick={() => setTheme('light')}
      >
        <Sun size={24} />
      </button>
      <button
        className={cn(
          theme === 'dark' &&
            'bg-accent text-accent-foreground  transition-colors duration-300 animate-in fade-in', 'p-1 rounded-md'
        )}
        onClick={() => setTheme('dark')}
      >
        <Moon size={24} />
      </button>
      <button
        className={cn(
          theme === 'system' &&
            'bg-accent  transition-colors duration-300 animate-in fade-in', 'p-1 rounded-md'
        )}
        onClick={() => setTheme('system')}
      >
        <Monitor size={24} />
      </button>
      <Search />
    </div>
  )
}

