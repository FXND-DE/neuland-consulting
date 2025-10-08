// lib/renderWithHighlights.tsx
import React from 'react'
import Highlight from '@/components/Highlight'

/**
 * Konvertiert Text mit <hl>...</hl>-Markierungen in JSX mit <Highlight>-Komponente.
 * Beispiel: "Ich liebe <hl>Technologie</hl>" → Ich liebe <Highlight>Technologie</Highlight>
 */
export function renderWithHighlights(text: string): React.ReactNode {
  if (!text) return null

  const parts = text.split(/(<hl>.*?<\/hl>)/g)

  return parts.map((part, i) => {
    if (part.startsWith('<hl>') && part.endsWith('</hl>')) {
      const content = part.slice(4, -5)
      return <Highlight key={i}>{content}</Highlight>
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}