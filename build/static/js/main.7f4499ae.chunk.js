(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{187:function(e,n,t){"use strict";(function(e){var o=t(35),c=t.n(o),i=t(67),s=t(218).Router(),r=t(18);s.get("*",(function(n,t){t.sendFile(r.join(e,"../../"))}));var a={getBooks:function(){return Object(i.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("json"),console.log(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))()}};n.a=a}).call(this,"/")},193:function(e,n,t){},194:function(e,n,t){},246:function(e,n){},247:function(e,n){},251:function(e,n){},253:function(e,n){},291:function(e,n){},294:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=294},305:function(e,n){},307:function(e,n){},335:function(e,n){},337:function(e,n){},338:function(e,n){},343:function(e,n){},345:function(e,n){},351:function(e,n){},353:function(e,n){},372:function(e,n){},384:function(e,n){},387:function(e,n){},407:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),i=t(184),s=t.n(i),r=(t(193),t(194),t(26)),a=t(7),u=t(2);var l=function(){return Object(u.jsxs)("div",{id:"header",children:[Object(u.jsx)("h1",{children:"Google Books Search"}),Object(u.jsxs)("div",{id:"links",children:[Object(u.jsx)(r.b,{to:"/",children:"Search"}),Object(u.jsx)(r.b,{to:"/saved",children:"Saved"})]})]})},j=t(188);var d=function(e){var n=e.title,t=e.authors,o=e.description,c=e.image,i=e.link;return console.log("book"),Object(u.jsxs)("div",{className:"bookdiv",children:[Object(u.jsx)("img",{src:c,alt:c}),Object(u.jsxs)("div",{className:"booktext",children:[Object(u.jsx)("p",{children:n}),Object(u.jsx)("p",{children:"Author(s):"}),t.map((function(e){return Object(u.jsx)("p",{children:e},Math.random())})),Object(u.jsxs)("p",{children:["Description: ",o]}),Object(u.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"View"}),Object(u.jsx)("button",{className:"favorite",children:"Add to favorites"})]})]})},f=t(186),h=t.n(f);var b=function(e){var n=e.input;console.log("input1"),console.log(n);var t="https://www.googleapis.com/books/v1/volumes?q=".concat(n,"&key=AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0"),c=Object(o.useState)([]),i=Object(j.a)(c,2),s=i[0],r=i[1];Object(o.useEffect)((function(){h.a.get(t).then((function(e){r(e.data.items)})).catch((function(e){return console.log(e.message)}))}),[t]),console.log("results"),console.log(s);var a=[];return s.forEach((function(e){var n="";n=e.volumeInfo.title?e.volumeInfo.title:"No title";var t=[];t=e.volumeInfo.authors?e.volumeInfo.authors:["None"];var o="";o=e.volumeInfo.description?e.volumeInfo.description:"None";var c="";c=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"None";var i="";i=e.volumeInfo.infoLink?e.volumeInfo.infoLink:"None",a.push({title:n,authors:t,description:o,image:c,link:i})})),console.log("booksArray"),console.log(a),Object(u.jsx)("div",{className:"searchedbooks",children:a.map((function(e){return Object(u.jsx)("div",{className:"book",children:Object(u.jsx)(d,{title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link})},Math.random())}))})},v="mindfulness";var p=function(){return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h2",{children:"Search"}),Object(u.jsxs)("div",{className:"searchBooks",children:[Object(u.jsxs)("div",{id:"input",children:[Object(u.jsx)("input",{id:"inputField",onChange:function(e){v=e.target.value,console.log("input change"),console.log(v)}}),Object(u.jsx)(r.b,{to:"/",children:"Search"})]}),Object(u.jsx)(b,{input:v})]})]})},x=t(35),g=t.n(x),O=t(67);var m=function(){return Object(u.jsx)("p",{children:"Saved Book"})},k=t(187);function N(){return(N=Object(O.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.getBooks();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){N.apply(this,arguments)}();var I=function(){return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("h2",{children:"Saved"}),Object(u.jsxs)("div",{className:"books",children:[Object(u.jsx)(m,{}),Object(u.jsx)(m,{})]})]})};var w=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(a.a,{exact:!0,path:"/",component:p}),Object(u.jsx)(a.a,{exact:!0,path:"/saved",component:I})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,408)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),o(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[407,1,2]]]);
//# sourceMappingURL=main.7f4499ae.chunk.js.map