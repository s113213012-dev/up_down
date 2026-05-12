import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollLock } from '../hooks/useScrollLock'
import { TagBadge } from './TagBadge'
import { formatPrice } from '../utils/format'
import type { MenuItem } from '../types/menu'

type Props = {
  item: MenuItem
  onClose: () => void
}

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  useScrollLock(true)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-md rounded-t-3xl overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white text-xl leading-none"
        >
          ×
        </button>

        {/* Image / Emoji */}
        <div
          className="w-full h-64 bg-cream flex items-center justify-center overflow-hidden"
          style={{ touchAction: 'pinch-zoom' }}
        >
          {item.image ? (
            <img
              src={`./images/${item.image}`}
              alt={item.names[lang]}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ touchAction: 'pinch-zoom' }}
            />
          ) : (
            <span className="text-9xl select-none">{item.emoji}</span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 pr-8">{item.names[lang]}</h2>

          {/* Price */}
          <div className="space-y-1.5">
            {item.price.map((opt, i) => (
              <div key={i} className="flex items-center justify-between">
                {opt.label && (
                  <span className="text-gray-500 text-sm">{opt.label[lang]}</span>
                )}
                <span className="font-semibold text-primary text-lg ml-auto">
                  {formatPrice(opt.value, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <TagBadge key={tag} code={tag} />
              ))}
            </div>
          )}

          {/* Description */}
          {item.desc[lang] && (
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc[lang]}</p>
          )}

          {/* Note */}
          {item.note[lang] && (
            <p className="text-gray-500 text-xs leading-relaxed border-t border-gray-100 pt-3">
              {item.note[lang]}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
