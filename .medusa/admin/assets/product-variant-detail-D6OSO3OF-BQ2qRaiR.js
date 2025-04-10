import{L as q}from"./chunk-6WKBBTKM-BN1MTGg6.js";import{g as P}from"./chunk-PDWBYQOW-BedvhUOI.js";import{V as f}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{P as p}from"./chunk-P3UUX2T6-hSjfbnze.js";import{u as D,_ as T}from"./chunk-X3LH6P65-BkTfjRZQ.js";import{a9 as _,j as e,q as I,d as V,S as k,a as A,U as B,aF as z,s as E,b as u,u as M,aG as L,C as h,H as v,A as j,Z as H,$ as w,r as S,aH as K,B as R}from"./index-Caf50g4I.js";import"./lodash-BDQz8dzJ.js";import{N as $}from"./chunk-WX2SMNCD-CHKwCy8o.js";import"./chunk-TMAS4ILY-BT3NcW6w.js";import{S as N}from"./chunk-LFLGEXIG-DE4o-QyK.js";import{T as y}from"./chunk-2RQLKDBF-B-sscnlP.js";import{u as O}from"./use-prompt-DnoRxxTw.js";import{C}from"./component-D17_3DKo.js";import{P as Q}from"./pencil-square-BATYsrwE.js";import{T as F}from"./trash-Ba2jiC_Y.js";import{c as G}from"./index-CfwWneOF.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-YEDAFXMB-DKshZVaw.js";import"./chunk-AOFGTNG6-a1QNmOCv.js";import"./descending-sorting-CoRgk9tg.js";import"./command-bar-uN9-SO61.js";import"./index-D0Noq28m.js";import"./plus-mini-CX5QGlJp.js";import"./chunk-DV5RB7II-DUxybIo8.js";import"./format-BethWtXF.js";import"./_isIndex-b-rEdJ3S.js";import"./x-mark-mini-PR8pi-vy.js";import"./date-picker-CqJ5C27b.js";import"./popover-eEuSkeLK.js";import"./triangle-left-mini-u_9aSAp8.js";import"./index-DYwFha4O.js";import"./Trans-06DGFAnn.js";import"./prompt-Cvy-OtTy.js";var Ae=t=>{const{id:s,variant_id:a}=t.params||{},{variant:i}=_(s,a,{fields:f},{initialData:t.data,enabled:!!s&&!!a});return i?e.jsx("span",{children:i.title}):null},J=(t,s)=>({queryKey:z.detail(s,{fields:f}),queryFn:async()=>E.admin.product.retrieveVariant(t,s,{fields:f})}),Be=async({params:t})=>{const s=t.id,a=t.variant_id,i=J(s,a);return I.ensureQueryData(i)};function U({variant:t}){var c,d;const{t:s}=u(),a=O(),i=M(),n=((c=t.inventory)==null?void 0:c.length)>1,{mutateAsync:l}=L(t.product_id,t.id),o=async()=>{await a({title:s("general.areYouSure"),description:s("products.variant.deleteWarning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await l(void 0,{onSuccess:()=>{i("..",{replace:!0})}})};return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{children:t.title}),n&&e.jsx("span",{className:"text-ui-fg-muted font-normal",children:e.jsx(C,{})})]}),e.jsx("span",{className:"text-ui-fg-subtle txt-small mt-2",children:s("labels.productVariant")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(j,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(Q,{})}]},{actions:[{label:s("actions.delete"),onClick:o,icon:e.jsx(F,{})}]}]})})]}),e.jsx(N,{title:s("fields.sku"),value:t.sku}),(d=t.options)==null?void 0:d.map(r=>{var x;return e.jsx(N,{title:(x=r.option)==null?void 0:x.title,value:e.jsx(H,{size:"2xsmall",children:r.value})},r.id)})]})}var W=({item:t})=>{const{t:s}=u();return e.jsx(j,{groups:[{actions:[{icon:e.jsx(w,{}),label:s("products.variant.inventory.navigateToItem"),to:`/inventory/${t.id}`}]}]})},m=G(),Z=()=>{const{t}=u();return S.useMemo(()=>[m.accessor("title",{header:t("fields.title"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(p,{})}}),m.accessor("sku",{header:t("fields.sku"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(p,{})}}),m.accessor("required_quantity",{header:t("fields.requiredQuantity"),cell:({getValue:s})=>{const a=s();return Number.isNaN(a)?e.jsx(p,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})})}}),m.display({id:"inventory_quantity",header:t("fields.inventory"),cell:({getValue:s,row:{original:a}})=>{var l;if(!((l=a.location_levels)!=null&&l.length))return e.jsx(p,{});let i=0,n=0;return a.location_levels.forEach(o=>{i+=o.available_quantity,n+=1}),e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:t("products.variant.tableItem",{availableCount:i,locationCount:n,count:n})})})}}),m.display({id:"actions",cell:({row:s})=>e.jsx(W,{item:s.original})})],[t])},b=20;function Y({inventoryItems:t}){const{t:s}=u(),a=Z(),{table:i}=D({data:t??[],columns:a,count:t.length,enablePagination:!0,getRowId:l=>l.id,pageSize:b}),n=t.length>1;return e.jsxs(h,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(v,{level:"h2",children:s("fields.inventoryItems")})}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(j,{groups:[{actions:[{label:s(n?"products.variant.inventory.manageKit":"products.variant.inventory.manageItems"),to:"manage-items",icon:n?e.jsx(C,{}):e.jsx(w,{})}]}]})})]}),e.jsx(T,{table:i,columns:a,pageSize:b,count:t.length,navigateTo:l=>`/inventory/${l.id}`})]})}function X(){const{t}=u();return e.jsx(h,{className:"divide-y p-0",children:e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(v,{level:"h2",children:t("fields.inventoryItems")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("products.variant.inventory.notManagedDesc")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(q,{to:"edit",children:t("products.variant.edit.header")})})]})})}function ee({variant:t}){var d;const{t:s}=u(),a=(d=t.prices)==null?void 0:d.filter(r=>!Object.keys(r.rules||{}).length).sort((r,x)=>{var g;return(g=r.currency_code)==null?void 0:g.localeCompare(x.currency_code)}),i=!!(a!=null&&a.length),[n,l]=S.useState(3),o=a==null?void 0:a.slice(0,n),c=()=>{l(n+3)};return e.jsxs(h,{className:"flex flex-col divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(v,{level:"h2",children:s("labels.prices")}),e.jsx(j,{groups:[{actions:[{label:s("actions.edit"),to:`/products/${t.product_id}/variants/${t.id}/prices`,icon:e.jsx(K,{})}]}]})]}),!i&&e.jsx($,{className:"h-60"}),o==null?void 0:o.map(r=>e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:r.currency_code.toUpperCase()}),e.jsx("span",{children:P(r.amount,r.currency_code)})]},r.id)),i&&e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex items-center justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:s("products.variant.pricesPagination",{total:a.length,current:Math.min(n,a.length)})}),e.jsx(R,{onClick:c,disabled:n>=a.length,className:"-mr-3 text-blue-500",variant:"transparent",children:s("actions.showMore")})]})]})}var ze=()=>{const t=V(),{id:s,variant_id:a}=k(),{variant:i,isLoading:n,isError:l,error:o}=_(s,a,{fields:f},{initialData:t}),{getWidgets:c}=A();if(n||!i)return e.jsx(B,{mainSections:2,sidebarSections:1,showJSON:!0,showMetadata:!0});if(l)throw o;return e.jsxs(y,{data:i,hasOutlet:!0,showJSON:!0,showMetadata:!0,widgets:{after:c("product_variant.details.after"),before:c("product_variant.details.before"),sideAfter:c("product_variant.details.side.after"),sideBefore:c("product_variant.details.side.before")},children:[e.jsxs(y.Main,{children:[e.jsx(U,{variant:i}),i.manage_inventory?e.jsx(Y,{inventoryItems:i.inventory_items.map(d=>({...d.inventory,required_quantity:d.required_quantity,variant:i}))}):e.jsx(X,{})]}),e.jsx(y.Sidebar,{children:e.jsx(ee,{variant:i})})]})};export{Ae as Breadcrumb,ze as Component,Be as loader};
