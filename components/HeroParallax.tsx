'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Scroll parallax for the hero image, matching the Elementor "motion effects"
 * background scroll the practice's WordPress site used (the background moves
 * slower than the page as you scroll).
 *
 * Implemented with a transform rather than `background-attachment: fixed`,
 * which is broken on iOS Safari. The image is rendered taller than the frame
 * so it never reveals an edge while it moves. Honours prefers-reduced-motion.
 */
export default function HeroParallax({
  src,
  alt,
  speed = 0.28,
  className = '',
  priority = true,
}: {
  src: string
  alt: string
  speed?: number
  className?: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      // Only animate while the hero is anywhere near the viewport.
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return
      const offset = -rect.top * speed
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 -top-[15%] h-[130%] will-change-transform"
      aria-hidden={alt === '' ? 'true' : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="100vw"
        className={`object-cover ${className || 'object-top'}`}
      />
    </div>
  )
}
