(this["webpackJsonp@dashboard/web"]=this["webpackJsonp@dashboard/web"]||[]).push([[13],{215:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(169),c=a(101),u=a(171),i=a(40),o=a(30),l=a.n(o),p=a(31),f=a(39),d=a.n(f),b=d.a.create({baseURL:"https://dlag3y92c3.execute-api.us-east-1.amazonaws.com/prod"}),h=function(){var t=Object(p.a)(l.a.mark((function t(e){var a,n,r,s,c,u,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/dashboard"!==e){t.next=12;break}return a={date:"date",name:"areaName",cases:{daily:"newCasesByPublishDate",cumulative:"cumCasesByPublishDate"},deaths:{daily:"newDeathsByPublishDate",cumulative:"cumDeathsByPublishDate"},tests:{pillarOne:"newPillarOneTestsByPublishDate",pillarTwo:"newPillarTwoTestsByPublishDate",pillarThree:"newPillarThreeTestsByPublishDate",pillarFour:"newPillarFourTestsByPublishDate"}},"newCasesByPublishDate",n="filters=".concat(["areaType=nation"].join(";"),"&latestBy=").concat("newCasesByPublishDate","&structure=").concat(JSON.stringify(a)),r=encodeURI(n),s="https://api.coronavirus-staging.data.gov.uk/v1/data?".concat(r),t.next=8,d.a.get(s);case 8:return c=t.sent,t.abrupt("return",c.data);case 12:if("/website_timestamp"!==e){t.next=19;break}return t.next=15,d.a.get("https://c19pubstaging.azureedge.net/assets/dispatch/website_timestamp");case 15:return u=t.sent,t.abrupt("return",u.data);case 19:return t.next=21,b.get(e);case 21:return i=t.sent,t.abrupt("return",i.data);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=function(t){var e=t.regionalTotalCases,a=Object(n.useRef)(null),o=Object(n.useRef)(null),l=Object(i.a)(o),p=Object(u.a)("/geo-data",h,{revalidateOnFocus:!1,suspense:!0}).data;return Object(n.useEffect)((function(){var t=s.a(p,p.objects.regions),n=l||o.current&&o.current.getBoundingClientRect(),r=n.width,u=n.height,i=Object(c.b)().fitSize([r,u],t),f=Object(c.c)().projection(i),d=Object(c.f)().domain(Object(c.d)(0,6e4,1e4)).range(c.g[7]),b=Object(c.h)(a.current);b.selectAll(".country").data(t.features).join("path").on("mouseenter",(function(t){b.selectAll(".country.".concat(t.properties.nuts118cd)).transition().duration(200).style("stroke","#007bff"),b.append("text").attr("class","chart-stats").attr("y",20).attr("fill","#007bff").style("font-weight","bold").append("tspan").text((function(){return e.find((function(e){var a=e.name;return t.properties.nuts118nm===a}))?t.properties.nuts118nm:"Unknown"})).attr("x",0).attr("dx",0).attr("dy",25).append("tspan").text((function(){var a=e.find((function(e){var a=e.name;return t.properties.nuts118nm===a}));return a?a.totalCases.toLocaleString():0})).attr("x",0).attr("dx",0).attr("dy",30)})).on("mouseleave",(function(t){b.select(".country.".concat(t.properties.nuts118cd)).transition().duration(200).style("stroke","none"),b.selectAll(".chart-stats").remove()})).attr("class","country").style("cursor","pointer").attr("fill",(function(t){var a=e.find((function(e){var a=e.name;return t.properties.nuts118nm===a}));return d(a?a.totalCases:0)})).attr("class",(function(t){return"country ".concat(t.properties.nuts118cd)})).attr("d",f),b.append("text").attr("class","chart-title").attr("x",0).attr("y",20).attr("fill","#007bff").text("Total Cases")}),[l,p,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:o,style:{marginTop:"1.5rem"}},r.a.createElement("svg",{ref:a,className:"country"})),r.a.createElement("svg",{style:{position:"absolute",height:0}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"balance-color",colorInterpolationFilters:"sRGB"},r.a.createElement("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})))))}},40:function(t,e,a){"use strict";var n=a(19),r=a(0),s=a(99);e.a=function(t){var e=Object(r.useState)(null),a=Object(n.a)(e,2),c=a[0],u=a[1];return Object(r.useEffect)((function(){var e=t.current,a=new s.a((function(t){t.forEach((function(t){u(t.contentRect)}))}));return a.observe(e),function(){a.unobserve(e)}}),[t]),c}}}]);
//# sourceMappingURL=13.51175ab7.chunk.js.map