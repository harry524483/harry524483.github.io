(this["webpackJsonp@dashboard/web"]=this["webpackJsonp@dashboard/web"]||[]).push([[15],{212:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(105),o=n(41);e.default=function(){var t=Object(a.useRef)(null),e=Object(a.useRef)(null),n=Object(o.a)(e);return Object(a.useEffect)((function(){var a=n||e.current&&e.current.getBoundingClientRect(),r=a.width,o=a.height,u=Object(c.e)().domain([0,6e4]).rangeRound([0,r]),i=Object(c.f)().domain(Object(c.d)(0,6e4,1e4)).range(c.g[7]),l=Object(c.h)(t.current);l.selectAll("g").remove();var s=l.append("g").style("transform","translate(".concat(r,",").concat(o,")")),f=i.range().map((function(t){var e=i.invertExtent(t);return e[0]||(e[0]=u.domain()[0]),e[1]||(e[1]=u.domain()[1]),e}));s.selectAll("rect").data(f).enter().append("rect").attr("height",12).attr("x",(function(t){return u(t[0])})).attr("width",(function(t){return u(t[1])-u(t[0])})).attr("fill",(function(t){return i(t[0])})),s.append("text").attr("class","legend-caption").attr("x",u.range()[0]).attr("y",-6).attr("fill","#000").attr("text-anchor","start").attr("font-weight","bold").text("Total cases"),s.style("transform","translateY(".concat(o,"px)")).attr("class","tick-line").call(Object(c.a)(u).tickSize(16).tickFormat((function(t){return Math.round(t).toString()})).tickValues(i.domain())).select(".domain").remove()}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:e},r.a.createElement("svg",{ref:t,className:"legend"})))}},41:function(t,e,n){"use strict";var a=n(19),r=n(0),c=n(102);e.a=function(t){var e=Object(r.useState)(null),n=Object(a.a)(e,2),o=n[0],u=n[1];return Object(r.useEffect)((function(){var e=t.current,n=new c.a((function(t){t.forEach((function(t){u(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),o}}}]);
//# sourceMappingURL=15.15d297ad.chunk.js.map