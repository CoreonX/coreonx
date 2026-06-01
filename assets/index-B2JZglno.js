(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ae="_btn_c1ni6_5",se="_primary_c1ni6_26",oe="_secondary_c1ni6_37",ie="_accent_c1ni6_48",re="_outlined_c1ni6_59",ne="_ghost_c1ni6_71",ce="_sm_c1ni6_82",le="_md_c1ni6_88",de="_lg_c1ni6_93",P={btn:ae,primary:se,secondary:oe,accent:ie,outlined:re,ghost:ne,sm:ce,md:le,lg:de};function pe(o){const e=P[o.variant]||P.primary,t=P[o.size]||P.md,a=o.disabled?"disabled":"",s=`${P.btn} ${e} ${t}`;return o.href?`<a href="${o.href}" class="${s}">${o.text}</a>`:`<button class="${s}" type="${o.type||"button"}" ${a}>${o.text}</button>`}class ue extends HTMLElement{static get observedAttributes(){return["text","variant","size","href","disabled","type"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("text")||"",t=this.getAttribute("variant")||"primary",a=this.getAttribute("size")||"md",s=this.getAttribute("href")||void 0,r=this.hasAttribute("disabled"),c=this.getAttribute("type")||"button";this.innerHTML=pe({text:e,variant:t,size:a,href:s,disabled:r,type:c})}}customElements.get("corp-button")||customElements.define("corp-button",ue);const me="_card_l8zik_5",ge="_header_l8zik_24",ve="_iconWrapper_l8zik_31",he="_badge_l8zik_43",be="_content_l8zik_56",_e="_title_l8zik_60",fe="_description_l8zik_68",$e="_footer_l8zik_75",ye="_link_l8zik_81",xe="_linkIcon_l8zik_95",C={card:me,header:ge,iconWrapper:ve,badge:he,content:be,title:_e,description:fe,footer:$e,link:ye,linkIcon:xe},Y={cpu:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>',shield:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/></svg>',activity:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',globe:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',briefcase:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'};function ke(o){const e=o.icon&&Y[o.icon]?`<div class="${C.iconWrapper}">${Y[o.icon]}</div>`:"",t=o.badge?`<span class="${C.badge}">${o.badge}</span>`:"",a=o.linkHref&&o.linkText?`
      <div class="${C.footer}">
        <a href="${o.linkHref}" class="${C.link}">
          <span>${o.linkText}</span>
          <svg class="${C.linkIcon}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    `:"";return`
    <article class="${C.card}">
      <div class="${C.content}">
        <div class="${C.header}">
          ${e}
          ${t}
        </div>
        <h3 class="${C.title}">${o.title}</h3>
        <p class="${C.description}">${o.description}</p>
      </div>
      ${a}
    </article>
  `}class Ae extends HTMLElement{static get observedAttributes(){return["title","description","icon","badge","link-text","link-href"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("title")||"",t=this.getAttribute("description")||"",a=this.getAttribute("icon")||void 0,s=this.getAttribute("badge")||void 0,r=this.getAttribute("link-text")||void 0,c=this.getAttribute("link-href")||void 0;this.innerHTML=ke({title:e,description:t,icon:a,badge:s,linkText:r,linkHref:c})}}customElements.get("corp-card")||customElements.define("corp-card",Ae);const N={mainNav:[{label:"Início",href:"#/"},{label:"Sobre Nós",href:"#/sobre"},{label:"Serviços",href:"#/servicos"},{label:"Carreiras",href:"#/carreiras"},{label:"Blog",href:"#/blog"},{label:"Contato",href:"#/contato"}],footerNav:[{label:"Nossa História",href:"#/sobre"},{label:"Soluções Corporativas",href:"#/servicos"},{label:"Vagas Abertas",href:"#/carreiras"},{label:"Artigos & Insights",href:"#/blog"},{label:"Fale Conosco",href:"#/contato"}],legalNav:[{label:"Políticas de Privacidade",href:"#/privacidade"},{label:"Termos de Uso",href:"#/termos"},{label:"Compliance & Governança",href:"#/compliance"}]},Te="_nav_1gtmq_5",Se="_navList_1gtmq_10",Ce="_navItem_1gtmq_18",Ee="_navLink_1gtmq_22",Le="_active_1gtmq_52",M={nav:Te,navList:Se,navItem:Ce,navLink:Ee,active:Le};function we(o){const e=o.items.map(t=>{const s=o.activePath===t.href?M.active:"";return`
        <li class="${M.navItem}">
          <a href="${t.href}" class="${M.navLink} ${s}" 
             ${t.external?'target="_blank" rel="noopener noreferrer"':""}>
            ${t.label}
          </a>
        </li>
      `}).join("");return`
    <nav class="${M.nav}">
      <ul class="${M.navList}">
        ${e}
      </ul>
    </nav>
  `}class Ie extends HTMLElement{constructor(){super(...arguments),this.activePath=window.location.hash||"#/",this.boundOnHashChange=this.onHashChange.bind(this)}connectedCallback(){window.addEventListener("hashchange",this.boundOnHashChange),this.render()}disconnectedCallback(){window.removeEventListener("hashchange",this.boundOnHashChange)}onHashChange(){this.activePath=window.location.hash||"#/",this.render()}render(){this.innerHTML=we({items:N.mainNav,activePath:this.activePath})}}customElements.get("corp-navbar")||customElements.define("corp-navbar",Ie);const L={name:"Apex Systems",slogan:"Arquitetura e Soluções Tecnológicas de Missão Crítica para Corporações Globais.",foundedYear:2018,contactEmail:"contato@apexsystems.corp",contactPhone:"+55 (11) 3456-7890",address:"Avenida das Nações Unidas, 12901 - 22° Andar",city:"São Paulo",state:"SP",country:"Brasil",socialLinks:{linkedin:"https://linkedin.com/company/apex-systems",twitter:"https://twitter.com/apex_systems",github:"https://github.com/apex-systems"}},Be="_wrapper_hl09d_5",Pe="_container_hl09d_19",Me="_logoWrapper_hl09d_29",Oe="_logoIcon_hl09d_39",qe="_desktopNav_hl09d_52",Ne="_actions_hl09d_60",De="_burgerBtn_hl09d_67",He="_burgerLine_hl09d_80",ze="_mobileDrawer_hl09d_89",Re="_mobileList_hl09d_114",je="_mobileLink_hl09d_121",y={wrapper:Be,container:Pe,logoWrapper:Me,logoIcon:Oe,desktopNav:qe,actions:Ne,burgerBtn:De,burgerLine:He,mobileDrawer:ze,mobileList:Re,mobileLink:je};function Ge(o){const e=N.mainNav.map(t=>{const a=o.activePath===t.href?y.active:"";return`
        <li>
          <a href="${t.href}" class="${y.mobileLink} ${a}" 
             ${t.external?'target="_blank" rel="noopener noreferrer"':""}>
            ${t.label}
          </a>
        </li>
      `}).join("");return`
    <header class="${y.wrapper}">
      <div class="${y.container}">
        <!-- LOGO BRAND -->
        <a href="#/" class="${y.logoWrapper}">
          <div class="${y.logoIcon}">A</div>
          <span>${o.brandName}</span>
        </a>

        <!-- DESKTOP NAVBAR -->
        <div class="${y.desktopNav}">
          <corp-navbar></corp-navbar>
        </div>

        <!-- CORPORATE CTAS -->
        <div class="${y.actions}">
          <corp-button text="Trabalhe Conosco" variant="ghost" size="sm" href="#/carreiras"></corp-button>
          <corp-button text="Atendimento" variant="secondary" size="sm" href="#/contato"></corp-button>
        </div>

        <!-- HAMBURGER TRIGGERS (MOBILE) -->
        <button class="${y.burgerBtn}" aria-label="Menu principal">
          <span class="${y.burgerLine}"></span>
          <span class="${y.burgerLine}"></span>
          <span class="${y.burgerLine}"></span>
        </button>

        <!-- MOBILE NAV DRAWER -->
        <div class="${y.mobileDrawer}">
          <ul class="${y.mobileList}">
            ${e}
          </ul>
          <div style="margin-top: var(--spacing-xl); display: flex; flex-direction: column; gap: var(--spacing-md); width: calc(100% - var(--spacing-xxl)); max-width: 250px;">
            <corp-button text="Trabalhe Conosco" variant="outlined" size="md" href="#/carreiras" class="mobile-cta"></corp-button>
            <corp-button text="Atendimento" variant="secondary" size="md" href="#/contato" class="mobile-cta"></corp-button>
          </div>
        </div>
      </div>
    </header>
  `}class Fe extends HTMLElement{constructor(){super(...arguments),this.activePath=window.location.hash||"#/",this.boundOnHashChange=this.onHashChange.bind(this)}connectedCallback(){window.addEventListener("hashchange",this.boundOnHashChange),this.render(),this.initInteractiveMenu()}disconnectedCallback(){window.removeEventListener("hashchange",this.boundOnHashChange)}onHashChange(){this.activePath=window.location.hash||"#/",this.render(),this.initInteractiveMenu()}initInteractiveMenu(){const e=this.querySelector("button"),t=this.querySelector('[class*="mobileDrawer"]');e&&t&&(e.addEventListener("click",()=>{const s=t.classList.contains("open-drawer"),r=e.querySelectorAll("span");s?(t.classList.remove("open-drawer"),t.setAttribute("style","opacity: 0; visibility: hidden; transform: translateY(-20px);"),r.length===3&&(r[0].setAttribute("style",""),r[1].setAttribute("style",""),r[2].setAttribute("style",""))):(t.classList.add("open-drawer"),t.setAttribute("style","opacity: 1; visibility: visible; transform: translateY(0);"),r.length===3&&(r[0].setAttribute("style","transform: translateY(8px) rotate(45deg);"),r[1].setAttribute("style","opacity: 0;"),r[2].setAttribute("style","transform: translateY(-8px) rotate(-45deg);")))}),t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("open-drawer"),t.setAttribute("style","opacity: 0; visibility: hidden; transform: translateY(-20px);");const r=e.querySelectorAll("span");r.length===3&&(r[0].setAttribute("style",""),r[1].setAttribute("style",""),r[2].setAttribute("style",""))})}))}render(){this.innerHTML=Ge({brandName:L.name,activePath:this.activePath})}}customElements.get("corp-header")||customElements.define("corp-header",Fe);const Ve="_wrapper_kifo5_5",Ue="_grid_kifo5_13",We="_brandCol_kifo5_26",Ye="_logoWrapper_kifo5_32",Je="_logoIcon_kifo5_41",Ke="_slogan_kifo5_54",Qe="_socialList_kifo5_60",Ze="_socialLink_kifo5_66",Xe="_colTitle_kifo5_80",et="_linkList_kifo5_89",tt="_link_kifo5_89",at="_contactInfo_kifo5_107",st="_bottomBar_kifo5_115",ot="_legalList_kifo5_132",it="_legalLink_kifo5_137",_={wrapper:Ve,grid:Ue,brandCol:We,logoWrapper:Ye,logoIcon:Je,slogan:Ke,socialList:Qe,socialLink:Ze,colTitle:Xe,linkList:et,link:tt,contactInfo:at,bottomBar:st,legalList:ot,legalLink:it};function rt(o){const e=o.config,t=N.footerNav.map(s=>`
      <li>
        <a href="${s.href}" class="${_.link}">
          ${s.label}
        </a>
      </li>
    `).join(""),a=N.legalNav.map(s=>`
      <li>
        <a href="${s.href}" class="${_.legalLink}">
          ${s.label}
        </a>
      </li>
    `).join("");return`
    <footer class="${_.wrapper}">
      <div class="container">
        <div class="${_.grid}">
          <!-- BRAND BLOCK -->
          <div class="${_.brandCol}">
            <div class="${_.logoWrapper}">
              <div class="${_.logoIcon}">A</div>
              <span>${e.name}</span>
            </div>
            <p class="${_.slogan}">${e.slogan}</p>
            
            <!-- SOCIAL LINKS -->
            <div class="${_.socialList}">
              <a href="${e.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="${_.socialLink}" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="${e.socialLinks.twitter}" target="_blank" rel="noopener noreferrer" class="${_.socialLink}" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="${e.socialLinks.github}" target="_blank" rel="noopener noreferrer" class="${_.socialLink}" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div>
            <h4 class="${_.colTitle}">Explore</h4>
            <ul class="${_.linkList}">
              ${t}
            </ul>
          </div>

          <!-- CONTACTS QUICK VIEW -->
          <div>
            <h4 class="${_.colTitle}">Contato</h4>
            <div class="${_.contactInfo}">
              <p style="color: #94a3b8; margin: 0;">E-mail:<br><a href="mailto:${e.contactEmail}" style="color: white; font-weight: 500;">${e.contactEmail}</a></p>
              <p style="color: #94a3b8; margin: 0;">Telefone:<br><span style="color: white; font-weight: 500;">${e.contactPhone}</span></p>
            </div>
          </div>

          <!-- HEADQUARTERS ADDRESS -->
          <div>
            <h4 class="${_.colTitle}">Sede</h4>
            <div class="${_.contactInfo}">
              <p style="color: #94a3b8; margin: 0;">
                ${e.address}<br>
                ${e.city} - ${e.state}<br>
                ${e.country}
              </p>
            </div>
          </div>
        </div>

        <!-- FOOTER BOTTOM -->
        <div class="${_.bottomBar}">
          <p>© ${new Date().getFullYear()} ${e.name}. Todos os direitos reservados. Projeto Corporativo Estático de Missão Crítica.</p>
          <ul class="${_.legalList}">
            ${a}
          </ul>
        </div>
      </div>
    </footer>
  `}class nt extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=rt({config:L})}}customElements.get("corp-footer")||customElements.define("corp-footer",nt);const ct="_section_lmnbs_5",lt="_bgDefault_lmnbs_12",dt="_bgMuted_lmnbs_16",pt="_bgPrimary_lmnbs_22",ut="_headerBlock_lmnbs_28",mt="_alignCenter_lmnbs_33",gt="_alignLeft_lmnbs_39",vt="_badge_lmnbs_44",ht="_title_lmnbs_58",bt="_subtitle_lmnbs_69",_t="_container_lmnbs_80",T={section:ct,bgDefault:lt,bgMuted:dt,bgPrimary:pt,headerBlock:ut,alignCenter:mt,alignLeft:gt,badge:vt,title:ht,subtitle:bt,container:_t};function ft(o){const e=o.background==="muted"?T.bgMuted:o.background==="primary"?T.bgPrimary:T.bgDefault,t=o.alignment==="left"?T.alignLeft:T.alignCenter,a=o.title?`
      <div class="${T.headerBlock} ${t}">
        ${o.subtitle?`<span class="${T.badge}">Visão Geral</span>`:""}
        <h2 class="${T.title}">${o.title}</h2>
        ${o.subtitle?`<p class="${T.subtitle}">${o.subtitle}</p>`:""}
      </div>
    `:"";return`
    <section class="${T.section} ${e}">
      <div class="${T.container}">
        ${a}
        <div class="section-content">
          ${o.contentHtml}
        </div>
      </div>
    </section>
  `}class $t extends HTMLElement{connectedCallback(){const e=this.innerHTML;this.innerHTML="";const t=this.getAttribute("title")||void 0,a=this.getAttribute("subtitle")||void 0,s=this.getAttribute("alignment")||"center",r=this.getAttribute("background")||"default";this.innerHTML=ft({title:t,subtitle:a,alignment:s,background:r,contentHtml:e})}}customElements.get("corp-section")||customElements.define("corp-section",$t);const yt="_hero_9xey4_5",xt="_gridBg_9xey4_15",kt="_orb_9xey4_25",At="_orb2_9xey4_37",Tt="_container_9xey4_49",St="_content_9xey4_57",Ct="_badge_9xey4_65",Et="_title_9xey4_78",Lt="_subtitle_9xey4_93",wt="_actions_9xey4_106",E={hero:yt,gridBg:xt,orb:kt,orb2:At,container:Tt,content:St,badge:Ct,title:Et,subtitle:Lt,actions:wt};function It(o){const e=o.badge?`<span class="${E.badge}">${o.badge}</span>`:"",t=o.secondaryActionText&&o.secondaryActionHref?`<corp-button text="${o.secondaryActionText}" variant="outlined" size="lg" href="${o.secondaryActionHref}"></corp-button>`:"";return`
    <section class="${E.hero}">
      <div class="${E.gridBg}"></div>
      <div class="${E.orb}"></div>
      <div class="${E.orb2}"></div>
      <div class="${E.container}">
        <div class="${E.content}">
          ${e}
          <h1 class="${E.title}">${o.title}</h1>
          <p class="${E.subtitle}">${o.subtitle}</p>
          <div class="${E.actions}">
            <corp-button text="${o.primaryActionText}" variant="secondary" size="lg" href="${o.primaryActionHref}"></corp-button>
            ${t}
          </div>
        </div>
      </div>
    </section>
  `}class Bt extends HTMLElement{static get observedAttributes(){return["badge","title","subtitle","primary-action-text","primary-action-href","secondary-action-text","secondary-action-href"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("badge")||void 0,t=this.getAttribute("title")||"",a=this.getAttribute("subtitle")||"",s=this.getAttribute("primary-action-text")||"",r=this.getAttribute("primary-action-href")||"",c=this.getAttribute("secondary-action-text")||void 0,m=this.getAttribute("secondary-action-href")||void 0;this.innerHTML=It({badge:e,title:t,subtitle:a,primaryActionText:s,primaryActionHref:r,secondaryActionText:c,secondaryActionHref:m})}}customElements.get("corp-hero")||customElements.define("corp-hero",Bt);const Pt="_wrapper_14tce_5",Mt="_main_14tce_12",J={wrapper:Pt,main:Mt};function Ot(o,e){return`
    <div class="${J.wrapper}">
      <!-- GLOBAL ENTERPRISE HEADER -->
      <corp-header></corp-header>

      <!-- DYNAMIC CONTENT PORT -->
      <main id="main-content" class="${J.main}">
        ${e}
      </main>

      <!-- GLOBAL ENTERPRISE FOOTER -->
      <corp-footer></corp-footer>

      <!-- THEME & PALETTE SWITCHER -->
      <corp-theme-switcher></corp-theme-switcher>
    </div>
  `}class qt extends HTMLElement{connectedCallback(){const e=this.innerHTML;this.innerHTML="",this.getAttribute("page-title"),this.innerHTML=Ot({},e)}}customElements.get("corp-layout")||customElements.define("corp-layout",qt);const Nt="_wrapper_fsa2t_5",Dt="_triggerTab_fsa2t_16",Ht="_triggerIcon_fsa2t_42",zt="_panel_fsa2t_53",Rt="_open_fsa2t_68",jt="_header_fsa2t_74",Gt="_title_fsa2t_83",Ft="_closeBtn_fsa2t_92",Vt="_sectionTitle_fsa2t_110",Ut="_modesGrid_fsa2t_120",Wt="_modeOption_fsa2t_127",Yt="_selected_fsa2t_145",Jt="_modeIcon_fsa2t_155",Kt="_modeLabel_fsa2t_159",Qt="_palettesList_fsa2t_165",Zt="_paletteOption_fsa2t_171",Xt="_paletteMeta_fsa2t_199",ea="_paletteColorBadge_fsa2t_206",ta="_paletteLabel_fsa2t_214",aa="_paletteIndicator_fsa2t_223",u={wrapper:Nt,triggerTab:Dt,triggerIcon:Ht,panel:zt,open:Rt,header:jt,title:Gt,closeBtn:Ft,sectionTitle:Vt,modesGrid:Ut,modeOption:Wt,selected:Yt,modeIcon:Jt,modeLabel:Kt,palettesList:Qt,paletteOption:Zt,paletteMeta:Xt,paletteColorBadge:ea,paletteLabel:ta,paletteIndicator:aa};class sa extends HTMLElement{constructor(){super(...arguments),this.isOpen=!1,this.activeTheme="light",this.activePalette="indigo"}connectedCallback(){this.initThemes(),this.render(),this.addEventListeners()}initThemes(){this.activeTheme=localStorage.getItem("corp-theme")||"light",this.activePalette=localStorage.getItem("corp-palette")||"indigo",document.documentElement.setAttribute("data-theme",this.activeTheme),document.documentElement.setAttribute("data-palette",this.activePalette)}togglePanel(e){this.isOpen=e!==void 0?e:!this.isOpen;const t=this.querySelector(`.${u.panel}`);t&&(this.isOpen?t.classList.add(u.open):t.classList.remove(u.open))}changeTheme(e){this.activeTheme=e,localStorage.setItem("corp-theme",e),document.documentElement.setAttribute("data-theme",e),this.render(),this.addEventListeners(),this.togglePanel(!0)}changePalette(e){this.activePalette=e,localStorage.setItem("corp-palette",e),document.documentElement.setAttribute("data-palette",e),this.render(),this.addEventListeners(),this.togglePanel(!0)}addEventListeners(){const e=this.querySelector(`.${u.triggerTab}`);e&&e.addEventListener("click",c=>{c.stopPropagation(),this.togglePanel()});const t=this.querySelector(`.${u.closeBtn}`);t&&t.addEventListener("click",c=>{c.stopPropagation(),this.togglePanel(!1)}),this.querySelectorAll(`.${u.modeOption}`).forEach(c=>{c.addEventListener("click",m=>{const v=c.getAttribute("data-val");v&&this.changeTheme(v)})}),this.querySelectorAll(`.${u.paletteOption}`).forEach(c=>{c.addEventListener("click",m=>{const v=c.getAttribute("data-val");v&&this.changePalette(v)})});const r=c=>{const m=c.target;this.isOpen&&!this.contains(m)&&this.togglePanel(!1)};document.removeEventListener("click",r),document.addEventListener("click",r)}render(){const e=this.activeTheme==="dark",t=this.activeTheme==="light",a=[{id:"indigo",label:"Classic Indigo",color:"#4f46e5"},{id:"teal",label:"Sea Breeze",color:"#0d9488"},{id:"rose",label:"Sunset Premium",color:"#e11d48"},{id:"emerald",label:"Forrest Green",color:"#059669"},{id:"amber",label:"Aura Amber",color:"#d97706"},{id:"sky",label:"Clear Sky",color:"#0284c7"},{id:"violet",label:"Royal Violet",color:"#7c3aed"},{id:"orange",label:"Warm Sun",color:"#ea580c"},{id:"fuchsia",label:"Cyber Magenta",color:"#c026d3"},{id:"slate",label:"Charcoal Steel",color:"#475569"}];this.innerHTML=`
      <div id="corp-switcher" class="${u.wrapper}">
        <!-- FLOATING TAB TRIGGER -->
        <button class="${u.triggerTab}" title="Configurar Aparência" aria-label="Abrir Painel de Temas">
          <svg class="${u.triggerIcon}" viewBox="0 0 24 24">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" fill="currentColor" opacity="0.15"/>
            <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <!-- FLYOUT PANEL -->
        <div class="${u.panel} ${this.isOpen?u.open:""}">
          <div class="${u.header}">
            <h3 class="${u.title}">Aparência</h3>
            <button class="${u.closeBtn}" aria-label="Fechar painel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- THEME MODE TYPE -->
          <div class="${u.sectionTitle}">Luminosidade</div>
          <div class="${u.modesGrid}">
            <button class="${u.modeOption} ${t?u.selected:""}" data-val="light">
              <span class="${u.modeIcon}">☀️</span>
              <span class="${u.modeLabel}">Claro</span>
            </button>
            <button class="${u.modeOption} ${e?u.selected:""}" data-val="dark">
              <span class="${u.modeIcon}">🌙</span>
              <span class="${u.modeLabel}">Escuro</span>
            </button>
          </div>

          <!-- BRAND PALETTES VARIATIONS -->
          <div class="${u.sectionTitle}">Variantes de Cor</div>
          <div class="${u.palettesList}">
            ${a.map(s=>`
              <button class="${u.paletteOption} ${this.activePalette===s.id?u.selected:""}" data-val="${s.id}">
                <div class="${u.paletteMeta}">
                  <span class="${u.paletteColorBadge}" style="background-color: ${s.color};"></span>
                  <span class="${u.paletteLabel}">${s.label}</span>
                </div>
                <span class="${u.paletteIndicator}"></span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `}}customElements.get("corp-theme-switcher")||customElements.define("corp-theme-switcher",sa);const oa="_statsGrid_mhb9o_5",ia="_statItem_mhb9o_18",ra="_statNum_mhb9o_31",na="_statLabel_mhb9o_41",ca="_ctaBox_mhb9o_49",la="_ctaTitle_mhb9o_60",da="_ctaText_mhb9o_67",k={statsGrid:oa,statItem:ia,statNum:ra,statLabel:na,ctaBox:ca,ctaTitle:la,ctaText:da},Q={route:"#/",metadata:{title:"Apex Systems | Início",description:"Soluções corporativas de missão crítica, sistemas distribuídos e governança de inteligência artificial de alta performance."},render(){return`
      <!-- HERO PRINCIPAL -->
      <corp-hero 
        badge="Tecnologia de Missão Crítica"
        title="Escalabilidade e Segurança em Infraestruturas Globais"
        subtitle="Construímos sistemas resilientes que processam milhões de transações diárias de forma totalmente segura para as maiores corporações globais."
        primary-action-text="Conhecer Serviços"
        primary-action-href="#/servicos"
        secondary-action-text="Sobre Nós"
        secondary-action-href="#/sobre">
      </corp-hero>

      <!-- SEÇÃO SOLUÇÕES -->
      <corp-section 
        title="Nossas Soluções Corporativas"
        subtitle="Combinamos engenharia de software avançada e conformidade absoluta para otimizar operações de grande complexidade."
        background="muted"
        alignment="center">
        
        <div class="grid grid-cols-3">
          <corp-card 
            title="Alta Disponibilidade" 
            description="Projetamos topologias multi-regionais ativas-ativas em múltiplas nuvens que sustentam transações mundiais contínuas com SLAs rígidos de 99.999%."
            icon="cpu"
            badge="Escala"
            link-text="Ver Detalhes"
            link-href="#/servicos">
          </corp-card>
          
          <corp-card 
            title="Segurança Defensiva" 
            description="Desenho estrutural impermeável contra intrusões complexas. Aplicamos auditorias, criptografia rígida mTLS e anonimização de dados pessoais."
            icon="shield"
            badge="Garantia"
            link-text="Ver Detalhes"
            link-href="#/servicos">
          </corp-card>
          
          <corp-card 
            title="Sistemas Reutilizáveis" 
            description="Nossa arquitetura de Web Components limpa e TypeScript strict garante evolução contínua, onboarding simples e isolamento completo contra quebras."
            icon="activity"
            badge="Engenharia"
            link-text="Ver Detalhes"
            link-href="#/servicos">
          </corp-card>
        </div>
      </corp-section>

      <!-- SEÇÃO IMPACTO / STATS -->
      <corp-section 
        title="A Apex em Números"
        subtitle="A credibilidade consolidada junto a marcas líderes é comprovada pelo nosso excelente desempenho em produção."
        background="default"
        alignment="center">
        
        <div class="${k.statsGrid}">
          <div class="${k.statItem}">
            <div class="${k.statNum}">100M+</div>
            <div class="${k.statLabel}">Transações Diárias</div>
          </div>
          <div class="${k.statItem}">
            <div class="${k.statNum}">99.999%</div>
            <div class="${k.statLabel}">Disponibilidade SLA</div>
          </div>
          <div class="${k.statItem}">
            <div class="${k.statNum}">15+</div>
            <div class="${k.statLabel}">Países Atendidos</div>
          </div>
        </div>
      </corp-section>

      <!-- SEÇÃO CTA REFORÇADO -->
      <corp-section background="muted">
        <div class="${k.ctaBox}">
          <h3 class="${k.ctaTitle}">Preparado para elevar o nível tecnológico de sua empresa?</h3>
          <p class="${k.ctaText}">Converse diretamente com nossos diretores seniores de tecnologia para alinhar os desafios operacionais do seu ambiente às nossas soluções.</p>
          <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
            <corp-button text="Iniciar Atendimento" variant="secondary" size="lg" href="#/contato"></corp-button>
            <corp-button text="Vagas Disponíveis" variant="ghost" size="lg" href="#/carreiras" style="color: white; border: 1px solid rgba(255,255,255,0.3);"></corp-button>
          </div>
        </div>
      </corp-section>
    `}},pa="_aboutGrid_iovc8_5",ua="_storyContent_iovc8_18",ma="_introQuote_iovc8_24",ga="_valuesList_iovc8_34",va="_valCard_iovc8_46",ha="_valTitle_iovc8_55",ba="_valIcon_iovc8_65",_a="_valDesc_iovc8_71",fa="_leadersGrid_iovc8_79",$a="_leaderCard_iovc8_91",ya="_leaderImgPlaceholder_iovc8_105",xa="_leaderMeta_iovc8_117",ka="_leaderName_iovc8_121",Aa="_leaderRole_iovc8_128",Ta="_leaderBio_iovc8_135",p={aboutGrid:pa,storyContent:ua,introQuote:ma,valuesList:ga,valCard:va,valTitle:ha,valIcon:ba,valDesc:_a,leadersGrid:fa,leaderCard:$a,leaderImgPlaceholder:ya,leaderMeta:xa,leaderName:ka,leaderRole:Aa,leaderBio:Ta},Z={route:"#/sobre",metadata:{title:"Apex Systems | Sobre Nós",description:"Nossa história, propósitos, compromissos com a excelência técnica e nosso time de executivos especialistas."},render(){return`
      <!-- HERO CENA -->
      <corp-hero 
        badge="Nossa Identidade"
        title="Fundada na Disciplina Tecnológica de Alta Disponibilidade"
        subtitle="Conheça a história de inovação científica, governança rigorosa e engenharia de precisão que guiam cada microsserviço assinado pela Apex Systems."
        primary-action-text="Trabalhe Conosco"
        primary-action-href="#/carreiras"
        secondary-action-text="Fale com um Especialista"
        secondary-action-href="#/contato">
      </corp-hero>

      <!-- HISTÓRIA E MISSÃO -->
      <corp-section>
        <div class="${p.aboutGrid}">
          <div class="${p.storyContent}">
            <h2 class="h2">Evolução Contínua em Produção</h2>
            <div class="${p.introQuote}">
              "Não desenhamos arquiteturas apenas para durar, mas sim para simplificar e suportar mudanças constantes sem fricção operacional."
            </div>
            <p>
              Em 2018, fundamos a <strong>Apex Systems</strong> em São Paulo com uma tese centralizada: sistemas corporativos de grande escala sofrem com acoplamentos pesados, quebras imprevistas no deploy e documentação defasada.
            </p>
            <p>
              Iniciando nossas operações como arquitetos consultores para bancos de atacado privados, pivotamos para uma empresa de engenharia de software estrutural de produto, consolidando pacotes de microsserviços integrados de alta resiliência operando com frameworks simplistas de alta coesão.
            </p>
          </div>
          
          <div style="background-color: var(--color-surface-muted); border: 1px solid var(--color-border); padding: var(--spacing-xxl); border-radius: var(--radius-xl); box-shadow: var(--shadow-soft);">
            <h3 class="h3 mb-md" style="color: var(--color-primary);">Nossa Governança Técnica</h3>
            <ul style="display: flex; flex-direction: column; gap: var(--spacing-md);">
              <li style="display: flex; gap: var(--spacing-sm); align-items: flex-start;">
                <span style="color: var(--color-secondary); font-weight: bold; font-size: var(--font-size-lg);">✓</span>
                <div>
                  <strong>Abordagem SemVer:</strong> Cada componente é versionado e testado de maneira independente em sandboxes estritas.
                </div>
              </li>
              <li style="display: flex; gap: var(--spacing-sm); align-items: flex-start;">
                <span style="color: var(--color-secondary); font-weight: bold; font-size: var(--font-size-lg);">✓</span>
                <div>
                  <strong>Evolução Livre de Frameworks:</strong> Evitamos o bloqueio de vendor lock-in e quebras de runtime escolhendo APIs nativas do navegador.
                </div>
              </li>
              <li style="display: flex; gap: var(--spacing-sm); align-items: flex-start;">
                <span style="color: var(--color-secondary); font-weight: bold; font-size: var(--font-size-lg);">✓</span>
                <div>
                  <strong>SLA Baseado em Infraestrutura:</strong> Automações preventivas agem antes de picos sazonais sobrecarregarem o hardware contratado.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </corp-section>

      <!-- VALORES CORE - CARD LAYOUT -->
      <corp-section 
        title="Valores que Guiam a Nossa Engenharia"
        subtitle="Construímos sob diretrizes rigorosas que garantem previsibilidade a investidores, parceiros comerciais e equipes dedicadas."
        background="muted"
        alignment="center">
        
        <div class="${p.valuesList}">
          <div class="${p.valCard}">
            <div class="${p.valTitle}">
              <svg class="${p.valIcon}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>Previsibilidade</span>
            </div>
            <p class="${p.valDesc}">Garantimos que cada release de software seja testada empiricamente e siga padrões de semântica técnica imutáveis.</p>
          </div>

          <div class="${p.valCard}">
            <div class="${p.valTitle}">
              <svg class="${p.valIcon}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Segurança Inerente</span>
            </div>
            <p class="${p.valDesc}">Consideramos a segurança defensiva um requisito central do ciclo de compilação, nunca uma etapa de homologação posterior.</p>
          </div>

          <div class="${p.valCard}">
            <div class="${p.valTitle}">
              <svg class="${p.valIcon}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <span>Abertura Arquitetural</span>
            </div>
            <p class="${p.valDesc}">Adotamos padrões e Web Components abertos focados em alta reusabilidade para evitar dependências arbitrárias e onerosas.</p>
          </div>
        </div>
      </corp-section>

      <!-- DIREÇÃO / LIDERANÇA EXECUTIVA -->
      <corp-section 
        title="Liderança Executiva Especialista"
        subtitle="Unimos mentes experientes em computação defensiva, arquitetura resiliente corporativa e inteligência computacional."
        background="default"
        alignment="center">
        
        <div class="${p.leadersGrid}">
          <div class="${p.leaderCard}">
            <div class="${p.leaderImgPlaceholder}">MV</div>
            <div class="${p.leaderMeta}">
              <h4 class="${p.leaderName}">Eng. Marcus Vance</h4>
              <div class="${p.leaderRole}">Principal Architect &amp; CEO</div>
              <p class="${p.leaderBio}">Ex-líder técnico de computação distribuída em bancos de atacado de Nova York. Autor de patentes de roteamento transacional multiregião.</p>
            </div>
          </div>

          <div class="${p.leaderCard}">
            <div class="${p.leaderImgPlaceholder}">CM</div>
            <div class="${p.leaderMeta}">
              <h4 class="${p.leaderName}">Clara Mendez</h4>
              <div class="${p.leaderRole}">Chief Security Officer (CSO)</div>
              <p class="${p.leaderBio}">Especialista de segurança ofensiva credenciada globalmente. Pioneira em modelagens Zero Trust preventivas para serviços financeiros móveis.</p>
            </div>
          </div>

          <div class="${p.leaderCard}">
            <div class="${p.leaderImgPlaceholder}">AS</div>
            <div class="${p.leaderMeta}">
              <h4 class="${p.leaderName}">Dr. Arthur Sterling</h4>
              <div class="${p.leaderRole}">Head of AI Research</div>
              <p class="${p.leaderBio}">PH.D em grafos preditivos pela Unicamp. Arquiteta o pipeline e as redes de modelagem lógica que alimentam nossa inteligência preditiva.</p>
            </div>
          </div>
        </div>
      </corp-section>
    `}},Sa="_servGrid_rzs9h_5",Ca="_serviceBlock_rzs9h_11",Ea="_reverse_rzs9h_30",La="_reverseContent_rzs9h_34",wa="_servMeta_rzs9h_39",Ia="_servBadge_rzs9h_45",Ba="_servTitle_rzs9h_56",Pa="_servDetail_rzs9h_62",Ma="_featureChecks_rzs9h_67",Oa="_checkItem_rzs9h_74",qa="_checkBullet_rzs9h_83",Na="_illustrationBox_rzs9h_88",Da="_illustrationIcon_rzs9h_104",Ha="_illustrationMetric_rzs9h_109",l={servGrid:Sa,serviceBlock:Ca,reverse:Ea,reverseContent:La,servMeta:wa,servBadge:Ia,servTitle:Ba,servDetail:Pa,featureChecks:Ma,checkItem:Oa,checkBullet:qa,illustrationBox:Na,illustrationIcon:Da,illustrationMetric:Ha},X={route:"#/servicos",metadata:{title:"Apex Systems | Serviços",description:"Nossas soluções de computação distribuída, defesa em profundidade de dados corporativos e inteligência preditiva multimodal."},render(){return`
      <!-- HERO -->
      <corp-hero 
        badge="Nossas Soluções"
        title="Engenharia de Software Sob Encomenda Corporativa"
        subtitle="Sustentamos arquiteturas estáveis e blindadas contra perdas operacionais pautadas por eficiência matemática, conformidade e SLAs robustos."
        primary-action-text="Solicitar Orçamento"
        primary-action-href="#/contato"
        secondary-action-text="Ver Vagas Abertas"
        secondary-action-href="#/carreiras">
      </corp-hero>

      <!-- SEÇÃO DETALHADA DE SERVIÇOS -->
      <corp-section>
        <div class="${l.servGrid}">
          
          <!-- SERVIÇO 1 -->
          <div class="${l.serviceBlock}">
            <div class="${l.servMeta}">
              <span class="${l.servBadge}">Missão Crítica</span>
              <h2 class="${l.servTitle}">Arquitetura Distribuída &amp; Nuvem Multiregião</h2>
              <p class="${l.servDetail}">
                Projetamos, refinamos e migramos núcleos transacionais bancários ou portais governamentais sob pânicos de sobrecarga física ou latência intercontinental. Consolidamos topologies ativas-ativas em AWS/GCP com balanceamento dinâmico.
              </p>
              <div class="${l.featureChecks}">
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Redução de Latência em até 40%</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Topologias Ativas-Ativas de Consenso Raft</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Tolerância Armada a Quedas Inteiras de Região</div>
              </div>
            </div>
            <div class="${l.illustrationBox}">
              <div class="${l.illustrationIcon}">⚡</div>
              <div class="${l.illustrationMetric}">99.999% SLA</div>
              <p style="margin: 0; color: #94a3b8; font-size: 13px;">Garantia de Uptime Multiregional</p>
            </div>
          </div>

          <!-- SERVIÇO 2 -->
          <div class="${l.serviceBlock} ${l.reverse}">
            <div class="${l.servMeta} ${l.reverseContent}">
              <span class="${l.servBadge}">Governança &amp; Compliance</span>
              <h2 class="${l.servTitle}">Segurança Defensiva &amp; Zero Trust Architecture</h2>
              <p class="${l.servDetail}">
                Não espere auditorias anuais apontarem lacunas perigosas. Implementamos camadas defensivas dinâmicas que incluem mTLS em microsserviços, rotação física de certificados internos e blindagem de dados sigilosos contra ataques avançados.
              </p>
              <div class="${l.featureChecks}">
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> mTLS Dinâmico em Transações de Microsserviços</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Anonimização em Repouso Conforme LGPD &amp; GDPR</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Simulados Recorrentes de Ataques via Red Team</div>
              </div>
            </div>
            <div class="${l.illustrationBox}" style="background: linear-gradient(135deg, #0f172a 0%, var(--color-secondary) 100%);">
              <div class="${l.illustrationIcon}">🛡️</div>
              <div class="${l.illustrationMetric}">ZERO BREACH</div>
              <p style="margin: 0; color: #94a3b8; font-size: 13px;">Segurança Blindada em Produção</p>
            </div>
          </div>

          <!-- SERVIÇO 3 -->
          <div class="${l.serviceBlock}">
            <div class="${l.servMeta}">
              <span class="${l.servBadge}">Ciência de Dados</span>
              <h2 class="${l.servTitle}">Engenharia de Machine Learning &amp; Grafos</h2>
              <p class="${l.servDetail}">
                Desenvolvemos solucionadores preditivos complexos sob medida. Otimizamos cadeias de suprimentos rodoviárias, marítimas e elétricas estruturando cálculos instantâneos de rotas viárias que poupam custos operacionais em escala industrial.
              </p>
              <div class="${l.featureChecks}">
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Roteamento Preditivo de Redes Logísticas de Energia</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Modelos de Grafos de Alta Densidade Computacional</div>
                <div class="${l.checkItem}"><span class="${l.checkBullet}">✓</span> Redução de Emissão Média de Carbono Ajustada</div>
              </div>
            </div>
            <div class="${l.illustrationBox}" style="background: linear-gradient(135deg, #1e293b 0%, var(--color-accent) 100%);">
              <div class="${l.illustrationIcon}">📊</div>
              <div class="${l.illustrationMetric}">14% OUTCOME</div>
              <p style="margin: 0; color: #94a3b8; font-size: 13px;">Economia Média de Roteamento</p>
            </div>
          </div>
          
        </div>
      </corp-section>

      <!-- SEÇÃO ATENDIMENTO -->
      <corp-section background="muted" title="Pronto para Diagnosticar Desafios Técnicos?" subtitle="Discuta necessidades estruturais diretamente com nossos diretores sêniores de engenharia livre de apresentações comerciais vazias.">
        <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; margin-top: var(--spacing-lg);">
          <corp-button text="Iniciar Atendimento Imediato" variant="secondary" size="lg" href="#/contato"></corp-button>
          <corp-button text="Conhecer Nosso Time" variant="outlined" size="lg" href="#/sobre"></corp-button>
        </div>
      </corp-section>
    `}},za="_layout_1pifg_1",Ra="_shell_1pifg_13",ja="_intro_1pifg_39",Ga="_eyebrow_1pifg_59",Fa="_title_1pifg_85",Va="_subtitle_1pifg_101",Ua="_points_1pifg_117",Wa="_point_1pifg_117",Ya="_pointTitle_1pifg_155",Ja="_pointText_1pifg_169",Ka="_card_1pifg_181",Qa="_cardHeader_1pifg_197",Za="_cardTitle_1pifg_209",Xa="_cardText_1pifg_223",es="_cardBody_1pifg_233",ts="_tabs_1pifg_241",as="_tabBtn_1pifg_255",ss="_active_1pifg_275",os="_alert_1pifg_287",is="_visible_1pifg_305",rs="_alertSuccess_1pifg_313",ns="_alertError_1pifg_325",cs="_form_1pifg_337",ls="_fieldGroup_1pifg_347",ds="_label_1pifg_357",ps="_input_1pifg_369",us="_helper_1pifg_399",ms="_footerActions_1pifg_413",gs="_pill_1pifg_427",n={layout:za,shell:Ra,intro:ja,eyebrow:Ga,title:Fa,subtitle:Va,points:Ua,point:Wa,pointTitle:Ya,pointText:Ja,card:Ka,cardHeader:Qa,cardTitle:Za,cardText:Xa,cardBody:es,tabs:ts,tabBtn:as,active:ss,alert:os,visible:is,alertSuccess:rs,alertError:ns,form:cs,fieldGroup:ls,label:ds,input:ps,helper:us,footerActions:ms,pill:gs},vs="http://127.0.0.1:5000/api";async function I(o,e={}){const t=await fetch(`${vs}${o}`,{...e,headers:{"Content-Type":"application/json",...e.headers||{}}});if(t.status===204)return;const s=(t.headers.get("content-type")||"").includes("application/json")?await t.json().catch(()=>null):null;if(!t.ok){const r=(s==null?void 0:s.message)||`Falha na requisição (${t.status})`;throw new Error(r)}return s}const z="apex_auth_token",R="apex_auth_user",j="apex_auth_redirect";function G(){window.dispatchEvent(new Event("apex-auth-changed"))}class ${static async login(e){const t=await I("/auth/login",{method:"POST",body:JSON.stringify(e)});return this.saveSession(t),G(),t}static async register(e){const t=await I("/auth/register",{method:"POST",body:JSON.stringify(e)});return G(),t}static logout(){localStorage.removeItem(z),localStorage.removeItem(R),G()}static isAuthenticated(){return!!this.getToken()}static getToken(){return localStorage.getItem(z)}static getUser(){const e=localStorage.getItem(R);if(!e)return null;try{return JSON.parse(e)}catch{return null}}static getAuthHeaders(){const e=this.getToken();return e?{Authorization:`Bearer ${e}`}:{}}static setRedirectPath(e){localStorage.setItem(j,e)}static consumeRedirectPath(){const e=localStorage.getItem(j);return e?(localStorage.removeItem(j),e):null}static saveSession(e){localStorage.setItem(z,e.token),localStorage.setItem(R,JSON.stringify(e.user))}}function D(o){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o.trim())}function x(o){return o.trim().length>0}function w(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}class hs extends HTMLElement{constructor(){super(...arguments),this.mode="login"}connectedCallback(){this.render()}setMode(e){this.mode=e,this.render()}showAlert(e,t){const a=this.querySelector("#auth-alert");a&&(a.textContent=e,a.className=`${n.alert} ${n.visible} ${t==="success"?n.alertSuccess:n.alertError}`)}bindEvents(){const e=this.querySelector("#login-tab"),t=this.querySelector("#register-tab"),a=this.querySelector("#login-form"),s=this.querySelector("#register-form"),r=this.querySelector("#back-to-blog");e&&e.addEventListener("click",()=>this.setMode("login")),t&&t.addEventListener("click",()=>this.setMode("register")),r&&r.addEventListener("click",()=>{window.location.hash="#/blog"}),a&&a.addEventListener("submit",async c=>{c.preventDefault();const m=a.querySelector("#login-email"),v=a.querySelector("#login-password"),b=(m==null?void 0:m.value.trim())||"",h=(v==null?void 0:v.value)||"";if(!D(b)||!x(h)){this.showAlert("Preencha um e-mail válido e uma senha.","error");return}try{await $.login({email:b,password:h}),this.showAlert("Autenticação concluída. Redirecionando para o blog...","success"),window.location.hash=$.consumeRedirectPath()||"#/blog"}catch(f){this.showAlert(f instanceof Error?f.message:"Falha ao autenticar.","error")}}),s&&s.addEventListener("submit",async c=>{c.preventDefault();const m=s.querySelector("#register-name"),v=s.querySelector("#register-email"),b=s.querySelector("#register-password"),h=(m==null?void 0:m.value.trim())||"",f=(v==null?void 0:v.value.trim())||"",S=(b==null?void 0:b.value)||"";if(!x(h)||!D(f)||!x(S)){this.showAlert("Informe nome, e-mail válido e senha para criar o acesso.","error");return}try{await $.register({name:h,email:f,password:S}),await $.login({email:f,password:S}),this.showAlert("Acesso criado e autenticado com sucesso. Redirecionando...","success"),window.location.hash=$.consumeRedirectPath()||"#/blog"}catch(A){this.showAlert(A instanceof Error?A.message:"Falha ao criar acesso.","error")}})}render(){const e=$.isAuthenticated();this.innerHTML=`
      <corp-section background="muted">
        <div class="${n.layout}">
          <div class="${n.shell}">
            <section class="${n.intro}">
              <span class="${n.eyebrow}">Acesso Restrito</span>
              <h1 class="${n.title}">Entrada segura para a área editorial do blog</h1>
              <p class="${n.subtitle}">
                O cadastro e a publicação de artigos usam o backend Fastify + Prisma conectado ao PostgreSQL local.
                Somente usuários autenticados conseguem publicar ou remover conteúdo.
              </p>

              <div class="${n.points}">
                <article class="${n.point}">
                  <span class="${n.pointTitle}">Autenticação JWT</span>
                  <span class="${n.pointText}">A sessão é validada no backend e reaproveitada pelo editor do blog.</span>
                </article>
                <article class="${n.point}">
                  <span class="${n.pointTitle}">Postagem integrada</span>
                  <span class="${n.pointText}">Os posts são gravados diretamente no PostgreSQL local via Prisma.</span>
                </article>
              </div>

              <div class="${n.footerActions}">
                <button id="back-to-blog" class="${n.pill}" type="button">Voltar para o Blog</button>
                ${e?`<span class="${n.pill}">Você já está autenticado</span>`:""}
              </div>
            </section>

            <section class="${n.card}">
              <div class="${n.cardHeader}">
                <h2 class="${n.cardTitle}">Acessar ou criar conta de desenvolvimento</h2>
                <p class="${n.cardText}">Use sua conta para habilitar o editor do blog. Se ainda não existir, crie o acesso aqui mesmo.</p>
              </div>

              <div class="${n.cardBody}">
                <div class="${n.tabs}">
                  <button id="login-tab" class="${n.tabBtn} ${this.mode==="login"?n.active:""}" type="button">Entrar</button>
                  <button id="register-tab" class="${n.tabBtn} ${this.mode==="register"?n.active:""}" type="button">Criar acesso</button>
                </div>

                <div id="auth-alert" class="${n.alert}"></div>

                <form id="login-form" class="${n.form}" style="display: ${this.mode==="login"?"grid":"none"};">
                  <div class="${n.fieldGroup}">
                    <label class="${n.label}" for="login-email">E-mail</label>
                    <input class="${n.input}" id="login-email" name="email" type="email" placeholder="voce@empresa.com" required>
                  </div>

                  <div class="${n.fieldGroup}">
                    <label class="${n.label}" for="login-password">Senha</label>
                    <input class="${n.input}" id="login-password" name="password" type="password" placeholder="Sua senha" required>
                  </div>

                  <button class="${n.tabBtn} ${n.active}" type="submit">Entrar no Blog</button>
                </form>

                <form id="register-form" class="${n.form}" style="display: ${this.mode==="register"?"grid":"none"};">
                  <div class="${n.fieldGroup}">
                    <label class="${n.label}" for="register-name">Nome</label>
                    <input class="${n.input}" id="register-name" name="name" type="text" placeholder="Seu nome" required>
                  </div>

                  <div class="${n.fieldGroup}">
                    <label class="${n.label}" for="register-email">E-mail</label>
                    <input class="${n.input}" id="register-email" name="email" type="email" placeholder="voce@empresa.com" required>
                  </div>

                  <div class="${n.fieldGroup}">
                    <label class="${n.label}" for="register-password">Senha</label>
                    <input class="${n.input}" id="register-password" name="password" type="password" placeholder="Crie uma senha" required>
                  </div>

                  <button class="${n.tabBtn} ${n.active}" type="submit">Criar e Entrar</button>
                </form>

                <p class="${n.helper}">
                  O backend já está configurado para aceitar login, registro e proteção por token no editor do blog.
                </p>
              </div>
            </section>
          </div>
        </div>
      </corp-section>
    `,this.bindEvents()}}customElements.get("page-login")||customElements.define("page-login",hs);const O="apex_corp_blog_posts",F="apex_corp_career_positions",K="apex_corp_contact_submissions",V=[{id:"1",slug:"arquitetura-distribuida-alta-disponibilidade",title:"Arquitetura de Sistemas Distribuídos para Tolerância a Falhas",excerpt:"Como desenhamos topologias multiregionais de nuvem para sustentar SLAs de 99.999% em operações financeiras internacionais.",content:`A escalabilidade horizontal de sistemas transacionais é um dos maiores desafios em bancos modernos. 

Neste artigo, destrinchamos as estratégias adotadas no Apex Systems para garantir tolerância a falhas massivas, contemplando:

### 1. Consistência Eventual e Teorema CAP
Para mitigação de latência interestadual, operamos de forma ativa-ativa em três datacenters simultâneos usando bases de dados de consenso Raft. Sacrificamos a consistência absoluta instantânea em prol de alta disponibilidade em leituras críticas.

### 2. Padrão Circuit Breaker
Utilizamos resiliência no lado do cliente com retentativas inteligentes e algoritmos de recuo exponencial. Quando um parceiro externo expira consecutivamente por mais de 500ms, o disjuntor abre, reduzindo sobrecarga.

### 3. Conclusão
Arquitetura robusta não é sobre evitar falhas, mas desenhar sistemas capazes de se regenerar sem interrupção de serviço.`,author:"Eng. Marcus Vance - Principal Architect",date:"2026-05-15",category:"Engenharia de Software",readTime:"6 min"},{id:"2",slug:"governanca-seguranca-dados-corporativos",title:"Segurança Defensiva e Governança de Dados Corporativos",excerpt:"Um guia prático sobre estratégias de criptografia ponta a ponta, auditorias automatizadas e conformidade com a LGPD e GDPR.",content:`À medida que as ameaças de segurança digital escalam, corporações precisam ir além do perímetro tradicional do firewall.

### 1. Zero Trust Architecture (ZTA)
Na Apex, todos os acessos de microsserviços passam por autenticação mutua de transport layer security (mTLS) com rotação automatizada de certificados a cada 24 horas.

### 2. Criptografia em Repouso e em Trânsito
Tabelas relacionais são criptografadas via chaves gerenciadas por módulos HSM físicos. A extração de dados brutos sem anonimização é estritamente restrita por regras dinâmicas de filtragem.

### 3. Treinamento e Auditoria Geral
A segurança começa pelo treinamento de pessoas e validação rotineira através de equipes ofensivas de Red Team que simulam intromissões no ambiente produtivo de forma recorrente.`,author:"Clara Mendez - Chief Security Officer",date:"2026-05-28",category:"Segurança da Informação",readTime:"8 min"},{id:"3",slug:"inteligencia-artificial-otimizacao-logistica",title:"Engenharia de Machine Learning na Otimização Multimodal",excerpt:"Explorando modelos preditivos de grafos para roteirização e redução de faturamento e perdas em empresas globais de energia.",content:`O transporte e distribuição de recursos energéticos enfrenta picos voláteis de consumo e instabilidades meteorológicas.

### 1. Análise Preditiva em Tempo Real
Nossos modelos preditivos analisam mais de 2 milhões de vértices de grafos rodoviários e marítimos por segundo para calcular as rotas que consomem menos combustível fóssil.

### 2. Sustentabilidade Estrutural
Ao aplicar machine learning avançado nas empresas de energia de nossa carteira, reduzimos em até 14% as emissões médias de dióxido de carbono apenas ajustando o agendamento de frotas e fluxos de estocagem.

### 3. Próximos Passos
Estamos estendendo nossos solucionadores de grafos para arquiteturas neuromórficas de computação para quebras de recordes de processamento energético ainda em 2026.`,author:"Dr. Arthur Sterling - Head of AI",date:"2026-05-31",category:"Inteligência Artificial",readTime:"5 min"}],U=[{id:"c1",title:"Senior Site Reliability Engineer (SRE)",department:"Operações e Infraestrutura",location:"São Paulo, SP",type:"Hybrid",description:"Buscamos um profissional especialista em Kubernetes de larga escala, automações com Terraform e orquestração ativa-ativa para sustentar nossos sistemas financeiros corporativos.",requirements:["Mínimo de 5 anos atuando com plataformas GCP ou AWS de altíssima escala","Profundos conhecimentos em Terraform, Helm e esteiras CI/CD Gitlab/Github Actions","Familiaridade com observabilidade integrada via Prometheus, Grafana e OpenTelemetry"]},{id:"c2",title:"Lead Software Architect - TypeScript & Node",department:"Core Engineering",location:"Remote",type:"Remote",description:"Liderar a definição técnica de padrões de modelagem de código corporativos, transicionando arquiteturas legadas para soluções eficientes fundamentadas em eventos.",requirements:["Experiência consolidada em designs de microsserviços escaláveis em TypeScript / Node","Sólidos conhecimentos em design patterns DDD, CQRS e arquitetura limpa (Clean Architecture)","Excelente comunicação para mentorar desenvolvedores plenos e juniores"]}];class W{static getBlogPosts(){const e=localStorage.getItem(O);if(!e)return localStorage.setItem(O,JSON.stringify(V)),[...V];try{return JSON.parse(e)}catch{return[...V]}}static getBlogPostBySlug(e){return this.getBlogPosts().find(a=>a.slug===e)}static addBlogPost(e){const t=this.getBlogPosts(),a=e.title.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g,"").replace(/[\s_]+/g,"-").replace(/-+/g,"-"),s={...e,id:Date.now().toString(),slug:a,date:new Date().toISOString().split("T")[0]};return t.unshift(s),localStorage.setItem(O,JSON.stringify(t)),s}static deleteBlogPost(e){const a=this.getBlogPosts().filter(s=>s.id!==e);localStorage.setItem(O,JSON.stringify(a))}static getCareers(){const e=localStorage.getItem(F);if(!e)return localStorage.setItem(F,JSON.stringify(U)),[...U];try{return JSON.parse(e)}catch{return[...U]}}static addCareer(e){const t=this.getCareers();t.push(e),localStorage.setItem(F,JSON.stringify(t))}static saveContactSubmission(e){const t=this.getContactSubmissions(),a={...e,id:Date.now().toString(),date:new Date().toISOString()};t.push(a),localStorage.setItem(K,JSON.stringify(t))}static getContactSubmissions(){const e=localStorage.getItem(K);if(!e)return[];try{return JSON.parse(e)}catch{return[]}}}function H(o){try{const e=new Date(o);return new Date(e.getTime()+e.getTimezoneOffset()*6e4).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}catch{return o}}const bs="_contactLayout_d662e_5",_s="_formBox_d662e_17",fs="_fieldGroup_d662e_25",$s="_label_d662e_32",ys="_input_d662e_38",xs="_textarea_d662e_38",ks="_infoBox_d662e_60",As="_infoCard_d662e_66",Ts="_infoIcon_d662e_76",Ss="_infoDetails_d662e_81",Cs="_infoTitle_d662e_86",Es="_infoText_d662e_93",Ls="_ticketsBox_d662e_101",ws="_ticket_d662e_101",Is="_ticketHeader_d662e_119",Bs="_ticketUser_d662e_128",Ps="_ticketDate_d662e_134",Ms="_ticketSubject_d662e_139",Os="_ticketMsg_d662e_145",d={contactLayout:bs,formBox:_s,fieldGroup:fs,label:$s,input:ys,textarea:xs,infoBox:ks,infoCard:As,infoIcon:Ts,infoDetails:Ss,infoTitle:Cs,infoText:Es,ticketsBox:Ls,ticket:ws,ticketHeader:Is,ticketUser:Bs,ticketDate:Ps,ticketSubject:Ms,ticketMsg:Os};class qs extends HTMLElement{connectedCallback(){this.render(),this.bindFormEvents()}bindFormEvents(){const e=this.querySelector("form");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=e.querySelector("#name"),s=e.querySelector("#email"),r=e.querySelector("#subject"),c=e.querySelector("#message"),m=e.querySelector("#alert-box");if(!a||!s||!r||!c)return;const v=a.value.trim(),b=s.value.trim(),h=r.value.trim(),f=c.value.trim();if(!x(v)||!x(b)||!x(h)||!x(f)){this.showAlert(m,"Por favor, preencha todos os campos obrigatórios.","error");return}if(!D(b)){this.showAlert(m,"E-mail informado é inválido.","error");return}W.saveContactSubmission({name:w(v),email:w(b),subject:w(h),message:w(f)}),this.showAlert(m,"Sua mensagem foi enviada ao time de plantão e registrada com sucesso abaixo!","success"),e.reset(),this.renderSubmissions()})}showAlert(e,t,a){e.textContent=t,e.setAttribute("style",`
      display: block;
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--color-${a});
      background-color: var(--color-${a}-bg);
      border: 1px solid var(--color-${a}-border);
    `)}renderSubmissions(){const e=this.querySelector("#submissions-list");if(!e)return;const t=W.getContactSubmissions();if(t.length===0){e.innerHTML=`
        <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); text-align: center; margin: var(--spacing-lg) 0;">
          Nenhum atendimento em andamento no momento.
        </p>
      `;return}const a=t.slice().reverse().map(s=>`
        <div class="${d.ticket}">
          <div class="${d.ticketHeader}">
            <span class="${d.ticketUser}">${s.name} &lt;${s.email}&gt;</span>
            <span class="${d.ticketDate}">${H(s.date)}</span>
          </div>
          <div class="${d.ticketSubject}">Assunto: ${s.subject}</div>
          <p class="${d.ticketMsg}">${s.message}</p>
        </div>
      `).join("");e.innerHTML=a}render(){this.innerHTML=`
      <!-- HERO INTERNO -->
      <corp-hero 
        badge="Atendimento &amp; Suporte"
        title="Canal de Comunicação com Especialistas"
        subtitle="Agende chamadas ou envie desafios operacionais para debate técnico completo com garantia de governança."
        primary-action-text="Falar por E-mail"
        primary-action-href="mailto:${L.contactEmail}">
      </corp-hero>

      <!-- LAYOUT FORMULÁRIO + INFO -->
      <corp-section>
        <div class="${d.contactLayout}">
          
          <!-- COLUNA FORMULÁRIO -->
          <div class="${d.formBox}">
            <h2 class="h3 mb-md" style="color: var(--color-primary);">Enviar Mensagem de Atendimento</h2>
            
            <form novalidate>
              <div id="alert-box" style="display: none;"></div>

              <div class="${d.fieldGroup}">
                <label for="name" class="${d.label}">Nome Completo *</label>
                <input type="text" id="name" name="name" class="${d.input}" placeholder="Ex: Engenheiro Marcos Vance" required>
              </div>

              <div class="${d.fieldGroup}">
                <label for="email" class="${d.label}">E-mail Corporativo *</label>
                <input type="email" id="email" name="email" class="${d.input}" placeholder="Ex: mvance@empresa.com" required>
              </div>

              <div class="${d.fieldGroup}">
                <label for="subject" class="${d.label}">Assunto Principal *</label>
                <input type="text" id="subject" name="subject" class="${d.input}" placeholder="Ex: Auditoria zero-trust ou SLA de Banco" required>
              </div>

              <div class="${d.fieldGroup}">
                <label for="message" class="${d.label}">Descreva o Desafio Técnico *</label>
                <textarea id="message" name="message" class="${d.textarea}" placeholder="Descreva os gargalos transacionais ou metas com o máximo de métricas..." required></textarea>
              </div>

              <div style="margin-top: var(--spacing-lg);">
                <corp-button text="Enviar Chamado" variant="secondary" size="lg" type="submit"></corp-button>
              </div>
            </form>
          </div>

          <!-- COLUNA INFO -->
          <div class="${d.infoBox}">
            <h2 class="h3 mb-md" style="color: var(--color-primary);">Informações Directas</h2>
            
            <div class="${d.infoCard}">
              <div class="${d.infoIcon}">✉</div>
              <div class="${d.infoDetails}">
                <span class="${d.infoTitle}">Endereço de E-mail</span>
                <span class="${d.infoText}">${L.contactEmail}</span>
              </div>
            </div>

            <div class="${d.infoCard}">
              <div class="${d.infoIcon}">☏</div>
              <div class="${d.infoDetails}">
                <span class="${d.infoTitle}">Telefone Escritório</span>
                <span class="${d.infoText}">${L.contactPhone}</span>
              </div>
            </div>

            <div class="${d.infoCard}">
              <div class="${d.infoIcon}">📍</div>
              <div class="${d.infoDetails}">
                <span class="${d.infoTitle}">Sede Física</span>
                <span class="${d.infoText}">${L.address}</span>
                <span class="${d.infoText}">${L.city}, ${L.state} - ${L.country}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SEÇÃO CHAMADOS REGISTRADOS (LOCAL PERSISTENCE DE "MEUS DADOS") -->
        <div class="${d.ticketsBox}">
          <h3 class="h3 mb-sm">Chamados em Andamento (${L.name})</h3>
          <p class="subtitle mb-lg">Abaixo constam as comunicações locais registradas na sua sessão ativa para auditoria em tempo real.</p>
          <div id="submissions-list"></div>
        </div>
      </corp-section>
    `,this.renderSubmissions()}}customElements.get("page-contact")||customElements.define("page-contact",qs);const Ns="_careersList_1bae9_5",Ds="_jobCard_1bae9_11",Hs="_jobHeader_1bae9_24",zs="_titleArea_1bae9_41",Rs="_jobTitle_1bae9_46",js="_jobMeta_1bae9_53",Gs="_jobMetaItem_1bae9_60",Fs="_jobTags_1bae9_66",Vs="_tag_1bae9_78",Us="_tagDept_1bae9_85",Ws="_tagType_1bae9_91",Ys="_jobDesc_1bae9_97",Js="_reqBlock_1bae9_104",Ks="_reqTitle_1bae9_108",Qs="_reqList_1bae9_117",Zs="_reqItem_1bae9_123",Xs="_reqBullet_1bae9_131",eo="_appPanel_1bae9_137",to="_open_1bae9_146",ao="_cultureGrid_1bae9_163",so="_cultureCard_1bae9_176",oo="_submitBtn_1bae9_184",g={careersList:Ns,jobCard:Ds,jobHeader:Hs,titleArea:zs,jobTitle:Rs,jobMeta:js,jobMetaItem:Gs,jobTags:Fs,tag:Vs,tagDept:Us,tagType:Ws,jobDesc:Ys,reqBlock:Js,reqTitle:Ks,reqList:Qs,reqItem:Zs,reqBullet:Xs,appPanel:eo,open:to,cultureGrid:ao,cultureCard:so,submitBtn:oo};class io extends HTMLElement{connectedCallback(){this.render(),this.bindJobInteractions()}bindJobInteractions(){this.querySelectorAll('[data-action="toggle-form"]').forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-job-id");if(!s)return;const r=this.querySelector(`#app-panel-${s}`);if(!r)return;r.classList.contains(g.open)?(r.classList.remove(g.open),a.text="Candidatar-se à Vaga"):(r.classList.add(g.open),a.text="Ocultar Formulário")})}),this.querySelectorAll("form").forEach(a=>{a.addEventListener("submit",s=>{s.preventDefault();const r=a.getAttribute("data-job-id"),c=a.querySelector(".form-alert"),m=a.querySelector("#name"),v=a.querySelector("#email"),b=a.querySelector("#portfolio");if(!r||!c||!m||!v||!b)return;const h=m.value.trim(),f=v.value.trim(),S=b.value.trim();if(!x(h)||!x(f)||!x(S)){this.showAlert(c,"Por favor, preencha todos os campos obrigatórios.","error");return}if(!D(f)){this.showAlert(c,"E-mail corporativo inválido.","error");return}this.showAlert(c,`Candidatura enviada com sucesso! Código do ticket: APX-RECRUIT-${Math.random().toString(36).substring(3,8).toUpperCase()}`,"success"),a.reset(),m.disabled=!0,v.disabled=!0,b.disabled=!0;const A=a.querySelector('button[type="submit"]');A&&A.setAttribute("disabled","true")})})}showAlert(e,t,a){e.textContent=t,e.setAttribute("style",`
      display: block;
      padding: var(--spacing-sm) var(--spacing-md);
      margin-bottom: var(--spacing-md);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--color-${a});
      background-color: var(--color-${a}-bg);
      border: 1px solid var(--color-${a}-border);
    `)}render(){const t=W.getCareers().map(a=>{const s=a.requirements.map(r=>`
            <li class="${g.reqItem}">
              <span class="${g.reqBullet}">▪</span>
              <span>${r}</span>
            </li>
          `).join("");return`
          <div class="${g.jobCard}">
            <!-- CABEÇALHO DA VAGA -->
            <div class="${g.jobHeader}">
              <div class="${g.titleArea}">
                <h3 class="${g.jobTitle}">${a.title}</h3>
                <div class="${g.jobMeta}">
                  <span class="${g.jobMetaItem}">💼 ${a.department}</span>
                  <span class="${g.jobMetaItem}">📍 ${a.location}</span>
                </div>
              </div>
              <div class="${g.jobTags}">
                <span class="${g.tag} ${g.tagDept}">${a.department}</span>
                <span class="${g.tag} ${g.tagType}">${a.type}</span>
              </div>
            </div>

            <!-- DESCRIÇÃO -->
            <p class="${g.jobDesc}">${a.description}</p>

            <!-- REQUISITOS -->
            <div class="${g.reqBlock}">
              <h4 class="${g.reqTitle}">Requisitos Desejáveis</h4>
              <ul class="${g.reqList}">
                ${s}
              </ul>
            </div>

            <!-- BOTÃO DETALHES -->
            <div>
              <corp-button text="Candidatar-se à Vaga" variant="outlined" size="md" data-action="toggle-form" data-job-id="${a.id}"></corp-button>
            </div>

            <!-- FORMULÁRIO DE CANDIDATURA INLINE -->
            <div id="app-panel-${a.id}" class="${g.appPanel}">
              <h4 style="color: var(--color-primary); font-size: var(--font-size-md); font-weight: bold; margin-bottom: var(--spacing-sm);">Enviar Ficha de Candidato</h4>
              
              <form novalidate data-job-id="${a.id}">
                <div class="form-alert" style="display: none;"></div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); margin-bottom: var(--spacing-sm);">
                  <div style="display: flex; flex-direction: column; gap: var(--spacing-xxs);">
                    <label style="font-size: var(--font-size-xs); font-weight: 600;">Nome Completo *</label>
                    <input type="text" id="name" style="background: var(--color-surface); color: var(--color-text-primary); border: 1px solid var(--color-border); padding: var(--spacing-xs); border-radius: var(--radius-sm); font-size: var(--font-size-sm);" placeholder="Ex: Ana Silva" required>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: var(--spacing-xxs);">
                    <label style="font-size: var(--font-size-xs); font-weight: 600;">E-mail *</label>
                    <input type="email" id="email" style="background: var(--color-surface); color: var(--color-text-primary); border: 1px solid var(--color-border); padding: var(--spacing-xs); border-radius: var(--radius-sm); font-size: var(--font-size-sm);" placeholder="Ex: anasilva@gmail.com" required>
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--spacing-xxs); margin-bottom: var(--spacing-md);">
                  <label style="font-size: var(--font-size-xs); font-weight: 600;">Link do Portfólio / LinkedIn/ GitHub *</label>
                  <input type="url" id="portfolio" style="background: var(--color-surface); color: var(--color-text-primary); border: 1px solid var(--color-border); padding: var(--spacing-xs); border-radius: var(--radius-sm); font-size: var(--font-size-sm);" placeholder="Ex: https://github.com/usuario" required>
                </div>

                <button type="submit" class="${g.submitBtn}">
                  Confirmar Envio da Ficha
                </button>
              </form>
            </div>
          </div>
        `}).join("");this.innerHTML=`
      <!-- HERO -->
      <corp-hero 
        badge="Carreiras na Apex"
        title="Construa Sistemas de Missão Crítica de Verdade"
        subtitle="Agimos sob a filosofia SemVer Engineering: zero any discriminado, alta robustez, arquiteturas limpas e testes robustos em produção."
        primary-action-text="Ver Vagas de Engenharia"
        primary-action-href="#vagas-abertas"
        secondary-action-text="Falar no Atendimento"
        secondary-action-href="#/contato">
      </corp-hero>

      <!-- SEÇÃO RAZÕES CULTURAIS -->
      <corp-section 
        title="Nossa Cultura Operacional"
        subtitle="Unimos autonomia total de squad, evolução contínua, governança técnica madura e aprendizado empírico contínuo."
        background="muted"
        alignment="center">
        
        <div class="${g.cultureGrid}">
          <div class="${g.cultureCard}">
            <h4 style="font-size: var(--font-size-lg); font-weight: bold; color: var(--color-primary); margin-bottom: var(--spacing-sm);">💻 Engenharia Sem Legados Fáceis</h4>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); line-height: var(--line-height-relaxed); margin: 0;">
              Nos defendemos ativamente contra a introdução de frameworks sob hype momentâneo ou dependências externas pesadas que geram quebras súbitas. Damos preferência a TypeScript estrito e APIs nativas e eficientes.
            </p>
          </div>

          <div class="${g.cultureCard}">
            <h4 style="font-size: var(--font-size-lg); font-weight: bold; color: var(--color-primary); margin-bottom: var(--spacing-sm);">📈 Desempenho Escalonado de Alta Performance</h4>
            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); line-height: var(--line-height-relaxed); margin: 0;">
              Aprenda de perto com engenheiros graduados em operações transacionais de Nova York e líderes responsáveis pela otimização de matrizes logísticas mundiais em produção diária ativa.
            </p>
          </div>
        </div>
      </corp-section>

      <!-- SEÇÃO VAGAS -->
      <div id="vagas-abertas">
        <corp-section 
          title="Trabalhe Conosco - Vagas Abertas" 
          subtitle="Selecione abaixo a posição que desafia o seu nível técnico e envie sua ficha para triagem imediata."
          background="default">
          <div class="${g.careersList}">
            ${t}
          </div>
        </corp-section>
      </div>
    `}}customElements.get("page-careers")||customElements.define("page-careers",io);function q(o){return{id:o.id,slug:o.slug,title:o.title,excerpt:o.excerpt,content:o.content,author:o.author,date:o.date,category:o.category,readTime:o.readTime}}class B{static async listPosts(){return(await I("/blog")).map(q)}static async getPost(e){const t=await I(`/blog/${encodeURIComponent(e)}`);return q(t)}static async createPost(e){const t=await I("/blog",{method:"POST",headers:$.getAuthHeaders(),body:JSON.stringify(e)});return q(t)}static async updatePost(e,t){const a=await I(`/blog/${encodeURIComponent(e)}`,{method:"PUT",headers:$.getAuthHeaders(),body:JSON.stringify(t)});return q(a)}static async deletePost(e){await I(`/blog/${encodeURIComponent(e)}`,{method:"DELETE",headers:$.getAuthHeaders()})}}const ro="_blogGrid_1sjii_5",no="_postCard_1sjii_24",co="_postHeader_1sjii_42",lo="_categoryTag_1sjii_49",po="_readTime_1sjii_58",uo="_postTitle_1sjii_63",mo="_postExcerpt_1sjii_71",go="_postFooter_1sjii_79",vo="_authorMeta_1sjii_88",ho="_authorName_1sjii_93",bo="_postDate_1sjii_99",_o="_readLink_1sjii_104",fo="_singlePostWrapper_1sjii_111",$o="_backBtn_1sjii_118",yo="_singleCategory_1sjii_133",xo="_singleTitle_1sjii_142",ko="_singleMeta_1sjii_151",Ao="_singleBody_1sjii_161",To="_editorPanel_1sjii_177",So="_open_1sjii_187",Co="_slideDown_1sjii_1",Eo="_fieldGroup_1sjii_192",Lo="_label_1sjii_199",wo="_input_1sjii_205",Io="_textarea_1sjii_205",Bo="_select_1sjii_205",Po="_toggleBtn_1sjii_225",Mo="_toggleBtnSecondary_1sjii_242",Oo="_toolbar_1sjii_252",qo="_toolbarActions_1sjii_260",No="_lockBox_1sjii_266",Do="_lockTitle_1sjii_273",Ho="_lockText_1sjii_279",zo="_statusBox_1sjii_285",Ro="_statusStrong_1sjii_293",jo="_emptyState_1sjii_298",Go="_emptyTitle_1sjii_308",Fo="_editorHeader_1sjii_314",Vo="_editorMeta_1sjii_323",Uo="_editorHint_1sjii_328",Wo="_submitBtn_1sjii_335",i={blogGrid:ro,postCard:no,postHeader:co,categoryTag:lo,readTime:po,postTitle:uo,postExcerpt:mo,postFooter:go,authorMeta:vo,authorName:ho,postDate:bo,readLink:_o,singlePostWrapper:fo,backBtn:$o,singleCategory:yo,singleTitle:xo,singleMeta:ko,singleBody:Ao,editorPanel:To,open:So,slideDown:Co,fieldGroup:Eo,label:Lo,input:wo,textarea:Io,select:Bo,toggleBtn:Po,toggleBtnSecondary:Mo,toolbar:Oo,toolbarActions:qo,lockBox:No,lockTitle:Do,lockText:Ho,statusBox:zo,statusStrong:Ro,emptyState:jo,emptyTitle:Go,editorHeader:Fo,editorMeta:Vo,editorHint:Uo,submitBtn:Wo};class Yo extends HTMLElement{static get observedAttributes(){return["slug"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}render(){const e=this.getAttribute("slug");e?this.renderSinglePost(e):this.renderListing()}async renderListing(){this.innerHTML=`
      <corp-hero 
        badge="Artigos &amp; Insights"
        title="Papéis Técnicos e Práticas de Engenharia"
        subtitle="Nosso canal para publicação de reflexões, resiliência de microsserviços, SLAs transacionais e taticas defensivas cibernéticas."
        primary-action-text="Ver Publicações"
        primary-action-href="#/posts-publicos">
      </corp-hero>

      <div id="posts-publicos" class="container" style="margin-top: var(--spacing-xxl);">
        <div class="${i.toolbar}" style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-md); margin-bottom: var(--spacing-lg);">
          <h2 class="h2">Publicações Técnicas</h2>
          <div class="${i.toolbarActions}">
            <button id="editor-link-btn" class="${i.toggleBtn}" type="button">Acessar Editor Privado</button>
          </div>
        </div>
      </div>

      <corp-section background="default">
        <div id="posts-grid" class="${i.blogGrid}">
          <div class="${i.emptyState}">
            <h3 class="${i.emptyTitle}">Carregando publicações...</h3>
            <p>O conteúdo do blog está sendo carregado do backend local.</p>
          </div>
        </div>
      </corp-section>
    `;const e=this.querySelector("#editor-link-btn");e==null||e.addEventListener("click",()=>{if($.isAuthenticated()){window.location.hash="#/blog/editor";return}$.setRedirectPath("#/blog/editor"),window.location.hash="#/login"});const t=this.querySelector("#posts-grid");if(t)try{const a=await B.listPosts();if(a.length===0){t.innerHTML=`
          <div class="${i.emptyState}">
            <h3 class="${i.emptyTitle}">Nenhuma publicação cadastrada</h3>
            <p>Use o formulário acima, após entrar, para gravar o primeiro post no banco de dados.</p>
          </div>
        `;return}if(t.innerHTML=a.map(s=>`
          <article class="${i.postCard}">
            <div>
              <div class="${i.postHeader}">
                <span class="${i.categoryTag}">${s.category}</span>
                <span class="${i.readTime}">${s.readTime}</span>
              </div>
              <h3 class="${i.postTitle}">${s.title}</h3>
              <p class="${i.postExcerpt}">${s.excerpt}</p>
            </div>
            
            <div class="${i.postFooter}">
              <div class="${i.authorMeta}">
                <span class="${i.authorName}">${s.author}</span>
                <span class="${i.postDate}">${H(s.date)}</span>
              </div>
              <a href="#/blog/${s.slug}" class="${i.readLink}">Ler Completo →</a>
            </div>
          </article>
        `).join(""),window.location.hash==="#/posts-publicos"||window.location.hash==="#posts-publicos"){const s=this.querySelector("#posts-publicos");s==null||s.scrollIntoView({behavior:"smooth",block:"start"})}}catch(a){const s=a instanceof Error?a.message:"Falha ao carregar as publicações.";t.innerHTML=`
        <div class="${i.emptyState}">
          <h3 class="${i.emptyTitle}">Erro ao carregar publicações</h3>
          <p>${s}</p>
        </div>
      `}}async renderSinglePost(e){this.innerHTML=`
      <corp-section background="muted">
        <div class="container ${i.singlePostWrapper}" style="padding-top: var(--spacing-xxl);">
          <p class="${i.editorMeta}">Carregando artigo...</p>
        </div>
      </corp-section>
    `;try{const t=await B.getPost(e),a=t.content.split(`

