import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

describe('Content Integrity', () => {
  let document;
  let html;

  beforeAll(() => {
    html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe('Branding', () => {
    it('should display the brand name "coreonx"', () => {
      const h1 = document.querySelector('h1');
      expect(h1.textContent.toLowerCase()).toBe('coreonx');
    });

    it('should include "tech_space" in the page title', () => {
      expect(document.title).toContain('tech_space');
    });

    it('should have "Systems Design" in the tagline', () => {
      const tagline = document.querySelector('._tm');
      expect(tagline.textContent).toContain('Systems Design');
    });

    it('should have the signature phrase about code', () => {
      const tagline = document.querySelector('._tm');
      expect(tagline.textContent).toContain('Between idea and reality');
      expect(tagline.textContent).toContain('code');
    });
  });

  describe('Visual Elements Count', () => {
    it('should have exactly 3 wave animation layers', () => {
      const waves = document.querySelectorAll('._w > div');
      expect(waves.length).toBe(3);
    });

    it('should have exactly 10 particles', () => {
      const particles = document.querySelectorAll('._pt');
      expect(particles.length).toBe(10);
    });

    it('should have exactly 4 corner decorations', () => {
      const corners = document.querySelectorAll('._cn');
      expect(corners.length).toBe(4);
    });

    it('should have exactly 1 avatar image', () => {
      const avatars = document.querySelectorAll('._av img');
      expect(avatars.length).toBe(1);
    });
  });

  describe('Particle Variety', () => {
    it('should have particles with different sizes (width)', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      const widths = ['2px', '3px', '4px', '5px'];
      widths.forEach((w) => {
        expect(css).toContain(`width:${w}`);
      });
    });

    it('should have particles distributed across horizontal positions', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      const positions = ['5%', '10%', '25%', '35%', '45%', '55%', '60%', '75%', '85%', '95%'];
      positions.forEach((pos) => {
        expect(css).toContain(`left:${pos}`);
      });
    });

    it('should have particles with both cyan and purple colors', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      expect(css).toContain('background:#00f2fe');
      expect(css).toContain('background:#8a2be2');
    });
  });

  describe('Wave Animations', () => {
    it('should have first wave with inline style animation-duration', () => {
      const firstWave = document.querySelector('._w1');
      expect(firstWave.getAttribute('style')).toContain('animation-duration:18s');
    });

    it('should have second wave with reverse animation direction', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      expect(css).toContain('animation-direction:reverse');
    });
  });

  describe('Card Layout', () => {
    it('should have avatar positioned above the card (translate -50%)', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      expect(css).toContain('transform:translate(-50%,-50%)');
    });

    it('should have card with max-width of 800px', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      expect(css).toContain('max-width:800px');
    });

    it('should have card width at 90% for responsive sizing', () => {
      const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
      expect(css).toContain('width:90%');
    });
  });
});
