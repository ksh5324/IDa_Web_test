(this.webpackJsonpida_web=this.webpackJsonpida_web||[]).push([[10],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n),c=a(15),r=(a(166),a(59)),i=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{theme:!0}),l.a.createElement("div",{className:"Admin"},l.a.createElement("div",{className:"Admin-header"},l.a.createElement(c.c,{to:"/admin/userList",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc9c0\uc6d0\uc790 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/schoolCity",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\ucd9c\uc2e0\uad50\ubcc4 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/userRate",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc785\ud559\uc9c0\uc6d0\uc790\uacbd\uc7c1\ub960")),l.a.createElement(c.c,{to:"/admin/receiptStatus",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc2e0\uc785\uc0dd \uc785\ud559 \uc804\ud615 \uc6d0\ubd80")),l.a.createElement(c.c,{exact:!0,to:"/admin/secondScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac")),l.a.createElement(c.c,{to:"/admin/interviewScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"2\ucc28 \uc804\ud615 \uba74\uc811 \uc810\uc218")),l.a.createElement(c.c,{to:"/admin/userListPassed",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"1\ucc28/\ucd5c\uc885 \ud569\uaca9 \uc5ec\ubd80")),l.a.createElement(c.c,{to:"/admin/userResultPage",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uacb0\uacfc \ubcc0\uacbd")))),t)}},175:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a(20),i=a(21),u=a(14),s=(a(175),a(19)),m=a(13),o=a(25),d=function(e){var t=e.userResultList,a=e.tryChangeFirstResultStatus,n=e.tryChangeSecondResultStatus,c=e.onChangeFirstApply,r=e.onChangeSecondApply,i=e.onClickSetFirstSelection,u=e.onClickSetSecondSelection;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{onClick:i,className:"_button false"},"1\ucc28 \ud569\uaca9 \uc0b0\ucd9c"),"    ",l.a.createElement("button",{onClick:u,className:"_button false"},"2\ucc28 \ud569\uaca9 \uc0b0\ucd9c")),l.a.createElement("table",{className:"table-list"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table-list-title"},l.a.createElement("th",null,"\uc21c\ubc88"),l.a.createElement("th",null,"\uc774\ub984"),l.a.createElement("th",null,"\uc544\uc774\ub514"),l.a.createElement("th",null,"1\ucc28 \uc804\ud615"),l.a.createElement("th",null,"1\ucc28 \ud569\uaca9"),l.a.createElement("th",null,"2\ucc28 \uc804\ud615"),l.a.createElement("th",null,"2\ucc28 \ud569\uaca9"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("a",{target:"_blank",href:"/write?userIdx=".concat(e.idx)},t+1)),l.a.createElement("td",null,l.a.createElement("a",{target:"_blank",href:"/write?userIdx=".concat(e.idx)},e.name)),l.a.createElement("td",null,l.a.createElement("a",{target:"_blank",href:"/write?userIdx=".concat(e.idx)},e.email)),l.a.createElement("td",null,l.a.createElement("b",null,e.firstApplyTypeString),l.a.createElement("br",null),l.a.createElement("select",{onChange:function(t){c(e.idx,t.target.value)}}," ",l.a.createElement("option",{value:s.a.COMMON+"-"+m.a.COMMON},"-"),l.a.createElement("option",{value:s.a.COMMON+"-"+m.a.COMMON},"\uc77c\ubc18 \uc804\ud615 - \uc77c\ubc18 \uc804\ud615"),o.a.special.map((function(e,t){if(void 0!==e.models){var a=e.name;return e.models.map((function(e,t){return l.a.createElement("option",{key:t,value:s.a.SPECIAL+"-"+e.value},"\ud2b9\ubcc4 \uc804\ud615 - ",a," - ",e.name)}))}return l.a.createElement("option",{key:t,value:s.a.SPECIAL+"-"+e.value},"\ud2b9\ubcc4 \uc804\ud615 - ",e.name)})),o.a.other.models.map((function(e){return l.a.createElement("option",{value:s.a.OTHER+"-"+e.value},"\ud2b9\ub840 \uc785\ud559 - ",e.name)})))),l.a.createElement("td",null,e.isPassedFirstApply?l.a.createElement("button",{className:"_button true pointer",onClick:function(){return a(e.idx)}},"\ud569\uaca9"):l.a.createElement("button",{className:"_button false pointer",onClick:function(){return a(e.idx)}},"\ubd88\ud569\uaca9")),l.a.createElement("td",null," ",l.a.createElement("b",null,e.finalApplyTypeString),l.a.createElement("br",null),l.a.createElement("select",{onChange:function(t){r(e.idx,t.target.value)}}," ",l.a.createElement("option",{value:s.a.COMMON+"-"+m.a.COMMON},"-"),l.a.createElement("option",{value:s.a.COMMON+"-"+m.a.COMMON},"\uc77c\ubc18 \uc804\ud615 - \uc77c\ubc18 \uc804\ud615"),o.a.special.map((function(e,t){if(void 0!==e.models){var a=e.name;return e.models.map((function(e,t){return l.a.createElement("option",{key:t,value:s.a.SPECIAL+"-"+e.value},"\ud2b9\ubcc4 \uc804\ud615 - ",a," - ",e.name)}))}return l.a.createElement("option",{key:t,value:s.a.SPECIAL+"-"+e.value},"\ud2b9\ubcc4 \uc804\ud615 - ",e.name)})),o.a.other.models.map((function(e){return l.a.createElement("option",{value:s.a.OTHER+"-"+e.value},"\ud2b9\ub840 \uc785\ud559 - ",e.name)})),o.a.national.models.map((function(e,t){return l.a.createElement("option",{key:t,value:s.a.NATIONAL+"-"+e.value},"\ud2b9\ubcc4 \uc804\ud615 - ",o.a.national.name," -"," ",e.name)})))),l.a.createElement("td",null," ",e.isPassedSecondApply?l.a.createElement("button",{className:"_button true pointer",onClick:function(){return n(e.idx)}},"\ud569\uaca9"):l.a.createElement("button",{className:"_button false pointer",onClick:function(){return n(e.idx)}},"\ubd88\ud569\uaca9")))})))))},E=a(16),p=a(12),h=Object(p.c)((function(e){Object(r.a)(e);var t=Object(i.f)(),a=Object(u.a)().store.AdminStore,s=a.getUserResultList,m=a.changeFirstApplyStatus,o=a.changeSecondApplyStatus,p=a.changeSecondResultStatus,h=a.changeFirstResultStatus,f=a.setFirstSelection,v=a.setSecondSelection,b=Object(n.useState)([]),C=Object(c.a)(b,2),k=C[0],S=C[1],N=Object(n.useCallback)((function(){s().then((function(e){console.log(e.data),S(e.data)})).catch((function(e){Object(E.a)(e,t)}))}),[]);Object(n.useEffect)((function(){N()}),[N]);var A=Object(n.useCallback)((function(e,t){var a=t.split("-")[0],n=t.split("-")[1];m(e,a,n).then((function(){N()}))}),[]),O=Object(n.useCallback)((function(e,t){var a=t.split("-")[0],n=t.split("-")[1];o(e,a,n).then((function(){N()}))}),[]),g=Object(n.useCallback)((function(e){h(e).then((function(){N()}))}),[]),y=Object(n.useCallback)((function(e){p(e).then((function(){N()}))}),[]),M=Object(n.useCallback)((function(){f().then((function(){N()}))}),[]),j=Object(n.useCallback)((function(){v().then((function(){N()}))}),[]);return l.a.createElement(d,{userResultList:k,onChangeFirstApply:A,onChangeSecondApply:O,tryChangeFirstResultStatus:g,tryChangeSecondResultStatus:y,onClickSetFirstSelection:M,onClickSetSecondSelection:j})})),f=a(167);t.default=function(){return l.a.createElement(f.a,null,l.a.createElement(h,null))}}}]);
//# sourceMappingURL=10.1078aec0.chunk.js.map