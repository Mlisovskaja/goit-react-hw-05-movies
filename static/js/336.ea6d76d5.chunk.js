"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{336:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),u=n(687),c=n.n(u),i=n(791),o=n(87),s=n(689),f=n(646),p=n(184),d=function(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u)},children:[(0,p.jsx)("button",{type:"submit",children:"Search"}),(0,p.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){c(e.target.value)},value:u})]})})},v=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,i.useState)(null),h=(0,a.Z)(v,2),l=h[0],m=h[1],b=(0,o.lr)(),g=(0,a.Z)(b,2),x=g[0],w=g[1],k=x.get("query"),y=(0,s.TH)();(0,i.useEffect)((function(){if(k){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.z1)(k);case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m("Ooops, something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[k]);var Z=n.map((function(e){var t=e.id,n=e.title;return(0,p.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:y},children:(0,p.jsx)("li",{children:n})},t)}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{onSubmit:function(e){w({query:e})}}),(0,p.jsx)("ul",{children:Z}),l&&(0,p.jsx)("p",{children:l})]})}},646:function(e,t,n){n.d(t,{Cm:function(){return f},LP:function(){return i},TW:function(){return s},hG:function(){return o},z1:function(){return p}});var r=n(861),a=n(687),u=n.n(a),c=n(912),i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c60edd70b8b52249425a4fc37989f133");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie//".concat(t,"?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie//".concat(t,"/credits?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie//".concat(t,"/reviews?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=336.ea6d76d5.chunk.js.map