import{r as a,b as x,j as e,aj as p,m as d,cN as v}from"./index-Caf50g4I.js";var g=a.forwardRef(({className:l,disabled:i,placeholder:u,value:s,defaultValue:n,...c},b)=>{var o;const{t:f}=x(),t=a.useRef(null);a.useImperativeHandle(b,()=>t.current);const m=((o=t.current)==null?void 0:o.value)==="";return e.jsxs("div",{className:"relative",children:[e.jsx(p,{className:d("text-ui-fg-muted transition-fg pointer-events-none absolute right-2 top-1/2 -translate-y-1/2",{"text-ui-fg-disabled":i})}),e.jsxs("select",{value:s!==void 0?s.toLowerCase():void 0,defaultValue:n?n.toLowerCase():void 0,disabled:i,className:d("bg-ui-bg-field shadow-buttons-neutral transition-fg txt-compact-small flex w-full select-none appearance-none items-center justify-between rounded-md px-2 py-1.5 outline-none","placeholder:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid::border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",{"text-ui-fg-muted":m},l),...c,ref:t,children:[e.jsx("option",{value:"",disabled:!0,className:"text-ui-fg-muted",children:u||f("fields.selectCountry")}),v.map(r=>e.jsx("option",{value:r.iso_2.toLowerCase(),children:r.display_name},r.iso_2))]})]})});g.displayName="CountrySelect";export{g as C};
