(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8420],{64866:function(e,r,n){"use strict";n.d(r,{E:function(){return l}});var t=n(77460),i=n(52322),o=(n(2784),n(52275)),a=o.ZP.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";white-space:nowrap;",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var r=e.highlight,n=e.primary,t=e.theme;return r&&!n&&(0,o.iv)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var r=e.primary,n=e.theme;return r&&(0,o.iv)(["color:",";"],n.colors.primary70)}));function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var l=function(e){return(0,i.jsx)(a,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))};l.defaultProps={highlight:!0}},50115:function(e,r,n){"use strict";n.d(r,{d:function(){return s}});var t=n(52322),i=n(12359),o=n(2784),a=n(9559),s=function(e){var r=e.items,n=(0,o.useContext)(a.F),s=n.activeTab,l=n.setActiveTab,c=(0,o.useMemo)((function(){var e=r.find((function(e){return e.id===s}));return e?e.render():r[0].render()}),[s,r]);return(0,o.useEffect)((function(){if(!r.find((function(e){return e.id===s}))){var e,n=null!==(e=r.find((function(e){return e.default})))&&void 0!==e?e:r[0];l(n.id)}}),[s,r,l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.m,{activeTab:s,items:r,onTabClick:l}),c]})}},12976:function(e,r,n){"use strict";n.d(r,{n:function(){return j}});var t=n(7245);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(l){i=!0,o=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return n}}(e,r)||(0,t.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(52322),a=n(27964),s=n(61994),l=n(26399),c=n(5456),u=n(41159),d=n(2784),h=n(64866),p=n(42361),f=n(71087),m=(0,n(52275).ZP)(c.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),x=function(e){var r=e.children,n=e.title,t=(0,d.useState)(!0),i=t[0],a=t[1],l=function(){return a(!i)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m,{marginBottom:"xSmall",alignItems:"center",onClick:l,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||l()},tabIndex:0,children:[i?(0,o.jsx)(p.X,{title:"Expand"}):(0,o.jsx)(f.h,{title:"Collapse"}),(0,o.jsx)(s.xv,{children:n})]}),!i&&r]})},j=function(e){var r=e.collapsible,n=e.id,t=e.propList,u=e.title,d=e.inheritedProps,p=e.nativeElement,f=function(){return t.length>0?(0,o.jsxs)(a.r,{marginBottom:r||d?"xLarge":"none",children:[(0,o.jsx)(a.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var r=e.name,n=e.required;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.E,{primary:!0,children:r}),n?(0,o.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var r=e.types;return(0,o.jsx)(y,{types:r})}},{header:"Default",hash:"default",render:function(e){var r=e.defaultValue;return(0,o.jsx)(h.E,{highlight:!1,children:r})}},{header:"Description",hash:"description",width:"50%",render:function(e){var r=e.description;return(0,o.jsx)(s.xv,{children:r})}}],items:t}),(0,o.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null};return r?(0,o.jsx)(x,{title:"".concat(u," Props"),children:f()}):(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.s,{header:u,headerId:n,children:[function(){if(p){var e=i(p,2),r=e[0],n=e[1];return(0,o.jsxs)(s.xv,{children:["Supports ",n," native ",(0,o.jsxs)(h.E,{children:["<",r," />"]})," element attributes."]})}return null}(),f(),d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.H3,{children:"Inherited"}),(0,o.jsx)(c.k,{flexDirection:"column",children:d})]}):null]})})},y=function(e){var r=e.types;return Array.isArray(r)?r.map((function(e,n){return(0,o.jsxs)(d.Fragment,{children:[e.type===u.r?(0,o.jsx)(h.E,{highlight:!1,children:e}):(0,o.jsx)(h.E,{children:e}),n<r.length-1?" | ":null]},e)})):r.type===u.r?(0,o.jsx)(h.E,{highlight:!1,children:r}):(0,o.jsx)(h.E,{children:r})}},74187:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(52322),i=n(26399),o=n(61994),a=(n(2784),n(59202)),s=n(64866),l=n(50115),c=n(77460),u=n(12976);function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var h=[{name:"description",types:["string","FormControlDescription"],description:"Append a description to the textarea field."},{name:"error",types:["string","string[]","FormControlError","FormControlError[]"],description:"Displays an error message for the field."},{name:"label",types:["string","FormControlLabel"],description:(0,t.jsxs)(t.Fragment,{children:["Label element for textareas. Component with auto generate ",(0,t.jsx)(s.E,{children:"id"}),"'s for the accessibility API."]})},{name:"labelId",types:"string",description:(0,t.jsxs)(t.Fragment,{children:["Appends an ",(0,t.jsx)(s.E,{children:"id"})," to the generated label element."]})},{name:"rows",types:["1","2","3","4","5","6","7"],defaultValue:"3",description:(0,t.jsxs)(t.Fragment,{children:["Determines the intial height via HTML's ",(0,t.jsx)(s.E,{children:"row"})," property."]})},{name:"resize",types:"boolean",defaultValue:"true",description:"Determines if the textarea is resizable vertically."}],p=function(e){return(0,t.jsx)(u.n,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){(0,c.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({title:"Textarea",propList:h,nativeElement:["textarea","all"]},e))},f=function(){var e=[{id:"examples",title:"Examples",render:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.s,{children:[(0,t.jsx)(o.xv,{children:"Textareas are stylized form controls with the ability of controling validation."}),(0,t.jsx)(a.G,{children:'function Example() {\n  const [value, setValue] = useState(\'\');\n\n  const handleChange = (event) => setValue(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Textarea\n          label="Label"\n          description="Description for the textarea."\n          placeholder="Placeholder"\n          rows={3}\n          resize={true}\n          value={value}\n          onChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'})]}),(0,t.jsxs)(i.s,{header:"Error state",children:[(0,t.jsxs)(o.xv,{children:["Textareas allow you to pass in an ",(0,t.jsx)(s.E,{primary:!0,children:"error"})," message that will control the styles of an input. The logic on the input can be controlled with the ",(0,t.jsx)(s.E,{primary:!0,children:"onChange"})," prop."]}),(0,t.jsx)(a.G,{children:'<Form>\n  <FormGroup>\n    <Textarea\n      label="Description"\n      description="Description needs to be at least 64 characters long."\n      value="Start of some text..."\n      minLength={64}\n      error="Field needs to contain at least 64 characters."\n      onChange={() => null}\n    />\n  </FormGroup>\n</Form>'})]}),(0,t.jsxs)(i.s,{header:"Controlling rows",children:[(0,t.jsxs)(o.xv,{children:["By default, a ",(0,t.jsx)(s.E,{children:"Textarea"})," displays with ",(0,t.jsx)(s.E,{children:"3"})," rows. In order to set the intial amount of rows, pass in the ",(0,t.jsx)(s.E,{children:"rows"})," prop. There can only be a maximum of ",(0,t.jsx)(s.E,{children:"7"})," rows."]}),(0,t.jsx)(a.G,{children:'<Form>\n  <FormGroup>\n    <Textarea label="Label" description="Textarea with 5 rows." placeholder="Placeholder" rows={5} />\n  </FormGroup>\n</Form>'})]}),(0,t.jsxs)(i.s,{header:"Resizable",children:[(0,t.jsxs)(o.xv,{children:["You can also control whether ",(0,t.jsx)(s.E,{children:"Textarea"})," components are resizeable. Resizing is only available on the vertical axis."]}),(0,t.jsx)(a.G,{children:'<Form>\n  <FormGroup>\n    <Textarea label="Label" placeholder="Textarea cannot be resized." resize={false} />\n  </FormGroup>\n</Form>'})]})]})}},{id:"props",title:"Props",render:function(){return(0,t.jsx)(p,{})}}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.H1,{children:"Textarea"}),(0,t.jsx)(l.d,{items:e})]})}},45314:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Textarea/TextareaPage",function(){return n(74187)}])},84698:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n.d(r,{Z:function(){return t}})},7245:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(84698);function i(e,r){if(e){if("string"===typeof e)return(0,t.Z)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,t.Z)(e,r):void 0}}}},function(e){e.O(0,[9774,9961,5713,1335,8965,2859,777,5733,6139,7193,6842,8099,5363,7606,5080,2734,1671,2888,179],(function(){return r=45314,e(e.s=r);var r}));var r=e.O();_N_E=r}]);