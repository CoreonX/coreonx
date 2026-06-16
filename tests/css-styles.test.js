import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('CSS Styles', () => {
  let cssContent;

  beforeAll(() => {
    const html = readFileSync(resolve(__dirname, '..', 'index.html'), 'utf-8');
    const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
    cssContent = styleMatch ? styleMatch[1] : '';
  });

  describe('Reset and Base Styles', () => {
    it('should include a CSS reset (margin:0, padding:0, box-sizing)', () => {
      expect(cssContent).toContain('margin:0');
      expect(cssContent).toContain('padding:0');
      expect(cssContent).toContain('box-sizing:border-box');
    });

    it('should set body background color to dark theme', () => {
      expect(cssContent).toContain('background-color:#020208');
    });

    it('should set font-family to Share Tech Mono', () => {
      expect(cssContent).toContain("font-family:'Share Tech Mono',monospace");
    });

    it('should hide overflow on body/html', () => {
      expect(cssContent).toContain('overflow:hidden');
    });
  });

  describe('Animation Keyframes', () => {
    it('should define sW (spin wave) keyframe animation', () => {
      expect(cssContent).toContain('@keyframes sW');
      expect(cssContent).toContain('transform:rotate(0deg)');
      expect(cssContent).toContain('transform:rotate(360deg)');
    });

    it('should define fP (float particle) keyframe animation', () => {
      expect(cssContent).toContain('@keyframes fP');
      expect(cssContent).toContain('translateY(0)');
      expect(cssContent).toContain('translateY(-110vh)');
    });

    it('should animate particles with opacity transitions', () => {
      expect(cssContent).toContain('opacity:0');
      expect(cssContent).toContain('opacity:.8');
      expect(cssContent).toContain('opacity:1');
    });
  });

  describe('Layout and Positioning', () => {
    it('should use flexbox for main content centering', () => {
      expect(cssContent).toContain('display:flex');
      expect(cssContent).toContain('align-items:center');
      expect(cssContent).toContain('justify-content:center');
    });

    it('should use absolute positioning for background layers', () => {
      expect(cssContent).toContain('position:absolute');
    });

    it('should use z-index layering', () => {
      expect(cssContent).toContain('z-index:1');
      expect(cssContent).toContain('z-index:2');
      expect(cssContent).toContain('z-index:3');
      expect(cssContent).toContain('z-index:4');
      expect(cssContent).toContain('z-index:10');
      expect(cssContent).toContain('z-index:20');
    });
  });

  describe('Card Styling', () => {
    it('should style card with border and border-radius', () => {
      expect(cssContent).toContain('border:1px solid #00f2fe');
      expect(cssContent).toContain('border-radius:15px');
    });

    it('should have box-shadow glow effect on card', () => {
      expect(cssContent).toContain('box-shadow:0 0 40px rgba(0,242,254,.15)');
    });

    it('should use Orbitron font for title', () => {
      expect(cssContent).toContain("font-family:'Orbitron',sans-serif");
    });

    it('should set title font size to 5rem', () => {
      expect(cssContent).toContain('font-size:5rem');
    });

    it('should apply neon text-shadow to title', () => {
      expect(cssContent).toContain('text-shadow:0 0 25px rgba(0,242,254,.6)');
    });
  });

  describe('Color Palette', () => {
    it('should use cyan (#00f2fe) as primary accent', () => {
      expect(cssContent).toContain('#00f2fe');
    });

    it('should use purple (#8a2be2) as secondary accent', () => {
      expect(cssContent).toContain('#8a2be2');
    });

    it('should use dark navy (#0a1128) for gradients', () => {
      expect(cssContent).toContain('#0a1128');
    });

    it('should use muted blue-grey (#8fa0c9) for text', () => {
      expect(cssContent).toContain('#8fa0c9');
    });
  });

  describe('Responsive Design', () => {
    it('should have a media query for max-width 768px', () => {
      expect(cssContent).toContain('@media(max-width:768px)');
    });

    it('should reduce title font size on mobile', () => {
      const mediaSection = cssContent.split('@media(max-width:768px)')[1];
      expect(mediaSection).toContain('font-size:3rem');
    });

    it('should adjust card padding on mobile', () => {
      const mediaSection = cssContent.split('@media(max-width:768px)')[1];
      expect(mediaSection).toContain('padding:5.5rem 1.5rem 3rem 1.5rem');
    });

    it('should reduce avatar size on mobile', () => {
      const mediaSection = cssContent.split('@media(max-width:768px)')[1];
      expect(mediaSection).toContain('width:110px');
      expect(mediaSection).toContain('height:110px');
    });
  });

  describe('Particle Animations', () => {
    it('should define multiple animation durations for particles', () => {
      expect(cssContent).toContain('animation-duration:12s');
      expect(cssContent).toContain('animation-duration:15s');
      expect(cssContent).toContain('animation-duration:10s');
      expect(cssContent).toContain('animation-duration:18s');
    });

    it('should use animation-delay for staggered particle effects', () => {
      expect(cssContent).toContain('animation-delay:0s');
      expect(cssContent).toContain('animation-delay:3s');
      expect(cssContent).toContain('animation-delay:1s');
      expect(cssContent).toContain('animation-delay:5s');
    });

    it('should position particles across the viewport', () => {
      expect(cssContent).toContain('left:10%');
      expect(cssContent).toContain('left:25%');
      expect(cssContent).toContain('left:45%');
      expect(cssContent).toContain('left:60%');
      expect(cssContent).toContain('left:75%');
    });
  });

  describe('Grid Overlay', () => {
    it('should define grid pattern with linear-gradient', () => {
      expect(cssContent).toContain('background-image:linear-gradient');
    });

    it('should set grid size to 50px', () => {
      expect(cssContent).toContain('background-size:50px 50px');
    });
  });
});
