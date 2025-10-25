import React from 'react'
import Highlight from '@/components/Highlight'

export function parseHighlight(text: string): React.ReactNode {
  const parts = text.split(/(<hl>.*?<\/hl>)/)

  return parts.map((part, index) => {
    if (part.startsWith('<hl>') && part.endsWith('</hl>')) {
      return (
        <Highlight key={index}>
          {part.replace('<hl>', '').replace('</hl>', '')}
        </Highlight>
      )
    }
    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}
