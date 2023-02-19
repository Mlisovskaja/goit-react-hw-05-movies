"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{34:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(861),a=r(439),i=r(687),s=r.n(i),c=r(791),u=r(689),o=r(87),d=r(646),p=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var f="movieDetailsPage_box__2+ffh",m="movieDetailsPage_poster__oGMoe",l="movieDetailsPage_desc__DvfBa",v=r(184),h=function(){var e,n,r=(0,c.useState)({}),i=(0,a.Z)(r,2),h=i[0],g=i[1],x=(0,u.UO)().id,b=(0,u.TH)(),w=(0,c.useRef)(null!==(e=null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.hG)(x);case 3:n=e.sent,g(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Ooops, something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);var y;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.rU,{to:w.current,children:"Go back"}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("img",{className:m,src:"https://image.tmdb.org/t/p/w400"+h.poster_path,alt:h.title}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsxs)("h2",{children:[h.title," (",(y=h.release_date,y?y.slice(0,4):"Not found"),")"]}),(0,v.jsxs)("p",{children:["User score: ",Math.round(h.popularity),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:h.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:(h.genres,p.genres.map((function(e){return e.name+" "})).slice(0,3).join(" "))})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsx)("div",{children:(0,v.jsx)(o.rU,{to:"cast",state:{ref:w},children:"Cast"})}),(0,v.jsx)("div",{children:(0,v.jsx)(o.rU,{to:"reviews",state:{ref:w},children:"Reviews"})}),(0,v.jsx)(u.j3,{})]})]})}},646:function(e,n,r){r.d(n,{Cm:function(){return d},LP:function(){return c},TW:function(){return o},hG:function(){return u},z1:function(){return p}});var t=r(861),a=r(687),i=r.n(a),s=r(912),c=function(){var e=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c60edd70b8b52249425a4fc37989f133");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie//".concat(n,"?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie//".concat(n,"/credits?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie//".concat(n,"/reviews?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US&query=".concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=34.7c0ed193.chunk.js.map