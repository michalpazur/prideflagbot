(this.webpackJsonpprideflagbot=this.webpackJsonpprideflagbot||[]).push([[0],{82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),o=a(67),s=a(25),l=a(118),d=a(112),b=a(119),h=a(84),j=a(111),p=a(117),m=a(114),u=a(116),x=a(113),g=a(63),O=a.n(g),f=a(62),k=a.n(f),v=a(59),F=a.n(v),y=a(60),R=a.n(y),N=a(61),w=a.n(N),S=a(9),C=a(46),B=a(108),E=a(19),A=a(110),M=a(23),z=a(49),I="CHANGE_THEME",P=function(e){var t=e.theme,a=e.hasChanged;return{type:I,theme:t,hasChanged:a}},W={hasChanged:!1,theme:"light"},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(z.a)(Object(z.a)({},e),{},{theme:t.theme,hasChanged:t.hasChanged}):e},T=a(5),D=a.p+"static/media/icon.6d1c8638.jpg",H=a(4),L=[{name:"Flag list",link:"/"},{name:"FAQ",link:"/faq"}],G=Object(B.a)((function(e){return{appbar:{backdropFilter:"blur(20px)",backgroundColor:e.palette.background.paper+"B7",padding:"0px 30px"},toolbar:{padding:"0px",maxWidth:"1280px",width:"100%",margin:"auto"},avatar:{marginRight:"20px"},name:Object(s.a)({fontWeight:"bold",fontSize:"18px",color:e.palette.text.primary,marginRight:"20px"},e.breakpoints.down("xs"),{display:"none"}),spacer:{flexGrow:"1",display:"flex",alignItems:"center"},link:Object(s.a)({fontSize:"18px","&:not(:last-of-type)":Object(s.a)({marginRight:"20px"},e.breakpoints.down("sm"),{marginRight:"0px"})},e.breakpoints.down("sm"),{padding:"10px 0px",width:"100%",textAlign:"center"}),activeLink:{fontWeight:"bold"},button:{marginRight:"10px"},twitter:{color:e.palette.primary.main},iconSpacer:{width:"24px",height:"24px"},icon:{position:"absolute"},bottomRoot:{paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}})),_=function(){var e=G(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1],g=Object(M.c)((function(e){return e.themeReducer.theme})),f=Object(E.a)(),v=Object(A.a)(f.breakpoints.down("sm")),y=Object(M.b)(),N=Object(S.f)();Object(n.useEffect)((function(){v||c(!1)}),[v]);var B=function(){return L.map((function(t){return Object(H.jsx)(j.a,{color:"textPrimary",component:C.b,underline:"none",to:t.link,"aria-selected":N.pathname===t.link,className:Object(T.a)(e.link,Object(s.a)({},e.activeLink,N.pathname===t.link)),children:t.name},t.link)}))},z=function(){return Object(H.jsxs)(r.a.Fragment,{children:[Object(H.jsx)(u.a,{size:"small",variant:"outlined",className:e.button,onClick:function(){return y(P({theme:"dark"===g?"light":"dark",hasChanged:!0}))},children:"light"===g?Object(H.jsx)(F.a,{}):Object(H.jsx)(R.a,{})}),Object(H.jsx)(u.a,{size:"small",variant:"outlined",component:"a",href:"https://twitter.com/prideflagbot",target:"_blank","aria-label":"PrideFlagBot's Twitter profile",children:Object(H.jsx)(w.a,{className:e.twitter})})]})};return Object(H.jsxs)(l.a,{elevation:3,className:e.appbar,color:"transparent",children:[Object(H.jsxs)(d.a,{className:e.toolbar,children:[Object(H.jsx)(b.a,{src:D,className:e.avatar}),Object(H.jsx)(h.a,{className:e.name,children:"PrideFlagBot"}),Object(H.jsx)("div",{className:e.spacer,children:Object(H.jsx)(p.a,{smDown:!0,children:B()})}),Object(H.jsx)(p.a,{smDown:!0,children:z()}),Object(H.jsx)(p.a,{mdUp:!0,children:Object(H.jsxs)(u.a,{size:"small",variant:"outlined",onClick:function(){return c(!i)},children:[Object(H.jsx)("div",{className:e.iconSpacer}),Object(H.jsx)(x.a,{in:i,children:Object(H.jsx)(k.a,{className:e.icon})}),Object(H.jsx)(x.a,{in:!i,children:Object(H.jsx)(O.a,{className:e.icon})})]})})]}),Object(H.jsx)(m.a,{in:i,children:Object(H.jsxs)("div",{className:e.bottomRoot,children:[B(),Object(H.jsx)("div",{children:z()})]})})]})},q=Object(B.a)((function(e){return{root:{boxSizing:"border-box",padding:"108px 30px 30px",minHeight:"100vh",backgroundColor:e.palette.background.default},innerRoot:{maxWidth:"1280px",margin:"auto"}}})),Q=function(){var e=q();return Object(H.jsxs)(C.a,{basename:"/prideflagbot",children:[Object(H.jsx)(_,{}),Object(H.jsx)("div",{className:e.root,children:Object(H.jsx)("div",{className:e.innerRoot,children:Object(H.jsx)(S.c,{children:Object(H.jsx)(S.a,{path:"/"})})})})]})},U=a(66),K=a(115),V=a(47),X=a(64),Y=a(65),Z=a.n(Y),$=Object(V.combineReducers)({themeReducer:J}),ee=function(){var e=Object(V.createStore)($,function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Object(X.devToolsEnhancer)());return e.subscribe(Z.a.throttle((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){return}}({themeReducer:e.getState().themeReducer})}),1e3)),e}(),te=function(e){var t=e.children,a=Object(M.b)(),r=Object(M.c)((function(e){return e.themeReducer.theme})),i=Object(E.a)(),c=Object(M.c)((function(e){return e.themeReducer.hasChanged})),o=Object(A.a)("(prefers-color-scheme: dark)");Object(n.useEffect)((function(){c||a(P({theme:o?"dark":"light",hasChanged:!1}))}),[o]);var s=Object(n.useMemo)((function(){return Object(U.a)({palette:{type:r,background:{paper:"light"===r?"#FFFFFF":"#0A1929",default:"light"===r?"#F3F6F9":"#001E3C"},primary:{main:"light"===r?"#007FFF":"#3399FF"},text:{main:"light"===r?"#0A1929":"#FFFFFF",secondary:"light"===r?"#46505A":"#AAB4BE"}},typography:{fontFamily:['"IBM Plex Sans"',"Roboto","sans-serif"].join(", ")},shape:{borderRadius:"10px"},overrides:{MuiTypography:{root:{transition:i.transitions.create("color",{duration:i.transitions.duration.standard})}},MuiLink:{root:{fontFamily:['"IBM Plex Sans"',"Roboto","sans-serif"].join(", ")}},MuiButton:{sizeSmall:{padding:"5px 10px",minWidth:"unset"}}}})}),[r]);return Object(H.jsx)(K.a,{theme:s,children:t})};c.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(M.a,{store:ee,children:Object(H.jsx)(te,{children:Object(H.jsx)(Q,{})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.be65f5da.chunk.js.map