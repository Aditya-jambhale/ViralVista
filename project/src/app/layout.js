import './globals.css';

export const metadata = {
  title: 'DevFlow Social',
  description: 'Analytics dashboard for social media performance',
  openGraph: {
    type: 'website',
    url: 'https://www.devflowsocial.com', // Replace with your website URL
    title: 'DevFlow Social',
    description: 'Analytics dashboard for social media performance',
    images: [
      {
        url: 'https://www.devflowsocial.com/og-image.jpg', // Replace with the path to your Open Graph image
        width: 800,
        height: 600,
        alt: 'DevFlow Social - Analytics Dashboard'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DevFlowSocial', // Replace with your Twitter handle
    title: 'DevFlow Social',
    description: 'Analytics dashboard for social media performance',
    image: 'https://www.devflowsocial.com/twitter-image.jpg', // Replace with the path to your Twitter image
  },
  robots: 'index, follow', // Allows search engines to index the page and follow links
  canonical: 'https://www.devflowsocial.com', // Add canonical URL
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
  
        
        {/* Meta tags for SEO */}
        <meta name="robots" content={metadata.robots} />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        {/* Canonical link */}
        <link rel="canonical" href={metadata.canonical} />
        
        {/* Viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Character set for the document */}
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
