/**
 * Shared utilities for generating repetitive DOM elements.
 *
 * Eliminates hand-duplicated particle / corner markup and their
 * per-instance CSS rules by driving everything from small data arrays.
 */

/* ---------- Particle configuration ---------- */
const PARTICLES = [
  { size: 3, left: '10%',  duration: '12s', delay: '0s'    },
  { size: 2, left: '25%',  duration: '15s', delay: '3s',   accent: true },
  { size: 4, left: '45%',  duration: '10s', delay: '1s'    },
  { size: 2, left: '60%',  duration: '18s', delay: '5s'    },
  { size: 5, left: '75%',  duration: '14s', delay: '2s',   accent: true },
  { size: 3, left: '85%',  duration: '11s', delay: '4s'    },
  { size: 2, left: '35%',  duration: '16s', delay: '6s'    },
  { size: 4, left: '95%',  duration: '13s', delay: '1.5s'  },
  { size: 3, left: '5%',   duration: '17s', delay: '7s',   accent: true },
  { size: 5, left: '55%',  duration: '19s', delay: '0.5s'  },
];

/* ---------- Corner positions ---------- */
const CORNERS = ['tl', 'tr', 'bl', 'br'];

/**
 * Create a single particle element from a config object.
 */
function createParticle({ size, left, duration, delay, accent }) {
  const el = document.createElement('div');
  el.className = accent ? 'particle particle--accent' : 'particle';
  el.style.width  = size + 'px';
  el.style.height = size + 'px';
  el.style.left   = left;
  el.style.animationDuration = duration;
  el.style.animationDelay    = delay;
  return el;
}

/**
 * Populate the particle container with all configured particles.
 */
function initParticles(container) {
  const frag = document.createDocumentFragment();
  PARTICLES.forEach(function (cfg) {
    frag.appendChild(createParticle(cfg));
  });
  container.appendChild(frag);
}

/**
 * Populate a card element with corner decoration elements.
 */
function initCorners(card) {
  const frag = document.createDocumentFragment();
  CORNERS.forEach(function (pos) {
    var el = document.createElement('div');
    el.className = 'corner corner--' + pos;
    frag.appendChild(el);
  });
  card.appendChild(frag);
}

/* ---------- Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', function () {
  var particleContainer = document.querySelector('.particle-container');
  if (particleContainer) { initParticles(particleContainer); }

  var card = document.querySelector('.card');
  if (card) { initCorners(card); }
});
