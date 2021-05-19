(this["webpackJsonp08-journal-app"]=this["webpackJsonp08-journal-app"]||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(33),r=n.n(c),o=n(7),i=n(23),s=n(62),u="[Auth] Login",l="[Auth] Logout",j="[UI] Set Error",d="[UI] Remove Error",b="[UI] Start loading",p="[UI] Finish loading",m="[Notes] New note",f="[Notes] Set active note",h="[Notes] Load notes",O="[Notes] Update note saved",x="[Notes] delete note",v="[Notes] logout cleaning",_=n(45),g=n(5),y={notes:[],active:null},N={loading:!1,msgError:""},w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,k=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload});case d:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case b:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case p:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(g.a)(Object(g.a)({},e),{},{active:Object(g.a)({},t.payload)});case m:return Object(g.a)(Object(g.a)({},e),{},{notes:[t.payload].concat(Object(_.a)(e.notes))});case h:return Object(g.a)(Object(g.a)({},e),{},{notes:Object(_.a)(t.payload)});case O:return Object(g.a)(Object(g.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(g.a)(Object(g.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v:return Object(g.a)(Object(g.a)({},e),{},{active:null,notes:[]});default:return e}}}),C=Object(i.e)(k,w(Object(i.a)(s.a))),E=n(20),I=n(21),S=n(10),A=n(31);n(163),n(75);A.a.initializeApp({apiKey:"AIzaSyCAqYKByq7-F2zFBV9BaFStLPpgn7KX3ww",authDomain:"journalapp-react-513b4.firebaseapp.com",projectId:"journalapp-react-513b4",storageBucket:"journalapp-react-513b4.appspot.com",messagingSenderId:"476068808078",appId:"1:476068808078:web:2975b4a47b32acc5ec10df"});var L=A.a.firestore(),D=new A.a.auth.GoogleAuthProvider,P=n(9),B=n.n(P),F=n(15),U=function(e){return{type:j,payload:e}},G=function(){return{type:p}},R=n(22),T=n.n(R),M=function(){var e=Object(F.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.collection("".concat(t,"/journal/notes")).orderBy("fecha","desc").get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(g.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(F.a)(B.a.mark((function e(t){var n,a,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/doorgyh8s/upload",(n=new FormData).append("upload_preset","reactJournalApp"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/doorgyh8s/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e,t){return{type:f,payload:Object(g.a)({id:e},t)}},q=function(e,t){return{type:m,payload:Object(g.a)({id:e},t)}},K=function(e){return{type:h,payload:e}},W=function(e){return function(){var t=Object(F.a)(B.a.mark((function t(n,a){var c,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(g.a)({},e)).id,t.next=6,L.doc("/".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(X(e.id,r)),T.a.fire("Guardado",e.titulo,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},X=function(e,t){return{type:O,payload:{id:e,note:Object(g.a)({id:e},t)}}},V=function(e){return{type:x,payload:e}},Y=function(e,t){return function(n){n({type:b}),setTimeout((function(){A.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Q(t.uid,t.displayName)),n(G())})).catch((function(e){n(G()),T.a.fire("Error",e.message,"error")}))}),1e3)}},Q=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},H=function(){return{type:l}},Z=n(35),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(E.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(g.a)(Object(g.a)({},c),{},Object(Z.a)({},t.name,t.value)))};return[c,i,o]},ee=n(1),te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=$({email:"juan@juan.com",password:"123456"}),a=Object(E.a)(n,2),c=a[0],r=a[1],i=c.email,s=c.password;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("h3",{className:"auth__title",children:"Login"}),Object(ee.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(Y(i,s))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(ee.jsx)("input",{className:"auth__input",type:"text",name:"email",placeholder:"email",autoComplete:"off",value:i,onChange:r}),Object(ee.jsx)("input",{className:"auth__input",type:"password",name:"password",placeholder:"password",value:s,onChange:r}),Object(ee.jsx)("button",{className:"btn btn-primary pointer btn-block",type:"submit",disabled:t,children:"Login"}),Object(ee.jsx)("div",{className:"auth__social-networks",children:Object(ee.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){A.a.auth().signInWithPopup(D).then((function(t){var n=t.user;e(Q(n.uid,n.displayName))}))}))},children:[Object(ee.jsx)("div",{className:"google-icon-wrapper",children:Object(ee.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ee.jsx)("p",{className:"btn-text",children:Object(ee.jsx)("b",{children:"Iniciar sesi\xf3n con Google"})})]})}),Object(ee.jsx)(I.b,{className:"link pointer",to:"/auth/register",children:"Crear nueva cuenta"})]})]})},ne=n(63),ae=n.n(ne),ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=$({nombre:"Juan",email:"juan@juan.com",password:"123456",passwordConfirm:"123456"}),a=Object(E.a)(n,2),c=a[0],r=a[1],i=c.nombre,s=c.email,u=c.password,l=c.passwordConfirm,j=function(){return 0===i.trim().length?(e(U("El nombre es obligatorio")),!1):ae.a.isEmail(s)?u!==l||u<5?(e(U("La contrase\xf1a debe de tener al menos 6 caracteres y deben ser iguales")),!1):(e({type:d}),!0):(e(U("El email es obligatorio")),!1)};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("h3",{className:"auth__title",children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()&&e(function(e,t,n){return function(a){A.a.auth().createUserWithEmailAndPassword(t,n).then(function(){var t=Object(F.a)(B.a.mark((function t(n){var c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.user,t.next=3,c.updateProfile({displayName:e});case 3:a(Q(c.uid,c.displayName));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){T.a.fire("Error",e.message,"error")}))}}(i,s,u))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(ee.jsxs)("div",{className:"auth__alert-error",children:[" ",t," "]}),Object(ee.jsx)("input",{className:"auth__input",type:"text",name:"nombre",placeholder:"nombre",autoComplete:"off",value:i,onChange:r}),Object(ee.jsx)("input",{className:"auth__input",type:"text",name:"email",placeholder:"Email",autoComplete:"off",value:s,onChange:r}),Object(ee.jsx)("input",{className:"auth__input",type:"password",name:"password",placeholder:"Contrase\xf1a",value:u,onChange:r}),Object(ee.jsx)("input",{className:"auth__input",type:"password",name:"passwordConfirm",placeholder:"Confirmar Contrase\xf1a",value:l,onChange:r}),Object(ee.jsx)("button",{className:"btn btn-primary pointer btn-block mb-5",type:"submit",children:"Registrarse"}),Object(ee.jsx)(I.b,{className:"link pointer",to:"/auth/login",children:"Iniciar sesi\xf3n"})]})]})},re=function(){return Object(ee.jsx)("div",{className:"auth__main",children:Object(ee.jsx)("div",{className:"auth__box-container",children:Object(ee.jsxs)(S.d,{children:[Object(ee.jsx)(S.b,{exact:!0,path:"/auth/login",component:te}),Object(ee.jsx)(S.b,{exact:!0,path:"/auth/register",component:ce}),Object(ee.jsx)(S.a,{to:"/auth/login"})]})})})},oe=n(36),ie=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(S.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(g.a)({},e)):Object(ee.jsx)(S.a,{to:"/auth/login"})}}))},se=n(28),ue=n.n(se),le=(n(59),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=t.fecha,a=ue()(n);return Object(ee.jsxs)("div",{className:"notes__appbar",children:[Object(ee.jsx)("span",{children:a.format("D-MMMM-Y")}),Object(ee.jsx)("input",{type:"file",style:{display:"none"},target:"file",onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(F.a)(B.a.mark((function t(n,a){var c,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,T.a.fire({title:"Cargando...",html:"Por favor espere",allowOutsideClick:!1,didOpen:function(){T.a.showLoading()}}),t.next=4,z(e);case 4:r=t.sent,c.url=r,n(W(c)),T.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))},id:"fileSelector"}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)("button",{onClick:function(){document.querySelector("#fileSelector").click()},className:"btn",children:"Imagen"}),Object(ee.jsx)("button",{className:"btn",onClick:function(){e(W(t))},children:"Guardar"})]})]})}),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=$(t),c=Object(E.a)(n,3),r=c[0],i=c[1],s=c[2],u=r.cuerpo,l=r.titulo,j=r.url,d=r.id,b=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==b.current&&(s(t),b.current=t.id)}),[t,s]),Object(a.useEffect)((function(){e(J(r.id,Object(g.a)({},r)))}),[r,e]);return Object(ee.jsxs)("div",{className:"notes__main-content animate__animated animate__fadeIn",children:[Object(ee.jsx)(le,{}),Object(ee.jsxs)("div",{className:"notes__content",children:[Object(ee.jsx)("input",{type:"text",name:"titulo",className:"notes_title-input",autoComplete:"off",placeholder:"Titulo",value:l,onChange:i}),Object(ee.jsx)("textarea",{placeholder:"\xbfQu\xe9 sucedio hoy?",className:"notes__textarea",name:"cuerpo",value:u,onChange:i}),j&&Object(ee.jsx)("div",{className:"notes__imagen",children:Object(ee.jsx)("img",{src:j,alt:"imagen de prueba"})})]}),Object(ee.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(F.a)(B.a.mark((function t(n,a){var c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,L.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(V(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(d))},children:"Borrar"})]})},de=function(e){var t=e.id,n=e.fecha,a=e.titulo,c=e.cuerpo,r=e.url,i=Object(o.b)(),s=ue()(n).locale("es");return Object(ee.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){i(J(t,{fecha:n,titulo:a,cuerpo:c,url:r}))},children:[r&&Object(ee.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(ee.jsxs)("div",{className:"journal__entry-body",children:[Object(ee.jsx)("p",{className:"journal__entry-title",children:a}),Object(ee.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(ee.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ee.jsx)("span",{children:s.format("ddd")}),Object(ee.jsx)("h4",{children:s.format("D")})]})]})},be=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(ee.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(ee.jsx)(de,Object(g.a)({},e),e.id)}))})},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsx)("div",{children:Object(ee.jsxs)("aside",{className:"jornaul__sidebar animate__animated animate__fadeInLeft",children:[Object(ee.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ee.jsxs)("h3",{className:"mt-5",children:[Object(ee.jsx)("i",{className:"far fa-moon"}),Object(ee.jsxs)("span",{children:[" ",t]})]}),Object(ee.jsx)("button",{className:"btn mt-5",onClick:function(){e(function(){var e=Object(F.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.auth().signOut();case 2:t(H()),t({type:v});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(ee.jsxs)("div",{className:"journal__new-entry pointer",onClick:function(){e(function(){var e=Object(F.a)(B.a.mark((function e(t,n){var a,c,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={titulo:"",cuerpo:"",fecha:(new Date).getTime()},e.prev=2,e.next=5,L.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(J(r.id,c)),t(q(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ee.jsx)("p",{className:"mt-5",children:"Nueva entrada"})]}),Object(ee.jsx)(be,{})]})})},me=function(){return Object(ee.jsxs)("div",{className:"nothing__main-content animate__animated animate__fadeInRight animate__fast",children:[Object(ee.jsxs)("p",{children:["Selecciona algo",Object(ee.jsx)("br",{}),"O agrega una nueva tarea!"]}),Object(ee.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},fe=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(ee.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(ee.jsx)(pe,{}),Object(ee.jsx)("main",{children:null===e?Object(ee.jsx)(me,{}):Object(ee.jsx)(je,{})})]})},he=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(S.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(S.a,{to:"/"}):Object(ee.jsx)(n,Object(g.a)({},e))}}))},Oe=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(E.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(E.a)(i,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){A.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(Q(t.uid,t.displayName)),l(!0),e((n=t.uid,function(){var e=Object(F.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(n);case 2:a=e.sent,t(K(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):l(!1),r(!1)}))}),[e,r,l]),c?Object(ee.jsx)("h1",{children:"Cargando..."}):Object(ee.jsx)(I.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(S.d,{children:[Object(ee.jsx)(he,{isAuthenticated:u,path:"/auth",component:re}),Object(ee.jsx)(ie,{exact:!0,isAuthenticated:u,path:"/",component:fe}),Object(ee.jsx)(S.a,{to:"/auth/login"})]})})})},xe=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Oe,{})})};n(161);r.a.render(Object(ee.jsx)(xe,{}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.0ac6df5c.chunk.js.map