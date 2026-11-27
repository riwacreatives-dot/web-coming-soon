import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { STUDIO_IDENTITY } from '../data/studioData';

interface DocumentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const BASE_URL = STUDIO_IDENTITY.canonicalUrl;

function isUnapprovedClientAssetUrl(url?: string): boolean {
  if (!url) return true;
  // Block unapproved Solanas paths in OG/Twitter meta until DEC-12 written permission clears
  return url.toLowerCase().includes('/work/solanas-');
}

export function useDocumentMeta(meta: DocumentMeta) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }

    // Canonical URL normalized on https://riwacreatives.in
    const canonicalHref = pathname === '/' ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalHref);

    const setOrCreateMeta = (attr: 'property' | 'name', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    const removeMetaIfPresent = (attr: 'property' | 'name', key: string) => {
      const el = document.querySelector(`meta[${attr}="${key}"]`);
      if (el) el.remove();
    };

    setOrCreateMeta('property', 'og:url', canonicalHref);
    setOrCreateMeta('property', 'og:title', meta.ogTitle || meta.title);
    setOrCreateMeta('property', 'og:description', meta.ogDescription || meta.description);

    setOrCreateMeta('name', 'twitter:title', meta.ogTitle || meta.title);
    setOrCreateMeta('name', 'twitter:description', meta.ogDescription || meta.description);

    // Only emit social share image meta when backed by an approved image (never unapproved client artwork)
    if (meta.ogImage && !isUnapprovedClientAssetUrl(meta.ogImage)) {
      setOrCreateMeta('property', 'og:image', meta.ogImage);
      setOrCreateMeta('name', 'twitter:image', meta.ogImage);
    } else {
      removeMetaIfPresent('property', 'og:image');
      removeMetaIfPresent('name', 'twitter:image');
    }

    return () => {
      document.title = STUDIO_IDENTITY.defaultDocumentTitle;
    };
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.ogImage, pathname]);
}
