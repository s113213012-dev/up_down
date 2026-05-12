import { useLanguage } from '../hooks/useLanguage'
import { categories } from '../data/site-info'

export function CategoryNav() {
  const { lang } = useLanguage()

  const scrollTo = (id: string) => {
    const el = document.getElementById(`category-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-cream border-b border-gray-200 px-3 py-2 flex gap-2 overflow-x-auto">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => scrollTo(cat.id)}
          className="flex-shrink-0 px-4 py-1.5 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-cream transition-colors whitespace-nowrap"
        >
          {cat.label[lang]}
        </button>
      ))}
    </nav>
  )
}
