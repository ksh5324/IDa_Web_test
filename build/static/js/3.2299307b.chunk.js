(this.webpackJsonpida_web=this.webpackJsonpida_web||[]).push([[3],{167:function(e,t,a){},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n),c=a(15),r=(a(167),a(59)),i=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{theme:!0}),l.a.createElement("div",{className:"Admin"},l.a.createElement("div",{className:"Admin-header"},l.a.createElement(c.c,{to:"/admin/userList",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc9c0\uc6d0\uc790 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/schoolCity",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\ucd9c\uc2e0\uad50\ubcc4 \ud604\ud669")),l.a.createElement(c.c,{to:"/admin/userRate",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc785\ud559\uc9c0\uc6d0\uc790\uacbd\uc7c1\ub960")),l.a.createElement(c.c,{to:"/admin/receiptStatus",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uc2e0\uc785\uc0dd \uc785\ud559 \uc804\ud615 \uc6d0\ubd80")),l.a.createElement(c.c,{exact:!0,to:"/admin/secondScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"2\ucc28 \uc804\ud615 \uc810\uc218 \uad00\ub9ac")),l.a.createElement(c.c,{to:"/admin/interviewScore",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"2\ucc28 \uc804\ud615 \uba74\uc811 \uc810\uc218")),l.a.createElement(c.c,{to:"/admin/userListPassed",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"1\ucc28/\ucd5c\uc885 \ud569\uaca9 \uc5ec\ubd80")),l.a.createElement(c.c,{to:"/admin/userResultPage",className:"Admin-header-link",activeClassName:"Admin-header-link-active"},l.a.createElement("span",null,"\uacb0\uacfc \ubcc0\uacbd")))),t)}},170:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(168),l=a(0),c=a.n(l),r=a(2),i=a.n(r),m=a(3),u=a(5),s=a(18),d=a(12),o=a(22),E=a(17),p=a.n(E),h=(a(170),function(e){var t=e.receiptStatus,a=(e.setReceiptStatus,e.setSearch),n=e.search,l=e.getReceiptStatusExcel,r=e.handleCancelSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"receipt"},c.a.createElement("div",{className:"receipt-title"},"\uc2e0\uc785\uc0dd \uc785\ud559 \uc804\ud615 \uc6d0\ubd80"),c.a.createElement("div",{className:"receipt-btn",onClick:function(){return l()}},"\ud604\uc790\ub8cc \uc5d1\uc140 \ub0b4\ub824\ubc1b\uae30"),c.a.createElement("input",{type:"text",className:"receipt-input",placeholder:"\ud1b5\ud569\uac80\uc0c9",onChange:function(e){return a(e.target.value)}}),c.a.createElement("table",{className:"receipt-list"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"receipt-list-header"},c.a.createElement("th",null,"\uc21c\ubc88"),c.a.createElement("th",null,"\uc811\uc218\ubc88\ud638"),c.a.createElement("th",null,"\uc218\ud5d8\ubc88\ud638"),c.a.createElement("th",null,"\uc131\uba85"),c.a.createElement("th",null,"\uc0dd\ub144\uc6d4\uc77c"),c.a.createElement("th",null,"\uc9c0\uc5ed\uba85"),c.a.createElement("th",null,"\ucd9c\uc2e0\ud559\uad50"),c.a.createElement("th",null,"\ud559\ub825"),c.a.createElement("th",null,"\uc804\ud615"),c.a.createElement("th",null,"\uad50\uacfc"),c.a.createElement("th",null,"\ucd9c\uacb0"),c.a.createElement("th",null,"\ubd09\uc0ac"),c.a.createElement("th",null,"\uac00\uc0b0\uc810"),c.a.createElement("th",null,"\uc810\uc218\ud569\uacc4/\uc77c\ubc18"),c.a.createElement("th",null,"\uc810\uc218\ud569\uacc4/\ud2b9\ubcc4"),c.a.createElement("th",null,"\ucd5c\uc885\uc81c\ucd9c\uc5ec\ubd80"),c.a.createElement("th",null,"\uc81c\ucd9c\ucde8\uc18c"),c.a.createElement("th",null,"\uc6d0\uc11c\ucd9c\ub825"))),c.a.createElement("tbody",null,n?t.filter((function(e){return"string"===typeof e.name&&e.name.includes(n)||"string"===typeof e.cityName&&e.cityName.includes(n)||"string"===typeof e.examCode&&e.examCode.includes(n)||"string"===typeof e.submitCode&&e.submitCode.includes(n)||"string"===typeof e.schoolName&&e.schoolName.includes(n)||"string"===typeof e.applyTypeString&&e.applyTypeString.includes(n)})).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.idx),c.a.createElement("td",null,e.submitCode),c.a.createElement("td",null,e.examCode),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.birth&&p()(e.birth).format("yyyy-MM-DD")),c.a.createElement("td",null,e.cityName),c.a.createElement("td",null,e.schoolName),c.a.createElement("td",null,o.a.GradeType(e.gradeType)),c.a.createElement("td",null,e.applyTypeString),c.a.createElement("td",null,e.gradeScore),c.a.createElement("td",null,e.absenceScore),c.a.createElement("td",null,e.volunteerScore),c.a.createElement("td",null,e.additionalScore),c.a.createElement("td",null,e.commonTotalScore),c.a.createElement("td",null,e.specialTotalScore),c.a.createElement("td",null,e.isSubmit?"\uc81c\ucd9c\uc644\ub8cc":"\ubbf8\uc81c\ucd9c"),c.a.createElement("td",null,e.isSubmit?c.a.createElement("button",{onClick:function(){r(e.userIdx,e.name)}},"\uc81c\ucd9c\ucde8\uc18c"):""),c.a.createElement("td",null,c.a.createElement("button",null,"\ucd9c\ub825")))})):t.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.idx),c.a.createElement("td",null,e.submitCode),c.a.createElement("td",null,e.examCode),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.birth&&p()(e.birth).format("yyyy-MM-DD")),c.a.createElement("td",null,e.cityName),c.a.createElement("td",null,e.schoolName),c.a.createElement("td",null,o.a.GradeType(e.gradeType)),c.a.createElement("td",null,e.applyTypeString),c.a.createElement("td",null,e.gradeScore),c.a.createElement("td",null,e.absenceScore),c.a.createElement("td",null,e.volunteerScore),c.a.createElement("td",null,e.additionalScore),c.a.createElement("td",null,e.commonTotalScore),c.a.createElement("td",null,e.specialTotalScore),c.a.createElement("td",null,e.isSubmit?"\uc81c\ucd9c\uc644\ub8cc":"\ubbf8\uc81c\ucd9c"),c.a.createElement("td",null,e.isSubmit?c.a.createElement("button",{onClick:function(){r(e.userIdx,e.name)}},"\uc81c\ucd9c\ucde8\uc18c"):""),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return window.open("/print?userIdx=".concat(e.userIdx),"_blank")}},"\ucd9c\ub825")))}))))))}),f=a(14),b=a(16),S=a(21),y=a(40),v=a.n(y),N=Object(d.c)((function(e){Object(s.a)(e);var t=Object(f.a)().store,a=Object(S.f)(),n=Object(l.useState)([]),r=Object(u.a)(n,2),d=r[0],o=r[1],E=Object(l.useState)(""),p=Object(u.a)(E,2),y=p[0],N=p[1],C=t.AdminStore,k=C.getReceiptStatus,g=C.getReceiptStatusExcel,x=C.handleCancelSubmit,A=Object(l.useCallback)((function(){k().then((function(e){o(e.data)})).catch((function(e){Object(b.a)(e,a)}))}),[]),j=Object(l.useCallback)(function(){var e=Object(m.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.fire({title:"\uc8fc\uc758!!",text:"\ud574\ub2f9 \uc720\uc800(".concat(a,") \ub97c \uc81c\ucd9c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),showCancelButton:!0,icon:"warning",cancelButtonText:"\ucde8\uc18c",confirmButtonText:"\ud655\uc778"}).then(function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=3;break}return e.next=3,x(t).then((function(e){if(200===e.status){var a=d.slice(),n=a.findIndex((function(e){return e.userIdx===t}));a[n].isSubmit=!1,a[n].submitCode="",a[n].examCode="",o(a)}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),[d]);return Object(l.useEffect)((function(){A()}),[A]),c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{receiptStatus:d,setSearch:N,search:y,getReceiptStatusExcel:g,handleCancelSubmit:j,setReceiptStatus:o}))}));t.default=function(){return c.a.createElement(n.a,null,c.a.createElement(N,null))}}}]);
//# sourceMappingURL=3.2299307b.chunk.js.map