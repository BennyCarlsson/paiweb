(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),c=(a(90),a(64)),s=a(65),l=a(75),u=a(66),m=a(76),d=a(74),p=a(162),f=a(157),g=a(10),h=a(119),b=a(120),v=a(144),E=a(145),w=a(48),x=a(146),j=a(149),O=a(148),y=a(152),k=a(161),S=r.a.createContext({authenticated:!1,user:{}}),C=a(37),D=a.n(C),N=(a(91),a(62),a(112),{apiKey:"AIzaSyCNrWqbvDNEp53wNfDtDMqfZbgStsJEM-E",authDomain:"paiweb.firebaseapp.com",databaseURL:"https://paiweb.firebaseio.com",projectId:"paiweb",storageBucket:"paiweb.appspot.com",messagingSenderId:"560094021764",appId:"1:560094021764:web:d9efaf85f4747eb1"}),I={apiKey:N.apiKey,authDomain:N.authDomain,databaseURL:N.databaseUrl,projectId:N.projectId,storageBucket:N.storageBucket,messagingSenderId:N.mesagingSenderId,appId:N.appId};D.a.initializeApp(I),D.a.firestore().enablePersistence().catch(function(e){"failed-precondition"===e.code||e.code});var U=D.a,P=D.a.firestore(),R=Object(b.a)({root:{},grow:{flexGrow:1},avatar:{margin:0,padding:0,height:"24px",width:"24px"}})(function(e){var t=e.classes,a=r.a.useState(null),o=Object(g.a)(a,2),i=o[0],c=o[1],s=Boolean(i),l=Object(n.useContext)(S);return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.grow},"Pai"),r.a.createElement(x.a,{color:"inherit",onClick:function(e){l.authenticated&&c(e.currentTarget)}},l.authenticated?r.a.createElement(O.a,{alt:"Remy Sharp",src:l.user.photoURL,className:t.avatar}):r.a.createElement(j.a,null,"account_circle")),r.a.createElement(k.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){c(null)}},r.a.createElement(y.a,{onClick:function(){c(null),U.auth().signOut(),e.setAuthContext({})}},"Sign out")))))}),A=Object(b.a)(function(e){return{appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"}}})(function(e){var t=e.classes;return r.a.createElement(v.a,{position:"sticky",color:"primary",className:t.appBar},r.a.createElement(E.a,{className:t.toolbar,variant:"dense"},r.a.createElement(x.a,{color:"inherit","aria-label":"Open drawer",onClick:e.toggleDrawer(!0)},r.a.createElement(j.a,null,"menu")),e.camera))}),B=a(70),L=function(e){var t=((new Date).getTime()-e.getTime())/1e3;return t<60?parseInt(t)+"s":t<3600?parseInt(t/60)+"m":t<=172800?parseInt(t/3600)+"h":t>86400?"< 2 days":void 0},W=function(e){var t=100-((new Date).getTime()/1e3-e.getTime()/1e3)/86400*100;return t<0?0:t>100?100:t},z=function(e,t,a){var n="images/"+t.uid+"/"+function(e){return Date.now()+e.name.substr(e.name.lastIndexOf("."))}(e);U.storage().ref(n).put(e,{cacheControl:"max-age=432001",contentType:e.type}).on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("percentage",t)},function(e){},function(){console.log("DONE!"),T(n,t,a)})},T=function(e,t,a){P.collection("posts").add({uid:t.uid,userPhotoURL:t.photoURL,imgRef:e,text:"",timestamp:U.firestore.FieldValue.serverTimestamp()}).then(function(e){console.log("Document written with docRef: ",e),V(t.uid).then(function(){a()})}).catch(function(e){console.error("Error adding document: ",e)})},V=function(e){return P.collection("users").doc(e).update({lastUpdate:U.firestore.FieldValue.serverTimestamp()})},F=a(71),_=a.n(F),K=a(72),q=a.n(K),H=a(153),J=Object(h.a)(function(e){return{imgDiv:{borderRadius:"4px",minHeight:"250px",maxHeight:"75vh",maxWidth:"450px",overflow:"hidden"},img:{borderRadius:"4px",boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"},progressWrapper:{widh:"100%",height:"250px",display:"flex",justifyContent:"center",alignItems:"center"},progress:{color:e.palette.color.main}}}),M=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!1),s=Object(g.a)(c,2),l=s[0],u=s[1];Object(n.useEffect)(function(){return d(e.imageRef)},[e.imageRef]);var m=J(),d=function(e){(function(e){if(e)return U.storage().ref(e).getDownloadURL().then(function(e){return e})})(e).then(function(e){return i(e)})};return r.a.createElement(q.a,{onChange:function(t){u(t),t&&e.renderNextImages(e.index)},active:!l},r.a.createElement("div",{className:m.imgDiv},e.index<=e.renderImages?r.a.createElement(_.a,{width:"100%",height:"auto",src:o,alt:"image post",className:m.img,loader:r.a.createElement("div",{className:m.progressWrapper},r.a.createElement(H.a,{className:m.progress}))}):""))},Y=a(118),$=Object(Y.a)(function(e){return{progress:{marginLeft:"5px",color:e.palette.color.main,zIndex:2},innerProgress:{position:"relative",marginLeft:"-16px",color:e.palette.gray.main,zIndex:1}}}),G=function(e){var t=$(),a=e.timestamp;return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{variant:"caption"},L(a.toDate())),r.a.createElement(H.a,{color:"primary",variant:"static",value:W(a.toDate()),className:t.progress,size:16}),r.a.createElement(H.a,{variant:"static",value:100,className:t.innerProgress,size:16}))},Z=Object(h.a)(function(e){return{root:{scrollSnapAlign:"start",padding:"0px",height:"82vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},postWrapper:{width:"100%",maxWidth:"450px"},avatar:{border:"2px solid #fafafa",marginLeft:"6px"},avatarTimeDiv:{display:"flex",marginBottom:"-21px"}}}),Q=function(e){var t=Z();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.postWrapper},r.a.createElement("div",{className:t.avatarTimeDiv},r.a.createElement(O.a,{className:t.avatar,alt:"Post Avatar",src:e.post.userPhotoURL}),r.a.createElement(G,{timestamp:e.post.timestamp})),r.a.createElement(M,{imageRef:e.post.imgRef,renderNextImages:e.renderNextImages,renderImages:e.renderImages,index:e.index})))},X=Object(h.a)(function(e){return{root:{padding:"0px",height:"78vh",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",alignItems:"center"},"@keyframes arrowAnimation":{from:{transform:"translateY(0)"},to:{transform:"translateY(30px)"}},icon:{position:"relative",fontSize:"65px",animation:"$arrowAnimation 2s infinite alternate"}}}),ee=function(){var e=X();return r.a.createElement("div",{className:e.root},r.a.createElement("div",null),r.a.createElement("span",null,r.a.createElement(w.a,{align:"center",variant:"h4"},"Show friends what you are up to.",r.a.createElement("br",null)," Post a picture.")),r.a.createElement(j.a,{color:"disabled",className:e.icon,fontSize:"large"},"arrow_downward"))},te=Object(h.a)(function(e){return{feedWrapper:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:e.palette.background.main},feedTopDiv:{scrollSnapAlign:"end"},feedEndDiv:{display:"flex",justifyContent:"center",alignItems:"center",height:"15vh",color:e.palette.gray.main}}}),ae=function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!0),s=Object(g.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)(!0),d=Object(g.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(2),b=Object(g.a)(h,2),v=b[0],E=b[1],x=te(),O=function(e){E(e+2)};Object(n.useEffect)(function(){e.gotLatestPost?(e.latestValidPost?(u(!0),P.collection("posts").where("timestamp",">",new Date(Date.now()-864e5)).orderBy("timestamp","desc").limit(15).get().then(function(e){var t=[];return e.forEach(function(e){t.push(e.data())}),t}).then(function(e){return i(e)})):u(!1),f(!1)):f(!0)},[e.latestValidPost,e.gotLatestPost]);return r.a.createElement("div",{className:x.feedWrapper},r.a.createElement("div",{className:x.feedTopDiv}),p?r.a.createElement(w.a,{variant:"subtitle1"},"loading"):l?[o.map(function(e,t){return r.a.createElement(Q,{key:"post"+t,renderNextImages:O,renderImages:v,index:t,post:e})}),r.a.createElement("div",{key:"alasd213",className:x.feedEndDiv},r.a.createElement(j.a,{fontSize:"small"},"panorama_fish_eye"))]:r.a.createElement(ee,null))},ne=a(159),re=a(151),oe=a(117),ie=a(155),ce=a(154),se=Object(h.a)(function(e){return{drawerList:{height:"100%",width:"250px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:e.palette.background.main},list:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.main}}}),le=function(e){var t=e.open,a=e.toggleDrawer,o=se(),i=Object(n.useState)(),c=Object(g.a)(i,2),s=c[0],l=c[1],u=Object(n.useContext)(S);Object(n.useEffect)(function(){u.authenticated?P.collection("users").get().then(function(e){var t=[];return e.forEach(function(e){t.push(e.data())}),t}).then(function(e){return l(e)}):l([])},[u.authenticated]);var m=function(e,t){return r.a.createElement(oe.a,{key:t+"1",button:!0},r.a.createElement(ce.a,null,r.a.createElement(O.a,{alt:"Avatar photo",src:e.photoURL})),r.a.createElement(ie.a,{primary:e.displayName,secondary:e.lastUpdate?"posted "+L(e.lastUpdate.toDate())+" ago":""}))};return r.a.createElement(ne.a,{open:t,onClose:a(!1),onOpen:a(!0)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:a(!1),onKeyDown:a(!1),className:o.drawerList},r.a.createElement(re.a,{dense:!0,className:o.list},s?s.map(function(e,t){return m(e,t)}):r.a.createElement("p",null,"...")),r.a.createElement(w.a,{variant:"body2",gutterBottom:!0},"v.0.1.2")))},ue=a(156),me=a(160),de=Object(b.a)(function(e){return{fabButton:{position:"absolute",zIndex:2,top:"-29px",left:0,right:0,margin:"0 auto"},fabProgress:{position:"absolute",zIndex:1,top:-34,left:0,right:0,margin:"0 auto",color:e.palette.color.main},hide:{display:"none"}}})(function(e){var t=e.classes,a=Object(n.createRef)(),o=Object(n.useState)(0),i=Object(g.a)(o,2),c=i[0],s=i[1],l=r.a.useState(!1),u=Object(g.a)(l,2),m=u[0],d=u[1],p=Object(n.useContext)(S);Object(n.useEffect)(function(){e.latestValidPost?s(W(e.latestValidPost.timestamp.toDate())):s(0)},[e.latestValidPost]);function f(e,t){"clickaway"!==t&&d(!1)}return r.a.createElement("div",null,r.a.createElement("span",{className:t.hide},r.a.createElement("input",{type:"file",accept:"image/*",capture:!0,onChange:function(t){return e.handleFile(t)},ref:a})),r.a.createElement(ue.a,{"aria-label":"Add",className:t.fabButton,size:"large",onClick:function(){p.authenticated?a.current.click():d(!0)}},r.a.createElement(j.a,null,"photo_camera")),r.a.createElement(H.a,{size:66,variant:e.showUploadLoader?"indeterminate":"static",value:c,className:t.fabProgress}),r.a.createElement(me.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},message:r.a.createElement("span",{id:"message-id"},"Login to post pictures"),open:m,autoHideDuration:1e4,onClose:f,action:r.a.createElement(x.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:f},r.a.createElement(j.a,null,"close"))}))}),pe=a(73),fe=a.n(pe),ge=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),o=a[0],i=a[1],c={signInFlow:"popup",signInOptions:[U.auth.FacebookAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(n.useEffect)(function(){var t=U.auth().onAuthStateChanged(function(t){e.setAuthContext({authenticated:!!t,user:t}),t||i(!0)});return function(){t()}},[]),r.a.createElement("div",null,o?r.a.createElement(fe.a,{uiConfig:c,firebaseAuth:U.auth()}):r.a.createElement(w.a,{variant:"subtitle1",style:{textAlign:"center"}},"loading"))},he=Object(h.a)(function(e){return{App:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"800px",width:"100%"}}}),be=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(""),s=Object(g.a)(c,2),l=s[0],u=s[1],m=Object(n.useState)({}),d=Object(g.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(),b=Object(g.a)(h,2),v=b[0],E=b[1],w=Object(n.useState)(!1),x=Object(g.a)(w,2),j=x[0],O=x[1],y=Object(n.useState)(!1),k=Object(g.a)(y,2),C=k[0],D=k[1],N=he(),I=function(e){f(e)},U=function(e){return function(){i(e)}};Object(n.useEffect)(function(){!function(){var e;p.authenticated&&(e=p.user.uid,P.collection("posts").where("timestamp",">",new Date(new Date-864e5)).where("uid","==",e).orderBy("timestamp","desc").limit(1).get().then(function(e){var t;return e.forEach(function(e){t=e.data()}),t})).then(function(e){E(e),O(!0)})}()},[p]);return r.a.createElement("div",{className:N.App},r.a.createElement(S.Provider,{value:p},r.a.createElement(R,{setAuthContext:I}),r.a.createElement(le,{open:o,toggleDrawer:U}),p.authenticated?r.a.createElement(ae,{imagePreviewUrl:l,latestValidPost:v,gotLatestPost:j}):r.a.createElement(ge,{setAuthContext:I}),r.a.createElement(A,{toggleDrawer:U,camera:r.a.createElement(de,{showUploadLoader:C,handleFile:function(e){var t=e.target.files[0];!t&&p.authenticated||(D(!0),function(e,t){e&&new B.a(e,{quality:.5,width:512,success:function(e){t(e)},error:function(e){console.log(e.message)}})}(t,function(e){u(URL.createObjectURL(e)),z(e,p.user,function(){return D(!1)})}))},latestValidPost:v})})))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){if("serviceWorker"in navigator){if(new URL("/paiweb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/paiweb","/service-worker.js");ve?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):we(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):we(t,e)})}}function we(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var xe=function(e){return r.a.createElement("div",null,r.a.createElement(me.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.showUpdateSnackBar,onClose:e.handleCloseSnackBar,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"New Update! Restart the app")}))},je=Object(d.a)({palette:{type:"dark",background:{main:"#000000"},primary:{main:"#000000"},secondary:{main:"#ffffff"},color:{main:"#FF2188"},gray:{main:"#666666"}},typography:{useNextVariants:!0}}),Oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleServiceWorkerUpdate=function(e){a.setState({showUpdateSnackBar:!0})},a.handleCloseSnackBar=function(e,t){"clickaway"!==t&&a.setState({showUpdateSnackBar:!1})},Ee({onUpdate:a.handleServiceWorkerUpdate}),a.state={showUpdateSnackBar:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{theme:je},r.a.createElement(f.a,null),r.a.createElement(be,null),r.a.createElement(xe,{handleCloseSnackBar:this.handleCloseSnackBar,showUpdateSnackBar:this.state.showUpdateSnackBar}))}}]),t}(n.Component);i.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a(111)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.3646996f.chunk.js.map