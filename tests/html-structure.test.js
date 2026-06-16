import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

describe('HTML Structure', () => {
  let document;

  beforeAll(() => {
    const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe('Document Head', () => {
    it('should have correct doctype declaration', () => {
      const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
      expect(html.startsWith('<!DOCTYPE html>')).toBe(true);
    });

    it('should have lang attribute set to pt-BR', () => {
      const htmlElement = document.documentElement;
      expect(htmlElement.getAttribute('lang')).toBe('pt-BR');
    });

    it('should have UTF-8 charset meta tag', () => {
      const charset = document.querySelector('meta[charset]');
      expect(charset).not.toBeNull();
      expect(charset.getAttribute('charset')).toBe('UTF-8');
    });

    it('should have viewport meta tag for responsiveness', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).not.toBeNull();
      expect(viewport.getAttribute('content')).toContain('width=device-width');
      expect(viewport.getAttribute('content')).toContain('initial-scale=1.0');
    });

    it('should have correct page title', () => {
      const title = document.querySelector('title');
      expect(title).not.toBeNull();
      expect(title.textContent).toBe('coreonx // tech_space');
    });

    it('should include Google Fonts stylesheet', () => {
      const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
      expect(fontLink).not.toBeNull();
      expect(fontLink.getAttribute('rel')).toBe('stylesheet');
    });

    it('should load Orbitron and Share Tech Mono fonts', () => {
      const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
      const href = fontLink.getAttribute('href');
      expect(href).toContain('Orbitron');
      expect(href).toContain('Share+Tech+Mono');
    });

    it('should have an embedded style element', () => {
      const style = document.querySelector('style');
      expect(style).not.toBeNull();
      expect(style.textContent.length).toBeGreaterThan(0);
    });
  });

  describe('Body Structure', () => {
    it('should have a gradient background element', () => {
      const gradient = document.querySelector('._g');
      expect(gradient).not.toBeNull();
    });

    it('should have a waves container with 3 wave elements', () => {
      const wavesContainer = document.querySelector('._w');
      expect(wavesContainer).not.toBeNull();

      const wave1 = wavesContainer.querySelector('._w1');
      const wave2 = wavesContainer.querySelector('._w2');
      const wave3 = wavesContainer.querySelector('._w3');
      expect(wave1).not.toBeNull();
      expect(wave2).not.toBeNull();
      expect(wave3).not.toBeNull();
    });

    it('should have a grid overlay element', () => {
      const grid = document.querySelector('._gr');
      expect(grid).not.toBeNull();
    });

    it('should have a particles container', () => {
      const particles = document.querySelector('._p');
      expect(particles).not.toBeNull();
    });

    it('should have exactly 10 particle elements', () => {
      const particles = document.querySelectorAll('._pt');
      expect(particles.length).toBe(10);
    });

    it('should have a main content wrapper', () => {
      const main = document.querySelector('._m');
      expect(main).not.toBeNull();
    });
  });

  describe('Card Component', () => {
    it('should have a card container', () => {
      const card = document.querySelector('._c');
      expect(card).not.toBeNull();
    });

    it('should have an avatar container with an image', () => {
      const avatar = document.querySelector('._av');
      expect(avatar).not.toBeNull();

      const img = avatar.querySelector('img');
      expect(img).not.toBeNull();
    });

    it('should have avatar image with correct src', () => {
      const img = document.querySelector('._av img');
      expect(img.getAttribute('src')).toBe('https://github.com/CoreonX.png');
    });

    it('should have avatar image with alt text', () => {
      const img = document.querySelector('._av img');
      expect(img.getAttribute('alt')).toBe('CoreonX');
    });

    it('should have 4 corner decoration elements', () => {
      const topLeft = document.querySelector('._cn._tl');
      const topRight = document.querySelector('._cn._tr');
      const bottomLeft = document.querySelector('._cn._bl');
      const bottomRight = document.querySelector('._cn._br');

      expect(topLeft).not.toBeNull();
      expect(topRight).not.toBeNull();
      expect(bottomLeft).not.toBeNull();
      expect(bottomRight).not.toBeNull();
    });

    it('should have the h1 title with correct text', () => {
      const title = document.querySelector('h1._tn');
      expect(title).not.toBeNull();
      expect(title.textContent).toBe('coreonx');
    });

    it('should have tagline paragraph', () => {
      const tagline = document.querySelector('p._tm');
      expect(tagline).not.toBeNull();
      expect(tagline.textContent).toContain('Systems Design');
      expect(tagline.textContent).toContain('code');
    });

    it('should have a highlighted span inside tagline', () => {
      const span = document.querySelector('._tm span');
      expect(span).not.toBeNull();
      expect(span.textContent).toBe('code');
    });
  });
});
