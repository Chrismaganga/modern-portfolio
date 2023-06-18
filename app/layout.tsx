import './globals.css'
export const metadata = {
  title: 'Modern Portfolio',
  description: 'next-generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
