import{T as G}from"./chunk-V3MOBCDF-Fr8ItIPO.js";import{u as q}from"./chunk-W6676YBU-Dyyh6tog.js";import{u as N,a as Q,b as Y}from"./chunk-QQGBEPB7-D4pbFndU.js";import{u as Z,a as J,b as K}from"./chunk-ZJRFL6ZN-DvOXM_T5.js";import{u as V}from"./chunk-XWO5BP42-iMHXl2e2.js";import{u as W}from"./chunk-G3QXMPRB-4Ovs3NN2.js";import{u as A,_ as z}from"./chunk-X3LH6P65-BkTfjRZQ.js";import{u as $,a as ee}from"./chunk-EMNHBSFU-Bq1pKxHy.js";import{u as te,a as se}from"./chunk-GW6TVOAA-CaYVlUYP.js";import{u as ae,a as re}from"./chunk-U6CSGYH6-D0vgstdN.js";import{a8 as O,b as _,r as S,j as r,B as H,dy as oe,k as E,e as le,dm as ne,bj as ce,bk as ie,a1 as de,T as ue,I as pe}from"./index-Caf50g4I.js";import{S as me,c as fe}from"./chunk-JGQGO74V-CT1-L7kV.js";import{X as ge}from"./x-mark-mini-PR8pi-vy.js";import{C as y}from"./checkbox-Dci4QQUS.js";import{c as D}from"./index-CfwWneOF.js";function be(a){return a.reduce((e,s)=>(e[s.value]=!0,e),{})}var Je=({referenceType:a,type:e,setState:s,state:n})=>{const{t:c}=_(),g=e==="focus"?me:fe,[b,h]=S.useState(n),l=()=>{s(b)};return r.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[r.jsx(g.Body,{className:"min-h-0 p-0",children:r.jsx(Se,{referenceType:a,initialRowState:be(n),intermediate:b,setIntermediate:h})}),r.jsxs(g.Footer,{children:[r.jsx(g.Close,{asChild:!0,children:r.jsx(H,{variant:"secondary",size:"small",type:"button",children:c("actions.cancel")})}),r.jsx(H,{type:"button",size:"small",onClick:l,children:c("actions.save")})]})]})},Se=({referenceType:a,...e})=>{switch(a){case G.CUSTOMER_GROUP:return r.jsx(he,{...e});case"product":return r.jsx(Pe,{...e});case G.PRODUCT_COLLECTION:return r.jsx(ke,{...e});case"product_type":return r.jsx(je,{...e});case G.PRODUCT_TAG:return r.jsx(Oe,{...e});default:return null}},i=50,M="cg",he=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=_(),[c,g]=S.useState(a);F();const{searchParams:b,raw:h}=Z({pageSize:i,prefix:M}),{customer_groups:l,count:d,isLoading:C,isError:P,error:w}=oe(b,{placeholderData:E}),T=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),f=Object.keys(p),R=f.filter(t=>!m.includes(t)),j=m.filter(t=>!f.includes(t)),I=(l==null?void 0:l.filter(t=>R.includes(t.id)).map(t=>({value:t.id,label:t.name})))||[],v=e.filter(t=>!j.includes(t.value));s([...v,...I]),g(p)},k=J(),u=Ce(),{table:x}=A({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:T},pageSize:i,prefix:M});if(P)throw w;return r.jsx(z,{table:x,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"name",label:n("fields.name")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:M,queryObject:h})},ye=D(),Ce=()=>{const a=K();return S.useMemo(()=>[ye.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},U="p",Pe=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=_(),[c,g]=S.useState(a);F();const{searchParams:b,raw:h}=ae({pageSize:i,prefix:U}),{products:l,count:d,isLoading:C,isError:P,error:w}=le(b,{placeholderData:E}),T=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),f=Object.keys(p),R=f.filter(t=>!m.includes(t)),j=m.filter(t=>!f.includes(t)),I=(l==null?void 0:l.filter(t=>R.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!j.includes(t.value));s([...v,...I]),g(p)},k=re(),u=Te(),{table:x}=A({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:T},pageSize:i,prefix:U});if(P)throw w;return r.jsx(z,{table:x,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"title",label:n("fields.title")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:U,queryObject:h})},we=D(),Te=()=>{const a=W();return S.useMemo(()=>[we.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},B="pc",ke=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=_(),[c,g]=S.useState(a);F();const{searchParams:b,raw:h}=$({pageSize:i,prefix:B}),{collections:l,count:d,isLoading:C,isError:P,error:w}=ne(b,{placeholderData:E}),T=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),f=Object.keys(p),R=f.filter(t=>!m.includes(t)),j=m.filter(t=>!f.includes(t)),I=(l==null?void 0:l.filter(t=>R.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!j.includes(t.value));s([...v,...I]),g(p)},k=te(),u=Re(),{table:x}=A({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:T},pageSize:i,prefix:B});if(P)throw w;return r.jsx(z,{table:x,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"title",label:n("fields.title")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:B,queryObject:h})},xe=D(),Re=()=>{const a=V();return S.useMemo(()=>[xe.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},L="pt",je=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=_(),[c,g]=S.useState(a);F();const{searchParams:b,raw:h}=N({pageSize:i,prefix:L}),{product_types:l,count:d,isLoading:C,isError:P,error:w}=ce(b,{placeholderData:E}),T=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),f=Object.keys(p),R=f.filter(t=>!m.includes(t)),j=m.filter(t=>!f.includes(t)),I=(l==null?void 0:l.filter(t=>R.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!j.includes(t.value));s([...v,...I]),g(p)},k=Q(),u=ve(),{table:x}=A({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:T},pageSize:i,prefix:L});if(P)throw w;return r.jsx(z,{table:x,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"value",label:n("fields.value")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:L,queryObject:h})},Ie=D(),ve=()=>{const a=Y();return S.useMemo(()=>[Ie.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},X="ptag",Oe=({initialRowState:a,intermediate:e,setIntermediate:s})=>{const{t:n}=_(),[c,g]=S.useState(a);F();const{searchParams:b,raw:h}=ee({pageSize:i,prefix:X}),{product_tags:l,count:d,isLoading:C,isError:P,error:w}=ie(b,{placeholderData:E}),T=o=>{const p=typeof o=="function"?o(c):o,m=Object.keys(c),f=Object.keys(p),R=f.filter(t=>!m.includes(t)),j=m.filter(t=>!f.includes(t)),I=(l==null?void 0:l.filter(t=>R.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!j.includes(t.value));s([...v,...I]),g(p)},k=se(),u=Ae(),{table:x}=A({data:l||[],columns:u,count:d,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:T},pageSize:i,prefix:X});if(P)throw w;return r.jsx(z,{table:x,columns:u,pageSize:i,count:d,isLoading:C,filters:k,orderBy:[{key:"value",label:n("fields.value")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],layout:"fill",pagination:!0,search:!0,prefix:X,queryObject:h})},_e=D(),Ae=()=>{const a=q();return S.useMemo(()=>[_e.display({id:"select",header:({table:e})=>r.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>r.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...a],[a])},F=()=>{const[a,e]=de();S.useEffect(()=>()=>{e({})},[])},Ke=({index:a,label:e,onRemove:s})=>r.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[r.jsx(ue,{size:"small",leading:"compact",children:e}),r.jsx(pe,{size:"small",variant:"transparent",type:"button",onClick:()=>s(a),children:r.jsx(ge,{})})]}),ze=O.object({value:O.string(),label:O.string()});O.object({reference_type:O.nativeEnum(G),references:O.array(ze)});var Ve=a=>a.references.map(e=>({reference:a.reference_type,reference_id:e.value}));export{ze as T,Je as a,Ke as b,Ve as c};
