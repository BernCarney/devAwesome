(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3757"],{"04f2":function(t,e,n){},"094e":function(t,e,n){"use strict";var s=n("5f6a"),a=n.n(s);a.a},2434:function(t,e,n){"use strict";var s=n("04f2"),a=n.n(s);a.a},"5d31":function(t,e,n){},"5f6a":function(t,e,n){},"7dcb":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic"},[n("titlex",{attrs:{title:"Topics Github"}}),n("ul",t._l(t.repos,function(e,s){return n("li",{key:s},["ads"!=e?n("div",{staticClass:"repo"},[n("header",[n("a",{attrs:{target:"_blank",href:e.html_url}},[n("h3",[n("span",[t._v(t._s(e.index))]),t._v("\n            "+t._s(e.name)+"\n          ")])]),n("div",{staticClass:"con-links"},[n("a",{attrs:{target:"_blank",href:e.html_url}},[t._v("Github")]),e.homepage?n("a",{attrs:{target:"_blank",href:e.homepage}},[t._v("Page")]):t._e(),n("div",{staticClass:"con-star"},[n("i",{staticClass:"material-icons"},[t._v("\n                star\n              ")]),t._v("\n              "+t._s(e.stargazers_count)+"\n            ")])])]),n("p",[t._v(t._s(e.description))]),n("footer",[n("div",{staticClass:"con-tags-list"},t._l(e.topics,function(e,s){return n("span",{key:s,on:{click:function(n){t.openTag(e)}}},[t._v(t._s(e))])})),e.license?n("div",{staticClass:"con-license"},[t._v("\n            "+t._s(e.license.name)+"\n          ")]):t._e()])]):n("div",[n("Carbon")],1)])})),n("vs-button",{staticClass:"btn-more",attrs:{"vs-color":"#603aff","vs-type":"filled"},on:{click:function(e){t.page+=20}}},[t._v("Load More repositories ...")])],1)},a=[],i=(n("cadf"),n("551c"),n("bf39")),c=n("97c7"),o={components:{titlex:i["a"],Carbon:c["a"]},data:function(){return{repos:[],page:20}},created:function(){var t=this;this.topics(),this.$nextTick(function(){t.$store.state.openSidebar=!1})},watch:{page:function(){this.topics()}},methods:{openTag:function(t){this.$router.push("/search/"+t)},topics:function(){var t=this,e=this,n=new Headers;n.append("Accept","application/vnd.github.mercy-preview+json"),n.append("Content-Type","text/plain");var s={method:"GET",headers:n,mode:"cors",cache:"default"};fetch("https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=".concat(this.page),s).then(function(t){return t.json()}).then(function(n){console.log(n);var s=n.items;s.map(function(t,e){t.index=e+1}),console.log(s),s.splice(t.page-10,0,"ads"),e.repos=s})}}},r=o,l=(n("2434"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=u.exports},"97c7":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carbon"},[n("div",{key:"carbonx",ref:"carbonx"})])},a=[],i=(n("cadf"),n("551c"),{mounted:function(){var t=this;this.$nextTick(function(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio"),e.setAttribute("id","_carbonads_js"),setTimeout(function(){document.querySelector("#_carbonads_js")||t.$refs.carbonx.appendChild(e)},300)})}}),c=i,o=(n("e940"),n("2877")),r=Object(o["a"])(c,s,a,!1,null,null,null);e["a"]=r.exports},bf39:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"con-title",style:{opacity:t.opacityx}},[n("h3",[t._v(t._s(t.title))])])},a=[],i=(n("cadf"),n("551c"),{props:{title:{default:"title",type:String}},data:function(){return{heightx:250,opacityx:1,mousex:0,mousey:0}},mounted:function(){window.addEventListener("scroll",this.scrollApp),window.addEventListener("mousemove",this.moseMove)},methods:{moseMove:function(t){var e=t.clientX,n=t.clientY;this.mousex=e,this.mousey=n},scrollApp:function(){var t=document.documentElement.scrollTop;this.opacityx=0!==t?"".concat(.01*(100-t)):1}}}),c=i,o=(n("094e"),n("2877")),r=Object(o["a"])(c,s,a,!1,null,null,null);e["a"]=r.exports},e940:function(t,e,n){"use strict";var s=n("5d31"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-3757.3ff1275f.js.map