`).map(s=>s.startsWith("### ")?`<h3 class="h3" style="color: var(--color-primary); margin: var(--spacing-lg) 0 var(--spacing-sm);font-weight: 600;">${s.replace("### ","")}</h3>`:`<p style="margin-bottom: var(--spacing-md); line-height: var(--line-height-relaxed); color: var(--color-text-secondary);">${s}</p>`).join("");this.innerHTML=`
        <corp-section background="muted">
        <div class="container ${i.singlePostWrapper}">
          <a href="#/blog" class="${i.backBtn}">
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m11 5-7 7 7 7"/></svg>
            Voltar para Todos os Artigos
          </a>

          <!-- METADADOS -->
          <div class="${i.singleCategory}">${t.category}</div>
          <h1 class="${i.singleTitle}">${t.title}</h1>
          
          <div class="${i.singleMeta}">
            <span>Por <strong>${t.author}</strong></span>
            <span>▪</span>
            <span>Publicado em ${H(t.date)}</span>
            <span>▪</span>
            <span>⚡ ${t.readTime}</span>
          </div>

          <!-- CORPO INTEG -->
          <article class="${i.singleBody}">
            ${a}
          </article>
          
        </div>
      </corp-section>
    `;return}catch(t){this.innerHTML=`
        <div class="container ${i.singlePostWrapper}" style="text-align: center; padding: 100px 0;">
          <h2 class="h1">Papel Técnico Não Localizado</h2>
          <p class="subtitle">${t instanceof Error?t.message:"O artigo procurado pode ter sido removido ou modificado."}</p>
          <a href="#/blog" class="${i.backBtn}">← Voltar para Todos os Artigos</a>
        </div>
      `}}}customElements.get("page-blog")||customElements.define("page-blog",Yo);class Jo extends HTMLElement{constructor(){super(...arguments),this.boundAuthChange=this.handleAuthChange.bind(this),this.editorMode="create",this.editingPostId=null}connectedCallback(){if(window.addEventListener("apex-auth-changed",this.boundAuthChange),!$.isAuthenticated()){$.setRedirectPath("#/blog/editor"),window.location.hash="#/login";return}this.render()}disconnectedCallback(){window.removeEventListener("apex-auth-changed",this.boundAuthChange)}handleAuthChange(){if(!$.isAuthenticated()){$.setRedirectPath("#/blog/editor"),window.location.hash="#/login";return}this.render()}getFormPayload(e){const t=e.querySelector("#title"),a=e.querySelector("#excerpt"),s=e.querySelector("#author"),r=e.querySelector("#category"),c=e.querySelector("#readTime"),m=e.querySelector("#content");if(!t||!a||!s||!r||!c||!m)return null;const v=t.value.trim(),b=a.value.trim(),h=s.value.trim(),f=r.value,S=c.value.trim()||"5",A=m.value.trim();return!x(v)||!x(b)||!x(h)||!x(A)?null:{title:w(v),excerpt:w(b),content:w(A),author:w(h),category:f,readTime:`${S} min`}}setAlert(e,t){const a=this.querySelector("#editor-alert");a&&(a.textContent=e,a.className=`${i.statusBox}`,a.setAttribute("style",`
      display: block;
      margin-bottom: var(--spacing-lg);
      color: var(--color-${t});
      background-color: var(--color-${t}-bg);
      border: 1px solid var(--color-${t}-border);
    `))}fillForm(e){const t=this.querySelector("#posts-grid"),a=this.querySelector("#editor-form"),s=this.querySelector("#title"),r=this.querySelector("#excerpt"),c=this.querySelector("#author"),m=this.querySelector("#category"),v=this.querySelector("#readTime"),b=this.querySelector("#content");!a||!s||!r||!c||!m||!v||!b||B.getPost(e).then(h=>{this.editorMode="edit",this.editingPostId=h.id,s.value=h.title,r.value=h.excerpt,c.value=h.author,m.value=h.category,v.value=h.readTime.replace(/[^0-9]/g,"")||"5",b.value=h.content;const f=this.querySelector("#mode-label");f&&(f.textContent="Editando post existente");const S=this.querySelector("#submit-btn");if(S&&(S.textContent="Salvar Alterações"),a.scrollIntoView({behavior:"smooth",block:"start"}),t){t.querySelectorAll('[data-selected="true"]').forEach(te=>{te.removeAttribute("data-selected")});const A=t.querySelector(`[data-post-id="${e}"]`);A==null||A.setAttribute("data-selected","true")}}).catch(h=>{this.setAlert(h instanceof Error?h.message:"Falha ao carregar o post para edição.","error")})}render(){this.innerHTML=`
      <corp-section background="muted">
        <div class="container ${i.singlePostWrapper}" style="max-width: 1700px; margin-top: calc(var(--spacing-xxl) * -0.5);">
          <a href="#/blog" class="${i.backBtn}">← Voltar ao Blog Público</a>

          <div class="${i.lockBox}" style="margin-bottom: var(--spacing-xl);">
            <h1 class="${i.lockTitle}" style="margin-bottom: var(--spacing-xs);">Editor Privado de Publicações</h1>
            <p class="${i.lockText}" style="margin-bottom: 0;">Esta área é reservada para criação, edição e exclusão de posts. O acesso depende de autenticação.</p>
          </div>

          <div class="${i.editorHeader}">
            <div>
              <h2 class="h2" id="mode-label" style="color: var(--color-primary);">Criar novo post</h2>
              <p class="${i.editorMeta}">As alterações são salvas diretamente no PostgreSQL local via backend Fastify.</p>
            </div>
            <button id="logout-btn" class="${i.toggleBtn} ${i.toggleBtnSecondary}" type="button">Sair</button>
          </div>

          <div id="editor-alert" class="${i.statusBox}" style="display: none;"></div>

          <div class="${i.editorPanel} ${i.open}" style="display: block;">
            <form id="editor-form" novalidate>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); margin-bottom: var(--spacing-md);">
                <div class="${i.fieldGroup}">
                  <label for="title" class="${i.label}">Título do Artigo *</label>
                  <input type="text" id="title" class="${i.input}" placeholder="Ex: Balanceadores de Carga Avançados na AWS" required>
                </div>
                <div class="${i.fieldGroup}">
                  <label for="author" class="${i.label}">Autor / Cargo Executivo *</label>
                  <input type="text" id="author" class="${i.input}" placeholder="Ex: Eng. Marcus Vance - CEO" required>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: var(--spacing-md); margin-bottom: var(--spacing-md);">
                <div class="${i.fieldGroup}">
                  <label for="excerpt" class="${i.label}">Resumo Rápido (Excerpt) *</label>
                  <input type="text" id="excerpt" class="${i.input}" placeholder="Resumo simples de exibição na grade..." required>
                </div>
                <div class="${i.fieldGroup}">
                  <label for="category" class="${i.label}">Categoria do Insight *</label>
                  <select id="category" class="${i.select}">
                    <option value="Engenharia de Software">Engenharia de Software</option>
                    <option value="Segurança da Informação">Segurança da Informação</option>
                    <option value="Inteligência Artificial">Inteligência Artificial</option>
                    <option value="Nuvem &amp; Infraestrutura">Nuvem &amp; Infraestrutura</option>
                  </select>
                </div>
                <div class="${i.fieldGroup}">
                  <label for="readTime" class="${i.label}">Minutos Estimados (Número) *</label>
                  <input type="number" id="readTime" class="${i.input}" placeholder="Ex: 5" min="1" required>
                </div>
              </div>

              <div class="${i.fieldGroup}">
                <label for="content" class="${i.label}">Conteúdo Completo do Artigo *</label>
                <textarea id="content" class="${i.textarea}" placeholder="Escreva o artigo completo. Você pode usar subtítulos descritivos..." required></textarea>
              </div>

              <div style="display: flex; gap: var(--spacing-md); flex-wrap: wrap; margin-top: var(--spacing-lg);">
                <button id="submit-btn" type="submit" class="${i.submitBtn}">Publicar Artigo</button>
                <button id="clear-btn" type="button" class="${i.toggleBtn} ${i.toggleBtnSecondary}">Limpar Formulário</button>
              </div>
            </form>
          </div>

          <div style="margin-top: var(--spacing-xxl);">
            <div class="${i.toolbar}" style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-md); margin-bottom: var(--spacing-lg);">
              <h2 class="h2">Posts Cadastrados</h2>
              <span class="${i.editorMeta}">Selecione um post para edição ou exclusão.</span>
            </div>
            <div id="posts-grid" class="${i.blogGrid}">
              <div class="${i.emptyState}">
                <h3 class="${i.emptyTitle}">Carregando posts...</h3>
                <p>Buscando conteúdo diretamente do banco PostgreSQL.</p>
              </div>
            </div>
          </div>
        </div>
      </corp-section>
    `;const e=this.querySelector("#logout-btn");e==null||e.addEventListener("click",()=>{$.logout(),window.location.hash="#/blog"});const t=this.querySelector("#clear-btn");t==null||t.addEventListener("click",()=>{const s=this.querySelector("#editor-form");s==null||s.reset(),this.editorMode="create",this.editingPostId=null;const r=this.querySelector("#mode-label");r&&(r.textContent="Criar novo post");const c=this.querySelector("#submit-btn");c&&(c.textContent="Publicar Artigo")});const a=this.querySelector("#editor-form");a==null||a.addEventListener("submit",async s=>{s.preventDefault();const r=this.getFormPayload(a);if(!r){this.setAlert("Preencha todos os campos obrigatórios do post.","error");return}try{this.editorMode==="edit"&&this.editingPostId?(await B.updatePost(this.editingPostId,r),this.setAlert("Post atualizado com sucesso.","success")):(await B.createPost(r),this.setAlert("Post publicado com sucesso.","success")),this.editorMode="create",this.editingPostId=null,a.reset();const c=this.querySelector("#mode-label");c&&(c.textContent="Criar novo post");const m=this.querySelector("#submit-btn");m&&(m.textContent="Publicar Artigo"),await this.renderPosts()}catch(c){this.setAlert(c instanceof Error?c.message:"Falha ao salvar o post.","error")}}),this.renderPosts()}async renderPosts(){const e=this.querySelector("#posts-grid");if(e)try{const t=await B.listPosts();if(t.length===0){e.innerHTML=`
          <div class="${i.emptyState}">
            <h3 class="${i.emptyTitle}">Nenhum post cadastrado</h3>
            <p>Crie o primeiro post usando o formulário acima.</p>
          </div>
        `;return}e.innerHTML=t.map(a=>`
          <article class="${i.postCard}" data-post-id="${a.id}">
            <div>
              <div class="${i.postHeader}">
                <span class="${i.categoryTag}">${a.category}</span>
                <span class="${i.readTime}">${a.readTime}</span>
              </div>
              <h3 class="${i.postTitle}">${a.title}</h3>
              <p class="${i.postExcerpt}">${a.excerpt}</p>
            </div>

            <div class="${i.postFooter}" style="gap: var(--spacing-sm); flex-wrap: wrap;">
              <div class="${i.authorMeta}">
                <span class="${i.authorName}">${a.author}</span>
                <span class="${i.postDate}">${H(a.date)}</span>
              </div>
              <div style="display: flex; gap: var(--spacing-xs); flex-wrap: wrap;">
                <a href="#/blog/${a.slug}" class="${i.readLink}">Ver Público</a>
                <button type="button" class="${i.toggleBtn}" data-action="edit" data-id="${a.id}">Editar</button>
                <button type="button" class="${i.toggleBtn} ${i.toggleBtnSecondary}" data-action="delete" data-id="${a.id}">Excluir</button>
              </div>
            </div>
          </article>
        `).join(""),e.querySelectorAll('button[data-action="edit"]').forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-id");s&&this.fillForm(s)})}),e.querySelectorAll('button[data-action="delete"]').forEach(a=>{a.addEventListener("click",async()=>{const s=a.getAttribute("data-id");if(s&&confirm("Deseja realmente remover este artigo?"))try{await B.deletePost(s),await this.renderPosts()}catch(r){this.setAlert(r instanceof Error?r.message:"Falha ao excluir o post.","error")}})})}catch(t){e.innerHTML=`
        <div class="${i.emptyState}">
          <h3 class="${i.emptyTitle}">Erro ao carregar posts</h3>
          <p>${t instanceof Error?t.message:"Falha ao consultar o banco de dados."}</p>
        </div>
      `}}}customElements.get("page-blog-editor")||customElements.define("page-blog-editor",Jo);const Ko=[{pattern:/^#\/$/,componentName:"page-home"},{pattern:/^#\/sobre$/,componentName:"page-about"},{pattern:/^#\/servicos$/,componentName:"page-services"},{pattern:/^#\/carreiras$/,componentName:"page-careers"},{pattern:/^#\/blog$/,componentName:"page-blog"},{pattern:/^#\/posts-publicos$/,componentName:"page-blog"},{pattern:/^#posts-publicos$/,componentName:"page-blog"},{pattern:/^#\/leituras$/,componentName:"page-blog"},{pattern:/^#leituras$/,componentName:"page-blog"},{pattern:/^#\/login$/,componentName:"page-login"},{pattern:/^#\/blog\/editor$/,componentName:"page-blog-editor"},{pattern:/^#\/blog\/([a-zA-Z0-9-]+)$/,componentName:"page-blog",getSlug:o=>{const e=o.match(/^#\/blog\/([a-zA-Z0-9-]+)$/);return e?e[1]:void 0}},{pattern:/^#\/contato$/,componentName:"page-contact"}];function Qo(o=!0){window.scrollTo({top:0,behavior:o?"smooth":"auto"})}class Zo extends HTMLElement{connectedCallback(){this.innerHTML=Q.render()}}customElements.get("page-home")||customElements.define("page-home",Zo);class Xo extends HTMLElement{connectedCallback(){this.innerHTML=Z.render()}}customElements.get("page-about")||customElements.define("page-about",Xo);class ei extends HTMLElement{connectedCallback(){this.innerHTML=X.render()}}customElements.get("page-services")||customElements.define("page-services",ei);function ee(){const o=document.getElementById("root");if(!o)return;const e=window.location.hash||"#/",t=Ko.find(r=>r.pattern.test(e));let a="",s="Apex Systems | Carregando...";if(t){const r=t.getSlug?t.getSlug(e):void 0,c=r?` slug="${r}"`:"";a=`<${t.componentName}${c}></${t.componentName}>`,t.componentName==="page-home"?s=Q.metadata.title:t.componentName==="page-about"?s=Z.metadata.title:t.componentName==="page-services"?s=X.metadata.title:t.componentName==="page-contact"?s="Apex Systems | Contato":t.componentName==="page-careers"?s="Apex Systems | Trabalhe Conosco":t.componentName==="page-blog"?s=r?`Apex Systems | Visualizar Artigo (${r})`:"Apex Systems | Insights de Engenharia":t.componentName==="page-blog-editor"?s="Apex Systems | Editor Privado de Posts":t.componentName==="page-login"&&(s="Apex Systems | Acesso Restrito")}else s="Apex Systems | Documento Não Localizado",a=`
      <corp-section background="muted">
        <div style="text-align: center; padding: 100px 0; max-width: 600px; margin: 0 auto; font-family: var(--font-family-sans);">
          <span style="font-size: 5rem; line-height: 1; margin-bottom: var(--spacing-sm); display: inline-block;">⚠️</span>
          <h1 class="h1" style="color: var(--color-primary); font-size: 3rem; margin-bottom: var(--spacing-sm);">404</h1>
          <h2 class="h3" style="color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">Documento Não Localizado</h2>
          <p>A rota requisitada não possui um arquivo correspondente assinado pela infraestrutura da Apex Systems.</p>
          <div style="margin-top: var(--spacing-lg);">
            <corp-button text="Retornar para o Início" variant="secondary" size="lg" href="#/"></corp-button>
          </div>
        </div>
      </corp-section>
    `;document.title=s,o.innerHTML=`<corp-layout>${a}</corp-layout>`,Qo(!1)}window.addEventListener("hashchange",ee);window.location.hash?ee():window.location.hash="#/";
