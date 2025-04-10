import{u as F,a as z,b as E}from"./chunk-VGFBGBUR-CFwgbMyy.js";import"./chunk-6LRPF7MX-BlUTbJMi.js";import{a3 as M,af as B,a5 as H,S as N,di as O,j as e,b as R,aa as G,ab as K,dj as L,r as I,d3 as V,t as A,G as q,B as T,W as C,k as Q}from"./index-Caf50g4I.js";import{u as W,_ as Z}from"./chunk-X3LH6P65-BkTfjRZQ.js";import"./lodash-BDQz8dzJ.js";import"./chunk-TMAS4ILY-BT3NcW6w.js";import{K as $}from"./chunk-6HTZNHPT-_WRLDY31.js";import{R as n,u as J}from"./chunk-JGQGO74V-CT1-L7kV.js";import{C as k}from"./checkbox-Dci4QQUS.js";import{c as U}from"./index-CfwWneOF.js";import"./chunk-MSDRGCRR-DKLp0oc9.js";import"./chunk-P3UUX2T6-hSjfbnze.js";import"./chunk-ADOCJB6L-CwF7CunG.js";import"./chunk-C76H5USB-D_onynem.js";import"./chunk-YEDAFXMB-DKshZVaw.js";import"./chunk-AOFGTNG6-a1QNmOCv.js";import"./descending-sorting-CoRgk9tg.js";import"./chunk-WX2SMNCD-CHKwCy8o.js";import"./plus-mini-CX5QGlJp.js";import"./command-bar-uN9-SO61.js";import"./index-D0Noq28m.js";import"./chunk-DV5RB7II-DUxybIo8.js";import"./format-BethWtXF.js";import"./_isIndex-b-rEdJ3S.js";import"./x-mark-mini-PR8pi-vy.js";import"./date-picker-CqJ5C27b.js";import"./popover-eEuSkeLK.js";import"./triangle-left-mini-u_9aSAp8.js";import"./index-DYwFha4O.js";import"./prompt-Cvy-OtTy.js";var X=M({promotion_ids:B(H()).min(1)}),_=50,Y=({campaign:s})=>{var P,v;const{t:o}=R(),{handleSuccess:t}=J(),r=G({defaultValues:{promotion_ids:[]},resolver:K(X)}),{setValue:u}=r,{mutateAsync:x,isPending:b}=L(s.id),[g,d]=I.useState({}),c=i=>{const y=typeof i=="function"?i(g):i,D=Object.keys(y);u("promotion_ids",D,{shouldDirty:!0,shouldTouch:!0}),d(y)},{searchParams:l,raw:j}=F({pageSize:_}),{promotions:S,count:a,isPending:h}=V({...l},{placeholderData:Q}),m=oe(),f=z(),{table:p}=W({data:S??[],columns:m,enableRowSelection:i=>i.original.campaign_id!==s.id,enablePagination:!0,getRowId:i=>i.id,pageSize:_,count:a,rowSelection:{state:g,updater:c},meta:{campaignId:s.id,currencyCode:(P=s==null?void 0:s.budget)==null?void 0:P.currency_code,budgetType:(v=s==null?void 0:s.budget)==null?void 0:v.type}}),w=r.handleSubmit(async i=>{await x({add:i.promotion_ids},{onSuccess:()=>{A.success(o("campaigns.promotions.toast.success",{count:i.promotion_ids.length})),t()},onError:y=>A.error(y.message)})});return e.jsx(n.Form,{form:r,children:e.jsxs($,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(n.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:r.formState.errors.promotion_ids&&e.jsx(q,{variant:"error",children:r.formState.errors.promotion_ids.message})})}),e.jsx(n.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx(Z,{table:p,count:a,columns:m,pageSize:_,isLoading:h,filters:f,orderBy:[{key:"code",label:o("fields.code")},{key:"type",label:o("fields.type")},{key:"created_at",label:o("fields.createdAt")},{key:"updated_at",label:o("fields.updatedAt")}],queryObject:j,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:o("campaigns.promotions.add.list.noRecordsMessage")}})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(T,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(T,{size:"small",type:"submit",isLoading:b,children:o("actions.save")})]})})]})})},ee=U(),oe=()=>{const s=E(),{t:o}=R();return I.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(k,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:r=>t.toggleAllRowsSelected(!!r)}),cell:({row:t,table:r})=>{var h,m,f;const{campaignId:u,currencyCode:x,budgetType:b}=r.options.meta,g=b==="spend",d=t.original.campaign_id===u,c=!!t.original.campaign_id&&t.original.campaign_id!==u,l=g&&((h=t.original.application_method)==null?void 0:h.currency_code)!==x,j=t.getIsSelected()||d,S=l||c,a=e.jsx(k,{checked:S?"indeterminate":j,disabled:d||c||l,onCheckedChange:p=>t.toggleSelected(!!p),onClick:p=>{p.stopPropagation()}});return c?e.jsx(C,{content:o("campaigns.promotions.alreadyAddedDiffCampaign",{name:(f=(m=t.original)==null?void 0:m.campaign)==null?void 0:f.name}),side:"right",children:a}):l?e.jsx(C,{content:o("campaigns.promotions.currencyMismatch"),side:"right",children:a}):d?e.jsx(C,{content:o("campaigns.promotions.alreadyAdded"),side:"right",children:a}):a}}),...s],[o,s])},De=()=>{const{id:s}=N(),{campaign:o,isError:t,error:r}=O(s);if(t)throw r;return e.jsx(n,{children:o&&e.jsx(Y,{campaign:o})})};export{De as Component};
