import{U as o,a1 as p,a2 as u,a3 as l,a4 as c,a5 as f,a6 as d,a7 as m,a8 as h,a9 as g,aa as A,d as P,u as v,y,x as C,ab as b,ac as w,ad as E,ae as R}from"./chunks/framework.Bw_m_BM3.js";import{t as S}from"./chunks/theme.CxgXHcn-.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),_=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&b(),w(),E(),s.setup&&s.setup(),()=>R(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(_)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{T as createApp};
