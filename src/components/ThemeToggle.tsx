import { Moon, Sun } from 'lucide-react'

type Props = {
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
}

const ThemeToggle: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default ThemeToggle
