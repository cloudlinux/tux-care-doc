(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"i",function(){return a}),n.d(e,"h",function(){return o}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"b",function(){return p}),n.d(e,"d",function(){return d}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return f}),n.d(e,"c",function(){return m}),n.d(e,"j",function(){return g});n(89);const r=/#.*$/,s=/\.(md|html)$/,i=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(r,"").replace(s,"")}function c(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(c(t))return t;const e=t.match(r),n=e?e[0]:"",s=o(t);return i.test(s)?t:s+".html"+n}function d(t,e){const n=t.hash,s=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function h(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const r=o(e);for(let n=0;n<t.length;n++)if(o(t[n].path)===r)return Object.assign({},t[n],{type:"page",path:p(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,r){const{pages:s,themeConfig:i}=n,a=r&&i.locales&&i.locales[r]||i;if("auto"===(t.frontmatter.sidebar||a.sidebar||i.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||i.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(r))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,r,s){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const i=e.children||[];return{type:"group",title:e.title,children:i.map(e=>t(e,n,r,!0)),collapsable:!1!==e.collapsable}}})(e,s,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},254:function(t,e,n){},255:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){},270:function(t,e,n){"use strict";n(254)},271:function(t,e,n){"use strict";n(255)},272:function(t,e,n){"use strict";n(256)},273:function(t,e,n){"use strict";n(257)},280:function(t,e,n){"use strict";n.r(e);var r=n(235),s=(n(89),{name:"Breadcrumb",computed:{bread(){const t=this.$page.path.split("/");t[t.length-1].length||t.pop();let e="";const n=[];for(let r=0;r<t.length;r++){e+=t[r];const s=this.$site.pages.find(t=>t.path===e||t.path===e+"/");e+="/",null!=s&&"/"!==s.path&&n.push({path:s.path,title:s.frontmatter.breadcrumb||s.title})}return n}}}),i=(n(270),n(14)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-wrapper"},[n("span",{staticClass:"breadcrumb-title"},[t._v(t._s(t.$siteTitle)+":")]),t._v(" "),t._l(t.bread,function(e){return n("router-link",{key:e.path,staticClass:"breadcrumb",attrs:{to:e.path}},[t._v("\n    "+t._s(e.title)+"\n  ")])})],2)},[],!1,null,"5e0e0acf",null).exports,o={name:"PageNav",props:["sidebarItems"],computed:{prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(r.k)(this.$site.pages,t,this.$route.path):this.resolvePrev(this.$page,this.sidebarItems)},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(r.k)(this.$site.pages,t,this.$route.path):this.resolveNext(this.$page,this.sidebarItems)}},methods:{resolvePrev(t,e){return this.find(t,e,-1)},resolveNext(t,e){return this.find(t,e,1)},find(t,e,n){const r=[];e.forEach(t=>{"group"===t.type?r.push(...t.children||[]):r.push(t)});for(let e=0;e<r.length;e++){const s=r[e];if("page"===s.type&&s.path===t.path)return r[e+n]}}}},c=(n(271),Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[t.prev?n("router-link",{staticClass:"nav-arrow left",attrs:{to:t.prev.path}}):t._e(),t._v(" "),t.next?n("router-link",{staticClass:"nav-arrow right",attrs:{to:t.next.path}}):t._e()],1):t._e()},[],!1,null,null,null).exports),l={name:"BackToTop",props:{boundary:{type:Number,default:200}},data:()=>({isVisible:!1}),mounted(){window&&(this.handleScroll(),window.addEventListener("scroll",this.handleScroll))},destroyed(){window&&window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isVisible=window.pageYOffset>this.boundary},goToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},u=(n(272),{props:["sidebarItems"],components:{Breadcrumb:a,PageNav:c,BackToTop:Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-to-top"},[e("a",{staticClass:"nav-arrow top back-to-top__link",class:{active:this.isVisible},on:{click:this.goToTop}})])},[],!1,null,"c64d4a1e",null).exports},computed:{lastUpdated(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:n="",docsBranch:s="master",docsRepo:i=t}=this.$site.themeConfig;let a=Object(r.h)(this.$page.path);return r.a.test(a)?a+="README.md":a+=".md",i&&e?this.createEditLink(t,i,n,s,a):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(t)){return(r.i.test(e)?e:t).replace(r.a,"")+`/${s}`+(n?"/"+n.replace(r.a,""):"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(r.i.test(e)?e:`https://github.com/${e}`).replace(r.a,"")+`/edit/${s}`+(n?"/"+n.replace(r.a,""):"")+i}}}),p=(n(273),Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Breadcrumb",{staticClass:"page-breadcrumb"}),t._v(" "),n("div",{staticClass:"page-nav-wrapper"},[n("PageNav",{attrs:{"sidebar-items":t.sidebarItems}})],1),t._v(" "),n("Content",{staticClass:"content",attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),n("BackToTop"),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));e.default=p.exports}}]);