import{u as P}from"./chunk-6FJ2PJHE-CQOJP8gw.js";import{u as T}from"./chunk-G3QXMPRB-4Ovs3NN2.js";import{eR as p,j as r,q as g,S as j,d as S,a as v,dr as D,eS as _,s as w,b as l,C as m,H as y,A as C,e as q}from"./index-Caf50g4I.js";import{u as k,_ as A}from"./chunk-X3LH6P65-BkTfjRZQ.js";import"./lodash-BDQz8dzJ.js";import{u as E,a as N}from"./chunk-U6CSGYH6-D0vgstdN.js";import"./chunk-TMAS4ILY-BT3NcW6w.js";import{S as B}from"./chunk-2RQLKDBF-B-sscnlP.js";import{P as Q}from"./pencil-square-BATYsrwE.js";import{T as z}from"./trash-Ba2jiC_Y.js";import"./use-prompt-DnoRxxTw.js";import"./prompt-Cvy-OtTy.js";import"./chunk-IQBAUTU5-6RuLpX-B.js";import"./chunk-ADOCJB6L-CwF7CunG.js";import"./chunk-P3UUX2T6-hSjfbnze.js";import"./index-CfwWneOF.js";import"./chunk-YEDAFXMB-DKshZVaw.js";import"./chunk-AOFGTNG6-a1QNmOCv.js";import"./descending-sorting-CoRgk9tg.js";import"./chunk-WX2SMNCD-CHKwCy8o.js";import"./plus-mini-CX5QGlJp.js";import"./command-bar-uN9-SO61.js";import"./index-D0Noq28m.js";import"./chunk-C76H5USB-D_onynem.js";import"./chunk-DV5RB7II-DUxybIo8.js";import"./format-BethWtXF.js";import"./_isIndex-b-rEdJ3S.js";import"./x-mark-mini-PR8pi-vy.js";import"./date-picker-CqJ5C27b.js";import"./popover-eEuSkeLK.js";import"./triangle-left-mini-u_9aSAp8.js";import"./index-DYwFha4O.js";import"./Trans-06DGFAnn.js";var Pe=e=>{const{id:t}=e.params||{},{product_type:a}=p(t,void 0,{initialData:e.data,enabled:!!t});return a?r.jsx("span",{children:a.value}):null},L=e=>({queryKey:_.detail(e),queryFn:async()=>w.admin.productType.retrieve(e)}),Te=async({params:e})=>{const t=e.id,a=L(t);return g.ensureQueryData(a)},M=({productType:e})=>{const{t}=l(),a=P(e.id);return r.jsxs(m,{className:"flex items-center justify-between",children:[r.jsx(y,{children:e.value}),r.jsx(C,{groups:[{actions:[{label:t("actions.edit"),icon:r.jsx(Q,{}),to:"edit"}]},{actions:[{label:t("actions.delete"),icon:r.jsx(z,{}),onClick:a}]}]})]})},u=10,O=({productType:e})=>{const{t}=l(),{searchParams:a,raw:i}=E({pageSize:u}),{products:o,count:n,isPending:s,isError:f,error:b}=q({...a,type_id:[e.id]}),h=N(["product_types"]),c=T(),{table:x}=k({columns:c,data:o,count:(o==null?void 0:o.length)||0,getRowId:d=>d.id,pageSize:u});if(f)throw b;return r.jsxs(m,{className:"divide-y p-0",children:[r.jsx("div",{className:"px-6 py-4",children:r.jsx(y,{level:"h2",children:t("products.domain")})}),r.jsx(A,{table:x,filters:h,isLoading:s,columns:c,count:n,pageSize:u,navigateTo:({original:d})=>`/products/${d.id}`,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],queryObject:i,search:!0,pagination:!0})]})},ge=()=>{const{id:e}=j(),t=S(),{product_type:a,isPending:i,isError:o,error:n}=p(e,void 0,{initialData:t}),{getWidgets:s}=v();if(i||!a)return r.jsx(D,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw n;return r.jsxs(B,{widgets:{after:s("product_type.details.after"),before:s("product_type.details.before")},showJSON:!0,showMetadata:!0,data:a,children:[r.jsx(M,{productType:a}),r.jsx(O,{productType:a})]})};export{Pe as Breadcrumb,ge as Component,Te as loader};
