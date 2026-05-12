import { useLanguage } from '../hooks/useLanguage'
import { siteInfo } from '../data/site-info'

export function Header() {
  const { lang } = useLanguage()
  const { name, subtitle, address, phone, website, diningInfo } = siteInfo

  return (
    <header className="bg-primary text-cream px-4 pt-8 pb-10">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Mountain logo */}
        <div className="w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            <circle cx="50" cy="50" r="47" fill="none" stroke="#FBF7EF" strokeWidth="3" />
            <path
              d="M12 72 L34 40 L50 56 L66 40 L88 72 Z"
              fill="none"
              stroke="#FBF7EF"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M28 62 L40 47 L50 56 L60 47 L72 62"
              fill="none"
              stroke="#FBF7EF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Store name */}
        <div>
          <h1 className="font-serif text-3xl tracking-widest">{name[lang]}</h1>
          <p className="text-cream/70 text-sm mt-1 tracking-wide">{subtitle[lang]}</p>
          <p className="text-cream/50 text-xs mt-0.5">{website}</p>
        </div>

        {/* Address & phone */}
        <div className="text-sm text-cream/80 space-y-1">
          <p>📍 {address[lang]}</p>
          <p>📞 {phone}</p>
        </div>

        {/* Dining info */}
        <div className="mt-1 bg-cream/10 rounded-2xl px-4 py-3 w-full max-w-xs">
          <p className="text-xs font-semibold text-cream/90 mb-2">{diningInfo.title[lang]}</p>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs text-cream/70">
            {diningInfo.steps[lang].map((step, i, arr) => (
              <span key={i}>
                {step}
                {i < arr.length - 1 && <span className="mx-0.5 text-cream/40">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
