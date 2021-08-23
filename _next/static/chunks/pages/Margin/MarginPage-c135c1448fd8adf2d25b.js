(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{80412:function(e,r,n){"use strict";n.d(r,{K:function(){return l}});var t=n(77460),i=n(52322),a=(n(2784),n(59282)),o=n(12976);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var c=[{name:"margin",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the margin to be applied."},{name:"marginTop",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the top margin to be applied."},{name:"marginRight",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the right margin to be applied."},{name:"marginBottom",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the left margin to be applied."},{name:"marginVertical",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:(0,i.jsx)(a.p,{href:"/Margin/MarginPage",as:"/margin",children:"Margin"}),description:"Determines the left and right margin to be applied."}],l=function(e){return(0,i.jsx)(o.n,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({title:"Margin",propList:c},e))}},64866:function(e,r,n){"use strict";n.d(r,{E:function(){return c}});var t=n(77460),i=n(52322),a=(n(2784),n(52275)),o=a.ZP.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";white-space:nowrap;",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var r=e.highlight,n=e.primary,t=e.theme;return r&&!n&&(0,a.iv)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var r=e.primary,n=e.theme;return r&&(0,a.iv)(["color:",";"],n.colors.primary70)}));function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var c=function(e){return(0,i.jsx)(o,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))};c.defaultProps={highlight:!0}},50115:function(e,r,n){"use strict";n.d(r,{d:function(){return s}});var t=n(52322),i=n(12359),a=n(2784),o=n(9559),s=function(e){var r=e.items,n=(0,a.useContext)(o.F),s=n.activeTab,c=n.setActiveTab,l=(0,a.useMemo)((function(){var e=r.find((function(e){return e.id===s}));return e?e.render():r[0].render()}),[s,r]);return(0,a.useEffect)((function(){if(!r.find((function(e){return e.id===s}))){var e,n=null!==(e=r.find((function(e){return e.default})))&&void 0!==e?e:r[0];c(n.id)}}),[s,r,c]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.m,{activeTab:s,items:r,onTabClick:c}),l]})}},12976:function(e,r,n){"use strict";n.d(r,{n:function(){return j}});var t=n(7245);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){i=!0,a=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw a}}return n}}(e,r)||(0,t.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(52322),o=n(27964),s=n(61994),c=n(26399),l=n(5456),u=n(41159),p=n(2784),d=n(64866),h=n(42361),g=n(71087),f=(0,n(52275).ZP)(l.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=function(e){var r=e.children,n=e.title,t=(0,p.useState)(!0),i=t[0],o=t[1],c=function(){return o(!i)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f,{marginBottom:"xSmall",alignItems:"center",onClick:c,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||c()},tabIndex:0,children:[i?(0,a.jsx)(h.X,{title:"Expand"}):(0,a.jsx)(g.h,{title:"Collapse"}),(0,a.jsx)(s.xv,{children:n})]}),!i&&r]})},j=function(e){var r=e.collapsible,n=e.id,t=e.propList,u=e.title,p=e.inheritedProps,h=e.nativeElement,g=function(){return t.length>0?(0,a.jsxs)(o.r,{marginBottom:r||p?"xLarge":"none",children:[(0,a.jsx)(o.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var r=e.name,n=e.required;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.E,{primary:!0,children:r}),n?(0,a.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var r=e.types;return(0,a.jsx)(x,{types:r})}},{header:"Default",hash:"default",render:function(e){var r=e.defaultValue;return(0,a.jsx)(d.E,{highlight:!1,children:r})}},{header:"Description",hash:"description",width:"50%",render:function(e){var r=e.description;return(0,a.jsx)(s.xv,{children:r})}}],items:t}),(0,a.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null};return r?(0,a.jsx)(m,{title:"".concat(u," Props"),children:g()}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.s,{header:u,headerId:n,children:[function(){if(h){var e=i(h,2),r=e[0],n=e[1];return(0,a.jsxs)(s.xv,{children:["Supports ",n," native ",(0,a.jsxs)(d.E,{children:["<",r," />"]})," element attributes."]})}return null}(),g(),p?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.H3,{children:"Inherited"}),(0,a.jsx)(l.k,{flexDirection:"column",children:p})]}):null]})})},x=function(e){var r=e.types;return Array.isArray(r)?r.map((function(e,n){return(0,a.jsxs)(p.Fragment,{children:[e.type===u.r?(0,a.jsx)(d.E,{highlight:!1,children:e}):(0,a.jsx)(d.E,{children:e}),n<r.length-1?" | ":null]},e)})):r.type===u.r?(0,a.jsx)(d.E,{highlight:!1,children:r}):(0,a.jsx)(d.E,{children:r})}},58762:function(e,r,n){"use strict";n.r(r);var t=n(52322),i=n(26399),a=n(61994),o=(n(2784),n(59282)),s=n(59202),c=n(50115),l=n(80412);r.default=function(){var e=[{id:"examples",title:"Examples",render:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.s,{children:[(0,t.jsxs)(a.xv,{children:["Some of our components expose a simple way to modify their margin. The following example showcases the simples way to use the margin prop by giving it a"," ",(0,t.jsx)(o.p,{href:"/Spacing/SpacingPage",as:"/spacing",children:"Spacing"})," ","value."]}),(0,t.jsx)(s.G,{children:'<Button margin="medium">Example</Button>'})]}),(0,t.jsxs)(i.s,{header:"Responsive breakpoints",children:[(0,t.jsxs)(a.xv,{children:["You can also specify margins with an object to handle different margins with different"," ",(0,t.jsx)(o.p,{href:"/Breakpoints/BreakpointsPage",as:"/breakpoints",children:"breakpoints"}),". All values must be of"," ",(0,t.jsx)(o.p,{href:"/Spacing/SpacingPage",as:"/spacing",children:"Spacing"})," ","type."]}),(0,t.jsx)(s.G,{children:"<Button margin={{ mobile: 'none', tablet: 'medium', desktop: 'xLarge' }}>Example</Button>"})]})]})}},{id:"props",title:"Props",render:function(){return(0,t.jsx)(l.K,{})}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.H1,{children:"Margin"}),(0,t.jsx)(c.d,{items:e})]})}},86225:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Margin/MarginPage",function(){return n(58762)}])},84698:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n.d(r,{Z:function(){return t}})},7245:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(84698);function i(e,r){if(e){if("string"===typeof e)return(0,t.Z)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,t.Z)(e,r):void 0}}}},function(e){e.O(0,[9774,9961,5713,1335,8965,2859,777,5733,6139,7193,6842,8099,5363,7606,5080,2734,1671,2888,179],(function(){return r=86225,e(e.s=r);var r}));var r=e.O();_N_E=r}]);