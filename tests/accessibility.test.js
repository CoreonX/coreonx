import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

describe('Accessibility', () => {
  let document;

  beforeAll(() => {
    const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe('Language Declaration', () => {
    it('should have a lang attribute on html element', () => {
      const lang = document.documentElement.getAttribute('lang');
      expect(lang).toBeTruthy();
    });

    it('should use a valid BCP 47 language tag', () => {
      const lang = document.documentElement.getAttribute('lang');
      expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/);
    });
  });

  describe('Images', () => {
    it('should have alt text on all images', () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const alt = img.getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt.length).toBeGreaterThan(0);
      });
    });

    it('should not have empty alt attributes on meaningful images', () => {
      const images = document.querySelectorAll('img');
      expect(images.length).toBeGreaterThan(0);
      images.forEach((img) => {
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });
  });

  describe('Headings', () => {
    it('should have at least one h1 element', () => {
      const h1 = document.querySelectorAll('h1');
      expect(h1.length).toBeGreaterThanOrEqual(1);
    });

    it('should have only one h1 element (single main heading)', () => {
      const h1 = document.querySelectorAll('h1');
      expect(h1.length).toBe(1);
    });

    it('should have non-empty h1 content', () => {
      const h1 = document.querySelector('h1');
      expect(h1.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  describe('Page Structure', () => {
    it('should have a title element with content', () => {
      const title = document.querySelector('title');
      expect(title).not.toBeNull();
      expect(title.textContent.trim().length).toBeGreaterThan(0);
    });

    it('should have charset defined before title', () => {
      const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
      const charsetPos = html.indexOf('charset');
      const titlePos = html.indexOf('<title');
      expect(charsetPos).toBeLessThan(titlePos);
    });

    it('should have viewport meta for mobile accessibility', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).not.toBeNull();
    });
  });

  describe('Text Content', () => {
    it('should have readable text content in the card', () => {
      const card = document.querySelector('._c');
      expect(card).not.toBeNull();
      expect(card.textContent.trim().length).toBeGreaterThan(0);
    });

    it('should contain meaningful content (not just decoration)', () => {
      const body = document.body;
      const textContent = body.textContent.trim();
      expect(textContent).toContain('coreonx');
    });
  });

  describe('Decorative Elements', () => {
    it('should use pointer-events:none on particle container to not block interaction', () => {
      const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
      expect(html).toContain('pointer-events:none');
    });
  });
});
