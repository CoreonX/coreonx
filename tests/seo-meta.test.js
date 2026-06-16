import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

describe('SEO and Meta Tags', () => {
  let document;
  let html;

  beforeAll(() => {
    html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe('Essential Meta Tags', () => {
    it('should have a valid DOCTYPE declaration', () => {
      expect(html.trimStart().startsWith('<!DOCTYPE html>')).toBe(true);
    });

    it('should have UTF-8 charset meta tag', () => {
      const charset = document.querySelector('meta[charset="UTF-8"]');
      expect(charset).not.toBeNull();
    });

    it('should have a non-empty title', () => {
      const title = document.title;
      expect(title.length).toBeGreaterThan(0);
    });

    it('should have title under 60 characters for optimal SEO', () => {
      const title = document.title;
      expect(title.length).toBeLessThanOrEqual(60);
    });
  });

  describe('Viewport Configuration', () => {
    it('should set width to device-width', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport.getAttribute('content')).toContain('width=device-width');
    });

    it('should set initial-scale to 1.0', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport.getAttribute('content')).toContain('initial-scale=1.0');
    });
  });

  describe('External Resources', () => {
    it('should load fonts from Google Fonts CDN', () => {
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      const googleFontsLink = Array.from(links).find((link) =>
        link.getAttribute('href').includes('fonts.googleapis.com')
      );
      expect(googleFontsLink).not.toBeUndefined();
    });

    it('should load display=swap for font performance', () => {
      const fontLink = document.querySelector(
        'link[href*="fonts.googleapis.com"]'
      );
      expect(fontLink.getAttribute('href')).toContain('display=swap');
    });
  });

  describe('HTML Validity', () => {
    it('should have matching opening and closing html tags', () => {
      expect(html).toContain('<html');
      expect(html).toContain('</html>');
    });

    it('should have matching opening and closing head tags', () => {
      expect(html).toContain('<head>');
      expect(html).toContain('</head>');
    });

    it('should have matching opening and closing body tags', () => {
      expect(html).toContain('<body>');
      expect(html).toContain('</body>');
    });

    it('should have head before body', () => {
      const headPos = html.indexOf('<head>');
      const bodyPos = html.indexOf('<body>');
      expect(headPos).toBeLessThan(bodyPos);
    });
  });

  describe('Image Resources', () => {
    it('should use HTTPS for external image URLs', () => {
      const images = document.querySelectorAll('img[src]');
      images.forEach((img) => {
        const src = img.getAttribute('src');
        if (src.startsWith('http')) {
          expect(src.startsWith('https://')).toBe(true);
        }
      });
    });

    it('should reference avatar from GitHub', () => {
      const avatar = document.querySelector('._av img');
      expect(avatar.getAttribute('src')).toContain('github.com');
    });
  });
});
