(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5013],{64866:function(e,r,n){"use strict";n.d(r,{E:function(){return a}});var t=n(77460),i=n(52322),c=(n(2784),n(52275)),o=c.ZP.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";white-space:nowrap;",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var r=e.highlight,n=e.primary,t=e.theme;return r&&!n&&(0,c.iv)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var r=e.primary,n=e.theme;return r&&(0,c.iv)(["color:",";"],n.colors.primary70)}));function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var a=function(e){return(0,i.jsx)(o,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))};a.defaultProps={highlight:!0}},50115:function(e,r,n){"use strict";n.d(r,{d:function(){return s}});var t=n(52322),i=n(12359),c=n(2784),o=n(9559),s=function(e){var r=e.items,n=(0,c.useContext)(o.F),s=n.activeTab,a=n.setActiveTab,u=(0,c.useMemo)((function(){var e=r.find((function(e){return e.id===s}));return e?e.render():r[0].render()}),[s,r]);return(0,c.useEffect)((function(){if(!r.find((function(e){return e.id===s}))){var e,n=null!==(e=r.find((function(e){return e.default})))&&void 0!==e?e:r[0];a(n.id)}}),[s,r,a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.m,{activeTab:s,items:r,onTabClick:a}),u]})}},12976:function(e,r,n){"use strict";n.d(r,{n:function(){return m}});var t=n(7245);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,i=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(a){i=!0,c=a}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return n}}(e,r)||(0,t.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(52322),o=n(27964),s=n(61994),a=n(26399),u=n(5456),l=n(41159),d=n(2784),h=n(64866),f=n(42361),p=n(71087),j=(0,n(52275).ZP)(u.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),y=function(e){var r=e.children,n=e.title,t=(0,d.useState)(!0),i=t[0],o=t[1],a=function(){return o(!i)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(j,{marginBottom:"xSmall",alignItems:"center",onClick:a,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||a()},tabIndex:0,children:[i?(0,c.jsx)(f.X,{title:"Expand"}):(0,c.jsx)(p.h,{title:"Collapse"}),(0,c.jsx)(s.xv,{children:n})]}),!i&&r]})},m=function(e){var r=e.collapsible,n=e.id,t=e.propList,l=e.title,d=e.inheritedProps,f=e.nativeElement,p=function(){return t.length>0?(0,c.jsxs)(o.r,{marginBottom:r||d?"xLarge":"none",children:[(0,c.jsx)(o.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var r=e.name,n=e.required;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h.E,{primary:!0,children:r}),n?(0,c.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var r=e.types;return(0,c.jsx)(x,{types:r})}},{header:"Default",hash:"default",render:function(e){var r=e.defaultValue;return(0,c.jsx)(h.E,{highlight:!1,children:r})}},{header:"Description",hash:"description",width:"50%",render:function(e){var r=e.description;return(0,c.jsx)(s.xv,{children:r})}}],items:t}),(0,c.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null};return r?(0,c.jsx)(y,{title:"".concat(l," Props"),children:p()}):(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a.s,{header:l,headerId:n,children:[function(){if(f){var e=i(f,2),r=e[0],n=e[1];return(0,c.jsxs)(s.xv,{children:["Supports ",n," native ",(0,c.jsxs)(h.E,{children:["<",r," />"]})," element attributes."]})}return null}(),p(),d?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.H3,{children:"Inherited"}),(0,c.jsx)(u.k,{flexDirection:"column",children:d})]}):null]})})},x=function(e){var r=e.types;return Array.isArray(r)?r.map((function(e,n){return(0,c.jsxs)(d.Fragment,{children:[e.type===l.r?(0,c.jsx)(h.E,{highlight:!1,children:e}):(0,c.jsx)(h.E,{children:e}),n<r.length-1?" | ":null]},e)})):r.type===l.r?(0,c.jsx)(h.E,{highlight:!1,children:r}):(0,c.jsx)(h.E,{children:r})}},4483:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(52322),i=n(26399),c=n(61994),o=(n(2784),n(64866)),s=n(59202),a=n(50115),u=n(77460),l=n(12976);function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var h=function(e){return(0,t.jsx)(l.n,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({title:"Switch",propList:[],nativeElement:["input","all"]},e))},f=function(){var e=[{id:"examples",title:"Examples",render:function(){return(0,t.jsxs)(i.s,{children:[(0,t.jsx)(c.xv,{children:"Switches are intended for toggling actions that have an immediate effect and don't require saving. Therefore it is not appropriate to use a Switch in a form."}),(0,t.jsxs)(c.xv,{children:["Switches are a stylized ",(0,t.jsx)(o.E,{children:'input[type="checkbox"]'})," with controllable checked/unchecked states."]}),(0,t.jsx)(s.G,{children:"function Example() {\n  const [checked, setChecked] = useState(false);\n  const handleChange = () => setChecked(!checked);\n\n  return <Switch checked={checked} onChange={handleChange} />;\n}"})]})}},{id:"props",title:"Props",render:function(){return(0,t.jsx)(h,{})}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.H1,{children:"Switch"}),(0,t.jsx)(a.d,{items:e})]})}},88210:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Switch/SwitchPage",function(){return n(4483)}])},84698:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n.d(r,{Z:function(){return t}})},7245:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(84698);function i(e,r){if(e){if("string"===typeof e)return(0,t.Z)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,t.Z)(e,r):void 0}}}},function(e){e.O(0,[9774,9961,5713,1335,8965,2859,777,5733,6139,7193,6842,8099,5363,7606,5080,2734,1671,2888,179],(function(){return r=88210,e(e.s=r);var r}));var r=e.O();_N_E=r}]);