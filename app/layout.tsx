import "../styles/globals.css"

export const metadata = {
  title: "Vihan Tour & Travels",
  description: "Car Rental in Goa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}