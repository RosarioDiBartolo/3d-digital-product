import{V as p}from"./chunk-F6ZOHZVB-DN_G3Mlw.js";import{u as z,a as H,b as M,c as V}from"./chunk-UVGNHHSZ-C5cJs63G.js";import{a3 as B,af as K,a5 as N,S as A,b1 as $,j as s,b as G,aa as I,ab as O,r as j,K as Q,ew as U,t as x,B as S,k as X}from"./index-Caf50g4I.js";import{D as Z,c as q}from"./chunk-MGPZHEOT-DGRJDQFJ.js";import{K as J}from"./chunk-6HTZNHPT-_WRLDY31.js";import{R as n,u as W}from"./chunk-JGQGO74V-CT1-L7kV.js";import"./chunk-FFVOUYTF-DZ-Gj602.js";import"./chunk-DV5RB7II-DUxybIo8.js";import"./format-BethWtXF.js";import"./chunk-C76H5USB-D_onynem.js";import"./checkbox-Dci4QQUS.js";import"./index-CfwWneOF.js";import"./command-bar-uN9-SO61.js";import"./index-D0Noq28m.js";import"./descending-sorting-CoRgk9tg.js";import"./arrow-up-mini-bcuVsaDs.js";import"./date-picker-CqJ5C27b.js";import"./popover-eEuSkeLK.js";import"./x-mark-mini-PR8pi-vy.js";import"./triangle-left-mini-u_9aSAp8.js";import"./prompt-Cvy-OtTy.js";var Y=B({sales_channels:K(N()).optional()}),f=50,C="sc",ss=({location:e})=>{var m;const{t:a}=G(),{handleSuccess:i}=W(),r=I({defaultValues:{sales_channels:((m=e.sales_channels)==null?void 0:m.map(t=>t.id))??[]},resolver:O(Y)}),{setValue:c}=r,[u,y]=j.useState(ts(e)),b=t=>{const o=Object.keys(t);c("sales_channels",o,{shouldDirty:!0,shouldTouch:!0}),y(t)},v=z({pageSize:f,prefix:C}),{sales_channels:T,count:g,isPending:_,isError:w,error:E}=Q({...v},{placeholderData:X}),k=H(),L=as(),F=M(),{mutateAsync:P,isPending:R}=U(e.id),D=r.handleSubmit(async t=>{var h;const o=(h=e.sales_channels)==null?void 0:h.map(l=>l.id),d=t.sales_channels??[];await P({add:d.filter(l=>!(o!=null&&o.includes(l))),remove:o==null?void 0:o.filter(l=>!d.includes(l))},{onSuccess:()=>{x.success(a("stockLocations.salesChannels.successToast")),i(`/settings/locations/${e.id}`)},onError:l=>{x.error(l.message)}})});if(w)throw E;return s.jsx(n.Form,{form:r,children:s.jsxs(J,{onSubmit:D,className:"flex h-full flex-col",children:[s.jsxs(n.Header,{children:[s.jsx(n.Title,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.header")})}),s.jsx(n.Description,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.hint")})})]}),s.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:s.jsx(Z,{data:T,columns:L,filters:k,emptyState:F,prefix:C,rowSelection:{state:u,onRowSelectionChange:b},pageSize:f,isLoading:_,rowCount:g,layout:"fill",getRowId:t=>t.id})}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(S,{size:"small",variant:"secondary",type:"button",children:a("actions.cancel")})}),s.jsx(S,{size:"small",isLoading:R,type:"submit",children:a("actions.save")})]})})]})})},es=q(),as=()=>{const e=V();return j.useMemo(()=>[es.select(),...e],[e])};function ts(e){var a;return((a=e.sales_channels)==null?void 0:a.reduce((i,r)=>(i[r.id]=!0,i),{}))??{}}var _s=()=>{const{location_id:e}=A(),{stock_location:a,isPending:i,isError:r,error:c}=$(e,{fields:"id,*sales_channels"}),u=!i&&!!a;if(r)throw c;return s.jsx(n,{children:u&&s.jsx(ss,{location:a})})};export{_s as Component};
