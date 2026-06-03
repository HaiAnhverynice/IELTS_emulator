import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../store'
import { markTest, type MarkResult } from './scoring'
import type { AnswerKey } from '../types'

export interface ReviewInfo {
  reviewMode: boolean
  result?: MarkResult
  key?: AnswerKey
}

/** On-test answer review state (active after Submit → "Review on test").
 *  Returns the marking result + answer key so inputs can render ✓/✗ inline. */
export function useReview(): ReviewInfo {
  const reviewMode = useStore((s) => s.reviewMode)
  const test = useStore((s) => s.test)
  const module = useStore((s) => s.module)
  const answers = useStore((s) => s.answers)
  return useMemo<ReviewInfo>(() => {
    if (!reviewMode || !test || !module || module === 'writing') return { reviewMode: false }
    const result = markTest(test, module, answers)
    const key = (module === 'listening' ? test.listening?.answerKey : test.reading?.answerKey) ?? {}
    return { reviewMode: true, result, key }
  }, [reviewMode, test, module, answers])
}

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
