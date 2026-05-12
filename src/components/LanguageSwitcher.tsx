import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="bg-primary flex justify-center gap-1 py-2 px-3 shadow-md">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            lang === l.code
              ? 'bg-cream text-primary font-semibold'
              : 'text-cream/80 hover:text-cream'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
