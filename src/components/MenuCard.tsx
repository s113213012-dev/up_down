import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { TagBadge } from './TagBadge'
import { ItemDetailModal } from './ItemDetailModal'
import { formatPrice } from '../utils/format'
import type { MenuItem } from '../types/menu'

type Props = { item: MenuItem }

export function MenuCard({ item }: Props) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
        onClick={() => setOpen(true)}
      >
        {/* Image / Emoji */}
        <div className="w-full h-40 bg-cream flex items-center justify-center overflow-hidden">
          {item.image ? (
            <img
              src={`./images/${item.image}`}
              alt={item.names[lang]}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-6xl select-none">{item.emoji}</span>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="text-base font-semibold text-gray-800 leading-snug">{item.names[lang]}</h3>

          {/* Price */}
          <div className="mt-1.5 space-y-0.5">
            {item.price.map((opt, i) => (
              <div key={i} className="flex items-center text-sm">
                {opt.label && (
                  <span className="text-gray-500 mr-1">{opt.label[lang]}</span>
                )}
                <span className="font-medium text-primary ml-auto">
                  {formatPrice(opt.value, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {item.tags.map(tag => (
                <TagBadge key={tag} code={tag} />
              ))}
            </div>
          )}
        </div>
      </div>

      {open && <ItemDetailModal item={item} onClose={() => setOpen(false)} />}
    </>
  )
}
