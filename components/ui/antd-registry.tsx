'use client'

import { StyleProvider } from '@ant-design/cssinjs'

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  return <StyleProvider hashPriority="high">{children}</StyleProvider>
}
