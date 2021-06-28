(this["webpackJsonpgoogle-books-frontend"]=this["webpackJsonpgoogle-books-frontend"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(25),i=n.n(s),a=(n(33),n(34),n(8)),r=n(2),l=n(0);var j=function(){return Object(l.jsxs)("div",{id:"header",children:[Object(l.jsx)("h1",{children:"Google Books Search"}),Object(l.jsxs)("div",{id:"links",children:[Object(l.jsx)(a.b,{to:"/",children:"Search"}),Object(l.jsx)(a.b,{to:"/saved",children:"Saved"})]})]})},d=n(11);var u=function(e){var t=e.book;return Object(l.jsxs)("div",{className:"bookdiv",children:[Object(l.jsx)("img",{src:t.image,alt:t.image}),Object(l.jsxs)("div",{className:"booktext",children:[Object(l.jsx)("p",{children:t.title}),Object(l.jsx)("p",{children:"Author(s):"}),t.authors.map((function(e){return Object(l.jsx)("p",{children:e},Math.random())})),Object(l.jsxs)("p",{children:["Description: ",t.description]}),Object(l.jsxs)("div",{className:"bookclicks",children:[Object(l.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:"View"}),Object(l.jsx)("button",{className:"addbutton",id:t._id,onClick:function(){fetch("/api/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},children:"Add to saved"})]})]})]})},b=n(27),h=n.n(b);var v=function(e){var t=e.input;console.log("input"),console.log(t);var n="https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0"),c=Object(o.useState)([]),s=Object(d.a)(c,2),i=s[0],a=s[1];Object(o.useEffect)((function(){h.a.get(n).then((function(e){a(e.data.items)})).catch((function(e){return console.log(e.message)}))}),[n]),console.log("results"),console.log(i);var r=[];return i.forEach((function(e){var t=e.id,n="";n=e.volumeInfo.title?e.volumeInfo.title:"No title";var o=[];o=e.volumeInfo.authors?e.volumeInfo.authors:["None"];var c="";c=e.volumeInfo.description?e.volumeInfo.description:"None";var s="";s=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"Image unavailable";var i="";i=e.volumeInfo.infoLink?e.volumeInfo.infoLink:"None",r.push({_id:t,title:n,authors:o,description:c,image:s,link:i})})),console.log("booksArray"),console.log(r),Object(l.jsx)("div",{className:"searchedbooks",children:r.map((function(e){return Object(l.jsx)("div",{className:"book",children:Object(l.jsx)(u,{book:e})},e._id)}))})},f="science";var p=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h2",{children:"Search"}),Object(l.jsxs)("div",{className:"searchBooks",children:[Object(l.jsxs)("div",{id:"input",children:[Object(l.jsx)("input",{id:"inputField",onChange:function(e){f=e.target.value,console.log("input change"),console.log(f)}}),Object(l.jsx)(a.b,{to:"/",children:"Search"})]}),Object(l.jsx)(v,{input:f})]})]})},m=n(16),O=n.n(m),x=n(28);var g=function(e){var t=e.book;return Object(l.jsxs)("div",{className:"bookdiv",children:[Object(l.jsx)("img",{src:t.image,alt:t.image}),Object(l.jsxs)("div",{className:"booktext",children:[Object(l.jsx)("p",{children:t.title}),Object(l.jsx)("p",{children:"Author(s):"}),t.authors.map((function(e){return Object(l.jsx)("p",{children:e},Math.random())})),Object(l.jsxs)("p",{children:["Description: ",t.description]}),Object(l.jsxs)("div",{className:"favclicks",children:[Object(l.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:"View"}),Object(l.jsx)("button",{className:"favorite",id:t._id,onClick:function(){fetch("/api/books/".concat(t._id),{method:"DELETE",headers:{"Content-Type":"application/json"}})},children:"Remove from saved"})]})]})]})};var k=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/books").then((function(e){return e.json()}));case 3:t=e.sent,c(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err.message"),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("books"),console.log(n),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h2",{children:"Saved"}),Object(l.jsx)("div",{className:"books",children:n.map((function(e){return Object(l.jsx)(g,{book:e},e._id)}))})]})};var N=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(r.a,{exact:!0,path:"/saved",component:k})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),I()}},[[63,1,2]]]);
//# sourceMappingURL=main.687a922b.chunk.js.map