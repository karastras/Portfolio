(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),r=c(8),a=c.n(r),i=(c(22),c(3)),o=c(4),l=(c(33),c(1)),d=function(e){var t=e.open,c=e.closed;return Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("ul",{className:t?"nav-list nav-list--open":"nav-list nav-list--closed",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.Link,{activeClass:"active",className:"nav-links",spy:!0,smooth:!0,to:"Home",onClick:c,children:"Accueil"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,to:"Career",onClick:c,children:"Parcours"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,to:"Projects",onClick:c,children:"Projets"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,to:"About",onClick:c,children:"A mon sujet"})})]})})},j=(c(35),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){document.body.style.overflow=c?"hidden":"unset"}),[c]),Object(l.jsxs)("div",{className:"burger",children:[Object(l.jsxs)("button",{className:c?"burger-button burger-button--open ":"burger-button burger-button--closed",onClick:function(){n(!c)},children:[Object(l.jsx)("div",{className:c?"burger-style burger-style--open--1 ":"burger-style"}),Object(l.jsx)("div",{className:c?"burger-style burger-style--open--2 ":"burger-style"}),Object(l.jsx)("div",{className:c?"burger-style burger-style--open--3 ":"burger-style"}),Object(l.jsx)("div",{className:"burger-style-text",children:"Menu"})]}),Object(l.jsx)("div",{className:"burger-nav",children:Object(l.jsx)(d,{open:c,closed:function(){n(!1)}})})]})}),u=c.p+"static/media/pc.cbd4f0ef.png",b=c.p+"static/media/cat.9f83ed2f.png",h=c.p+"static/media/unicorn.9861484d.png",O=c.p+"static/media/star.325448c0.png",m=(c(36),u),x=O,f=function(e){var t=e.enter,c=e.entered,n=Object(s.useState)(!0),r=Object(i.a)(n,2),a=r[0],o=r[1],d=function(){o(!a)},u="header-enter";t&&(u="header-image"),a||(u="header-image--turn");var O=Object(s.useState)(0),f=Object(i.a)(O,2),p=f[0],v=f[1],g=Object(s.useState)(0),N=Object(i.a)(g,2),k=N[0],C=N[1];p>=10&&(m=b),k>=20&&(x=h,u="header-image--unicorn");var A="";"header-image--unicorn"===u&&(A="header-picture");var y=Object(s.useState)(!1),E=Object(i.a)(y,2),I=E[0],q=E[1];return Object(s.useEffect)((function(){"undefined"!==typeof window&&window.addEventListener("scroll",(function(){return q(window.pageYOffset>0)}))}),[]),Object(l.jsx)("div",{id:"".concat(I?"":"Home"),className:"header ".concat(I?"header-scrolling":"header"," ").concat(t?"header":"header-before"),children:Object(l.jsxs)("div",{className:"".concat(t?"header-container":"header-before"),children:[Object(l.jsxs)("div",{className:A,children:[Object(l.jsx)("img",{className:u,src:x,alt:"",onClick:function(){d(),C((function(e){return e+1}))},onAnimationEnd:function(){return d()}}),Object(l.jsx)("img",{className:"".concat(t?"header-enter":"header-pc"),src:m,alt:"",onClick:function(){v((function(e){return e+1}))}})]}),Object(l.jsxs)("div",{className:"header-content",children:[Object(l.jsxs)("div",{className:"header-intro",children:[Object(l.jsx)("p",{className:"".concat(t?"header-enter":"header-text"),children:"Hello User ! Moi c'est"}),Object(l.jsxs)("div",{className:"header-me",children:[Object(l.jsx)("h1",{className:"".concat(t?"header-title header-reduce":"header-title"),children:"J\xe9r\xf4me Burrus"}),Object(l.jsx)("p",{className:"".concat(t?"header-portfolio":"header-enter"),children:"Portfolio"})]})]}),Object(l.jsxs)("p",{className:"".concat(t?"header-enter":"header-text"),children:["et je suis <",Object(l.jsx)("span",{className:"header-front",children:"Developer "}),"props={",Object(l.jsx)("span",{className:"header-dev",children:" front"})," } />"]})]}),Object(l.jsx)("button",{className:"".concat(t?"header-enter":"header-button"),onClick:c,children:"Go!"}),Object(l.jsx)("div",{className:"".concat(t?"header-nav":"header-enter"),children:Object(l.jsx)(j,{})})]})})},p=(c(37),function(){return Object(l.jsx)("div",{id:"Career",className:"career",children:Object(l.jsx)("h1",{className:"career-title",children:"Mon parcours Pro"})})}),v=c.p+"static/media/hole.8fb0449d.png",g=(c(38),function(){return Object(l.jsx)("div",{id:"Home",className:"home",children:Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsxs)("div",{className:"home-content",children:[Object(l.jsxs)("section",{className:"home-left",children:[Object(l.jsx)("p",{className:"home-slogan",children:"New challenger!"}),Object(l.jsx)("img",{src:v,alt:"",className:"home-image"})]}),Object(l.jsxs)("section",{className:"home-right",children:[Object(l.jsx)("h2",{className:"home-title",children:"\u201c On ne peut apprendre le code Web, on ne peut qu\u2019apprendre \xe0 coder \u201d"}),Object(l.jsx)("p",{className:"home-text",children:"Cette citation d'Emmanuel Kant, d\xe9tourn\xe9 de son contenu original en rapport avec la philosophie, est l'image m\xeame de cet oc\xe9an de connaissances dans lequel on se plonge en choisissant de devenir d\xe9veloppeur."}),Object(l.jsxs)("p",{className:"home-text",children:["C'est ce que j'ai appris de ma formation \xe0 l'\xe9cole ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://oclock.io/",children:"O'clock"}),"*.",Object(l.jsx)("br",{}),"Les connaissances \xe0 assimiler sont sans limites et ce qui est valable aujourd'hui ne le sera peut-\xeatre plus demain. Alors plut\xf4t que de se forcer \xe0 tout assimiler, il faut apprendre \xe0 comprendre les logiques des langages utilis\xe9s, l'utilit\xe9 des diff\xe9rentes librairies et frameworks, savoir comment chercher l'information dont on a besoin et \xe9galement conna\xeetre la m\xe9thodologie d'organisation dans son code ainsi qu'au au sein d'une \xe9quipe de d\xe9veloppement."]}),Object(l.jsx)("p",{className:"home-text",children:"Hier je ne connaissais rien, aujourd'hui je sais mettre en application ce que j'ai appris et demain je pourrai maintenir et am\xe9liorer mes projets en utilisant les nouvelles pratiques et technologies qui seront les plus efficientes du moment."})]})]}),Object(l.jsx)("div",{className:"home-foot",children:Object(l.jsxs)(o.Link,{className:"home-scroll",smooth:!0,to:"Career",children:[Object(l.jsx)("span",{className:"home-scroll-icon",children:Object(l.jsx)("span",{className:"home-scroll-icon-out",children:Object(l.jsx)("span",{className:"home-scroll-icon-in"})})}),Object(l.jsx)("h2",{className:"home-foot-text",children:"La suite"})]})})]})})}),N=(c(39),function(e){var t=e.title,c=e.picture,s=e.text,n=e.tech,r=e.url1,a=e.url2,i=e.hiddenButton;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-left",children:[Object(l.jsx)("h2",{className:"card-title",children:t}),Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{className:"card-img",src:c,alt:""})})]}),Object(l.jsxs)("div",{className:"card-right",children:[Object(l.jsx)("p",{className:"card-text",children:s}),Object(l.jsx)("p",{className:"card-tech",children:n}),Object(l.jsxs)("div",{className:"card-buttons",children:[Object(l.jsx)("button",{className:i?"card-button-hidden":"card-button",children:Object(l.jsx)("a",{className:"card-button-link",target:"_blank",rel:"noreferrer",href:r,children:"Visiter"})}),Object(l.jsx)("button",{className:"card-button",children:Object(l.jsx)("a",{className:"card-button-link",target:"_blank",rel:"noreferrer",href:a,children:"Code source"})})]})]})]})}),k=c.p+"static/media/prana.1e008a74.jpg",C=c.p+"static/media/fingerP.25c00729.png",A=(c(40),function(){return Object(l.jsxs)("div",{id:"Projects",className:"project",children:[Object(l.jsx)("h2",{className:"project-title",children:"Mes projets"}),Object(l.jsxs)("div",{className:"project-cards",children:[Object(l.jsx)("div",{className:"project-card01",children:Object(l.jsx)(N,{title:"Prana -site vitrine-",picture:k,text:"Site vitrine pour un institut de soin biologique. Le site est publi\xe9. L'historique du site est dans ses mentions l\xe9gales.",tech:"R\xe9alis\xe9 avec: REACT",url1:"https://example-prana.netlify.app/",url2:"https://github.com/karastras/Prana"})}),Object(l.jsx)("div",{className:"project-card02",children:Object(l.jsx)(N,{title:"My Travel Road",picture:"data:image/png;base64,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",text:"Site cr\xe9\xe9 en fin de formation O'clock dans les conditions r\xe9elles\r d'entreprise dans une \xe9quipe de 5 personnes. Site en cours de publication.\r Vous pouvez consulter la pr\xe9sentation de fin de formation.",tech:"Front: REACT/REDDUX <-> Back: SYMFONY",url1:"https://www.youtube.com/watch?v=H0ChNO5qkMM&t=3s",url2:"https://github.com/karastras/MyTravelRoad"})}),Object(l.jsx)("div",{className:"project-card03",children:Object(l.jsx)(N,{title:"Portfolio",picture:C,text:"Dossier personnel dans lequel les acquis de formation et les acquis d'exp\xe9rience\r sont d\xe9finis et d\xe9montr\xe9s en vue d'une reconnaissance par un \xe9tablissement d'enseignement\r ou un employeur. J'ai pr\xe9f\xe9rer coder moi-m\xeame le projet plut\xf4t que d'utiliser des templates\r et autres librairies, je peux ainsi avoir la main sur l'ensemble du code.",tech:"R\xe9alis\xe9 avec: REACT",url2:"https://github.com/karastras/Portfolio",hiddenButton:!0})})]})]})}),y=(c(41),function(){return Object(l.jsx)("div",{id:"About",className:"skills",children:"je suis Skills"})}),E=(c(42),function(){return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(g,{}),Object(l.jsx)(p,{}),Object(l.jsx)(A,{}),Object(l.jsx)(y,{})]})}),I=(c(43),function(){return Object(l.jsx)("div",{className:"footer",children:"footer"})}),q=c(0),B=c(17),Q=(c(44),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(l.jsx)("div",{className:"scrollToTop",children:c&&Object(l.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(l.jsxs)(q.b.Provider,{value:{className:"react-icons"},children:[Object(l.jsx)("h3",{children:Object(l.jsx)(B.a,{})}),Object(l.jsx)("span",{className:"scrollToTop-text",children:"Haut de page"})]})})})});c(45);var P=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:c?"App":"App-welcome",children:[Object(l.jsx)(f,{enter:c,entered:function(){setTimeout((function(){n(!0)}),400)}}),c&&Object(l.jsx)(E,{}),c&&Object(l.jsx)(I,{}),c&&Object(l.jsx)(Q,{})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7be2a485.chunk.js.map