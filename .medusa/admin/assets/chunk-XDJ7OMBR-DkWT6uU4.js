import{r as n,j as r,m as l,aw as A,Z as K,ax as M}from"./index-Caf50g4I.js";import{X as S}from"./x-mark-mini-PR8pi-vy.js";var X=n.forwardRef(({value:d,onChange:i,onBlur:u,disabled:j,name:y,showRemove:c=!0,variant:f="base",allowDuplicates:k=!1,placeholder:I,className:R},N)=>{const a=n.useRef(null),o=n.useRef(typeof d<"u").current,[D,p]=n.useState([]);n.useImperativeHandle(N,()=>a.current);const[b,x]=n.useState(null),s=o?d:D,m=e=>{const t=e.trim();if(t){if(!k&&s.includes(t)){x(s.indexOf(t)),setTimeout(()=>{x(null)},300);return}i==null||i([...s,t]),o||p([...s,t])}},h=e=>{i==null||i(s.filter(t=>t!==e)),o||p(s.filter(t=>t!==e))},C=e=>{u==null||u(),e.target.value&&(m(e.target.value),e.target.value="")},E=e=>{var t,g,v,w;if(e.key==="Enter"||e.key===","){if(e.preventDefault(),!((t=a.current)!=null&&t.value))return;m(((g=a.current)==null?void 0:g.value)??""),a.current.value="",(v=a.current)==null||v.focus()}e.key==="Backspace"&&((w=a.current)==null?void 0:w.value)===""&&h(s[s.length-1])},V={x:[0,-2,2,-2,2,0],transition:{duration:.3}};return r.jsxs("div",{className:l("shadow-borders-base flex min-h-8 flex-wrap items-center gap-1 rounded-md px-2 py-1.5","transition-fg focus-within:shadow-borders-interactive-with-active","has-[input:disabled]:bg-ui-bg-disabled has-[input:disabled]:text-ui-fg-disabled has-[input:disabled]:cursor-not-allowed",{"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover":f==="contrast","bg-ui-bg-field hover:bg-ui-bg-field-hover":f==="base"},R),tabIndex:-1,onClick:()=>{var e;return(e=a.current)==null?void 0:e.focus()},children:[s.map((e,t)=>r.jsx(A,{children:r.jsx(K,{size:"2xsmall",className:l("gap-x-0.5 pl-1.5 pr-1.5",{"transition-fg pr-1":c,"shadow-borders-focus":t===b}),asChild:!0,children:r.jsxs(M.div,{animate:t===b?V:void 0,children:[e,c&&r.jsx("button",{tabIndex:-1,type:"button",onClick:()=>h(e),className:l("text-ui-fg-subtle transition-fg outline-none"),children:r.jsx(S,{})})]})})},`${e}-${t}`)),r.jsx("input",{className:l("caret-ui-fg-base text-ui-fg-base txt-compact-small flex-1 appearance-none bg-transparent","disabled:text-ui-fg-disabled disabled:cursor-not-allowed","focus:outline-none","placeholder:text-ui-fg-muted"),onKeyDown:E,onBlur:C,disabled:j,name:y,ref:a,placeholder:s.length===0?I:void 0,autoComplete:"off"})]})});X.displayName="ChipInput";export{X as C};
