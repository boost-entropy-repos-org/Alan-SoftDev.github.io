(this["webpackJsonppwa-roboapp"]=this["webpackJsonppwa-roboapp"]||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),c=t(10),o=t.n(c),i=t(11),s=t.n(i),d=t(13),u=t(15),p=t(30),l=t(31),b=t.n(l),j=function(){var n=Object(d.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.get("https://api.publicapis.org/entries",{params:{title:encodeURI(e)}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=t(33),h=t(8),f=t(32),O=t(19),g=function(n){var e=n.data;return Object(r.jsx)(x.a,{children:function(n){for(var e=n.entries,t=[],a=0;a<n.count;a++)t.push(Object(r.jsx)(O.a.Item,{interval:1e3,children:Object(r.jsxs)(h.a,{className:"d-block w-100",children:[Object(r.jsxs)(h.a.Header,{className:"cardH",children:[a+1," - API: ",e[a].API]}),Object(r.jsxs)(h.a.Body,{children:[Object(r.jsx)(h.a.Title,{className:"cardH",children:e[a].Description}),Object(r.jsxs)(h.a.Text,{children:[e[a].Auth&&Object(r.jsx)("span",{children:"Its authentication method is ".concat(e[a].Auth,".  ")}),Object(r.jsxs)("span",{children:["It returns entries that ",e[a].HTTPS?"support HTTPS":"don't support HTTPS","."]})]}),Object(r.jsx)(f.a,{variant:"info",target:"_blank",href:e[a].Link,children:"Link to API page"})]})]})},a));return Object(r.jsx)(O.a,{children:t})}(e)})},v=t(34),w=t(38),k=t.p+"static/media/background.20d2084f.jpg";function m(){var n=Object(p.a)(["\n\n  .jumbotron {\n    text-align: center;\n    background: url(",") no-repeat bottom;\n    background-size: cover;\n    height: 100vh;\n    position: relative;\n    color: #eee;\n    z-index: 0;\n  }\n  .search {\n    background-color: #fff;\n    opacity: 0.85;\n    position: relative;\n    top: 160px;\n    margin: auto;\n    padding: 20px;\n    width: 80%;\n    border-radius: 10px;\n    z-index: 1;\n    color: black;\n    transition: transform ease 0.5s;\n    box-shadow: 5px 5px 15px #ccc;\n    &-title {\n      font-size: 25px;\n      font-weight: bolder;\n    }\n  }\n  .go-up {\n    transform: translateY(-150px) scale(0.8);\n    transition: transform ease 0.5s;\n  }\n  input {\n    font-size: 18px;\n    border-radius: 5px;\n    padding: 5px;\n    width: 80%;\n  }\n\n  .carousel {\n    background-color: #fff;\n    opacity: 0.85;\n    top: 20px;\n    margin: auto;\n    padding: 20px;\n    border-radius: 10px;\n    z-index: 1;\n    width: 80%;\n    color: black;\n    box-shadow: 5px 5px 15px #ccc;\n    transition: opacity 0.5s;\n    &-item {\n      position: relative;\n      font-size: calc(30% + 1vw + 1vh);\n    }\n  }\n  .cardH {\n    font-size: calc(30% + 1vw + 1vh);\n    font-weight: bold;\n  }\n  .noNetwork {\n    background-color: orange;\n    width: 100%;\n    color: black;\n    z-index: 2;\n  }\n"]);return m=function(){return n},n}var P=v.a.div(m(),k);var y=function(){var n=Object(a.useState)(""),e=Object(u.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)({}),i=Object(u.a)(o,2),p=i[0],l=i[1],b=Object(a.useState)(!0),x=Object(u.a)(b,2),f=x[0],O=x[1],v=function(){var n=Object(d.a)(s.a.mark((function n(e){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==e.key){n.next=6;break}return n.next=3,j(t);case 3:r=n.sent,l(r),c("");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.addEventListener("online",(function(n){console.log("You are online"),O(!0)}),!1),window.addEventListener("offline",(function(n){console.log("You are offline"),O(!1)}),!1)}),[O]),Object(r.jsx)("div",{children:Object(r.jsx)(P,{children:Object(r.jsxs)(w.a,{fluid:!0,children:[!f&&Object(r.jsx)(h.a,{className:"noNetwork",children:Object(r.jsx)("p",{children:" No network! Please go online to use RoboAPP!"})}),Object(r.jsx)(h.a,{className:"search ".concat(p.count&&"go-up"),children:Object(r.jsxs)(h.a.Body,{children:[Object(r.jsx)(h.a.Title,{children:"RoboAPP for searching APIs"}),Object(r.jsx)(h.a.Text,{children:Object(r.jsx)("input",{type:"text",placeholder:"Search APIs by keywords ...",value:t,onChange:function(n){return c(n.target.value)},onKeyPress:v})})]})}),p.count&&Object(r.jsx)(g,{data:p})]})})})};t(64);o.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.5c821947.chunk.js.map