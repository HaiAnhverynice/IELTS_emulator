import { useEffect, useRef } from 'react'
import { useStore } from '../../store'
import type { ColorTheme, FontSize } from '../../types'

const FONT_OPTIONS: { value: FontSize; label: string }[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'Extra Large' },
]

const THEME_OPTIONS: { value: ColorTheme; label: string; swatch: string }[] = [
  { value: 'default', label: 'Black on white', swatch: 'bg-white text-black border-gray-400' },
  { value: 'white-on-black', label: 'White on black', swatch: 'bg-black text-white border-gray-600' },
  { value: 'yellow-on-black', label: 'Yellow on black', swatch: 'bg-black text-yellow-300 border-gray-600' },
]

export default function SettingsMenu({ onClose }: { onClose: () => void }) {
  const settings = useStore((s) => s.settings)
  const updateSettings = useStore((s) => s.updateSettings)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-1 w-64 z-50 border shadow-lg p-3 text-sm"
      style={{ background: 'var(--ielts-panel)', color: 'var(--ielts-panel-fg)', borderColor: 'var(--ielts-border)' }}
    >
      <div className="font-bold mb-1">Text size</div>
      <div className="flex gap-1 mb-3">
        {FONT_OPTIONS.map((o) => (
          <button
            key={o.value}
            onClick={() => updateSettings({ fontSize: o.value })}
            className="flex-1 border px-2 py-1"
            style={{
              borderColor: 'var(--ielts-border)',
              background: settings.fontSize === o.value ? 'var(--ielts-accent)' : 'transparent',
              color: settings.fontSize === o.value ? 'var(--ielts-accent-fg)' : 'inherit',
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="font-bold mb-1">Colours</div>
      <div className="flex flex-col gap-1 mb-3">
        {THEME_OPTIONS.map((o) => (
          <button
            key={o.value}
            onClick={() => updateSettings({ colorTheme: o.value })}
            className={`flex items-center gap-2 border px-2 py-1 ${o.swatch}`}
            style={{
              outline: settings.colorTheme === o.value ? '2px solid var(--ielts-accent)' : 'none',
              outlineOffset: '-2px',
            }}
          >
            <span className="font-bold">Aa</span>
            <span>{o.label}</span>
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={settings.showTimer}
          onChange={(e) => updateSettings({ showTimer: e.target.checked })}
        />
        Show timer
      </label>
    </div>
  )
}
