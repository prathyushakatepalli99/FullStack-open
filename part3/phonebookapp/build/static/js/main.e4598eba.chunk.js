(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),r=n.n(a),i=(n(9),n(2)),u=n(0),j=function(e){return Object(u.jsxs)("div",{children:["Search By Name: ",Object(u.jsx)("input",{type:e.type,value:e.value,onChange:e.onChange})]})},b=function(e){return Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{type:e.type,value:e.value,onChange:e.onChange})]})},s=function(e){return Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{type:e.type,value:e.value,onChange:e.onChange})]})},l=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:e.type,children:e.text})})},d=function(e){return e.personsToShow.map((function(e){return Object(u.jsxs)("p",{children:[e.name,": ",e.number]},e.id)}))},h=function(e){var t,n=Object(c.useState)(e.Phonebook),o=Object(i.a)(n,2),a=o[0],r=o[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),x=O[0],m=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),g=v[0],f=v[1],y=Object(c.useState)(""),C=Object(i.a)(y,2),S=C[0],w=C[1],k=Object(c.useState)(!1),D=Object(i.a)(k,2),A=D[0],P=D[1],F=A?(t=S,a.filter((function(e){return-1!==e.name.toLowerCase().split(" ").join("").indexOf(t.toLowerCase())}))):a;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)("div",{children:Object(u.jsx)(j,{type:"text",value:S,onChange:function(e){console.log(e.target.value),w(e.target.value),P(!0)}})}),Object(u.jsx)("h3",{children:"Add a new contact"}),Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:a.length+1,name:x,number:g};!function(){for(var e=0;e<a.length;e++)x===a[e].name?(window.alert(x+" is already added to phonebook"),r(a)):r(a.concat(t))}(),m(""),f("")},children:[Object(u.jsx)(b,{type:"text",value:x,onChange:function(e){console.log(e.target.value),m(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)(s,{type:"text",value:g,onChange:function(e){console.log(e.target.value),f(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)(l,{type:"submit",text:"Add"})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=a.slice(0,a.length-1);r(t)},children:Object(u.jsx)(l,{type:"submit",text:"Delete"})})]}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(d,{personsToShow:F})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(u.jsxs)(o.a.StrictMode,{children:["(",Object(u.jsx)(h,{Phonebook:[{id:1,name:"Adam",number:"91234567809"},{id:2,name:"Arto",number:"45676112347"},{id:3,name:"Ma Yutao",number:"76436573858"},{id:4,name:"Dai Daisy",number:"12345678901"},{id:5,name:"Dan Abramoy",number:"34567890123"}]}),","]}),document.getElementById("root")),O()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e4598eba.chunk.js.map