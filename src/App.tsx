import { LanguageProvider } from './hooks/useLanguage'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { menuItems } from './data/menu-i18n'
import { categories } from './data/site-info'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream max-w-[430px] mx-auto">
        <div className="sticky top-0 z-50">
          <LanguageSwitcher />
          <CategoryNav />
        </div>
        <Header />
        <main className="pb-16">
          {categories.map(cat => {
            const items = menuItems.filter(item => item.category === cat.id)
            if (items.length === 0) return null
            return <MenuSection key={cat.id} category={cat} items={items} />
          })}
        </main>
        <footer className="text-center text-xs text-secondary/60 pb-6 pt-2">
          © 山上山下 · 3S3S.TW
        </footer>
      </div>
    </LanguageProvider>
  )
}
