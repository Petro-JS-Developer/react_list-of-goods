(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),s=n(2),i=n.n(s),r=n(3),l=n(4),c=n(6),u=n(5),d=(n(12),function(t){var e=t.goodsList;return a.a.createElement("div",null,a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t},t)}))))}),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={goodsList:[].concat(m),isHidden:!1},t.showListAndShowButtons=function(){t.setState({isHidden:!0})},t.reverseList=function(){t.setState((function(t){return{goodsList:t.goodsList.reverse()}}))},t.sortABCList=function(){t.setState((function(t){return{goodsList:t.goodsList.sort()}}))},t.resetList=function(){t.setState({goodsList:[].concat(m)})},t.sortListByLength=function(){t.setState((function(t){return{goodsList:t.goodsList.sort((function(t,e){return t.length-e.length}))}}))},t.filterList=function(e){t.setState({goodsList:m.filter((function(t){return t.length>=e}))})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goodsList,o=e.isHidden;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),!1===this.state.isHidden?a.a.createElement("button",{type:"button",onClick:this.showListAndShowButtons,hidden:o},"Start"):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortABCList},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.resetList},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortListByLength},"Sort by length"),a.a.createElement(d,{goodsList:n}),a.a.createElement("select",{onChange:function(e){t.filterList(e.target.value)}},a.a.createElement("option",{key:1,value:1}," 1 "),a.a.createElement("option",{key:2,value:2}," 2 "),a.a.createElement("option",{key:3,value:3}," 3 "),a.a.createElement("option",{key:4,value:4}," 4 "),a.a.createElement("option",{key:5,value:5}," 5 "),a.a.createElement("option",{key:6,value:6}," 6 "),a.a.createElement("option",{key:7,value:7}," 7 "),a.a.createElement("option",{key:8,value:8}," 8 "),a.a.createElement("option",{key:9,value:9}," 9 "),a.a.createElement("option",{key:10,value:10}," 10 "))))}}]),n}(a.a.Component);i.a.render(a.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fa034246.chunk.js.map