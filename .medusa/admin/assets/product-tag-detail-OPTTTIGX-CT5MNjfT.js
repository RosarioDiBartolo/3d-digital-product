import{u as h}from"./chunk-LNROU6QR-Cxn7oqdc.js";import{eF as p,j as e,q as j,S as T,d as v,a as S,dr as D,eC as _,s as C,b as m,C as g,H as f,A as w,e as k}from"./index-Caf50g4I.js";import{u as q}from"./chunk-G3QXMPRB-4Ovs3NN2.js";import{u as E,_ as N}from"./chunk-X3LH6P65-BkTfjRZQ.js";import"./lodash-BDQz8dzJ.js";import{u as A,a as B}from"./chunk-U6CSGYH6-D0vgstdN.js";import"./chunk-TMAS4ILY-BT3NcW6w.js";import{S as F}from"./chunk-2RQLKDBF-B-sscnlP.js";import{P as Q}from"./pencil-square-BATYsrwE.js";import{T as z}from"./trash-Ba2jiC_Y.js";import"./use-prompt-DnoRxxTw.js";import"./prompt-Cvy-OtTy.js";import"./chunk-IQBAUTU5-6RuLpX-B.js";import"./chunk-ADOCJB6L-CwF7CunG.js";import"./chunk-P3UUX2T6-hSjfbnze.js";import"./index-CfwWneOF.js";import"./chunk-YEDAFXMB-DKshZVaw.js";import"./chunk-AOFGTNG6-a1QNmOCv.js";import"./descending-sorting-CoRgk9tg.js";import"./chunk-WX2SMNCD-CHKwCy8o.js";import"./plus-mini-CX5QGlJp.js";import"./command-bar-uN9-SO61.js";import"./index-D0Noq28m.js";import"./chunk-C76H5USB-D_onynem.js";import"./chunk-DV5RB7II-DUxybIo8.js";import"./format-BethWtXF.js";import"./_isIndex-b-rEdJ3S.js";import"./x-mark-mini-PR8pi-vy.js";import"./date-picker-CqJ5C27b.js";import"./popover-eEuSkeLK.js";import"./triangle-left-mini-u_9aSAp8.js";import"./index-DYwFha4O.js";import"./Trans-06DGFAnn.js";var he=r=>{const{id:t}=r.params||{},{product_tag:a}=p(t,void 0,{initialData:r.data,enabled:!!t});return a?e.jsx("span",{children:a.value}):null},I=r=>({queryKey:_.detail(r),queryFn:async()=>C.admin.productTag.retrieve(r)}),je=async({params:r})=>{const t=r.id,a=I(t);return j.ensureQueryData(a)},L=({productTag:r})=>{const{t}=m(),a=h({productTag:r});return e.jsxs(g,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx("span",{className:"text-ui-fg-muted h1-core",children:"#"}),e.jsx(f,{children:r.value})]}),e.jsx(w,{groups:[{actions:[{icon:e.jsx(Q,{}),label:t("actions.edit"),to:"edit"}]},{actions:[{icon:e.jsx(z,{}),label:t("actions.delete"),onClick:a}]}]})]})},u=10,l="pt",O=({productTag:r})=>{const{t}=m(),{searchParams:a,raw:s}=A({pageSize:u,prefix:l}),{products:i,count:o,isPending:n,isError:x,error:y}=k({...a,tag_id:r.id}),b=B(["product_tags"]),c=q(),{table:P}=E({data:i,count:o,columns:c,getRowId:d=>d.id,pageSize:u,prefix:l});if(x)throw y;return e.jsxs(g,{className:"divide-y px-0 py-0",children:[e.jsx("div",{className:"px-6 py-4",children:e.jsx(f,{level:"h2",children:t("products.domain")})}),e.jsx(N,{table:P,filters:b,queryObject:s,isLoading:n,columns:c,pageSize:u,count:o,navigateTo:d=>`/products/${d.original.id}`,search:!0,pagination:!0,orderBy:[{key:"title",label:t("fields.title")},{key:"status",label:t("fields.status")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}]})]})},Te=()=>{const{id:r}=T(),t=v(),{getWidgets:a}=S(),{product_tag:s,isPending:i,isError:o,error:n}=p(r,void 0,{initialData:t});if(i||!s)return e.jsx(D,{showJSON:!0,sections:2});if(o)throw n;return e.jsxs(F,{widgets:{after:a("product_tag.details.after"),before:a("product_tag.details.before")},showJSON:!0,data:s,children:[e.jsx(L,{productTag:s}),e.jsx(O,{productTag:s})]})};export{he as Breadcrumb,Te as Component,je as loader};
