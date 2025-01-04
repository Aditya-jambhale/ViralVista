import './globals.css';

export const metadata = {
  title: 'Social Media Analytics Dashboard',
  description: 'Analytics dashboard for social media performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}