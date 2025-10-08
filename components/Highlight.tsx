// components/Highlight.tsx
'use client'

import React from 'react'

export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#0099ff] to-[#33b5ff] bg-clip-text text-transparent font-semibold">
      {children}
    </span>
  )
}