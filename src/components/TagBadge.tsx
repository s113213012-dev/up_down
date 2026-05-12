import { useLanguage } from '../hooks/useLanguage'
import { tagDefs } from '../data/tags'
import type { TagCode } from '../types/menu'

type Props = { code: TagCode }

export function TagBadge({ code }: Props) {
  const { lang } = useLanguage()
  const def = tagDefs.find(t => t.code === code)
  if (!def) return null
  return (
    <span className="inline-flex items-center gap-0.5 text-xs bg-white/80 border border-gray-200 rounded-full px-2 py-0.5 whitespace-nowrap">
      <span>{def.icon}</span>
      <span className="text-gray-600">{def.label[lang]}</span>
    </span>
  )
}
