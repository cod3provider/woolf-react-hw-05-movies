import{r as a,u as p,j as e}from"./index-D1fGySBH.js";import{M as g}from"./MoviesList-DUu6Q9di.js";import{s as v}from"./api-bBcPAEAs.js";const x="_form_3u47f_1",S="_input_3u47f_9",_="_button_3u47f_26",r={form:x,input:S,button:_},y=()=>{const[n,i]=a.useState([]),[c,u]=a.useState(""),[m,l]=p(),o=m.get("query"),f=s=>{const{value:t}=s.target;u(t.toLowerCase())},h=s=>{s.preventDefault(),l({query:c}),u("")};return a.useEffect(()=>{if(!o)return;(async()=>{try{const t=await v(o);if(!t.length){alert("Something went wrong");return}i(t)}catch(t){console.log(t)}})()},[o]),e.jsxs(e.Fragment,{children:[e.jsxs("form",{className:r.form,onSubmit:h,children:[e.jsx("input",{className:r.input,onChange:f,type:"text",value:c,placeholder:"Enter a name of film"}),e.jsx("button",{className:r.button,type:"submit",children:"Search"})]}),n&&e.jsx(g,{movies:n})]})};export{y as default};
