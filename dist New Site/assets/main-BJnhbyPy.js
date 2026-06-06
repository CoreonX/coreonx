import"./bootstrap-Cm9f5wOy.js";import{g as M,s as E}from"./index-2Adx3jUJ.js";function b(e,a,t="text",s){const i=t==="textarea"?`<textarea id="${a}" name="${a}" placeholder="${s}" required></textarea>`:`<input type="${t}" id="${a}" name="${a}" placeholder="${s}" required />`;return`
    <div class="field">
      <label for="${a}">${e}</label>
      ${i}
    </div>
  `}function j(e,a,t,s,i){return`
    <section class="contact-panel" data-contact-panel id="contato" aria-label="${e}">
      <div class="contact-panel__header">
        <div>
          <h2 class="form-title">${e}</h2>
          <p class="form-copy">${a}</p>
        </div>
        <button class="close-button" type="button" data-contact-close aria-label="Fechar formulário">&times;</button>
      </div>
      <form class="form-shell contact-form" id="${i}" action="#" method="post">
        ${t}
        <button class="submit-button" type="submit">${s}</button>
      </form>
    </section>
  `}function B(){return`
    <button class="floating-contact-button" type="button" data-contact-open aria-label="Abrir formulário de contato" title="Fale Conosco">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    </button>
  `}const z=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];const k=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];const I=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];const T=[["path",{d:"M20 6 9 17l-5-5"}]];const D=[["path",{d:"m15 18-6-6 6-6"}]];const V=[["path",{d:"m9 18 6-6-6-6"}]];const F=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];const O=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];const N=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}]];const R=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];const U=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];const G=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];const Q=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];const W=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];const K=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];const X=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];const Z=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];const J=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];const Y=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];const ee=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];const te=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];const ae=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];const se=[["path",{d:"M10 8h4"}],["path",{d:"M12 21v-9"}],["path",{d:"M12 8V3"}],["path",{d:"M17 16h4"}],["path",{d:"M19 12V3"}],["path",{d:"M19 21v-5"}],["path",{d:"M3 14h4"}],["path",{d:"M5 10V3"}],["path",{d:"M5 21v-7"}]];const ie=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];const oe=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];const ne=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const ce=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]],re={home:Q,info:K,settings:ee,"file-text":G,"shield-check":te,cookie:R,compass:N,"arrow-right":k,check:T,"chevron-right":V,"chevron-left":D,x:ne,menu:Z,sparkles:ie,activity:z,layout:J,image:W,sliders:se,"help-circle":F,mail:X,phone:Y,"external-link":U,code:O,award:I,users:oe,shield:ae,zap:ce};function f(e,a="",t=24){const s=e.toLowerCase().trim(),i=re[s];if(!i)return"";const o=i.map(([u,l])=>{const n=Object.entries(l).map(([c,m])=>`${c}="${m}"`).join(" ");return`<${u} ${n}></${u}>`}).join("");return`<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="${t}" 
    height="${t}" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    class="lucide-icon lucide-icon-${s} ${a}"
  >${o}</svg>`}function le(e){return e?/^(\/|\.\.?\/)/.test(e)&&/\.(png|jpe?g)$/i.test(e)?e.replace(/\.(png|jpe?g)$/i,".webp"):e:""}function _(e,a,t,s=!0){if(!e)return"";const i=t?`class="${t}"`:"",o=s?'loading="lazy"':"";return/^(\/|\.\.?\/)/.test(e)&&/\.(png|jpe?g)$/i.test(e)?`
      <picture>
        <source srcset="${e.replace(/\.(png|jpe?g)$/i,".webp")}" type="image/webp">
        <img src="${e}" alt="${a}" ${i} ${o} />
      </picture>
    `:`<img src="${e}" alt="${a}" ${i} ${o} />`}function de(e){return`
    <article class="surface-card reveal">
      ${e.icon?`<div class="surface-card__icon-wrapper">${f(e.icon,"card-icon")}</div>`:""}
      ${e.meta?`<span class="surface-card__eyebrow">${e.meta}</span>`:""}
      <h3 class="surface-card__title">${e.title}</h3>
      <p class="surface-card__text">${e.text}</p>
    </article>
  `}function ue(e){const a=e.columns??2,t=e.items.length,s=t>0?Math.min(a,t):a;return`
    <section class="section-surface reveal">
      <div class="section-header">
        <h2 class="section-title">${e.title}</h2>
        ${e.description?`<p class="section-description">${e.description}</p>`:""}
      </div>
      <div class="section-grid" data-columns="${s}">
        ${e.items.map(de).join("")}
      </div>
    </section>
  `}function pe(e){const a=e.showEyebrow!==!1&&e.eyebrow?`<div class="section-kicker">${e.eyebrow}</div>`:"";let t=e.buttons||[];t.length===0&&(e.primaryAction&&e.primaryAction.label&&t.push(e.primaryAction),e.secondaryAction&&e.secondaryAction.label&&t.push(e.secondaryAction));const s=t.length>0?`<div class="hero-actions">
        ${t.map((l,n)=>`<a class="${n===0?"primary-button":n===1?"secondary-button":"ghost-button"}" href="${l.href||"#"}">${l.label}</a>`).join("")}
       </div>`:"",i=[];if(e.width&&i.push(`max-width: ${e.width}`),e.height){const l=/^\d+$/.test(e.height)?`${e.height}px`:e.height;i.push(`min-height: ${l}`),i.push("display: flex","flex-direction: column","justify-content: center")}const o=i.length>0?`style="${i.join("; ")}"`:"";let u="";if(e.backgroundImage){const l=e.backgroundBlur!==void 0?e.backgroundBlur:10,n=e.backgroundOpacity!==void 0?e.backgroundOpacity:.3;u=`
      <div class="hero-bg" style="
        background-image: url('${le(e.backgroundImage)}');
        filter: blur(${l}px);
        opacity: ${n};
      "></div>
    `}return`
    <section class="hero-surface reveal" ${o}>
      ${u}
      ${a}
      <h1 class="hero-title">${e.title}</h1>
      <p class="hero-subtitle">${e.subtitle}</p>
      <p class="hero-copy">${e.copy}</p>
      ${s}
    </section>
  `}function me(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}function he(e){const a=[];if(!e)return{html:"",toc:a};let t=e.replace(/\r\n/g,`
`);t=t.replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/^\s*---\s*$/gm,"<hr>"),t=t.replace(/^\s*(##|###) (.*)$/gm,(n,c,m)=>{const q=m.replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/__([^_]+)__/g,"$1").replace(/_([^_]+)_/g,"$1"),L=me(q),$=c.length===2?2:3;return a.push({level:$,text:q,slug:L}),`<h${$} id="${L}">${m}</h${$}>`}),t=t.replace(/^\s*###### (.*)$/gm,"<h6>$1</h6>"),t=t.replace(/^\s*##### (.*)$/gm,"<h5>$1</h5>"),t=t.replace(/^\s*#### (.*)$/gm,"<h4>$1</h4>"),t=t.replace(/^\s*# (.*)$/gm,"<h1>$1</h1>"),t=t.replace(/^\s*>\s+(.*)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/<\/blockquote>\n<blockquote>/g,"<br>"),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/__([^_]+)__/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t=t.replace(/_([^_]+)_/g,"<em>$1</em>"),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>');let s=!1;const o=t.split(`
`).map(n=>{const c=n.match(/^\s*[-\*]\s+(.*)$/);if(c){const m=c[1];return s?"<li>"+m+"</li>":(s=!0,`<ul>
<li>`+m+"</li>")}else return s?(s=!1,`</ul>
`+n):n});s&&o.push("</ul>"),t=o.join(`
`);const u=t.split(/\n\n+/),l=/^\s*<(p|h[1-6]|ul|ol|li|blockquote|pre|hr|div|section|article|table)\b/i;return t=u.map(n=>{const c=n.trim();return c?l.test(c)?c:`<p>${c.replace(/\n/g,"<br>")}</p>`:""}).join(`
`),{html:t,toc:a}}function ve(e){const{html:a,toc:t}=he(e.content);if(t.length>0){const s=t.map(o=>`
        <li class="toc-item toc-item--level-${o.level}">
          <a class="toc-link" href="#${o.slug}">${o.text}</a>
        </li>
      `).join(""),i=`
      <details class="toc-collapsible">
        <summary class="toc-collapsible__summary">Índice do Artigo</summary>
        <ul class="toc-collapsible__list">
          ${s}
        </ul>
      </details>
    `;return`
      <section class="text-block-surface reveal">
        <div class="container-text has-toc">
          <aside class="text-block-toc">
            <h3 class="toc-title">Índice</h3>
            <ul class="toc-list">
              ${s}
            </ul>
          </aside>
          
          <div class="text-block-body">
            ${i}
            ${e.title?`<h2 class="text-block-title">${e.title}</h2>`:""}
            <div class="text-block-content">${a}</div>
          </div>
        </div>
      </section>
    `}return`
    <section class="text-block-surface reveal">
      <div class="container-text">
        <div class="text-block-body">
          ${e.title?`<h2 class="text-block-title">${e.title}</h2>`:""}
          <div class="text-block-content">${a}</div>
        </div>
      </div>
    </section>
  `}function fe(e){return`
    <section class="faq-surface reveal">
      <div class="section-header">
        <h2 class="section-title">${e.title}</h2>
        ${e.description?`<p class="section-description">${e.description}</p>`:""}
      </div>
      <div class="faq-list">
        ${e.items.map(a=>`
          <details class="faq-item reveal">
            <summary class="faq-question">
              <span>${a.question}</span>
              <span class="faq-icon" aria-hidden="true">→</span>
            </summary>
            <div class="faq-answer">
              <p>${a.answer}</p>
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `}function ge(e){return`
    <section class="metrics-surface reveal">
      ${e.title?`
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
        </div>`:""}
      <div class="metrics-grid">
        ${e.items.map(a=>`
          <div class="metric-card reveal">
            <div class="metric-value glow-text-neon">${a.value}</div>
            <div class="metric-label">${a.label}</div>
            ${a.description?`<div class="metric-description">${a.description}</div>`:""}
          </div>
        `).join("")}
      </div>
    </section>
  `}function $e(e){return`
    <section class="gallery-surface reveal">
      ${e.title?`
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
        </div>`:""}
      <div class="gallery-container-outer">
        <button class="gallery-nav-btn prev" aria-label="Anterior">
          ${f("chevron-left","nav-icon")}
        </button>
        <button class="gallery-nav-btn next" aria-label="Próximo">
          ${f("chevron-right","nav-icon")}
        </button>
        <div class="gallery-track">
          ${e.images.map(a=>`
            <figure class="gallery-item reveal">
              <div class="gallery-image-wrapper">
                ${_(a.src,a.alt,"gallery-image")}
              </div>
              ${a.caption?`<figcaption class="gallery-caption">${a.caption}</figcaption>`:""}
            </figure>
          `).join("")}
        </div>
      </div>
    </section>
  `}function be(e){return`
    <section class="banner-surface reveal">
      <div class="banner-content">
        <h2 class="banner-title">${e.title}</h2>
        ${e.subtitle?`<p class="banner-subtitle">${e.subtitle}</p>`:""}
      </div>
      ${e.action?`
        <div class="banner-actions">
          <a class="primary-button" href="${e.action.href}">${e.action.label}</a>
        </div>
      `:""}
    </section>
  `}function ye(e){return`
    <section class="carousel-surface reveal">
      ${e.title?`
        <div class="section-header">
          <h2 class="section-title">${e.title}</h2>
        </div>`:""}
      <div class="carousel-container-outer">
        <button class="carousel-nav-btn prev" aria-label="Anterior">
          ${f("chevron-left","nav-icon")}
        </button>
        <button class="carousel-nav-btn next" aria-label="Próximo">
          ${f("chevron-right","nav-icon")}
        </button>
        <div class="carousel-track">
          ${e.items.map((a,t)=>`
            <div class="carousel-slide" data-slide-index="${t}">
              <div class="carousel-image-wrapper">
                ${_(a.imageSrc,a.title,"carousel-image")}
              </div>
              <div class="carousel-slide-content">
                <h3 class="carousel-slide-title">${a.title}</h3>
                ${a.description?`<p class="carousel-slide-description">${a.description}</p>`:""}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Me(e){return`
    <section class="cta-surface reveal">
      <div class="cta-content">
        <h2 class="cta-title">${e.title}</h2>
        <p class="cta-copy">${e.copy}</p>
        <div class="cta-actions">
          <a class="primary-button" href="${e.action.href}">${e.action.label}</a>
        </div>
      </div>
    </section>
  `}function we(e){switch(e.type){case"hero":return pe(e);case"cards":return ue(e);case"text":return ve(e);case"faq":return fe(e);case"metrics":return ge(e);case"gallery":return $e(e);case"banner":return be(e);case"carousel":return ye(e);case"cta":return Me(e);default:return""}}function xe(e){const a=[b("Nome Completo","nome","text","Seu nome"),b("E-mail","email","email","seu@email.com"),b("Mensagem","mensagem","textarea","Como podemos ajudar?")].join("");return`
    <main class="page-content" id="main-content">
      ${e.showBreadcrumb!==!1&&e.breadcrumb?`<div class="page-breadcrumb reveal">${e.breadcrumb}</div>`:""}
      ${e.blocks.map(i=>we(i)).join("")}
    </main>
    ${j(M.formTitle,M.formCopy,a,"Enviar Mensagem",`contact-form-${e.id}`)}
    ${B()}
  `}function Ce(e,a){const t=e.querySelector(a);if(!t)throw new Error(`Elemento não encontrado: ${a}`);return t}const Ae={title:"Em Breve | Home",description:"Arquitetura digital premium com identidade neon e glass. Portal corporativo modular, escalável e pronto para deploy."},qe={title:"Em Breve | About",description:"Origem e evolução de um sistema de identidade premium. Missão, visão e cultura expressas em linguagem futurista."},Le={title:"Em Breve | Services",description:"Estruturação, componentização e design tokens em um único sistema. Serviços de arquitetura digital sem diluição visual."},Ee={title:"Em Breve | Solutions",description:"Soluções modulares para portais corporativos, tecnologia e consultoria. Identidade cyber premium aplicada a negócios reais."},Pe={title:"Em Breve | Portfolio",description:"Cases e projetos organizados com presença visual premium. Resultados com fidelidade arquitetural e identidade intacta."},Se={title:"Em Breve | Contact",description:"Contato, orçamento e suporte em um único formulário com DNA visual original. Captura de leads sem ruptura de identidade."},_e={title:"Em Breve | FAQ",description:"Perguntas frequentes respondidas preservando o contraste, o glow e a atmosfera futurista do sistema."},He={title:"Em Breve | Legal",description:"Privacidade, termos de uso e cookies organizados com a mesma atmosfera visual premium do sistema."},je={title:"Política de Privacidade | Portal Corporativo",description:"Política de Privacidade detalhando o tratamento, controle e transparência de dados coletados sob a atmosfera futurista do portal."},Be={title:"Termos de Uso | Portal Corporativo",description:"Termos de Uso estabelecendo as condições, diretrizes e responsabilidades legais de navegação pelo portal corporativo."},ze={title:"Política de Cookies | Portal Corporativo",description:"Política de Cookies explicando o uso de arquivos temporários de sessão, preferências e como gerenciá-los com segurança."},ke={title:"LGPD & Compliance | Portal Corporativo",description:"Portal de conformidade com a LGPD e governança, assegurando direitos de privacidade e conformidade técnica."},Ie={title:"Documentação & Suporte | Portal Corporativo",description:"Documentação técnica do portal corporativo com guias de arquitetura, padrões visuais e suporte operacional."},Te={home:Ae,about:qe,services:Le,solutions:Ee,portfolio:Pe,contact:Se,faq:_e,legal:He,privacy:je,terms:Be,cookies:ze,compliance:ke,docs:Ie},De={siteName:"Em Breve",siteUrl:"https://newsite.com",defaultOgImage:"/og-image.png",defaultDescription:"Arquitetura digital premium com identidade neon, glass e futurista. Portal corporativo modular e escalável.",twitterCard:"summary_large_image",robots:"index, follow"};function v(e,a){let t=document.querySelector(`meta[name="${e}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",e),document.head.appendChild(t)),t.content=a}function h(e,a){let t=document.querySelector(`meta[property="${e}"]`);t||(t=document.createElement("meta"),t.setAttribute("property",e),document.head.appendChild(t)),t.content=a}function Ve(e){let a=document.querySelector('link[rel="canonical"]');a||(a=document.createElement("link"),a.setAttribute("rel","canonical"),document.head.appendChild(a)),a.href=e}function Fe(e){const{meta:a,site:t,pageHref:s,fallbackDescription:i}=e,o=a?.description||i||t.defaultDescription,u=a?.ogTitle??a?.title??t.siteName,l=a?.ogDescription??o,n=a?.ogImage??t.defaultOgImage,c=`${t.siteUrl}/${s}`;v("description",o),v("robots",t.robots),h("og:type","website"),h("og:site_name",t.siteName),h("og:title",u),h("og:description",l),h("og:image",n),h("og:url",c),v("twitter:card",t.twitterCard),v("twitter:title",u),v("twitter:description",l),Ve(c)}const Oe=M.navigationLinks,x=document.body.dataset.page??"home",C=E[x]??E.home;document.title=C.title;document.documentElement.lang="pt-BR";const Ne=Oe.find(e=>e.id===x),y=C.blocks.find(e=>e.type==="hero"),Re=y&&"copy"in y?y.copy:"";Fe({meta:Te[x],site:De,pageHref:Ne?.href??"index.html",fallbackDescription:Re});const P=Ce(document,"#app");P.children.length||(P.innerHTML=xe(C));const d=document.querySelector("[data-contact-panel]");document.querySelector("[data-contact-close]");document.querySelector("[data-menu-toggle]");const r=document.querySelector("[data-menu-panel]");document.querySelector("[data-menu-close]");let p=null;const A=e=>Array.from(e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex^="-"]), [contenteditable]')).filter(a=>{const t=window.getComputedStyle(a);return a.tabIndex>=0&&t.display!=="none"&&t.visibility!=="hidden"}),S=(e,a)=>{const t=A(a);if(t.length===0)return;const s=t[0],i=t[t.length-1];e.key==="Tab"&&(e.shiftKey?document.activeElement===s&&(i.focus(),e.preventDefault()):document.activeElement===i&&(s.focus(),e.preventDefault()))},H=()=>{d&&(p=document.activeElement,d.classList.add("is-active"),d.setAttribute("aria-hidden","false"),setTimeout(()=>{const e=A(d);e.length>0&&e[0].focus()},150))},w=()=>{d&&(d.classList.remove("is-active"),d.setAttribute("aria-hidden","true"),p&&(p.focus(),p=null))},Ue=()=>{r&&(p=document.activeElement,r.classList.add("is-open"),r.setAttribute("aria-hidden","false"),setTimeout(()=>{const e=A(r);e.length>0&&e[0].focus()},150))},g=()=>{r&&(r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),p&&(p.focus(),p=null))};document.addEventListener("click",e=>{const a=e.target;if(a.closest("[data-contact-open]")||a.closest("a")&&a.closest("a")?.getAttribute("href")==="#contato"){e.preventDefault(),H();return}if(a.closest("[data-contact-close]")){w();return}if(a.closest("[data-menu-toggle]")){r&&r.classList.contains("is-open")?g():Ue();return}if(a.closest("[data-menu-close]")){g();return}if(d&&d.classList.contains("is-active")&&(d.contains(a)||w()),r&&r.classList.contains("is-open")){const t=r.contains(a),s=a.closest("[data-menu-toggle]");!t&&!s&&g()}});document.addEventListener("keydown",e=>{if(e.key==="Escape"){w(),g();return}d&&d.classList.contains("is-active")?S(e,d):r&&r.classList.contains("is-open")&&S(e,r)});document.addEventListener("submit",e=>{const a=e.target;a.matches("form")&&(e.preventDefault(),a.classList.contains("contact-form")?(alert("Mensagem enviada com sucesso! Entraremos em contato em breve."),a.reset()):a.classList.contains("footer-form")&&(alert("Inscrição na newsletter realizada com sucesso!"),a.reset()))});window.location.hash==="#contato"&&setTimeout(H,100);document.addEventListener("click",e=>{const a=e.target.closest(".carousel-nav-btn, .gallery-nav-btn");if(!a)return;const t=a.classList.contains("next")?1:-1,i=a.closest(".carousel-container-outer, .gallery-container-outer")?.querySelector(".carousel-track, .gallery-track");if(i){const o=i.firstElementChild?.getBoundingClientRect().width||i.clientWidth;i.scrollBy({left:o*t,behavior:"smooth"})}});
