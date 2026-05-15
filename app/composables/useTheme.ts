export const useTheme = () => {
  const isDark = useState<boolean>('isDark', () => true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = (dark: boolean) => {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', dark)
    }
  }

  watch(isDark, (val) => {
    if (import.meta.client) {
      localStorage.setItem('theme', val ? 'dark' : 'light')
      applyTheme(val)
    }
  })

  if (import.meta.client) {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    }
    applyTheme(isDark.value)
  }

  return { isDark, toggleTheme }
}
