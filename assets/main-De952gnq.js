(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function u(e,t,i="text",a){const o=i==="textarea"?`<textarea id="${t}" name="${t}" placeholder="${a}" required></textarea>`:`<input type="${i}" id="${t}" name="${t}" placeholder="${a}" required />`;return`
    <div class="field">
      <label for="${t}">${e}</label>
      ${o}
    </div>
  `}function C(e,t,i,a,o){return`
    <section class="contact-panel" data-contact-panel id="contato" aria-label="${e}">
      <div class="contact-panel__header">
        <div>
          <h2 class="form-title">${e}</h2>
          <p class="form-copy">${t}</p>
        </div>
        <button class="close-button" type="button" data-contact-close aria-label="Fechar formulário">&times;</button>
      </div>
      <form class="form-shell contact-form" id="${o}" action="#" method="post">
        ${i}
        <button class="submit-button" type="submit">${a}</button>
      </form>
    </section>
  `}function A(){return`
    <button class="floating-contact-button" type="button" data-contact-open aria-label="Abrir formulário de contato" title="Fale Conosco">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    </button>
  `}const _={id:"about",title:"Em Breve | About",breadcrumb:"About",hero:{eyebrow:"Story",title:"SOBRE",subtitle:"Identidade preservada, arquitetura evoluída",copy:"A mesma atmosfera premium do modelo servindo como fundação para uma presença corporativa escalável.",primaryAction:{label:"Ver Missão",href:"services.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Story",columns:2,items:[{title:"Origem",text:"Nasce de um single-file com linguagem neon premium e foco absoluto em impacto visual."},{title:"Evolução",text:"Foi desconstruído em camadas sem alterar a percepção original."}]},{title:"Mission Vision Values",description:"Diretriz estratégica da marca",columns:3,items:[{title:"Missão",text:"Entregar arquitetura sólida mantendo a assinatura visual exata."},{title:"Visão",text:"Crescer em páginas, serviços e experiências sem perder identidade."},{title:"Valores",text:"Fidelidade, clareza, modularidade e consistência."}]},{title:"Team Culture",columns:2,items:[{title:"Processo",text:"Decisões visuais saem de tokens, não de exceções dispersas."},{title:"Cultura",text:"Cada novo componente herda o mesmo DNA do formulário e das superfícies originais."}]}],footerCopy:"Equipe e cultura expressas na mesma linguagem futurista do arquivo-base.",formTitle:"Fale com a equipe",formCopy:"Um único sistema de captura para contato institucional e comercial."},P={id:"contact",title:"Em Breve | Contact",breadcrumb:"Contact",hero:{eyebrow:"Contact",title:"CONTATO",subtitle:"Mesmo formulário, múltiplos contextos",copy:"A captura de leads segue o DNA visual original em contato, newsletter, orçamento e suporte.",primaryAction:{label:"Abrir Formulário",href:"contact.html"},secondaryAction:{label:"FAQ",href:"faq.html"}},sections:[{title:"Channels",columns:3,items:[{title:"E-mail",text:"Fluxo institucional e comercial em uma mesma experiência."},{title:"Chat",text:"Canal rápido com o ícone e a linguagem do modelo original."},{title:"Social",text:"Presença distribuída sem ruptura visual."}]},{title:"Presence",columns:2,items:[{title:"Horário",text:"Operação preparada para atendimento e retorno ágil."},{title:"Cobertura",text:"Site, suporte e aquisição em um sistema único."}]},{title:"FAQ",columns:3,items:[{title:"Posso usar o mesmo formulário?",text:"Sim. O sistema foi construído para ser reaproveitado em todos os contextos."},{title:"A identidade muda em páginas novas?",text:"Não. A paleta, tipografia e linguagem visual permanecem intactas."},{title:"O projeto funciona em Vite?",text:"Sim. O fluxo local, build e deploy estático já estão preparados."}]}],footerCopy:"Contato e suporte mantidos na mesma composição glass neon do modelo.",formTitle:"Fale Conosco",formCopy:"Formulário centralizado para contato, orçamento e suporte."},$={id:"faq",title:"Em Breve | FAQ",breadcrumb:"FAQ",hero:{eyebrow:"Support",title:"FAQ",subtitle:"Respostas no mesmo sistema visual",copy:"Perguntas frequentes e suporte preservando o contraste, o glow e a atmosfera futurista original.",primaryAction:{label:"Perguntas",href:"faq.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Questions",columns:2,items:[{title:"O layout foi redesenhado?",text:"Não. Foi desconstruído e reorganizado sem reinterpretação visual."},{title:"Os formulários têm um único DNA?",text:"Sim. O padrão original foi extraído e reutilizado em toda a base."},{title:"Há suporte para novas páginas?",text:"Sim. A arquitetura foi criada para expansão multi-página."},{title:"O tema foi trocado?",text:"Não. O dark neon premium foi preservado integralmente."}]},{title:"Answers",columns:3,items:[{title:"Fontes",text:"Orbitron para títulos e Rajdhani para corpo, exatamente como no modelo."},{title:"Cores",text:"Cyan, purple, glass e preto profundo extraídos sem reinterpretar."},{title:"Motion",text:"Pulse e float mantidos como base das interações."}]},{title:"Support",columns:3,items:[{title:"Fluxo",text:"Contato e suporte compartilham o mesmo componente de formulário."},{title:"Escala",text:"Tokens e layouts permitem crescimento sem espalhar hardcode."},{title:"Deploy",text:"Build pronto para publicação estática em Cloudflare Pages."}]}],footerCopy:"FAQ estruturado para suportar a mesma experiência premium do sistema-base.",formTitle:"Abrir chamado",formCopy:"O mesmo componente de entrada pode servir suporte e captação."},E={id:"home",title:"Em Breve | Home",breadcrumb:"Home",hero:{eyebrow:"Portal Corporativo",title:"EM BREVE",subtitle:"O Futuro já começou",copy:"Arquitetura digital premium com a mesma identidade neon, glass e futurista do modelo original.",primaryAction:{label:"Fale Conosco",href:"contact.html"},secondaryAction:{label:"Ver Serviços",href:"services.html"}},sections:[{title:"Company Intro",description:"Base modular para crescimento",columns:3,items:[{title:"Sistema de identidade",text:"Paleta, glow, blur e contraste preservados como tokens centrais."},{title:"Componentes reutilizáveis",text:"Layout, navegação, superfícies e formulários compartilhados por toda a estrutura."},{title:"Escala multi-página",text:"Base pronta para expansão estática em Cloudflare Pages e Vite."}]},{title:"Services Preview",description:"Oferta corporativa em linguagem original",columns:2,items:[{title:"Estratégia",text:"Direção visual e conteúdo alinhados ao DNA do modelo."},{title:"Design System",text:"Tokens, componentes e formulários centralizados sem reinterpretação."},{title:"Desenvolvimento",text:"Arquitetura modular com páginas estáticas e carregamento instantâneo."},{title:"Deploy",text:"Build compatível com hospedagem estática e fluxo moderno de publicação."}]},{title:"Differentials",description:"Linguagem neon premium sem simplificação",columns:3,items:[{title:"Glass surfaces",text:"Superfícies translúcidas, bordas suaves e profundidade intacta."},{title:"Neon interactions",text:"Hover, focus e brilho obedecem ao padrão original."},{title:"Fidelity-first",text:"Migração arquitetural sem trocar a identidade visual."}]}],footerCopy:"Contato, navegação e captura de leads mantidos no mesmo sistema visual do modelo.",formTitle:"Fale Conosco",formCopy:"Sistema único de formulários para contato, leads e suporte."},S={id:"legal",title:"Em Breve | Legal",breadcrumb:"Legal",hero:{eyebrow:"Policy",title:"LEGAL",subtitle:"Privacidade, termos e cookies",copy:"Documentos legais mantêm a mesma atmosfera visual, apenas reorganizados para uma arquitetura profissional.",primaryAction:{label:"Privacidade",href:"legal.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Privacy",columns:2,items:[{title:"Dados",text:"Coleta mínima, tratamento transparente e preservação da experiência visual."},{title:"Uso",text:"Informações utilizadas apenas para contato, suporte e operação do site."}]},{title:"Terms",columns:2,items:[{title:"Conteúdo",text:"Textos e componentes devem seguir a identidade preservada neste modelo."},{title:"Responsabilidade",text:"A base foi preparada para manutenção clara e escalável."}]},{title:"Cookies",columns:3,items:[{title:"Preferência",text:"Configurações visuais e de navegação podem ser persistidas."},{title:"Sessão",text:"A experiência permanece consistente entre páginas."},{title:"Consentimento",text:"A abordagem continua limpa e compatível com deploy estático."}]}],footerCopy:"Legal estruturado sem abrir mão do mesmo universo visual original.",formTitle:"Falar com jurídico",formCopy:"Captura de contato com o mesmo sistema de formulários reutilizáveis."},F={id:"portfolio",title:"Em Breve | Portfolio",breadcrumb:"Portfolio",hero:{eyebrow:"Cases",title:"PORTFOLIO",subtitle:"Resultados com presença premium",copy:"Casos e resultados organizados na mesma composição translúcida, com foco em credibilidade visual.",primaryAction:{label:"Projetos",href:"contact.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Projects",columns:3,items:[{title:"Case 01",text:"Portal corporativo com hero neon e formulário expansível."},{title:"Case 02",text:"Estrutura multi-página com identidade visual intacta."},{title:"Case 03",text:"Design system centralizado para escala futura."}]},{title:"Cases",columns:2,items:[{title:"Resultados",text:"Mais clareza de manutenção e expansão sem quebrar a linguagem original."},{title:"Processo",text:"Componentes menores e fluxo local via Vite para iteração rápida."},{title:"Entrega",text:"Arquitetura estática pronta para produção e deploy."},{title:"Fidelidade",text:"Nenhum redesign; apenas desconstrução profissional."}]},{title:"Results",columns:3,items:[{title:"Visual parity",text:"A percepção do sistema permanece essencialmente a mesma."},{title:"Maintainability",text:"Base modular, separada por domínio e reutilizável."},{title:"Delivery",text:"Workflow pronto para preview local, build e deploy."}]}],footerCopy:"Cases organizados sem perder a assinatura cyber premium.",formTitle:"Discutir projeto",formCopy:"Lead form para novos estudos, propostas e parcerias."},q={id:"services",title:"Em Breve | Services",breadcrumb:"Services",hero:{eyebrow:"Capabilities",title:"SERVIÇOS",subtitle:"Arquitetura, conteúdo e conversão no mesmo sistema",copy:"Tudo deriva do mesmo tema original: sem redesign, sem troca de tipografia e sem diluição da atmosfera neon.",primaryAction:{label:"Workflow",href:"contact.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Services Grid",columns:3,items:[{title:"Estruturação",text:"Reorganização do single-file em sistema estático modular."},{title:"Componentização",text:"Cabeçalho, rodapé, hero, forms e superfícies como peças reutilizáveis."},{title:"Design tokens",text:"Cores, sombras, bordas, espaçamentos e motion centralizados."}]},{title:"Workflow",columns:2,items:[{title:"Passo 1",text:"Mapeamento dos padrões repetidos e dos primitivos visuais do arquivo-modelo."},{title:"Passo 2",text:"Extração de tokens, animações e sistema de formulários."},{title:"Passo 3",text:"Construção da arquitetura corporativa com Vite e páginas independentes."},{title:"Passo 4",text:"Validação local e preparação para deploy estático."}]},{title:"Benefits",columns:3,items:[{title:"Consistência",text:"Toda interface segue um único design language."},{title:"Escala",text:"Novas páginas podem reutilizar o mesmo shell sem quebra visual."},{title:"Futuro",text:"A base já nasce preparada para crescimento contínuo."}]}],footerCopy:"Serviços organizados sem alterar a atmosfera original do sistema.",formTitle:"Solicitar serviço",formCopy:"Lead capture com o mesmo DNA visual do formulário-base."},L={id:"solutions",title:"Em Breve | Solutions",breadcrumb:"Solutions",hero:{eyebrow:"Architecture",title:"SOLUTIONS",subtitle:"Verticais, tecnologia e casos de uso",copy:"A mesma composição cyber premium aplicada a cenários de negócio, sem trocar a linguagem visual.",primaryAction:{label:"Indústrias",href:"portfolio.html"},secondaryAction:{label:"Contato",href:"contact.html"}},sections:[{title:"Industries",columns:3,items:[{title:"Serviços",text:"Portais corporativos com presença premium e captação contínua."},{title:"Tecnologia",text:"Sistemas com identidade futurista e arquitetura modular."},{title:"Consultoria",text:"Narrativa, autoridade e conversão em uma mesma superfície."}]},{title:"Use Cases",columns:2,items:[{title:"Aquisição",text:"Landing pages e formulários com o mesmo padrão visual."},{title:"Apresentação",text:"Estrutura corporativa multi-página para contextualização de oferta."},{title:"Suporte",text:"FAQ, canais e presença operacional sem romper o sistema."},{title:"Expansão",text:"Novos módulos entram pela mesma gramática de componentes."}]},{title:"Technology",columns:3,items:[{title:"Vite",text:"Dev server, HMR e build estático leve."},{title:"Tokens",text:"Uma camada única para visual, motion e responsividade."},{title:"Deploy",text:"Compatível com Cloudflare Pages e fluxos estáticos."}]}],footerCopy:"Soluções desenhadas com o mesmo brilho e a mesma densidade do arquivo-base.",formTitle:"Consultar solução",formCopy:"Sistema de formulários reutilizável para captação consultiva."},f=[{id:"home",label:"Home",href:"index.html"},{id:"about",label:"About",href:"about.html"},{id:"services",label:"Services",href:"services.html"},{id:"solutions",label:"Solutions",href:"solutions.html"},{id:"portfolio",label:"Portfolio",href:"portfolio.html"},{id:"contact",label:"Contact",href:"contact.html"},{id:"faq",label:"FAQ",href:"faq.html"},{id:"legal",label:"Legal",href:"legal.html"}],v={home:E,about:_,services:q,solutions:L,portfolio:F,contact:P,faq:$,legal:S};function O(e){const t=f.map(a=>`<a class="nav__link ${a.id===e?"is-active":""}" href="${a.href}">${a.label}</a>`).join(""),i=f.map(a=>`<a class="menu-panel__link ${a.id===e?"is-active":""}" href="${a.href}">${a.label}</a>`).join("");return`
    <header class="site-header">
      <div class="site-header__inner header-shell">
        <a class="brand" href="index.html" aria-label="Ir para a home">
          <span class="brand__title">Portal Corporativo</span>
          <span class="brand__subtitle">Em Breve</span>
        </a>
        <nav class="nav" aria-label="Navegação principal">
          ${t}
        </nav>
        <div class="header-actions">
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="Abrir menu">
            <span></span>
          </button>
          <a class="primary-button" href="contact.html">Contato</a>
        </div>
        <div class="menu-panel" data-menu-panel aria-hidden="true">
          <div class="menu-panel__header">
            <h2 class="menu-panel__title">Menu</h2>
            <button class="close-button" type="button" data-menu-close aria-label="Fechar menu">&times;</button>
          </div>
          <div class="menu-panel__list">
            ${i}
          </div>
        </div>
      </div>
    </header>
  `}function k(e){return`
    <article class="surface-card reveal">
      ${e.meta?`<span class="surface-card__eyebrow">${e.meta}</span>`:""}
      <h3 class="surface-card__title">${e.title}</h3>
      <p class="surface-card__text">${e.text}</p>
    </article>
  `}function w(e){return`
    <section class="section-surface reveal">
      <div class="section-header">
        <h2 class="section-title">${e.title}</h2>
        ${e.description?`<p class="section-description">${e.description}</p>`:""}
      </div>
      <div class="section-grid" data-columns="${e.columns??2}">
        ${e.items.map(k).join("")}
      </div>
    </section>
  `}function z(e,t,i,a,o,s,c,x,y){return`
    <section class="hero-surface reveal">
      <div class="breadcrumb">${y}</div>
      <div class="section-kicker">${e}</div>
      <h1 class="hero-title">${t}</h1>
      <p class="hero-subtitle">${i}</p>
      <p class="hero-copy">${a}</p>
      <div class="hero-actions">
        <a class="primary-button" href="${s}">${o}</a>
        <a class="secondary-button" href="${x}">${c}</a>
      </div>
    </section>
  `}function T(e){const t=[u("Nome Completo","nome","text","Seu nome"),u("E-mail","email","email","seu@email.com"),u("Mensagem","mensagem","textarea","Como podemos ajudar?")].join(""),i=[u("E-mail","newsletter-email","email","Digite seu e-mail")].join("");return`
    <div class="app-shell">
      ${O(e.id)}
      <main class="page-content">
        ${z(e.hero.eyebrow,e.hero.title,e.hero.subtitle,e.hero.copy,e.hero.primaryAction.label,e.hero.primaryAction.href,e.hero.secondaryAction.label,e.hero.secondaryAction.href,e.breadcrumb)}
        ${e.sections.map(w).join("")}
      </main>
      <footer class="site-footer">
        <div class="site-footer__inner">
          <div class="site-footer__grid">
            <section class="site-footer__panel section-surface">
              <div class="section-header">
                <h2 class="site-footer__title">Footer Form</h2>
                <p class="site-footer__copy">${e.footerCopy}</p>
              </div>
              <form class="form-shell footer-form" action="#" method="post">
                ${i}
                <button class="submit-button" type="submit">Assinar</button>
              </form>
            </section>
            <section class="site-footer__panel section-surface">
              <div class="section-header">
                <h2 class="site-footer__title">Navegação</h2>
                <p class="site-footer__copy">Estrutura multi-página preservando a identidade original.</p>
              </div>
              <div class="menu-panel__list">
                <a class="menu-panel__link" href="index.html">Home</a>
                <a class="menu-panel__link" href="about.html">About</a>
                <a class="menu-panel__link" href="services.html">Services</a>
                <a class="menu-panel__link" href="solutions.html">Solutions</a>
                <a class="menu-panel__link" href="portfolio.html">Portfolio</a>
                <a class="menu-panel__link" href="contact.html">Contact</a>
                <a class="menu-panel__link" href="faq.html">FAQ</a>
                <a class="menu-panel__link" href="legal.html">Legal</a>
              </div>
            </section>
          </div>
        </div>
      </footer>
      ${C(e.formTitle,e.formCopy,t,"Enviar Mensagem",`contact-form-${e.id}`)}
      ${A()}
    </div>
  `}function l(e,t){const i=e.querySelector(t);if(!i)throw new Error(`Elemento não encontrado: ${t}`);return i}const D=document.body.dataset.page??"home",h=v[D]??v.home;document.title=h.title;document.documentElement.lang="pt-BR";const r=l(document,"#app");r.innerHTML=T(h);const m=l(r,"[data-contact-panel]"),b=l(r,"[data-contact-open]"),N=l(r,"[data-contact-close]"),g=l(r,"[data-menu-toggle]"),n=l(r,"[data-menu-panel]"),B=l(r,"[data-menu-close]"),M=()=>{m.classList.add("is-active"),m.setAttribute("aria-hidden","false")},p=()=>{m.classList.remove("is-active"),m.setAttribute("aria-hidden","true")},V=()=>{n.classList.add("is-open"),n.setAttribute("aria-hidden","false")},d=()=>{n.classList.remove("is-open"),n.setAttribute("aria-hidden","true")};b.addEventListener("click",M);N.addEventListener("click",p);g.addEventListener("click",()=>{if(n.classList.contains("is-open")){d();return}V()});B.addEventListener("click",d);document.addEventListener("click",e=>{const t=e.target;!m.contains(t)&&!b.contains(t)&&p(),!n.contains(t)&&!g.contains(t)&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(p(),d())});r.addEventListener("submit",e=>{e.target.matches("form")&&e.preventDefault()});
