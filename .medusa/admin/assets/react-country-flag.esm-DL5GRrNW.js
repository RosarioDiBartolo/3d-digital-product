import{r as f}from"./index-Caf50g4I.js";function l(){return l=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},l.apply(this,arguments)}function m(r,e){if(r==null)return{};var n={},t=Object.keys(r),i,a;for(a=0;a<t.length;a++)i=t[a],!(e.indexOf(i)>=0)&&(n[i]=r[i]);return n}var y=["cdnSuffix","cdnUrl","countryCode","style","svg"],h="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",C="svg",b=127397,j=function(e){var n=e.cdnSuffix,t=n===void 0?C:n,i=e.cdnUrl,a=i===void 0?h:i,s=e.countryCode,o=e.style,c=e.svg,u=c===void 0?!1:c,d=m(e,y);if(typeof s!="string")return null;if(u){var g=""+a+s.toLowerCase()+"."+t;return f.createElement("img",Object.assign({},d,{src:g,style:l({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},o)}))}var v=s.toUpperCase().replace(/./g,function(p){return String.fromCodePoint(p.charCodeAt(0)+b)});return f.createElement("span",Object.assign({role:"img"},d,{style:l({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},o)}),v)};export{j as R};
