(this["webpackJsonpcf-calendar"]=this["webpackJsonpcf-calendar"]||[]).push([[0],{24:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(15),s=c.n(r),o=(c(24),c(13)),b=c.n(o),l=c(16),j=c(19),i=c(8),d=c(18),u=c(14),O=c(17),p=c(30),x=c(31),f=c(35),h=c(32),m=c(33),g=c(34),v=c(37),k=c(36),y=c(3),N=k.a;var w=function(){var e=Object(d.a)("https://private-37dacc-cfcalendar.apiary-mock.com/mentors/1/agenda"),t=e.data,c=e.error,n=Object(u.a)(new Date),r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],k=s[1],w=Object(a.useState)(null),P=Object(i.a)(w,2),S=P[0],C=P[1],B=Object(a.useState)(""),M=Object(i.a)(B,2),D=M[0],L=M[1],F=Object(a.useState)([]),R=Object(i.a)(F,2),T=R[0],A=R[1],E=Object(a.useState)(""),I=Object(i.a)(E,2),J=I[0],q=I[1];if(c)return Object(y.jsx)("div",{children:"failed to load"});if(!t)return Object(y.jsx)("div",{children:"loading..."});for(var _=t.calendar.map((function(e){return new Date(Date.parse(e.date_time))})),z=o||n,G=[],H=0;H<Object(O.a)(Object(p.a)(z));H++)G.push(Object(x.a)(Object(p.a)(z),H));for(var K=[],Q=0;Q<7;++Q)K.push(Object(x.a)(o,Q-3));var U=Object(j.a)(Array(24)).map((function(e,t){return t})),V=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),{ok:!0}.ok?(A(T.concat(S)),q(Object(y.jsxs)("div",{className:"space-y-4",children:[Object(y.jsxs)("p",{children:["Appointment confirmed for ",Object(f.a)(S,"PPPPp")]}),Object(y.jsx)("p",{children:D})]})),setTimeout((function(){return q("")}),5e3),C(null),L("")):q("ERROR! Couldnt book your appointment please try agian");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"mx-auto max-w-4xl space-y-4 p-4",children:[!S&&Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("div",{className:"font-bold",children:Object(f.a)(z,"MMMM yyyy")}),Object(y.jsx)("div",{className:"grid grid-cols-7",children:G.map((function(e){var t;t=Object(h.a)(e)&&!Object(m.a)(n,e)?"text-gray-400":Object(g.a)(e,n)?"font-bold cursor-pointer":"cursor-pointer",Object(g.a)(e,o)&&(t+=" bg-yellow-100");return Object(y.jsx)("button",{onClick:function(){Object(h.a)(e)&&!Object(m.a)(n,e)||k(e)},className:t,children:Object(f.a)(e,"d")},e)}))})]}),!S&&o&&Object(y.jsx)("div",{className:"grid grid-cols-7 text-center",children:K.map((function(e){var t,c=!1;Object(g.a)(e,o)?t="bg-yellow-100":Object(h.a)(e)&&!Object(m.a)(n,e)&&(t="text-gray-400",c=!0);return Object(y.jsxs)("div",{className:t,children:[Object(y.jsxs)("button",{className:"block h-20 w-full",onClick:function(){Object(h.a)(e)&&!Object(m.a)(n,e)||k(e)},disabled:c,children:[Object(y.jsx)("strong",{children:Object(f.a)(e,"eeee",{locale:N}).slice(0,2)}),Object(y.jsx)("br",{}),Object(f.a)(e,"d LLL",{locale:N})]}),U.map((function(t){var c,a,n=Object(v.a)(e,{hours:t}),r=Object(v.a)(e,{hours:t+1}),s=_.some((function(e){return n<=e&&e<r})),o=T.some((function(e){return n<=e&&e<r})),b=Object(m.a)(S,n);switch(c=s?"booked":o?"selfBooked":b?"selected":Object(h.a)(n)?"past":"free"){case"booked":a="bg-red-100";break;case"selfBooked":a="bg-blue-100";break;case"selected":a="bg-green-500";break;case"free":a="bg-green-100 cursor-pointer hover:bg-green-300";break;default:a="bg-gray-100 text-gray-400"}return Object(y.jsx)("div",{className:a,children:Object(y.jsx)("button",{onClick:function(){"free"===c?C(n):alert("Slot is not available!")},children:Object(f.a)(n,"p",{locale:N})})},t)}))]},e)}))}),J&&Object(y.jsx)("div",{className:"border p-4 text-green-600 border-current rounded",children:J}),S&&Object(y.jsx)("form",{onSubmit:V,children:Object(y.jsxs)("div",{className:"border p-4 space-y-4",children:[Object(y.jsx)("button",{onClick:function(){return C(null)},children:"\u2039 Back"}),Object(y.jsx)("h2",{className:"text-4xl text-bold",children:"Book appointment"}),Object(y.jsxs)("p",{children:["Mentor: ",t.mentor.name]}),Object(y.jsxs)("p",{children:["Selected time slot: ",Object(f.a)(S,"PPPPp",{locale:N})," ","for 1 hour"]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{children:"Reason:"}),Object(y.jsx)("br",{}),Object(y.jsx)("textarea",{className:"border p-2 w-full h-40",onChange:function(e){return L(e.target.value)},required:!0,value:D})]}),Object(y.jsx)("p",{children:Object(y.jsx)("button",{className:"border px-4 py-2 text-bold",children:"Book appointment"})})]})})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),P()}},[[27,1,2]]]);
//# sourceMappingURL=main.d26d12da.chunk.js.map