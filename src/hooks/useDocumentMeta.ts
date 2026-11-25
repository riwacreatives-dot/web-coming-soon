import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const BASE_URL = 'https://riwacreatives.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/work/solanas-chilli-chicken.jpg`;

export function useDocumentMeta(meta: DocumentMeta) {
  useEffect(() => {
    // Page Title
    document.title = meta.title;

    // Meta Description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }

    // Helper for OpenGraph meta
    const setOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        const newEl = document.createElement('meta');
        newEl.setAttribute('property', property);
        newEl.setAttribute('content', content);
        document.head.appendChild(newEl);
      }
    };

    setOG('og:title', meta.ogTitle || meta.title);
    setOG('og:description', meta.ogDescription || meta.description);
    setOG('og:image', meta.ogImage || DEFAULT_OG_IMAGE);

    // Helper for Twitter meta
    const setTwitter = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        const newEl = document.createElement('meta');
        newEl.setAttribute('name', name);
        newEl.setAttribute('content', content);
        document.head.appendChild(newEl);
      }
    };

    setTwitter('twitter:title', meta.ogTitle || meta.title);
    setTwitter('twitter:description', meta.ogDescription || meta.description);
    setTwitter('twitter:image', meta.ogImage || DEFAULT_OG_IMAGE);

    return () => {
      document.title = 'RIWA CREATIVES — We Make It Happen';
    };
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.ogImage]);
}
