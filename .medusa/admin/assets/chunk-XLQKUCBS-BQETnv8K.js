import{o as p,a as y}from"./chunk-ZQRKUG6J-C26Y72XF.js";import{a8 as i,aq as j,b as k,r as h,j as s,w as c}from"./index-Caf50g4I.js";import{F as w}from"./chunk-TYTNUPXB-BDNMWt0K.js";import{c as m}from"./chunk-6GU6IDUA-CDc7wW5L.js";var D=e=>{var t,r,g,d,l,u,_;const n=(r=(t=e.media)==null?void 0:t.find(o=>o.isThumbnail))==null?void 0:r.url,a=(g=e.media)==null?void 0:g.filter(o=>!o.isThumbnail).map(o=>({url:o.url}));return{status:e.status,is_giftcard:!1,tags:(d=e==null?void 0:e.tags)!=null&&d.length?(l=e.tags)==null?void 0:l.map(o=>({id:o})):void 0,sales_channels:(u=e==null?void 0:e.sales_channels)!=null&&u.length?(_=e.sales_channels)==null?void 0:_.map(o=>({id:o.id})):void 0,images:a,collection_id:e.collection_id||void 0,shipping_profile_id:e.shipping_profile_id||void 0,categories:e.categories.map(o=>({id:o})),type_id:e.type_id||void 0,handle:e.handle||void 0,origin_country:e.origin_country||void 0,material:e.material||void 0,mid_code:e.mid_code||void 0,hs_code:e.hs_code||void 0,thumbnail:n,title:e.title,subtitle:e.subtitle||void 0,description:e.description||void 0,discountable:e.discountable||void 0,width:e.width?parseFloat(e.width):void 0,length:e.length?parseFloat(e.length):void 0,height:e.height?parseFloat(e.height):void 0,weight:e.weight?parseFloat(e.weight):void 0,options:e.options.filter(o=>o.title),variants:F(e.variants.filter(o=>o.should_create),e.regionsCurrencyMap)}},F=(e,n)=>e.map(a=>({title:a.title||Object.values(a.options||{}).join(" / "),options:a.options,sku:a.sku||void 0,manage_inventory:!!a.manage_inventory,allow_backorder:!!a.allow_backorder,variant_rank:a.variant_rank,inventory_items:a.inventory.map(t=>{const r=t.required_quantity?m(t.required_quantity):null;return!t.inventory_item_id||!r?!1:{...t,required_quantity:r}}).filter(t=>t!==!1),prices:Object.entries(a.prices||{}).map(([t,r])=>{if(!(r===""||r===void 0))return t.startsWith("reg_")?{currency_code:n[t],amount:m(r),rules:{region_id:t}}:{currency_code:t,amount:m(r)}}).filter(t=>!!t)})),E=e=>e.map(n=>({...n,title:n.title||"",sku:n.sku||"",manage_inventory:n.manage_inventory||!1,allow_backorder:n.allow_backorder||!1,inventory_kit:n.inventory_kit||!1})),b=i.object({id:i.string().optional(),url:i.string(),isThumbnail:i.boolean(),file:i.any().nullable()}),x=i.object({should_create:i.boolean(),is_default:i.boolean().optional(),title:i.string(),upc:i.string().optional(),ean:i.string().optional(),barcode:i.string().optional(),mid_code:i.string().optional(),hs_code:i.string().optional(),width:p,height:p,length:p,weight:p,material:i.string().optional(),origin_country:i.string().optional(),sku:i.string().optional(),manage_inventory:i.boolean().optional(),allow_backorder:i.boolean().optional(),inventory_kit:i.boolean().optional(),options:i.record(i.string(),i.string()),variant_rank:i.number(),prices:i.record(i.string(),y).optional(),inventory:i.array(i.object({inventory_item_id:i.string(),required_quantity:p})).optional()}),S=i.object({title:i.string(),values:i.array(i.string()).min(1)}),O=i.object({title:i.string().min(1),subtitle:i.string().optional(),handle:i.string().optional(),description:i.string().optional(),discountable:i.boolean(),type_id:i.string().optional(),collection_id:i.string().optional(),shipping_profile_id:i.string().optional(),categories:i.array(i.string()),tags:i.array(i.string()).optional(),sales_channels:i.array(i.object({id:i.string(),name:i.string()})).optional(),origin_country:i.string().optional(),material:i.string().optional(),width:i.string().optional(),length:i.string().optional(),height:i.string().optional(),weight:i.string().optional(),mid_code:i.string().optional(),hs_code:i.string().optional(),options:i.array(S).min(1),enable_variants:i.boolean(),variants:i.array(x).min(1),media:i.array(b).optional()}).superRefine((e,n)=>{if(e.variants.every(t=>!t.should_create))return n.addIssue({code:i.ZodIssueCode.custom,path:["variants"],message:"invalid_length"});const a=new Set;e.variants.forEach((t,r)=>{t.sku&&(a.has(t.sku)&&n.addIssue({code:i.ZodIssueCode.custom,path:[`variants.${r}.sku`],message:j.t("products.create.errors.uniqueSku")}),a.add(t.sku))})}),R=i.object({media:i.array(b)}),M={discountable:!0,tags:[],sales_channels:[],options:[{title:"Default option",values:["Default option value"]}],variants:E([{title:"Default variant",should_create:!0,variant_rank:0,options:{"Default option":"Default option value"},inventory:[{inventory_item_id:"",required_quantity:""}],is_default:!0}]),enable_variants:!1,media:[],categories:[],collection_id:"",shipping_profile_id:"",description:"",handle:"",height:"",hs_code:"",length:"",material:"",mid_code:"",origin_country:"",subtitle:"",title:"",type_id:"",weight:"",width:""},f=["image/jpeg","image/png","image/gif","image/webp","image/heic","image/svg+xml"],T=[".jpeg",".png",".gif",".webp",".heic",".svg"],U=({form:e,append:n,showHint:a=!0})=>{const{t}=k(),r=h.useCallback(d=>{const l=d.find(u=>!f.includes(u.file.type));return l?(e.setError("media",{type:"invalid_file",message:t("products.media.invalidFileType",{name:l.file.name,types:T.join(", ")})}),!0):!1},[e,t]),g=h.useCallback(d=>{e.clearErrors("media"),!r(d)&&d.forEach(l=>n({...l,isThumbnail:!1}))},[e,n,r]);return s.jsx(c.Field,{control:e.control,name:"media",render:()=>s.jsx(c.Item,{children:s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsxs("div",{className:"flex flex-col gap-y-1",children:[s.jsx(c.Label,{optional:!0,children:t("products.media.label")}),a&&s.jsx(c.Hint,{children:t("products.media.editHint")})]}),s.jsx(c.Control,{children:s.jsx(w,{label:t("products.media.uploadImagesLabel"),hint:t("products.media.uploadImagesHint"),hasError:!!e.formState.errors.media,formats:f,onUploaded:g})}),s.jsx(c.ErrorMessage,{})]})})})};export{R as E,M as P,U,O as a,E as d,D as n};
