(this["webpackJsonp@dashboard/web"]=this["webpackJsonp@dashboard/web"]||[]).push([[21],{394:function(a,e,t){"use strict";t.r(e);var s=t(0),l=t.n(s),n=t(198),o=t(41),r=t.n(o),c=function(a){return r()(a).format("Do MMM YY HH:mm:ss")};e.default=function(a){var e=a.data,t=e.data,s=e.metadata,o=[{name:"Total Cases",colorClass:"color-blue",value:t.totalCases.value},{name:"Daily Cases",colorClass:"color-brown",value:t.newCases.value},{name:"Daily Deaths",colorClass:"color-red",value:t.latestDeaths.value},{name:"Total Deaths",colorClass:"color-orange",value:t.deaths.value}],r=Object(n.b)(o.length,o.map((function(a){return{from:{value:0},value:a.value,colorClass:a.colorClass,name:a.name}}))),u=Object(n.c)(5,{from:{transform:"translate3d(0, 30px, 0)",opacity:0},transform:"translate3d(0, 0px, 0)",opacity:1,config:{mass:1,tension:2e3,friction:200}});return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a.p,{style:u[0]},"Last updated on ",c(s.lastUpdatedAt)),l.a.createElement("div",{className:"stats-container"},r.map((function(a,e){var t=a.value,s=a.colorClass,o=a.name;return l.a.createElement("div",{className:"stats-container-item ".concat(s.value),key:e},l.a.createElement(n.a.p,{className:"stats-label",style:u[e+1]},o.value),l.a.createElement(n.a.div,{className:"stats-value",style:u[e+1]},t.interpolate((function(a){return function(a){return a.toLocaleString()}(Math.floor(a))}))))}))))}}}]);
//# sourceMappingURL=21.c4ae2e16.chunk.js.map