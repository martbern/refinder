(this.webpackJsonprefinder=this.webpackJsonprefinder||[]).push([[0],{15:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(6),c=n.n(a),o=(n(15),n(3)),i=n(0);function s(e){return Object(i.jsx)("a",{className:"rounded-lg px-2 py-2 border border-gray-100 active:border-gray-200 text-center focus:outline-none hover:shadow-md active:shadow-sm place-content-center text-gray-200 text-sm",href:e.href,children:e.title})}var l=n(7),d=n(8),u=n(10),p=n(9),g=n(2),b=n.n(g),f=(n(29),new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appaZPyyxt98aRiRU").table("Media")),x=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appaZPyyxt98aRiRU").table("Ratings"),j=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).URL=e.props.URL,e.rate=function(t){console.log("Rating "+e.props.name+" with a "+t),f.update(e.props.id,{Reading:!1}).then((function(e){console.log(e)})),x.create({fields:{Record:[e.props.id],Rating:t.toString()}}).then((function(t){console.log(t),e.props.reRun()}))},e.markReading=function(){f.update(e.props.id,{Reading:!0}).then((function(e){console.log(e)})),document.getElementById("reading").style.borderColor="green"},e.open=function(){console.log("Marking "+e.props.name+" as reading"),f.update(e.props.id,{Reading:!0}).then((function(t){console.log(t),window.location(e.URL)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"grid gap-2 rounded-lg text-left justify-left text-justify",children:[Object(i.jsx)("a",{href:this.URL,children:Object(i.jsx)("button",{onClick:function(){return e.open()},className:"active:border-gray-500 group block rounded-lg hover:border-gray-200 text-left justify-left text-justify",children:Object(i.jsxs)("div",{className:"p-1 grid",children:[Object(i.jsx)("div",{className:"font-medium text-black text-xl pb-2",children:this.props.name}),Object(i.jsx)("div",{className:"leading-5 text-sm",children:this.props.excerpt})]})})}),Object(i.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[Object(i.jsx)(s,{href:"https://airtable.com/tblYG0PIvW9GELAvH/viwsdszRgNFdNL83F/"+this.props.id,title:"Airtable"}),Object(i.jsx)(s,{href:this.URL,title:"Safari"}),Object(i.jsx)("button",{onClick:function(){return e.markReading()},className:"rounded-lg px-0 py-0 border active:border-gray-500 text-center focus:outline-none place-content-center text-sm ".concat(this.props.reading?"border-green-500 text-gray-400":"text-gray-200"),id:"reading",children:"Reading"}),Object(i.jsx)("button",{onClick:function(){return e.rate(1)},className:"rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs",children:"0"}),Object(i.jsx)("button",{className:"rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs",onClick:function(){return e.rate(2)},children:"+"}),Object(i.jsx)("button",{className:"rounded-lg px-1 py-1 border active:border-gray-500 text-center focus:outline-none place-content-center text-xs",onClick:function(){return e.rate(3)},children:"++"})]})]})}}]),n}(r.Component),h=new b.a({apiKey:"keywMvCl7aRV4a5af"}).base("appaZPyyxt98aRiRU").table("Media");function m(e){var t=Object(r.useState)({}),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){h.list({maxRecords:999,pageSize:100,view:"Articles",cellFormat:"json"}).then((function(e){c(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(a),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(a),console.log("Testing "+e.cycle),Object(i.jsx)("div",{className:"gap-5 grid w-full grid-cols-2",children:a.length>0?a.sort((function(e,t){return t.fields.SelectionWeight-e.fields.SelectionWeight})).slice(0,4).map((function(t){return Object(i.jsx)(j,{name:t.fields.Name,excerpt:t.fields.Excerpt,id:t.id,reRun:e.reRun,URL:t.fields.URL,reading:t.fields.Reading},t.id)})):Object(i.jsx)("p",{children:"Fetching Data..."})})}var y=function(e){var t=Object(r.useState)({}),n=Object(o.a)(t,2),a=n[0],c=n[1];return console.log(a),Object(i.jsx)("div",{className:"mx-auto max-w-5xl m-2",children:Object(i.jsxs)("div",{className:"m-4",children:[Object(i.jsx)(m,{filter:"False",reRun:c}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(s,{href:"https://getpocket.com/my-list",title:"Search Pocket"})})]})})};c.a.render(Object(i.jsx)(y,{tasks:[]}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.68bd551a.chunk.js.map