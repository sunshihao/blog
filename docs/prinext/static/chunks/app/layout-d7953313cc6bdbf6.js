(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5243:function(e,t,n){Promise.resolve().then(n.bind(n,5433)),Promise.resolve().then(n.bind(n,8245)),Promise.resolve().then(n.t.bind(n,9179,23)),Promise.resolve().then(n.bind(n,7808)),Promise.resolve().then(n.bind(n,2962))},5433:function(e,t,n){"use strict";n.d(t,{F:function(){return i},ThemeProvider:function(){return d}});var a=n(8949),c=["light","dark"],o="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=a.createContext(void 0),s={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=a.useContext(l))?e:s},d=e=>a.useContext(l)?e.children:a.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:d=u,defaultTheme:m=r?"system":"light",attribute:y="data-theme",value:b,children:p,nonce:w}=e,[C,T]=a.useState(()=>h(i,m)),[k,S]=a.useState(()=>h(i)),_=b?Object.values(b):d,E=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=v());let a=b?b[t]:t,o=n?g():null,l=document.documentElement;if("class"===y?(l.classList.remove(..._),a&&l.classList.add(a)):a?l.setAttribute(y,a):l.removeAttribute(y),s){let e=c.includes(m)?m:null,n=c.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),j=a.useCallback(e=>{let t="function"==typeof e?e(e):e;T(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),I=a.useCallback(e=>{S(v(e)),"system"===C&&r&&!t&&E("system")},[C,t]);a.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(I),I(e),()=>e.removeListener(I)},[I]),a.useEffect(()=>{let e=e=>{e.key===i&&j(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),a.useEffect(()=>{E(null!=t?t:C)},[t,C]);let x=a.useMemo(()=>({theme:C,setTheme:j,forcedTheme:t,resolvedTheme:"system"===C?k:C,themes:r?[...d,"system"]:d,systemTheme:r?k:void 0}),[C,j,t,k,r,d]);return a.createElement(l.Provider,{value:x},a.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:d,defaultTheme:m,attribute:y,value:b,children:p,attrs:_,nonce:w}),p)},f=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:d,attrs:u,nonce:m}=e,f="system"===i,h="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),g=s?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=d?d[e]:e,o=t?e+"|| ''":"'".concat(a,"'"),l="";return s&&n&&!t&&c.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||a?l+="c.add(".concat(o,")"):l+="null":a&&(l+="d[s](n,".concat(o,")")),l},y=t?"!function(){".concat(h).concat(v(t),"}()"):l?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}").concat(f?"":"else{"+v(i,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(g,"}catch(t){}}();");return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})}),h=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},2885:function(e,t,n){"use strict";n.d(t,{default:function(){return c.a}});var a=n(857),c=n.n(a)},2178:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return a},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7808:function(e,t,n){"use strict";var a=n(8392),c=n(2885);t.default=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.default,{id:"baidu-tongji",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:'\n          var _hmt = _hmt || [];\n          (function() {\n            var hm = document.createElement("script");\n            hm.src = "<https://hm.baidu.com/hm.js?'.concat("123",'";\n            var s = document.getElementsByTagName("script")[0]; \n            s.parentNode.insertBefore(hm, s);\n          })();\n          ')}})})},2962:function(e,t,n){"use strict";var a=n(8392),c=n(2885);t.default=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat("123")}),(0,a.jsx)(c.default,{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat("123","', {\n            page_path: window.location.pathname,\n            });\n          ")}})]})},9179:function(){}},function(e){e.O(0,[46,245,857,936,904,744],function(){return e(e.s=5243)}),_N_E=e.O()}]);