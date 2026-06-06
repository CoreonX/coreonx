import"./modulepreload-polyfill-B5Qt9EMX.js";import{s as B,g as T}from"./index-2Adx3jUJ.js";const M={hero:{type:"hero",label:"Hero Principal",category:"layout",description:"Seção de destaque topo de página com título, subtítulo e ações duplas."},cards:{type:"cards",label:"Grade de Cartões",category:"content",description:"Grelha modular de cartões configurável em 2 ou 3 colunas."},text:{type:"text",label:"Texto Rico",category:"content",description:"Parágrafos de texto livre para artigos, políticas ou descrições longas."},faq:{type:"faq",label:"Sanfona de FAQ",category:"institutional",description:"Acordeão dinâmico com perguntas e respostas estruturadas."},metrics:{type:"metrics",label:"Quadro de Métricas",category:"marketing",description:"Exibição de números de sucesso, percentuais ou estatísticas corporativas."},gallery:{type:"gallery",label:"Galeria de Imagens",category:"media",description:"Mosaico de imagens com legendas."},banner:{type:"banner",label:"Banner Promocional",category:"marketing",description:"Destaque visual horizontal e compacto para anúncios ou comunicados."},carousel:{type:"carousel",label:"Carrossel de Slides",category:"media",description:"Slider de imagens com passador interativo."},cta:{type:"cta",label:"Chamada para Ação (CTA)",category:"conversion",description:"Seção promocional focada em conversão e clique de botão."}};let O=null,L=null,m=null,u=null,A=!1;const D={hero:{type:"hero",eyebrow:"NOVO DESTAQUE",title:"Novo Bloco Hero",subtitle:"Subtítulo explicativo do hero",copy:"Parágrafo descritivo de exemplo para o bloco principal da página.",buttons:[{label:"Começar",href:"#"},{label:"Saiba Mais",href:"#"}],showEyebrow:!0,width:"100%",height:"auto",backgroundImage:"",backgroundBlur:10,backgroundOpacity:.3},cards:{type:"cards",title:"Nova Grade de Cartões",description:"Descrição de exemplo para a seção de cartões.",columns:3,items:[{title:"Item Exemplo 1",text:"Descrição de exemplo para o cartão.",meta:"Categoria 1",icon:""}]},text:{type:"text",title:"Bloco de Texto",content:"<p>Insira seu text rico aqui. Suporta tags HTML como &lt;p&gt;, &lt;strong&gt;, etc.</p>"},faq:{type:"faq",title:"Perguntas Frequentes",description:"Respostas para dúvidas comuns de nossos clientes.",items:[{question:"Pergunta de exemplo?",answer:"Esta é uma resposta de exemplo estruturada."}]},metrics:{type:"metrics",title:"Resultados em Números",items:[{value:"100%",label:"Satisfação",description:"Índice NPS medido este ano"}]},gallery:{type:"gallery",title:"Galeria de Mídia",images:[{src:"/og-image.png",alt:"Legenda da foto corporativa",caption:"Visão de exemplo"}]},banner:{type:"banner",title:"Banner Promocional e Informativo",subtitle:"Subtítulo curto para detalhar o aviso.",action:{label:"Fale Conosco",href:"#contato"}},carousel:{type:"carousel",title:"Projetos Recentes",items:[{imageSrc:"/og-image.png",title:"Projeto Alpha",description:"Visão geral do projeto principal."}]},cta:{type:"cta",title:"Fale com Nossos Especialistas",copy:"Pronto para impulsionar seus negócios? Entre em contato agora.",action:{label:"Iniciar Contato",href:"#contato"}}};document.addEventListener("DOMContentLoaded",()=>{R(),F(),z();const e=sessionStorage.getItem("editor_active_view"),a=sessionStorage.getItem("editor_active_page_id");e==="global"?j():a&&B[a]&&_(a)});function R(){const e=document.getElementById("pages-list");if(!e)return;const a=(T.navigationLinks||[]).map(c=>c.id);e.innerHTML=Object.keys(B).sort((c,g)=>{const v=a.indexOf(c),h=a.indexOf(g);return v!==-1&&h!==-1?v-h:v!==-1?-1:h!==-1?1:c.localeCompare(g)}).map(c=>{const g=B[c],v=c!=="home"?`<button class="delete-page-btn" data-action="delete-page" data-page-id="${c}" title="Excluir página">✕</button>`:"";return`
        <li>
          <button class="page-link-item" data-page-id="${c}">
            ${g.title}
          </button>
          ${v}
        </li>
      `}).join(""),e.addEventListener("click",async c=>{const g=c.target,v=g.closest(".page-link-item");if(v){const S=v.getAttribute("data-page-id");if(A&&!await I({title:"Alterações não salvas",message:"Você possui alterações não salvas. Deseja sair mesmo assim?",confirmLabel:"Sair",cancelLabel:"Cancelar"}))return;_(S);return}const h=g.closest('[data-action="delete-page"]');if(h){const S=h.getAttribute("data-page-id");if(await I({title:"Excluir Página",message:`Deseja realmente excluir a página '${S}'? Isso removerá o arquivo de conteúdo JSON e o arquivo HTML do disco permanentemente.`,confirmLabel:"Excluir",cancelLabel:"Cancelar"}))try{const q=await(await fetch("/api/delete-page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pageId:S})})).json();q.success?(sessionStorage.removeItem("editor_active_page_id"),sessionStorage.setItem("editor_active_view","global"),window.location.reload()):y("Erro ao Excluir","Erro ao excluir página: "+q.error)}catch(N){y("Erro de Rede","Erro na requisição de exclusão: "+N)}}});const t=document.getElementById("add-page-btn"),i=document.getElementById("create-page-modal"),o=document.getElementById("create-page-modal-close"),l=document.getElementById("create-page-modal-cancel"),n=document.getElementById("create-page-modal-confirm"),s=document.getElementById("new-page-id"),d=document.getElementById("new-page-title");t?.addEventListener("click",()=>{i&&(i.classList.add("active"),i.setAttribute("aria-hidden","false"),s.value="",d.value="",s.focus())});const b=()=>{i&&(i.classList.remove("active"),i.setAttribute("aria-hidden","true"))};o?.addEventListener("click",b),l?.addEventListener("click",b),n?.addEventListener("click",async()=>{const c=s.value.trim().toLowerCase(),g=d.value.trim();if(!c||!g){y("Campos Necessários","Ambos os campos identificador e título são obrigatórios.");return}if(!/^[a-z0-9-]+$/.test(c)){y("ID Inválido","O identificador deve conter apenas letras minúsculas, números e hifens.");return}try{const h=await(await fetch("/api/create-page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pageId:c,title:g})})).json();h.success?(b(),sessionStorage.setItem("editor_active_page_id",c),sessionStorage.setItem("editor_active_view","page"),window.location.reload()):y("Erro ao Criar","Erro ao criar página: "+h.error)}catch(v){y("Erro de Rede","Erro na rede ao criar página: "+v)}});const f=document.getElementById("global-settings-btn");f&&f.addEventListener("click",async()=>{A&&!await I({title:"Alterações não salvas",message:"Você possui alterações não salvas. Deseja sair mesmo assim?",confirmLabel:"Sair",cancelLabel:"Cancelar"})||j()})}function F(){const e=document.getElementById("save-btn");e&&e.addEventListener("click",Q),["meta-title","meta-breadcrumb"].forEach(d=>{const b=document.getElementById(d);b&&b.addEventListener("input",f=>{if(p(!0),!m)return;const c=f.target.value;d==="meta-title"&&(m.title=c),d==="meta-breadcrumb"&&(m.breadcrumb=c)})});const t=document.getElementById("meta-show-breadcrumb");t&&t.addEventListener("change",d=>{p(!0),m&&(m.showBreadcrumb=d.target.checked)}),["global-footer-copy","global-form-title","global-form-copy"].forEach(d=>{const b=document.getElementById(d);b&&b.addEventListener("input",f=>{if(p(!0),!u)return;const c=f.target.value;d==="global-footer-copy"&&(u.footerCopy=c),d==="global-form-title"&&(u.formTitle=c),d==="global-form-copy"&&(u.formCopy=c)})});const o=document.getElementById("confirm-modal-confirm"),l=document.getElementById("confirm-modal-cancel"),n=document.getElementById("confirm-modal-close"),s=document.getElementById("confirm-modal-overlay");o?.addEventListener("click",()=>k(!0)),l?.addEventListener("click",()=>k(!1)),n?.addEventListener("click",()=>k(!1)),s?.addEventListener("click",()=>k(!1)),document.addEventListener("keydown",d=>{if(d.key==="Escape"){const b=document.getElementById("add-block-modal");b&&!b.classList.contains("hidden")&&(b.classList.add("hidden"),b.setAttribute("aria-hidden","true"));const f=document.getElementById("confirm-modal");f&&f.classList.contains("active")&&k(!1)}})}function _(e){O="page",L=e,sessionStorage.setItem("editor_active_view","page"),sessionStorage.setItem("editor_active_page_id",e),document.querySelectorAll(".page-link-item").forEach(o=>{o.getAttribute("data-page-id")===e?o.classList.add("is-active"):o.classList.remove("is-active")}),document.getElementById("global-settings-btn")?.classList.remove("is-active"),m=JSON.parse(JSON.stringify(B[e])),p(!1);const a=document.getElementById("meta-title"),t=document.getElementById("meta-breadcrumb");a&&(a.value=m.title||""),t&&(t.value=m.breadcrumb||"");const i=document.getElementById("meta-show-breadcrumb");i&&(i.checked=m.showBreadcrumb!==!1),document.getElementById("no-page-selected")?.classList.add("hidden"),document.getElementById("global-editor")?.classList.add("hidden"),document.getElementById("page-editor")?.classList.remove("hidden"),x()}function $(e,a,t){const i=a.map((o,l)=>{const n=l===0,s=l===a.length-1,d=`<button class="mini-action-btn move-up-global-item" data-action="move-up-global-item" ${n?'disabled style="opacity: 0.3; cursor: not-allowed;"':""} title="Mover para cima">▲</button>`,b=`<button class="mini-action-btn move-down-global-item" data-action="move-down-global-item" ${s?'disabled style="opacity: 0.3; cursor: not-allowed;"':""} title="Mover para baixo">▼</button>`;return`
        <div class="nested-item-card global-array-item" data-item-index="${l}">
          <div class="nested-item-header">
            <span>Link #${l+1}</span>
            <div class="nested-item-actions" style="display: flex; gap: 0.25rem; align-items: center;">
              ${d}
              ${b}
              <button class="mini-action-btn delete-global-item" data-action="delete-global-item">Excluir</button>
            </div>
          </div>
          ${t(o,l)}
        </div>
      `}).join("");return`
    <div class="nested-array-container global-array-container" data-array-key="${e}">
      <div class="nested-array-header" style="margin-bottom: 0.75rem;">
        <button class="add-global-item-btn" data-action="add-global-item">＋ Adicionar Link</button>
      </div>
      <div class="nested-items-list">
        ${i}
      </div>
    </div>
  `}function J(){const e=document.getElementById("global-editor");e&&(e.querySelectorAll("[data-global-field]").forEach(a=>{const t=a,i=t.getAttribute("data-global-field"),o=t.cloneNode(!0);t.parentNode?.replaceChild(o,t),o.addEventListener("input",l=>{p(!0),u&&(u[i]=l.target.value)})}),e.querySelectorAll("[data-global-item-field]").forEach(a=>{const t=a,i=t.getAttribute("data-global-item-field"),o=t.closest(".global-array-item");if(!o)return;const l=parseInt(o.getAttribute("data-item-index"),10),n=t.closest(".global-array-container");if(!n)return;const s=n.getAttribute("data-array-key"),d=t.cloneNode(!0);t.parentNode?.replaceChild(d,t);const b=d.type==="checkbox"?"change":"input";d.addEventListener(b,f=>{if(p(!0),!u)return;const c=f.target;c.type==="checkbox"?u[s][l][i]=c.checked:u[s][l][i]=c.value})}),e.querySelectorAll('[data-action="add-global-item"]').forEach(a=>{const t=a.cloneNode(!0);a.parentNode?.replaceChild(t,a),t.addEventListener("click",()=>{const i=t.closest(".global-array-container");if(!i)return;const o=i.getAttribute("data-array-key");u[o]||(u[o]=[]);let l={label:"Novo Link",href:"#"};o==="navigationLinks"&&(l={id:"new-route",label:"Nova Rota",href:"new-route.html",visible:!0}),u[o].push(l),p(!0),w()})}),e.querySelectorAll('[data-action="delete-global-item"]').forEach(a=>{const t=a.cloneNode(!0);a.parentNode?.replaceChild(t,a),t.addEventListener("click",()=>{const i=t.closest(".global-array-item");if(!i)return;const o=parseInt(i.getAttribute("data-item-index"),10),l=t.closest(".global-array-container");if(!l)return;const n=l.getAttribute("data-array-key");u[n].splice(o,1),p(!0),w()})}),e.querySelectorAll('[data-action="move-up-global-item"]').forEach(a=>{const t=a.cloneNode(!0);a.parentNode?.replaceChild(t,a),t.addEventListener("click",()=>{const i=t.closest(".global-array-item");if(!i)return;const o=parseInt(i.getAttribute("data-item-index"),10),l=t.closest(".global-array-container");if(!l)return;const n=l.getAttribute("data-array-key");if(o>0){const s=u[n],d=s[o];s[o]=s[o-1],s[o-1]=d,p(!0),w()}})}),e.querySelectorAll('[data-action="move-down-global-item"]').forEach(a=>{const t=a.cloneNode(!0);a.parentNode?.replaceChild(t,a),t.addEventListener("click",()=>{const i=t.closest(".global-array-item");if(!i)return;const o=parseInt(i.getAttribute("data-item-index"),10),l=t.closest(".global-array-container");if(!l)return;const n=l.getAttribute("data-array-key"),s=u[n];if(o<s.length-1){const d=s[o];s[o]=s[o+1],s[o+1]=d,p(!0),w()}})}))}function w(){if(!u)return;const e={"global-brand-title":u.brandTitle||"","global-brand-subtitle":u.brandSubtitle||"","global-brand-logo":u.brandLogo||"","global-footer-brand-copy":u.footerBrandCopy||"","global-footer-copyright":u.footerCopyright||"","global-footer-copy":u.footerCopy||"","global-footer-col1-title":u.footerCol1Title||"","global-footer-col2-title":u.footerCol2Title||"","global-form-title":u.formTitle||"","global-form-copy":u.formCopy||""};for(const[l,n]of Object.entries(e)){const s=document.getElementById(l);s&&(s.value=n)}const a=document.getElementById("global-navigation-links-container");a&&(a.innerHTML=$("navigationLinks",u.navigationLinks||[],(l,n)=>{const s=l.visible!==!1;return`
        <div class="form-grid">
          <div class="field-item">
            <label>Identificador (ID)</label>
            <input type="text" data-global-item-field="id" value="${r(l.id||"")}">
          </div>
          <div class="field-item">
            <label>Rótulo (Label)</label>
            <input type="text" data-global-item-field="label" value="${r(l.label||"")}">
          </div>
          <div class="field-item full-width">
            <label>Endereço (Href)</label>
            <input type="text" data-global-item-field="href" value="${r(l.href||"")}">
          </div>
          <div class="field-item full-width checkbox-item" style="margin-top: 0.25rem;">
            <label class="checkbox-label">
              <input type="checkbox" data-global-item-field="visible" ${s?"checked":""}>
              Exibir no Menu Principal
            </label>
          </div>
        </div>
      `}));const t=document.getElementById("global-footer-col1-links-container");t&&(t.innerHTML=$("footerCol1Links",u.footerCol1Links||[],(l,n)=>`
      <div class="form-grid">
        <div class="field-item">
          <label>Rótulo</label>
          <input type="text" data-global-item-field="label" value="${r(l.label||"")}">
        </div>
        <div class="field-item">
          <label>Link (Href)</label>
          <input type="text" data-global-item-field="href" value="${r(l.href||"")}">
        </div>
      </div>
    `));const i=document.getElementById("global-footer-col2-links-container");i&&(i.innerHTML=$("footerCol2Links",u.footerCol2Links||[],(l,n)=>`
      <div class="form-grid">
        <div class="field-item">
          <label>Rótulo</label>
          <input type="text" data-global-item-field="label" value="${r(l.label||"")}">
        </div>
        <div class="field-item">
          <label>Link (Href)</label>
          <input type="text" data-global-item-field="href" value="${r(l.href||"")}">
        </div>
      </div>
    `));const o=document.getElementById("global-footer-bottom-links-container");o&&(o.innerHTML=$("footerBottomLinks",u.footerBottomLinks||[],(l,n)=>`
      <div class="form-grid">
        <div class="field-item">
          <label>Rótulo</label>
          <input type="text" data-global-item-field="label" value="${r(l.label||"")}">
        </div>
        <div class="field-item">
          <label>Link (Href)</label>
          <input type="text" data-global-item-field="href" value="${r(l.href||"")}">
        </div>
      </div>
    `)),J()}function j(){O="global",L=null,sessionStorage.setItem("editor_active_view","global"),document.getElementById("global-settings-btn")?.classList.add("is-active"),document.querySelectorAll(".page-link-item").forEach(e=>{e.id!=="global-settings-btn"&&e.classList.remove("is-active")}),u=JSON.parse(JSON.stringify(T)),p(!1),w(),document.getElementById("no-page-selected")?.classList.add("hidden"),document.getElementById("page-editor")?.classList.add("hidden"),document.getElementById("global-editor")?.classList.remove("hidden")}function p(e){A=e;const a=document.getElementById("save-status");a&&(e?(a.textContent="Modificado",a.className="save-status modified"):(a.textContent="Salvo",a.className="save-status"))}function x(){const e=document.getElementById("blocks-list");if(!(!e||!m)){if(m.blocks.length===0){e.innerHTML='<p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">Esta página não possui blocos de conteúdo. Adicione um novo clicando no botão acima.</p>';return}e.innerHTML=m.blocks.map((a,t)=>G(a,t)).join(""),V()}}function G(e,a){const t=M[e.type],i=t?t.label:e.type.toUpperCase();return`
    <div class="block-card" data-block-index="${a}">
      <div class="block-card-header">
        <div class="block-card-header__info">
          <span class="block-badge">${e.type}</span>
          <span class="block-card-header__title">${i}</span>
        </div>
        <div class="block-card-header__actions">
          <button class="block-control-btn move-up" title="Mover para cima" data-action="up" aria-label="Subir bloco">↑</button>
          <button class="block-control-btn move-down" title="Mover para baixo" data-action="down" aria-label="Descer bloco">↓</button>
          <button class="block-control-btn delete" title="Remover Bloco" data-action="delete" aria-label="Excluir bloco">✕</button>
        </div>
      </div>
      <div class="block-card-body">
        ${K(e,a)}
      </div>
    </div>
  `}function K(e,a){switch(e.type){case"hero":return`
        <div class="form-grid">
          <div class="field-item">
            <label>Kicker / Eyebrow</label>
            <input type="text" data-field="eyebrow" value="${r(e.eyebrow||"")}">
            <div style="margin-top: 0.5rem;" class="checkbox-item">
              <label class="checkbox-label">
                <input type="checkbox" data-field="showEyebrow" ${e.showEyebrow!==!1?"checked":""}>
                Exibir Kicker / Eyebrow
              </label>
            </div>
          </div>
          <div class="field-item">
            <label>Título Principal</label>
            <input type="text" data-field="title" value="${r(e.title||"")}">
          </div>
          <div class="field-item">
            <label>Subtítulo</label>
            <input type="text" data-field="subtitle" value="${r(e.subtitle||"")}">
          </div>
          <div class="field-item full-width">
            <label>Texto Auxiliar (Copy)</label>
            <textarea data-field="copy" rows="3">${r(e.copy||"")}</textarea>
          </div>
          <div class="field-item">
            <label>Largura Máxima (ex: 100%, 1200px, 80rem)</label>
            <input type="text" data-field="width" value="${r(e.width||"")}" placeholder="Ex: 100%">
          </div>
          <div class="field-item">
            <label>Altura Mínima (ex: 500px, 80vh, auto)</label>
            <input type="text" data-field="height" value="${r(e.height||"")}" placeholder="Ex: auto">
          </div>
          <div class="field-item full-width">
            <label>URL da Imagem de Fundo</label>
            <input type="text" data-field="backgroundImage" value="${r(e.backgroundImage||"")}" placeholder="Ex: https://exemplo.com/imagem.jpg">
          </div>
          <div class="field-item">
            <label>Intensidade do Desfoque (Blur em px)</label>
            <input type="number" data-field="backgroundBlur" value="${e.backgroundBlur!==void 0?e.backgroundBlur:10}" min="0" max="100">
          </div>
          <div class="field-item">
            <label>Opacidade da Imagem (0 a 1)</label>
            <input type="number" data-field="backgroundOpacity" value="${e.backgroundOpacity!==void 0?e.backgroundOpacity:.3}" min="0" max="1" step="0.1">
          </div>
        </div>
        
        ${E(a,"buttons",e.buttons||[],(t,i)=>`
          <div class="form-grid">
            <div class="field-item">
              <label>Rótulo do Botão</label>
              <input type="text" data-item-field="label" value="${r(t.label||"")}">
            </div>
            <div class="field-item">
              <label>Link (Href)</label>
              <input type="text" data-item-field="href" value="${r(t.href||"")}">
            </div>
          </div>
        `)}
      `;case"cards":return`
        <div class="form-grid">
          <div class="field-item">
            <label>Título da Seção</label>
            <input type="text" data-field="title" value="${r(e.title)}">
          </div>
          <div class="field-item">
            <label>Colunas da Grade</label>
            <select data-field="columns">
              <option value="1" ${e.columns===1?"selected":""}>1 Coluna</option>
              <option value="2" ${e.columns===2?"selected":""}>2 Colunas</option>
              <option value="3" ${e.columns===3?"selected":""}>3 Colunas</option>
            </select>
          </div>
          <div class="field-item full-width">
            <label>Descrição Auxiliar</label>
            <textarea data-field="description" rows="2">${r(e.description||"")}</textarea>
          </div>
        </div>
        ${E(a,"items",e.items,(t,i)=>`
          <div class="form-grid">
            <div class="field-item">
              <label>Tag / Eyebrow (Meta)</label>
              <input type="text" data-item-field="meta" value="${r(t.meta||"")}">
            </div>
            <div class="field-item">
              <label>Título do Cartão</label>
              <input type="text" data-item-field="title" value="${r(t.title)}">
            </div>
            <div class="field-item">
              <label>Ícone Lucide (Opcional)</label>
              <input type="text" data-item-field="icon" value="${r(t.icon||"")}" placeholder="ex: Compass, Shield, Zap, Home">
            </div>
            <div class="field-item full-width">
              <label>Corpo do Texto</label>
              <textarea data-item-field="text" rows="3">${r(t.text)}</textarea>
            </div>
          </div>
        `)}
      `;case"text":return`
        <div class="form-grid">
          <div class="field-item full-width">
            <label>Título Opcional</label>
            <input type="text" data-field="title" value="${r(e.title||"")}">
          </div>
          <div class="field-item full-width">
            <label>Texto Livre / Artigo (Suporta Markdown & HTML)</label>
            <div class="markdown-toolbar">
              <button type="button" class="markdown-btn" data-action="bold" title="Negrito">B</button>
              <button type="button" class="markdown-btn" data-action="italic" title="Itálico">I</button>
              <button type="button" class="markdown-btn" data-action="h2" title="Título H2">H2</button>
              <button type="button" class="markdown-btn" data-action="h3" title="Título H3">H3</button>
              <button type="button" class="markdown-btn" data-action="list" title="Lista de Tópicos">• Lista</button>
              <button type="button" class="markdown-btn" data-action="link" title="Inserir Link">🔗 Link</button>
            </div>
            <textarea data-field="content" rows="12">${r(e.content)}</textarea>
            <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
              Dica: Você pode usar **negrito**, *itálico*, ### Subtítulos, - Listas com marcadores ou tags HTML padrão.
            </span>
          </div>
        </div>
      `;case"faq":return`
        <div class="form-grid">
          <div class="field-item">
            <label>Título da Seção</label>
            <input type="text" data-field="title" value="${r(e.title)}">
          </div>
          <div class="field-item">
            <label>Descrição Auxiliar</label>
            <input type="text" data-field="description" value="${r(e.description||"")}">
          </div>
        </div>
        ${E(a,"items",e.items,(t,i)=>`
          <div class="form-grid">
            <div class="field-item full-width">
              <label>Pergunta</label>
              <input type="text" data-item-field="question" value="${r(t.question)}">
            </div>
            <div class="field-item full-width">
              <label>Resposta</label>
              <textarea data-item-field="answer" rows="3">${r(t.answer)}</textarea>
            </div>
          </div>
        `)}
      `;case"metrics":return`
        <div class="form-grid">
          <div class="field-item full-width">
            <label>Título Opcional da Seção</label>
            <input type="text" data-field="title" value="${r(e.title||"")}">
          </div>
        </div>
        ${E(a,"items",e.items,(t,i)=>`
          <div class="form-grid">
            <div class="field-item">
              <label>Valor Estatístico (Ex: 100%, 15k+)</label>
              <input type="text" data-item-field="value" value="${r(t.value)}">
            </div>
            <div class="field-item">
              <label>Rótulo / Descrição Curta</label>
              <input type="text" data-item-field="label" value="${r(t.label)}">
            </div>
            <div class="field-item full-width">
              <label>Parágrafo Detalhado (Opcional)</label>
              <input type="text" data-item-field="description" value="${r(t.description||"")}">
            </div>
          </div>
        `)}
      `;case"gallery":return`
        <div class="form-grid">
          <div class="field-item full-width">
            <label>Título Opcional da Galeria</label>
            <input type="text" data-field="title" value="${r(e.title||"")}">
          </div>
        </div>
        ${E(a,"images",e.images,(t,i)=>`
          <div class="form-grid">
            <div class="field-item">
              <label>Caminho da Imagem (Src)</label>
              <input type="text" data-item-field="src" value="${r(t.src)}">
            </div>
            <div class="field-item">
              <label>Texto Alternativo (Alt)</label>
              <input type="text" data-item-field="alt" value="${r(t.alt)}">
            </div>
            <div class="field-item full-width">
              <label>Legenda / Caption (Opcional)</label>
              <input type="text" data-item-field="caption" value="${r(t.caption||"")}">
            </div>
          </div>
        `)}
      `;case"banner":return`
        <div class="form-grid">
          <div class="field-item">
            <label>Título Principal</label>
            <input type="text" data-field="title" value="${r(e.title)}">
          </div>
          <div class="field-item">
            <label>Subtítulo</label>
            <input type="text" data-field="subtitle" value="${r(e.subtitle||"")}">
          </div>
          ${e.action?`
            <div class="field-item">
              <label>Botão de Ação - Rótulo</label>
              <input type="text" data-field="action.label" value="${r(e.action.label)}">
            </div>
            <div class="field-item">
              <label>Botão de Ação - Link</label>
              <input type="text" data-field="action.href" value="${r(e.action.href)}">
            </div>
          `:""}
        </div>
      `;case"carousel":return`
        <div class="form-grid">
          <div class="field-item full-width">
            <label>Título Opcional do Carrossel</label>
            <input type="text" data-field="title" value="${r(e.title||"")}">
          </div>
        </div>
        ${E(a,"items",e.items,(t,i)=>`
          <div class="form-grid">
            <div class="field-item">
              <label>Caminho da Imagem</label>
              <input type="text" data-item-field="imageSrc" value="${r(t.imageSrc)}">
            </div>
            <div class="field-item">
              <label>Título do Slide</label>
              <input type="text" data-item-field="title" value="${r(t.title)}">
            </div>
            <div class="field-item full-width">
              <label>Descrição Explicativa (Opcional)</label>
              <textarea data-item-field="description" rows="2">${r(t.description||"")}</textarea>
            </div>
          </div>
        `)}
      `;case"cta":return`
        <div class="form-grid">
          <div class="field-item">
            <label>Título Principal</label>
            <input type="text" data-field="title" value="${r(e.title)}">
          </div>
          <div class="field-item">
            <label>Botão de Ação - Rótulo</label>
            <input type="text" data-field="action.label" value="${r(e.action.label)}">
          </div>
          <div class="field-item">
            <label>Botão de Ação - Link</label>
            <input type="text" data-field="action.href" value="${r(e.action.href)}">
          </div>
          <div class="field-item full-width">
            <label>Mensagem Auxiliar (Copy)</label>
            <textarea data-field="copy" rows="2">${r(e.copy)}</textarea>
          </div>
        </div>
      `;default:return'<p style="color: var(--magenta);">Erro: Layout do Bloco Desconhecido.</p>'}}function E(e,a,t,i,o){const l=t.map((n,s)=>`
        <div class="nested-item-card" data-item-index="${s}">
          <div class="nested-item-header">
            <span>Item #${s+1}</span>
            <button class="mini-action-btn delete-item" data-action="delete-item">Excluir Item</button>
          </div>
          ${i(n,s)}
        </div>
      `).join("");return`
    <div class="nested-array-container" data-array-key="${a}">
      <div class="nested-array-header">
        <span class="nested-array-title">Elementos da Lista</span>
        <button class="add-item-btn" data-action="add-item">＋ Adicionar Elemento</button>
      </div>
      <div class="nested-items-list">
        ${l}
      </div>
    </div>
  `}function V(){const e=document.getElementById("blocks-list");if(!e||!m)return;e.querySelectorAll("input, textarea, select").forEach(t=>{const i=t,o=i.closest("[data-block-index]");if(!o)return;const l=parseInt(o.getAttribute("data-block-index"),10),n=i.getAttribute("data-field"),s=i.closest("[data-item-index]"),d=s?parseInt(s.getAttribute("data-item-index"),10):-1,b=i.type==="checkbox"?"change":"input";i.addEventListener(b,()=>{p(!0);const f=m.blocks[l];if(d!==-1){const c=i.getAttribute("data-item-field"),g=i.closest(".nested-array-container"),v=g?g.getAttribute("data-array-key"):f.type==="gallery"?"images":"items";f[v]||(f[v]=[]),f[v][d][c]=i.value}else if(n){let c=i.value;if(i.type==="checkbox"?c=i.checked:n==="columns"||n==="backgroundBlur"?c=parseInt(i.value,10):n==="backgroundOpacity"&&(c=parseFloat(i.value)),n.includes(".")){const[g,v]=n.split(".");f[g][v]=c}else f[n]=c}})}),e.querySelectorAll(".block-card").forEach(t=>{const i=parseInt(t.getAttribute("data-block-index"),10);t.querySelectorAll(".markdown-btn").forEach(o=>{o.addEventListener("click",l=>{l.preventDefault();const n=o.getAttribute("data-action"),s=t.querySelector('textarea[data-field="content"]');n&&s&&U(s,n)})}),t.querySelector(".block-card-header")?.addEventListener("click",o=>{const n=o.target.getAttribute("data-action");n&&(o.stopPropagation(),n==="up"&&i>0?P(i,i-1):n==="down"&&i<m.blocks.length-1?P(i,i+1):n==="delete"&&I({title:"Remover Bloco",message:"Deseja realmente remover este bloco da página?",confirmLabel:"Excluir",cancelLabel:"Cancelar"}).then(s=>{s&&(m.blocks.splice(i,1),p(!0),x())}))}),t.querySelectorAll('[data-action="add-item"]').forEach(o=>{o.addEventListener("click",()=>{const l=o.closest(".nested-array-container");if(!l)return;const n=l.getAttribute("data-array-key"),s=m.blocks[i];s[n]||(s[n]=[]);let d={title:"",text:"",meta:"",icon:""};s.type==="faq"&&(d={question:"",answer:""}),s.type==="metrics"&&(d={value:"",label:"",description:""}),s.type==="gallery"&&(d={src:"",alt:"",caption:""}),s.type==="carousel"&&(d={imageSrc:"",title:"",description:""}),s.type==="hero"&&n==="buttons"&&(d={label:"Novo Botão",href:"#"}),s[n].push(d),p(!0),x()})}),t.querySelectorAll('[data-action="delete-item"]').forEach(o=>{o.addEventListener("click",l=>{const n=l.target.closest("[data-item-index]");if(!n)return;const s=parseInt(n.getAttribute("data-item-index"),10),d=n.closest(".nested-array-container");if(!d)return;const b=d.getAttribute("data-array-key");m.blocks[i][b].splice(s,1),p(!0),x()})})})}function U(e,a){const t=e.selectionStart,i=e.selectionEnd,o=e.value,l=o.substring(t,i);let n="",s=t,d=i;switch(a){case"bold":n=`**${l||"texto"}**`,s=t+2,d=s+(l||"texto").length;break;case"italic":n=`*${l||"texto"}*`,s=t+1,d=s+(l||"texto").length;break;case"h2":n=`## ${l||"Subtítulo"}`,s=t+3,d=s+(l||"Subtítulo").length;break;case"h3":n=`### ${l||"Subtítulo"}`,s=t+4,d=s+(l||"Subtítulo").length;break;case"list":l.length>0?(n=l.split(`
`).map(f=>f.startsWith("- ")?f:`- ${f}`).join(`
`),s=t,d=t+n.length):(n="- ",s=t+2,d=s);break;case"link":n=`[${l||"texto"}](https://link-aqui.com)`,s=t+1,d=s+(l||"texto").length;break;default:return}e.value=o.substring(0,t)+n+o.substring(i),e.focus(),e.setSelectionRange(s,d),e.dispatchEvent(new Event("input",{bubbles:!0}))}function P(e,a){const t=m.blocks[e];m.blocks[e]=m.blocks[a],m.blocks[a]=t,p(!0),x()}function z(){const e=document.getElementById("add-block-modal"),a=document.getElementById("add-block-trigger"),t=document.getElementById("close-modal-btn"),i=document.getElementById("modal-overlay"),o=document.getElementById("available-blocks-grid");if(!e||!a||!t||!o)return;o.innerHTML=Object.values(M).map(n=>`
        <button class="available-block-item" data-block-type="${n.type}">
          <div class="available-block-item__title">${n.label}</div>
          <div class="available-block-item__desc">${n.description}</div>
        </button>
      `).join(""),a.addEventListener("click",()=>{e.classList.remove("hidden"),e.setAttribute("aria-hidden","false")});const l=()=>{e.classList.add("hidden"),e.setAttribute("aria-hidden","true")};t.addEventListener("click",l),i?.addEventListener("click",l),o.addEventListener("click",n=>{const s=n.target.closest("[data-block-type]");if(!s)return;const d=s.getAttribute("data-block-type"),b=D[d];b&&m&&(m.blocks.push(JSON.parse(JSON.stringify(b))),p(!0),x(),l(),setTimeout(()=>{const f=document.getElementById("blocks-list");if(f){const c=f.querySelectorAll(".block-card");c.length>0&&c[c.length-1].scrollIntoView({behavior:"smooth"})}},100))})}async function Q(){if(O==="global"){await W();return}if(!L||!m)return;const e=document.getElementById("save-status"),a=document.getElementById("save-btn");e&&(e.textContent="Salvando...",e.className="save-status saving"),a&&(a.disabled=!0);try{const{id:t,...i}=m,o=await fetch("/api/save-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pageId:L,content:i})});if(o.ok){const l=await o.json();l.success?(p(!1),B[L]=JSON.parse(JSON.stringify(m))):(y("Erro ao Salvar","Erro ao salvar página: "+l.error),p(!0))}else{const l=await o.json();y("Falha na Requisição","Falha na requisição de página: "+(l.error||o.statusText)),p(!0)}}catch(t){y("Erro de Rede","Erro de rede: "+String(t)),p(!0)}finally{a&&(a.disabled=!1)}}async function W(){if(!u)return;const e=document.getElementById("save-status"),a=document.getElementById("save-btn");e&&(e.textContent="Salvando...",e.className="save-status saving"),a&&(a.disabled=!0);try{const t=await fetch("/api/save-global",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u})});if(t.ok){const i=await t.json();i.success?(p(!1),Object.assign(T,JSON.parse(JSON.stringify(u)))):(y("Erro ao Salvar","Erro ao salvar configurações globais: "+i.error),p(!0))}else{const i=await t.json();y("Falha na Requisição","Falha na requisição global: "+(i.error||t.statusText)),p(!0)}}catch(t){y("Erro de Rede","Erro de rede global: "+String(t)),p(!0)}finally{a&&(a.disabled=!1)}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}let C=null;function I(e){return new Promise(a=>{const t=document.getElementById("confirm-modal"),i=document.getElementById("confirm-modal-title"),o=document.getElementById("confirm-modal-message"),l=document.getElementById("confirm-modal-confirm"),n=document.getElementById("confirm-modal-cancel");if(!t||!i||!o||!l||!n){a(!1);return}i.textContent=e.title||"Confirmação",o.textContent=e.message,l.textContent=e.confirmLabel||"Confirmar",n.textContent=e.cancelLabel||"Cancelar",e.isAlert?(n.style.display="none",l.style.boxShadow="0 0 15px var(--glow-cyan-focus)"):(n.style.display="",l.style.boxShadow=""),t.classList.add("active"),t.setAttribute("aria-hidden","false"),C=a})}function y(e,a){return I({title:e,message:a,confirmLabel:"OK",isAlert:!0})}function k(e){const a=document.getElementById("confirm-modal");a&&(a.classList.remove("active"),a.setAttribute("aria-hidden","true")),C&&(C(e),C=null)}document.addEventListener("click",e=>{const a=e.target.closest(".carousel-nav-btn, .gallery-nav-btn");if(!a)return;const t=a.classList.contains("next")?1:-1,o=a.closest(".carousel-container-outer, .gallery-container-outer")?.querySelector(".carousel-track, .gallery-track");if(o){const l=o.firstElementChild?.getBoundingClientRect().width||o.clientWidth;o.scrollBy({left:l*t,behavior:"smooth"})}});
