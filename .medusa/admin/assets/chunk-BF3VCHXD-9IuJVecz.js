import{ch as l,s as n,cQ as y,aL as p,q as s,cW as o}from"./index-Caf50g4I.js";var d="shipping_options",r=y(d),v=(e,i,a)=>{const{data:t,...u}=l({queryFn:()=>n.admin.shippingOption.retrieve(e,i),queryKey:r.detail(e),...a});return{...t,...u}},h=(e,i)=>{const{data:a,...t}=l({queryFn:()=>n.admin.shippingOption.list(e),queryKey:r.list(e),...i});return{...a,...t}},O=e=>p({mutationFn:i=>n.admin.shippingOption.create(i),onSuccess:(i,a,t)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...e}),g=(e,i)=>p({mutationFn:a=>n.admin.shippingOption.update(e,a),onSuccess:(a,t,u)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i}),q=(e,i)=>p({mutationFn:()=>n.admin.shippingOption.delete(e),onSuccess:(a,t,u)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i});export{q as a,O as b,g as c,v as d,r as s,h as u};
