(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15,20],{235:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"i",function(){return o}),n.d(e,"h",function(){return l}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"b",function(){return p}),n.d(e,"d",function(){return f}),n.d(e,"k",function(){return d}),n.d(e,"l",function(){return h}),n.d(e,"c",function(){return m}),n.d(e,"j",function(){return g});n(89);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(i,"").replace(r,"")}function a(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(a(t))return t;const e=t.match(i),n=e?e[0]:"",r=l(t);return s.test(r)?t:r+".html"+n}function f(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&l(t.path)===l(e)}function d(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=l(e);for(let n=0;n<t.length;n++)if(l(t[n].path)===i)return Object.assign({},t[n],{type:"page",path:p(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,i){const{pages:r,themeConfig:s}=n,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const l=o.sidebar||s.sidebar;if(l){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,l);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},236:function(t,e,n){},237:function(t,e,n){"use strict";n.r(e);var i=n(235),r={props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.e,isMailto:i.f,isTel:i.g}},s=n(14),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);e.default=o.exports},238:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},r=(n(239),n(14)),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.default=s.exports},239:function(t,e,n){"use strict";n(236)},240:function(t,e,n){},245:function(t,e,n){"use strict";n(240)},247:function(t,e,n){"use strict";n.r(e);var i=n(237),r=n(238),s={components:{NavLink:i.default,DropdownTransition:r.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},o=(n(245),n(14)),l=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.title)+":")]),t._v(" "),n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"text"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null);e.default=l.exports}}]);