import { useLanguage } from '../hooks/useLanguage'
import { MenuCard } from './MenuCard'
import type { Category, MenuItem } from '../types/menu'

type Props = {
  category: Category
  items: MenuItem[]
}

export function MenuSection({ category, items }: Props) {
  const { lang } = useLanguage()
  return (
    <section id={`category-${category.id}`} className="px-4 pt-6 scroll-mt-28">
      <h2 className="text-lg font-bold text-primary mb-3 pb-2 border-b-2 border-primary/20">
        {category.label[lang]}
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {items.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
