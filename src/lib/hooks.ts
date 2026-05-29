import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store'

/** Ticking countdown derived from an absolute end timestamp. Calls `onExpire`
 *  exactly once when it reaches zero. */
export function useRemainingSeconds(endsAt: number | null, onExpire: () => void): number {
  const calc = () => (endsAt == null ? 0 : Math.max(0, Math.round((endsAt - Date.now()) / 1000)))
  const [remaining, setRemaining] = useState(calc)
  const fired = useRef(false)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    if (endsAt == null) return
    fired.current = false
    const tick = () => {
      const r = Math.max(0, Math.round((endsAt - Date.now()) / 1000))
      setRemaining(r)
      if (r <= 0 && !fired.current) {
        fired.current = true
        onExpireRef.current()
      }
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [endsAt])

  return remaining
}

export function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** When the user clicks a nav button, scroll the matching question into view. */
export function usePendingScroll() {
  const pendingScroll = useStore((s) => s.pendingScroll)
  const consumeScroll = useStore((s) => s.consumeScroll)
  useEffect(() => {
    if (pendingScroll == null) return
    const id = pendingScroll
    requestAnimationFrame(() => {
      document.getElementById(`q${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
    consumeScroll()
  }, [pendingScroll, consumeScroll])
}
