(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.1f9a96a1.svg"},30:function(e,a,t){e.exports=t.p+"static/media/landing.c86272eb.svg"},31:function(e,a,t){e.exports=t.p+"static/media/study.3c22fb01.svg"},32:function(e,a,t){e.exports=t.p+"static/media/give-classes.9ed76be5.svg"},33:function(e,a,t){e.exports=t.p+"static/media/purple-heart.e042bb23.svg"},36:function(e,a,t){e.exports=t.p+"static/media/whatsapp.c2ffa8a6.svg"},37:function(e,a,t){e.exports=t.p+"static/media/back.1fbb1f8b.svg"},39:function(e,a,t){e.exports=t.p+"static/media/warning.744fb7ba.svg"},41:function(e,a,t){e.exports=t(78)},63:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(28),r=t.n(c),o=t(6),i=t(1),u=t(2),s=t(29),m=t.n(s).a.create({baseURL:"https://proffy-server-nodejs.herokuapp.com/"}),b=t(11),v=t.n(b),f=t(30),p=t.n(f),d=t(31),E=t.n(d),g=t(32),h=t.n(g),j=t(33),O=t.n(j);t(63);function S(){var e=Object(l.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){m.get("/connections").then((function(e){var a=e.data.total;c(a)}))}),[]),n.a.createElement("div",{id:"page-landing"},n.a.createElement("div",{id:"page-landing-content",className:"container"},n.a.createElement("div",{className:"logo-container"},n.a.createElement("img",{src:v.a,alt:"Proffy"}),n.a.createElement("h2",null,"Sua plataforma de estudos online.")),n.a.createElement("img",{src:p.a,alt:"Plataforma de estudos",className:"hero-image"}),n.a.createElement("div",{className:"buttons-container"},n.a.createElement(o.b,{to:"/study",className:"study"},n.a.createElement("img",{src:E.a,alt:"Estudar"}),"Estudar"),n.a.createElement(o.b,{to:"/give-classes",className:"give-classes"},n.a.createElement("img",{src:h.a,alt:"Dar aulas"}),"Dar aulas")),n.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas",n.a.createElement("img",{src:O.a,alt:"Cora\xe7\xe3o roxo"}))))}var y=t(17),k=t.n(y),N=t(35),w=t(36),x=t.n(w),C=(t(70),function(e){var a=e.teacher;return n.a.createElement("article",{className:"teacher-item"},n.a.createElement("header",null,n.a.createElement("img",{src:a.avatar,alt:a.name}),n.a.createElement("div",null,n.a.createElement("strong",null,a.name),n.a.createElement("span",null,a.subject))),n.a.createElement("p",null,a.bio),n.a.createElement("footer",null,n.a.createElement("p",null,"Pre\xe7o/hora",n.a.createElement("strong",null,"R$ ",a.cost)),n.a.createElement("a",{target:"_blank",onClick:function(){m.post("connections",{user_id:a.id})},href:"https://wa.me/".concat(a.whatsapp)},n.a.createElement("img",{src:x.a,alt:"Whatsapp"}),"Contato")))}),F=t(7),A=(t(71),function(e){var a=e.label,t=e.name,l=Object(F.a)(e,["label","name"]);return n.a.createElement("div",{className:"input-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("input",Object.assign({type:"text",id:t},l)))}),Q=(t(72),function(e){var a=e.label,t=e.name,l=e.options,c=Object(F.a)(e,["label","name","options"]);return n.a.createElement("div",{className:"select-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("select",Object.assign({value:"",id:t},c),n.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),l.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))))}),D=t(37),M=t.n(D),P=(t(73),function(e){return n.a.createElement("header",{className:"page-header"},n.a.createElement("div",{className:"top-bar-container"},n.a.createElement(o.b,{to:"/"},n.a.createElement("img",{src:M.a,alt:"Voltar"})),n.a.createElement("img",{src:v.a,alt:"Proffy"})),n.a.createElement("div",{className:"header-content"},n.a.createElement("strong",null,e.title),e.description&&n.a.createElement("p",null,e.description),e.children))});t(74);function _(){var e=Object(l.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(""),o=Object(u.a)(r,2),i=o[0],s=o[1],b=Object(l.useState)(""),v=Object(u.a)(b,2),f=v[0],p=v[1],d=Object(l.useState)(""),E=Object(u.a)(d,2),g=E[0],h=E[1];function j(){return(j=Object(N.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.get("classes",{params:{subject:i,week_day:f,time:g}});case 3:t=e.sent,c(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",{id:"page-teacher-list",className:"container"},n.a.createElement(P,{title:"Estes s\xe3o os proffys dispon\xedveis."},n.a.createElement("form",{id:"search-teachers",onSubmit:function(e){return j.apply(this,arguments)}},n.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",value:i,onChange:function(e){s(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ingl\xeas",label:"Artes"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Qu\xedmica",label:"Qu\xedmica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Sociologia",label:"Sociologia"},{value:"Filosofia",label:"Filosofia"}]}),n.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",value:f,onChange:function(e){p(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),n.a.createElement(A,{type:"time",name:"time",label:"Hora",value:g,onChange:function(e){h(e.target.value)}}),n.a.createElement("button",{type:"submit"},"Buscar"))),n.a.createElement("main",null,t.map((function(e){return n.a.createElement(C,{key:e.id,teacher:e})}))))}var B=t(12),H=t(38),I=t(40),G=(t(75),function(e){var a=e.label,t=e.name,l=Object(F.a)(e,["label","name"]);return n.a.createElement("div",{className:"textarea-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("textarea",Object.assign({id:t},l)))}),T=t(39),q=t.n(T);t(76);function z(){var e=Object(l.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(""),o=Object(u.a)(r,2),s=o[0],b=o[1],v=Object(l.useState)(""),f=Object(u.a)(v,2),p=f[0],d=f[1],E=Object(l.useState)(""),g=Object(u.a)(E,2),h=g[0],j=g[1],O=Object(l.useState)(""),S=Object(u.a)(O,2),y=S[0],k=S[1],N=Object(l.useState)(""),w=Object(u.a)(N,2),x=w[0],C=w[1],F=Object(l.useState)([{week_day:0,from:"",to:""}]),D=Object(u.a)(F,2),M=D[0],_=D[1],T=Object(i.e)();function z(e,a,t){var l=M.map((function(l,n){return n===e?Object(H.a)({},l,Object(B.a)({},a,t)):l}));_(l)}return n.a.createElement("div",{id:"page-teacher-form",className:"container"},n.a.createElement(P,{title:"Que incr\xedvel que voc\xea quer dar aulas!",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o."}),n.a.createElement("main",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.post("classes",{name:t,avatar:s,whatsapp:p,bio:h,subject:y,cost:Number(x),schedule:M}).then((function(){alert("Cadastro realizado com sucesso!"),T.push("/")})).catch((function(){alert("Erro no cadastro")})),console.log({name:t,avatar:s,whatsapp:p,bio:h,subject:y,cost:x,scheduleItems:M})}},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Seus dados"),n.a.createElement(A,{name:"name",label:"Nome Completo",value:t,onChange:function(e){c(e.target.value)}}),n.a.createElement(A,{name:"avatar",label:"Avatar",value:s,onChange:function(e){b(e.target.value)}}),n.a.createElement(A,{name:"whatsapp",label:"Whatsapp",value:p,onChange:function(e){d(e.target.value)}}),n.a.createElement(G,{name:"bio",label:"Biografia",value:h,onChange:function(e){j(e.target.value)}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Sobre a aula"),n.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",value:y,onChange:function(e){k(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ingl\xeas",label:"Artes"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Qu\xedmica",label:"Qu\xedmica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Sociologia",label:"Sociologia"},{value:"Filosofia",label:"Filosofia"}]}),n.a.createElement(A,{name:"cost",label:"Custo da sua hora/aula",value:x,onChange:function(e){C(e.target.value)}})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Hor\xe1rios dispon\xedveis",n.a.createElement("button",{type:"button",onClick:function(){_([].concat(Object(I.a)(M),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),M.map((function(e,a){return n.a.createElement("div",{key:e.week_day,className:"schedule-item"},n.a.createElement(Q,{name:"subject",label:"Dia da semana",value:e.week_day,onChange:function(e){return z(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),n.a.createElement(A,{name:"from",label:"Das",type:"time",value:e.from,onChange:function(e){return z(a,"from",e.target.value)}}),n.a.createElement(A,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return z(a,"to",e.target.value)}}))}))),n.a.createElement("footer",null,n.a.createElement("p",null,n.a.createElement("img",{src:q.a,alt:"Aviso importante"}),"Importante! ",n.a.createElement("br",null)),n.a.createElement("button",{type:"submit"},"Salvar cadastro")))))}function J(){return n.a.createElement(o.a,null,n.a.createElement(i.a,{path:"/",exact:!0,component:S}),n.a.createElement(i.a,{path:"/study",component:_}),n.a.createElement(i.a,{path:"/give-classes",component:z}))}t(77);var R=function(){return n.a.createElement(J,null)};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.473ca1ab.chunk.js.map