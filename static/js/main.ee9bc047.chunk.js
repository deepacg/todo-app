(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),o=(n(12),n(7)),d=n(5),r=(n(13),n(0));var l=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],b=i[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));e&&e.length>0&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(r.jsxs)("div",{className:"app container-fluid",children:[Object(r.jsx)("div",{className:"mainHeading mt-3",children:Object(r.jsx)("h1",{align:"center ",children:"ToDo List"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"text-center pb-3",children:[Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:["Whoop, it's ",j(),", ",m()," "]})]}),Object(r.jsxs)("div",{className:"input py-3",children:[Object(r.jsx)("input",{type:"text",placeholder:"\ud83d\udd8a\ufe0f Add item...",onInput:function(e){return b(e.target.value)},value:l}),Object(r.jsx)("i",{className:"fas fa-plus",onClick:function(){l.length>0&&(a([].concat(Object(o.a)(n),[{value:l,done:!1,removed:!1,id:Date.now()}])),b(""))}})]})]})})}),Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(r.jsx)("h2",{align:"center ",children:"Active Todos"}),Object(r.jsx)("div",{className:"row",children:n.map((function(e){return e.done||e.removed?null:Object(r.jsx)("div",{className:"todos",children:Object(r.jsxs)("div",{className:"todo col-12 bg-primary text-white animate__animated animate__bounceIn animate__faster",children:[Object(r.jsxs)("div",{className:"col-11 text-center",children:[Object(r.jsx)("button",{className:"btn btn-success shadow",onClick:function(){a(n.map((function(t){return t.id===e.id&&(t.done=!t.done,t.id=Date.now()),t})))},children:"Mark as Done"}),Object(r.jsx)("p",{className:"todo-content h4 my-2",style:{marginBottom:"0px"},children:e.value}),Object(r.jsx)("p",{style:{marginBottom:"",fontSize:"0.7em",color:"white"},children:u(e.id)})]}),Object(r.jsx)("div",{className:"col-1",children:Object(r.jsx)("i",{className:"fas fa-times text-dark",onClick:function(){a(n.map((function(t){return t.id===e.id&&(t.removed=!t.removed,t.id=Date.now()),t})))}})})]})},e.id)}))})]}),Object(r.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(r.jsx)("h2",{align:"center ",children:"Todos finished"}),Object(r.jsx)("div",{className:"row",children:n.map((function(e){return e.done&&!e.removed?Object(r.jsx)("div",{className:"todos",children:Object(r.jsxs)("div",{className:"todo col-12 bg-success text-white animate__animated animate__bounceIn animate__faster",children:[Object(r.jsxs)("div",{className:"col-11 text-center",children:[Object(r.jsx)("button",{className:"btn btn-primary shadow",onClick:function(){a(n.map((function(t){return t.id===e.id&&(t.done=!t.done,t.id=Date.now()),t})))},children:"Mark as Undone"}),Object(r.jsx)("p",{className:"todo-content h4 my-2",style:{marginBottom:"0px"},children:e.value}),Object(r.jsxs)("p",{style:{marginBottom:"",fontSize:"0.7em",color:"white"},children:["Done on: ",u(e.id)]})]}),Object(r.jsx)("div",{className:"col-1",children:Object(r.jsx)("i",{className:"fas fa-times text-dark",onClick:function(){a(n.filter((function(t){return t.id!==e.id})))}})})]})},e.id):null}))})]}),Object(r.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(r.jsx)("h2",{align:"center",children:" Todos cancelled"}),Object(r.jsx)("div",{className:"row",children:n.map((function(e){return e.removed?Object(r.jsx)("div",{className:"todos",children:Object(r.jsxs)("div",{className:"todo col-12 bg-warning text-center animate__animated animate__bounceIn animate__faster",children:[Object(r.jsxs)("div",{className:"col-11",children:[Object(r.jsx)("button",{className:"btn btn-success shadow",onClick:function(){a(n.map((function(t){return t.id===e.id&&(t.removed=!t.removed,t.id=Date.now()),t})))},children:"Restore Todo"}),Object(r.jsx)("p",{className:"todo-content h4 my-2",style:{marginBottom:"0px"},children:e.value}),Object(r.jsxs)("p",{style:{marginBottom:"",fontSize:"0.7em",color:"black"},children:["Cancelled on: ",u(e.id)]})]}),Object(r.jsx)("div",{className:"col-1",children:Object(r.jsx)("i",{className:"fas fa-times text-dark",onClick:function(){a(n.filter((function(t){return t.id!==e.id})))}})})]})},e.id):null}))})]})]})})]})};function j(){var e=new Date,t=new Array(7);return t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",t[e.getDay()]}function m(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,c=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),e=t+"/"+n+"/"+c}function u(e){var t=new Date(e),n=t.getHours(),c=t.getMinutes();c<10&&(c="0"+c);var a="am";return n>12&&(n-=12,a="pm"),n+":"+c+a+" "+t.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getFullYear()}i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee9bc047.chunk.js.map