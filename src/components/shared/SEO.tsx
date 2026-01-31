// Simple SEO component without external dependencies
interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  // Update document title
  if (typeof document !== 'undefined') {
    document.title = title.includes('Nexaura') ? title : `${title} | Nexaura Holding`;
    
    // Update meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }

  return null;
}
