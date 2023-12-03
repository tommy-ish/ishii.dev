import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '石井智大のブログ',
  description: '石井智大のブログ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
