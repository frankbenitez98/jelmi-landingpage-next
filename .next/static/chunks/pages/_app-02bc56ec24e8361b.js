(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1444:function(e,t,r){let n=r(7294),l=n.forwardRef(function({title:e,titleId:t,...r},l){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});e.exports=l},3837:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8512)}])},6821:function(e,t,r){"use strict";var n=r(5893);r(7294);let l=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"max-w-screen-xl mx-auto px-5",children:t})};t.Z=l},3203:function(e,t,r){"use strict";var n=r(5893),l=r(1664),o=r.n(l);r(7294);let i=e=>{let{href:t,children:r}=e;return(0,n.jsx)(o(),{className:"rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent",href:t,children:r})};t.Z=i},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,l=r(2648).Z,o=r(1598).Z,i=r(7273).Z,a=o(r(7294)),s=l(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=l(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,l,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==l?void 0:l.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;l.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:l,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:p,placeholder:h,loading:g,srcString:v,config:x,unoptimized:b,loader:y,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:E,setShowAltText:C,onLoad:_,onError:A}=e,S=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},S,r,{width:o,height:l,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:g,style:n({},u,d),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&m(e,v,h,w,j,E,b))},[v,h,w,j,E,A,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,w,j,E,b)},onError:e=>{C(!0),"blur"===h&&E(!0),A&&A(e)}})))}),x=a.forwardRef((e,t)=>{let r,l;var o,{src:m,sizes:x,unoptimized:b=!1,priority:y=!1,loading:w,className:j,quality:E,width:C,height:_,fill:A,style:S,onLoad:R,onLoadingComplete:k,placeholder:O="empty",blurDataURL:M,layout:N,objectFit:P,objectPosition:D,lazyBoundary:z,lazyRoot:I}=e,L=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=a.useContext(d.ImageConfigContext),Z=a.useMemo(()=>{let e=p||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[T]),B=L,U=B.loader||f.default;delete B.loader;let F="__next_img_default"in U;if(F){if("custom"===Z.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:r}=t,n=i(t,["config"]);return e(n)}}if(N){"fill"===N&&(A=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(S=n({},S,e));let t={responsive:"100vw",fill:"100vw"}[N];t&&!x&&(x=t)}let H="",Q=g(C),K=g(_);if("object"==typeof(o=m)&&(h(o)||void 0!==o.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,l=e.blurHeight,M=M||e.blurDataURL,H=e.src,!A){if(Q||K){if(Q&&!K){let t=Q/e.width;K=Math.round(e.height*t)}else if(!Q&&K){let t=K/e.height;Q=Math.round(e.width*t)}}else Q=e.width,K=e.height}}let V=!y&&("lazy"===w||void 0===w);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),Z.unoptimized&&(b=!0),F&&m.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(b=!0);let[W,X]=a.useState(!1),[q,G]=a.useState(!1),J=g(E),Y=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:D}:{},q?{}:{color:"transparent"},S),$="blur"===O&&M&&!W?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Q,heightInt:K,blurWidth:r,blurHeight:l,blurDataURL:M}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:l,quality:o,sizes:i,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:l}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:o,kind:"x"}}(t,l,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,n)=>"".concat(a({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:r,quality:o,width:s[u]})}}({config:Z,src:m,unoptimized:b,width:Q,quality:J,sizes:x,loader:U}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},en=a.useRef(R);a.useEffect(()=>{en.current=R},[R]);let el=a.useRef(k);a.useEffect(()=>{el.current=k},[k]);let eo=n({isLazy:V,imgAttributes:ee,heightInt:K,widthInt:Q,qualityInt:J,className:j,imgStyle:Y,blurStyle:$,loading:w,config:Z,fill:A,unoptimized:b,placeholder:O,loader:U,srcString:et,onLoadRef:en,onLoadingCompleteRef:el,setBlurComplete:X,setShowAltText:G},B);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},eo,{ref:t})),y?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),i=r(1003),a=r(7795),s=r(4465),c=r(2692),u=r(8245),d=r(9246),f=r(227),p=r(3468);let h=new Set;function g(e,t,r,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:v,prefetch:x,passHref:b,replace:y,shallow:w,scroll:j,locale:E,onClick:C,onMouseEnter:_,onTouchStart:A,legacyBehavior:S=!1}=e,R=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,S&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let k=!1!==x,O=o.default.useContext(c.RouterContext),M=o.default.useContext(u.AppRouterContext),N=null!=O?O:M,P=!O,{href:D,as:z}=o.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:h?m(h):e}}let[e,t]=i.resolveHref(O,a,!0);return{href:e,as:h?i.resolveHref(O,h):t||e}},[O,a,h]),I=o.default.useRef(D),L=o.default.useRef(z);S&&(n=o.default.Children.only(r));let T=S?n&&"object"==typeof n&&n.ref:t,[Z,B,U]=d.useIntersection({rootMargin:"200px"}),F=o.default.useCallback(e=>{(L.current!==z||I.current!==D)&&(U(),L.current=z,I.current=D),Z(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[z,T,D,U,Z]);o.default.useEffect(()=>{N&&B&&k&&g(N,D,z,{locale:E})},[z,D,B,E,k,null==O?void 0:O.locale,N]);let H={ref:F,onClick(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,l,a,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};u?o.default.startTransition(h):h()}(e,N,D,z,y,w,j,E,P,k)},onMouseEnter(e){S||"function"!=typeof _||_(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(k||!P)&&g(N,D,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof A||A(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(k||!P)&&g(N,D,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&f.getDomainLocale(z,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);H.href=t||p.addBasePath(s.addLocale(z,e,null==O?void 0:O.defaultLocale))}return S?o.default.cloneElement(n,H):o.default.createElement("a",Object.assign({},R,H),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!o,[u,d]=n.useState(!1),f=n.useRef(null),p=n.useCallback(e=>{f.current=e},[]);n.useEffect(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},a.push(r),i.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=l.requestIdleCallback(()=>d(!0));return()=>l.cancelIdleCallback(e)}},[c,r,t,u,f.current]);let h=n.useCallback(()=>{d(!1)},[]);return[p,u,h]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:l,blurDataURL:o}=e,i=n||t,a=l||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&l?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:l}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},8512:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),l=r(7294);let o=()=>(0,n.jsxs)("footer",{className:"my-20",children:[(0,n.jsxs)("p",{className:"text-center text-sm text-slate-500",children:["Copyright \xa9 ",new Date().getFullYear()," Jelmi. Todos los derechos reservados."]}),(0,n.jsx)("p",{className:"text-center text-xs text-slate-500 mt-1",children:"Hecho desde \uD83C\uDDE8\uD83C\uDDF4 para potenciar \uD83D\uDE80"})]});var i=r(1664),a=r.n(i),s=r(5675),c=r.n(s),u={src:"/_next/static/media/logo.a8043f48.png",height:413,width:781,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQklEQVR42gXAIQ5AUAAA0OcmqhsYXdTEv/lRsgmSxDTBDXTZ5h/vj1eH1QkKZoPKZVErRVrJ53D7bXYeo0nQa0QhA3CeDAsB4c9XAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},d=r(6821),f=r(1444),p=r(3203);let h=[{title:"Cont\xe1ctanos",path:"/contact"}],g=()=>{let[e,t]=(0,l.useState)(!1),r=()=>{t(!e)};return(0,n.jsx)(d.Z,{children:(0,n.jsxs)("header",{className:"flex flex-col lg:flex-row justify-between items-center my-5",children:[(0,n.jsxs)("div",{className:"flex w-full lg:w-auto items-center justify-between",children:[(0,n.jsx)(a(),{href:"/",className:"text-lg",children:(0,n.jsx)(c(),{src:u,alt:"Jelmi Recruitment | Logo | Top talent",width:100,height:42,sizes:"(max-width: 200px) 100vw, 80px"})}),(0,n.jsx)("div",{className:"block lg:hidden",onClick:r,children:(0,n.jsx)(f,{className:"w-8 h-8 text-gray-800"})})]}),e&&(0,n.jsx)("div",{className:"lg:flex flex-grow items-center"+(e?" flex":" hidden"),children:(0,n.jsx)("ul",{className:"flex flex-col lg:flex-row lg:gap-3",children:h.map((e,t)=>(0,n.jsxs)(n.Fragment,{children:[e.children&&(0,n.jsx)(Dropdown,{title:e.title,children:e.children,lastItem:t===h.length-1}),!e.children&&(0,n.jsx)("li",{children:(0,n.jsx)(p.Z,{href:e.path,children:e.title})},e.title)]}))})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"hidden lg:flex items-center gap-4",children:[(0,n.jsx)("p",{children:"\xbfNecesitas contratar?"}),(0,n.jsx)(p.Z,{href:"/contact",children:"Cont\xe1ctanos"})]})})]})})},m=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),t,(0,n.jsx)(o,{})]})};function v(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(m,{children:(0,n.jsx)(t,{...r})})}r(7475)},7475:function(){},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(880)}),_N_E=e.O()}]);