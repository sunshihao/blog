(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{1034:function(e,t,a){Promise.resolve().then(a.t.bind(a,4543,23)),Promise.resolve().then(a.t.bind(a,2219,23)),Promise.resolve().then(a.bind(a,3205)),Promise.resolve().then(a.bind(a,7726)),Promise.resolve().then(a.bind(a,4662))},3269:function(e,t,a){"use strict";a.d(t,{O:function(){return l}});var n=a(7574),i=a(5623);let r=n.z.object({NODE_ENV:n.z.enum(["development","test","production"]),VERCEL_ENV:n.z.enum(["development","preview","production"]).default("development")}),o=n.z.object({NEXT_PUBLIC_SITE_URL:n.z.string().min(1),NEXT_PUBLIC_SITE_EMAIL_FROM:n.z.string().min(1),NEXT_PUBLIC_SITE_LINK_PREVIEW_ENABLED:n.z.boolean().optional().default(!1)}),s={NODE_ENV:"production",VERCEL_ENV:i.env.VERCEL_ENV,NEXT_PUBLIC_SITE_URL:"https://dhc.ink",NEXT_PUBLIC_SITE_EMAIL_FROM:"http://sunshihao945@outlook.com",SITE_NOTIFICATION_EMAIL_TO:"http://sunshihao945@outlook.com",LINK_PREVIEW_API_BASE_URL:"https://dhc.ink"};r.merge(o);let l=i.env;if(!1==!!i.env.SKIP_ENV_VALIDATION){let e=o.safeParse(s);if(!1===e.success)throw console.error("❌ Invalid environment variables:",e.error.flatten().fieldErrors),Error("Invalid environment variables");l=new Proxy(e.data,{get(e,t){if("string"==typeof t){if(!t.startsWith("NEXT_PUBLIC_"))throw Error("❌ Attempted to access a server-side environment variable on the client");return e[t]}}})}},3205:function(e,t,a){"use strict";a.d(t,{GlobalBg:function(){return o}});var n=a(8392),i=a(5433),r=a(8949);function o(){let{theme:e}=(0,i.F)(),[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a(!0)},[]),(0,n.jsx)("div",{className:"z-[-1] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ".concat("dark"===e&&t?"[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]":"[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]")})}},7726:function(e,t,a){"use strict";a.d(t,{Header:function(){return F}});var n=a(6564),i=a(8392),r=a(6066);function o(e,t,a){return Math.min(Math.max(e,Math.min(t,a)),Math.max(t,a))}var s=a(6928),l=a(5756),d=a(3290),c=a(8283),m=a(3809),h=a(8949),u=a(9226),f=a(4469),p={src:"https://blog-omega-five-74.vercel.app/_next/static/media/logo.d3f4655a.webp",height:256,width:256,blurDataURL:"data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDQAAAABL6AmAAFGLQ0V9q0aERG4Q0FBJKmtojQDxwwC0hwgIEUBRPQ/zo5m8BVcoAt0BTf4Z0cDVlA4IE4AAADwAQCdASoIAAgAAkA4JaQADLADT8zycAAA/vNe5sP63luO6dLJ/7iQ8oZgK3NxVtLqG0YyAx768x5sfo2l6NV7hWjgpWA6ZJ9M4eQAAAA=",blurWidth:8,blurHeight:8};let x=Object.assign(function(e){let{className:t,...a}=e;return(0,i.jsx)("div",{className:(0,r.cn)(t,"h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),...a})},{Image:function(e){let{large:t=!1,className:a,href:n,alt:o,...s}=e;return(0,i.jsx)(f.default,{"aria-label":"主页",className:(0,r.cn)(a,"pointer-events-auto"),href:null!=n?n:"/",...s,children:(0,i.jsx)(u.default,{src:p,alt:"",sizes:t?"4rem":"2.25rem",className:(0,r.cn)("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",t?"h-16 w-16":"h-9 w-9"),unoptimized:!0})})}}),g=h.forwardRef(function(e,t){let{className:a,children:n,...o}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("sm:px-8",a),...o,children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl lg:px-8",children:n})})}),v=h.forwardRef(function(e,t){let{className:a,children:n,...o}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("relative px-4 sm:px-8 lg:px-12",a),...o,children:(0,i.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-5xl",children:n})})}),b=Object.assign(h.forwardRef(function(e,t){let{children:a,...n}=e;return(0,i.jsx)(g,{ref:t,...n,children:(0,i.jsx)(v,{children:a})})}),{Outer:g,Inner:v});var w=a(4334),N=a(4669);let j=h.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,i.jsxs)(w.fC,{ref:t,className:(0,r.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",a),...o,children:[n,(0,i.jsx)(E,{})]})});j.displayName=w.fC.displayName;let A=h.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(w.aV,{ref:t,className:(0,r.cn)("group flex flex-1 list-none items-center justify-center space-x-1",a),...n})});A.displayName=w.aV.displayName;let y=w.ck,_=(0,N.j)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),k=h.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,i.jsx)(w.xz,{ref:t,className:(0,r.cn)(_(),"group",a),...o,children:n})});k.displayName=w.xz.displayName;let z=h.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(w.VY,{ref:t,className:(0,r.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",a),...n})});z.displayName=w.VY.displayName,w.rU;let E=h.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)("div",{className:(0,r.cn)("absolute left-[-14px] mt-2 top-full flex justify-center"),children:(0,i.jsx)(w.l_,{className:(0,r.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",a),ref:t,...n})})});E.displayName=w.l_.displayName,h.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(w.z$,{ref:t,className:(0,r.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",a),...n,children:(0,i.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=w.z$.displayName;var I=a(1217);let L=I.fC,R=I.xz,C=h.forwardRef((e,t)=>{let{className:a,align:n="center",sideOffset:o=4,...s}=e;return(0,i.jsx)(I.h_,{children:(0,i.jsx)(I.VY,{ref:t,align:n,sideOffset:o,className:(0,r.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})})});C.displayName=I.VY.displayName;var B=a(8454);function V(){let e=(0,n._)(["radial-gradient(","px circle at ","px ","px, var(--spotlight-color) 0%, transparent 65%)"]);return V=function(){return e},e}let U=B.Z.navigationItems,P=e=>{var t;let{children:a,href:n}=e;return(0,i.jsx)(j,{delayDuration:100,children:(0,i.jsx)(A,{children:(0,i.jsxs)(y,{children:[(0,i.jsx)(k,{className:"bg-transparent px-0 py-0 h-auto",children:a}),(0,i.jsx)(z,{children:null===(t=B.Z.moreItems[n])||void 0===t?void 0:t.map(e=>(0,i.jsx)(f.default,{prefetch:!0,className:"group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10",href:e.href,children:e.text},e.href))})]})})})};function T(e){var t;let{href:a,children:n,menu:o}=e,s=(["/icon"].includes(t=(0,m.usePathname)())?"/more":t)===a,l=()=>(0,i.jsx)(d.E.span,{className:"absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-violet-600/0 via-violet-600/70 to-violet-500/0 dark:from-violet-400/0 dark:via-violet-400/40 dark:to-violet-400/0",layoutId:"active-nav-item"});return(0,i.jsx)("li",{className:(0,r.cn)("relative block whitespace-nowrap px-3 py-2 transition",s?"text-violet-500 dark:text-violet-400":"hover:text-violet-500 dark:hover:text-violet-400"),children:o?(0,i.jsx)(P,{href:a,children:(0,i.jsxs)(i.Fragment,{children:[n,s&&(0,i.jsx)(l,{})]})}):(0,i.jsxs)(f.default,{href:a,prefetch:!0,target:"/feed.xml"===a?"_blank":"_self",children:[n,s&&(0,i.jsx)(l,{})]})})}function M(e){let{href:t,onClose:a,children:n}=e;return(0,i.jsx)("li",{onClick:a,children:(0,i.jsx)(f.default,{href:t,prefetch:!0,className:"block py-2",children:n})})}let S=function(e){let{className:t,...a}=e,n=(0,s.c)(0),o=(0,s.c)(0),c=(0,s.c)(0),m=h.useCallback(e=>{let{clientX:t,clientY:a,currentTarget:i}=e,r=i.getBoundingClientRect();n.set(t-r.left),o.set(a-r.top),c.set(Math.sqrt(r.width**2+r.height**2)/2.5)},[n,o,c]),u=(0,l.Y)(V(),c,n,o);return(0,i.jsxs)("nav",{onMouseMove:m,className:(0,r.cn)("group relative","rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90","shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md","dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10","[--spotlight-color:rgb(236_252_203_/_0.6)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)]",t),...a,children:[(0,i.jsx)(d.E.div,{className:"pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:u},"aria-hidden":"true"}),(0,i.jsx)("ul",{className:"flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 ",children:U.map(e=>{let{href:t,text:a,menu:n}=e;return(0,i.jsx)(T,{href:t,menu:n,children:a},t)})})]})},O=function(e){let[t,a]=h.useState(!1);return(0,i.jsxs)(L,{open:t,...e,children:[(0,i.jsx)(R,{asChild:!0,children:(0,i.jsxs)("button",{onClick:()=>a(!t),className:(0,r.cn)("group flex items-center rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80",e.className),children:["前往",(0,i.jsx)("svg",{viewBox:"0 0 8 6","aria-hidden":"true",className:"ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400",children:(0,i.jsx)("path",{d:"M1.75 1.75 4 4.25l2.25-2.5",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),(0,i.jsx)(C,{className:"w-screen max-w-[300px] p-0",children:(0,i.jsxs)("div",{className:"fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-black dark:ring-zinc-800",children:[(0,i.jsx)("div",{className:"flex flex-row items-center justify-between",children:(0,i.jsx)("h2",{className:"text-sm font-medium text-zinc-600 dark:text-zinc-400",children:"站内导航"})}),(0,i.jsx)("nav",{className:"mt-6",children:(0,i.jsx)("ul",{className:"-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300",children:U.map(e=>{let{href:n,text:r}=e;return(0,i.jsx)(M,{href:n,onClose:()=>a(!t),children:r},n)})})})]})})]})};function D(){let e=(0,n._)(["translate3d(","rem, 0, 0) scale(",")"]);return D=function(){return e},e}function G(){let e=(0,n._)(["translate3d(","rem, 0, 0) scale(",")"]);return G=function(){return e},e}let W=(0,a(218).default)(()=>Promise.all([a.e(245),a.e(840)]).then(a.bind(a,1840)),{loadableGenerated:{webpack:()=>[1840]},ssr:!1});function F(){let e="/"===(0,m.usePathname)(),t=h.useRef(null),a=h.useRef(null),n=h.useRef(!0),u=(0,s.c)(0),f=(0,s.c)(1),p=(0,s.c)(0),g=(0,s.c)(1);h.useEffect(()=>{var i,r;let s=null!==(r=null===(i=a.current)||void 0===i?void 0:i.offsetTop)&&void 0!==r?r:0;function l(e,t){document.documentElement.style.setProperty(e,t)}function d(e){document.documentElement.style.removeProperty(e)}function c(){!function(){if(!t.current)return;let{top:e,height:a}=t.current.getBoundingClientRect(),i=o(window.scrollY,0,document.body.scrollHeight-window.innerHeight);if(n.current&&l("--header-position","sticky"),l("--content-offset","".concat(s,"px")),n.current||i<s)l("--header-height","".concat(s+a,"px")),l("--header-mb","".concat(-s,"px"));else if(e+a<-64){let e=Math.max(a,i-64);l("--header-height","".concat(e,"px")),l("--header-mb","".concat(a-e,"px"))}else 0===e&&(l("--header-height","".concat(i+a,"px")),l("--header-mb","".concat(-i,"px")));0===e&&i>0&&i>=s?(l("--header-inner-position","fixed"),d("--header-top"),d("--avatar-top")):(d("--header-inner-position"),l("--header-top","0px"),l("--avatar-top","0px"))}(),function(){if(!e)return;let t=36/64,a=2/16,n=s-window.scrollY,i=n*(1-t)/s+t;i=o(i,1,t);let r=n*(0-a)/s+a;r=o(r,0,a),u.set(r),f.set(i);let d=1/(t/i);p.set((-a+r)*d),g.set(d),l("--avatar-border-opacity",i===t?"1":"0")}(),n.current=!1}return c(),window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}},[e]);let v=(0,l.Y)(D(),u,f),w=(0,l.Y)(G(),p,g),[N,j]=h.useState(!1),A=h.useCallback(e=>{e.preventDefault(),j(e=>!e)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.E.header,{className:(0,r.cn)("pointer-events-none relative z-50 mb-[var(--header-mb,0px)] flex flex-col",e?"h-[var(--header-height,180px)]":"h-[var(--header-height,64px)]"),layout:!0,layoutRoot:!0,children:[(0,i.jsx)(c.M,{children:e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:a,className:"order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"}),(0,i.jsx)(b,{className:"top-0 order-last -mb-3 pt-3",style:{position:"var(--header-position)"},children:(0,i.jsx)(d.E.div,{className:"top-[var(--avatar-top,theme(spacing.3))] w-full select-none",style:{position:"var(--header-inner-position)"},initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{type:"spring",damping:30,stiffness:200},children:(0,i.jsxs)(d.E.div,{className:"relative inline-flex",layoutId:"avatar",layout:!0,onContextMenu:A,children:[(0,i.jsx)(d.E.div,{className:"absolute left-0 top-3 origin-left opacity-[var(--avatar-border-opacity,0)] transition-opacity",style:{transform:w},children:(0,i.jsx)(x,{})}),(0,i.jsx)(d.E.div,{className:"block h-16 w-16 origin-left ",style:{transform:v},children:(0,i.jsx)(x.Image,{large:!0,alt:N,className:"block h-full w-full hover:animate-spin"})})]})})})]})}),(0,i.jsx)("div",{ref:t,className:"top-0 z-10 h-16 pt-6",style:{position:"var(--header-position)"},children:(0,i.jsx)(b,{className:"top-[var(--header-top,theme(spacing.6))] w-full",style:{position:"var(--header-inner-position)"},children:(0,i.jsxs)("div",{className:"relative flex gap-4",children:[(0,i.jsx)(d.E.div,{className:"flex flex-1",initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{type:"spring",damping:30,stiffness:200},children:(0,i.jsx)(c.M,{children:!e&&(0,i.jsx)(d.E.div,{layoutId:"avatar",layout:!0,onContextMenu:A,children:(0,i.jsx)(x,{children:(0,i.jsx)(x.Image,{alt:N})})})})}),(0,i.jsxs)("div",{className:"flex flex-1 justify-end md:justify-center",children:[(0,i.jsx)(O,{className:"pointer-events-auto relative z-50 md:hidden"}),(0,i.jsx)(S,{className:"pointer-events-auto relative z-50 hidden md:block"})]}),(0,i.jsx)(d.E.div,{className:"flex justify-end gap-3 md:flex-1",initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1},children:(0,i.jsx)("div",{className:"pointer-events-auto",children:(0,i.jsx)(W,{})})})]})})})]}),e&&(0,i.jsx)("div",{className:"h-[--content-offset]"})]})}},4662:function(e,t,a){"use strict";a.d(t,{PeekabooLink:function(){return w}});var n=a(8392),i=a(8283),r=a(3290),o=a(9226),s=a(4469),l=a(8949),d=a(881),c=a(6066);let m={"github.com":{src:"https://blog-omega-five-74.vercel.app/_next/static/media/github.ee3e4451.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX////r6+xdYWXy8vP+/v739/dJTVKKjJCcn6GBhIducXUfJCp2eX3f3+AyNzwoLTISFx6kpqmSeSm6AAAACnRSTlOV/////////v7+NtU8GwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwtxrUBwDAQBLB7BvP+y6aJKgGazKmA8BnjsCAGrUU74FNVdTq8/9R+ZnkL1G12XQAKkxJ8O9cBq+kel3UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},h=l.forwardRef((e,t)=>{let{children:a,href:i,favicon:r=!0,className:l,...h}=e,u=new URL(i).host,f=m[u];return i.startsWith("http")?(0,n.jsxs)(s.default,{ref:t,href:i,className:(0,c.cn)("inline-flex place-items-baseline items-baseline gap-0.5 pr-0.5 text-[0.95em] leading-none",l),rel:"noopener noreferrer",target:"_blank",...h,children:[r&&f&&(0,n.jsx)("span",{className:(0,c.cn)("mr-px inline-flex translate-y-0.5",Object.keys(m).includes(u)&&"dark:invert"),children:(0,n.jsx)(o.default,{src:f,alt:"","aria-hidden":"true",className:"inline h-4 w-4 rounded",width:16,height:16,unoptimized:!0,priority:!1})}),a,f&&(0,n.jsx)(d.ExternalLinkIcon,{width:"0.95em",height:"0.95em",className:"inline-block translate-y-0.5","aria-hidden":"true"})]}):(0,n.jsx)(s.default,{href:i,className:l,ref:t,...h,children:a})});h.displayName="RichLink";var u=a(6193);let f=u.fC,p=u.h_,x=u.xz,g=l.forwardRef((e,t)=>{let{className:a,align:i="center",sideOffset:r=4,...o}=e;return(0,n.jsx)(u.VY,{ref:t,align:i,sideOffset:r,className:(0,c.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})});g.displayName=u.VY.displayName;var v=a(9371),b=a(3269);function w(e){let{href:t,children:a,className:d,...m}=e,[u,w]=l.useState(!1);return t.startsWith("http")?b.O.NEXT_PUBLIC_SITE_LINK_PREVIEW_ENABLED?(0,n.jsxs)(f,{openDelay:0,closeDelay:50,onOpenChange:function(e){w(e)},children:[(0,n.jsx)(x,{asChild:!0,children:(0,n.jsx)(h,{href:t,className:(0,c.cn)("font-semibold text-zinc-800 hover:underline dark:text-zinc-100",d),target:"_blank",...m,children:a})}),(0,n.jsx)(i.M,{mode:"wait",children:u&&(0,n.jsx)(p,{forceMount:!0,children:(0,n.jsx)(g,{asChild:!0,collisionPadding:250,children:(0,n.jsx)(r.E.div,{className:"pointer-events-none relative z-50 w-[400px] origin-top overflow-hidden !p-0",initial:{opacity:0,scale:.965,y:9,height:0},animate:{opacity:1,scale:1,y:0,height:250},exit:{opacity:0,scale:.98,y:8,height:0},transition:{duration:.2},children:(0,n.jsx)(o.default,{src:"/api/link-preview?url=".concat(t),alt:"".concat(t," 的预览图"),className:"pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl object-cover",placeholder:"blur",blurDataURL:(0,v.F)(16,16),width:400,height:250,unoptimized:!0})})})})})]}):(0,n.jsx)(h,{href:t,className:(0,c.cn)("font-semibold text-zinc-800 hover:underline dark:text-zinc-100",d),target:"_blank",...m,children:a}):(0,n.jsx)(s.default,{href:t,className:(0,c.cn)(d),...m,children:a})}},8454:function(e,t,a){"use strict";let n=new URL("https://luckysnail.cn/"),i={name:"blog | 前端 | 开发者",description:"我是William Sun，一名充满热情的前端开发工程师。我热衷于探索和体验最新技术，特别是人工智能（AI），并在日常工作中去使用它们，来提升我的工作效率。我的目标是积极参与开源社区，为开源项目贡献自己的力量。正如我的名字，我相信越努力，越幸运",url:n.href,ogImage:n.origin+"/og.png",metadataBase:"/",keywords:["blog","前端","开发者","AI","编程","学习笔记","程序员"],authors:"William Sun",email:"4sh945@gmail.com",authorsCN:"William Sun",authorsUrl:"https://github.com/sunshihao",social:[{href:"https://github.com/sunshihao",text:"github",icon:"GitHubIcon"},{href:"4sh945@gmail.com",text:"邮箱",icon:"MailIcon"},{href:"https://x.com/haozhan05554957",text:"推特（X）",icon:"XIcon"}],themeColors:[{media:"(prefers-color-scheme: dark)",color:"#000212"},{media:"(prefers-color-scheme: light)",color:"#fafafa"}],defaultNextTheme:"dark",icons:{icon:"/favicon.ico",shortcut:"/logo.png",apple:"/logo.png"},navigationItems:[{href:"/",text:"首页"},{href:"/posts",text:"博客"},{href:"/about",text:"关于我"}],moreItems:{"/more":[{href:"/icon",text:"图标库"},{href:"/admin",text:"管理"}]},footerItems:[{href:"/blog",text:"首页"}],locale:"zh-CN",siteHostList:["luckysnail.cn","lucky-snail.vercel.app"]},r={...i,openGraph:{type:"website",locale:i.locale,url:i.url,title:i.authors+i.name,description:i.description,siteName:i.name,images:["".concat(i.url,"og.png")]},twitter:{card:"summary_large_image",title:i.authors+i.name,description:i.description,images:["".concat(i.url,"og.png")],creator:"@haozhan05554957"}};t.Z=r},9371:function(e,t,a){"use strict";a.d(t,{F:function(){return r}});let n=(e,t)=>'\n<svg width="'.concat(e,'" height="').concat(t,'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" opacity="0.5">\n  <defs>\n    <linearGradient id="g-image-shimmer">\n      <stop stop-color="#ccc" offset="20%" />\n      <stop stop-color="#eee" offset="50%" />\n      <stop stop-color="#ccc" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(e,'" height="').concat(t,'" fill="#333" />\n  <rect id="r" width="').concat(e,'" height="').concat(t,'" fill="url(#g-image-shimmer)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),i=e=>window.btoa(e);function r(e,t){return"data:image/svg+xml;base64,".concat(i(n(e,t)))}}},function(e){e.O(0,[779,739,138,531,103,868,936,904,744],function(){return e(e.s=1034)}),_N_E=e.O()}]);