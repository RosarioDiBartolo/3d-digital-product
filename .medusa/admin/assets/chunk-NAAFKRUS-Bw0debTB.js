import{aL as n,s as u,q as a,aZ as r,cR as v,cS as y}from"./index-Caf50g4I.js";var o=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.initiateRequest(i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)})},...t}),m=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.request(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(e)})},...t}),c=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.confirm(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(e)}),a.invalidateQueries({queryKey:v.lists()}),a.invalidateQueries({queryKey:y.lists()}),a.invalidateQueries({queryKey:y.details()})},...t}),q=(e,t)=>n({mutationFn:()=>u.admin.orderEdit.cancelRequest(e),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.details()}),a.invalidateQueries({queryKey:r.preview(e)}),a.invalidateQueries({queryKey:r.changes(e)}),a.invalidateQueries({queryKey:r.lineItems(e)})},...t}),K=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.addItems(e,i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),Q=(e,t)=>n({mutationFn:({itemId:i,...s})=>u.admin.orderEdit.updateOriginalItem(e,i,s),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),E=(e,t)=>n({mutationFn:({actionId:i,...s})=>u.admin.orderEdit.updateAddedItem(e,i,s),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t}),p=(e,t)=>n({mutationFn:i=>u.admin.orderEdit.removeAddedItem(e,i),onSuccess:(i,s,d)=>{a.invalidateQueries({queryKey:r.preview(e)})},...t});export{c as a,o as b,m as c,K as d,E as e,Q as f,p as g,q as u};
