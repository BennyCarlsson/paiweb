(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(82),a(69)),l=a(153),s=a(149),u=a(20),m=a(114),p=a(115),f=a(139),d=a(140),g=a(141),h=a(142),v=a(146),E=a(145),b=a(154),w=a(152),x=r.a.createContext({authenticated:!1,user:{}}),O=a(39),j=a.n(O),y=(a(83),a(62),a(109),{apiKey:"AIzaSyCNrWqbvDNEp53wNfDtDMqfZbgStsJEM-E",authDomain:"paiweb.firebaseapp.com",databaseURL:"https://paiweb.firebaseio.com",projectId:"paiweb",storageBucket:"paiweb.appspot.com",messagingSenderId:"560094021764",appId:"1:560094021764:web:d9efaf85f4747eb1"}),D={apiKey:y.apiKey,authDomain:y.authDomain,databaseURL:y.databaseUrl,projectId:y.projectId,storageBucket:y.storageBucket,messagingSenderId:y.mesagingSenderId,appId:y.appId};j.a.initializeApp(D);var I=j.a,N=j.a.firestore(),S=Object(p.a)({root:{},grow:{flexGrow:1},avatar:{margin:0,padding:0,height:"24px",width:"24px"}})(function(e){var t=e.classes,a=r.a.useState(null),o=Object(u.a)(a,2),i=o[0],c=o[1],l=Boolean(i),s=Object(n.useContext)(x);return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"sticky"},r.a.createElement(d.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.grow},"Pai"),r.a.createElement(h.a,{color:"inherit",onClick:function(e){s.authenticated&&c(e.currentTarget)}},s.authenticated?r.a.createElement(E.a,{alt:"Remy Sharp",src:s.user.photoURL,className:t.avatar}):r.a.createElement(v.a,null,"account_circle")),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){c(null)}},r.a.createElement(b.a,{onClick:function(){c(null),I.auth().signOut(),e.setAuthContext({})}},"Sign out")))))}),C=Object(p.a)(function(e){return{appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"}}})(function(e){var t=e.classes;return r.a.createElement(f.a,{position:"sticky",color:"primary",className:t.appBar},r.a.createElement(d.a,{className:t.toolbar},r.a.createElement(h.a,{color:"inherit","aria-label":"Open drawer",onClick:e.toggleDrawer(!0)},r.a.createElement(v.a,null,"menu")),e.camera,r.a.createElement("div",null,r.a.createElement(h.a,{color:"inherit"},r.a.createElement(v.a,null,"more_vert")))))}),R=a(50),k=a.n(R),A=Date.now()-864e5,B=a(67),L=function(e,t){var a="images/"+t.uid+"/"+function(e){return Date.now()+e.name.substr(e.name.lastIndexOf("."))}(e);I.storage().ref(a).put(e).on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("percentage",t)},function(e){},function(){console.log("DONE!"),U(a,t)})},U=function(e,t){N.collection("posts").add({uid:t.uid,userPhotoURL:t.photoURL,imgRef:e,text:"",timestamp:I.firestore.FieldValue.serverTimestamp()}).then(function(e){console.log("Document written with docRef: ",e)}).catch(function(e){console.error("Error adding document: ",e)})},P=Object(m.a)(function(e){return{imgDiv:{borderRadius:"4px",minHeight:"250px",maxHeight:"75vh",overflow:"hidden"},img:{borderRadius:"4px",boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"}}}),z=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],i=a[1];Object(n.useEffect)(function(){return l(e.imageRef)},[e.imageRef]);var c=P(),l=function(e){(function(e){if(e)return I.storage().ref(e).getDownloadURL().then(function(e){return e})})(e).then(function(e){return i(e)})};return r.a.createElement("div",{className:c.imgDiv},r.a.createElement(k.a,{styles:"image-orientation: from-image",width:"100%",height:"auto",src:o,alt:"image post",className:c.img}))},T=a(113),F=a(147),_=Object(T.a)(function(e){return{progress:{marginLeft:"5px"}}}),W=function(e){return 100-(new Date-e)/A*1e6*2},Y=function(e){var t=new Date,a=(t.getTime()-e.getTime())/1e3;return a<60?parseInt(a)+"s":a<3600?parseInt(a/60)+"m":a<=86400?parseInt(a/3600)+"h":a>86400?e.getDate()+" "+e.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","")+(e.getFullYear()===t.getFullYear()?"":" "+e.getFullYear()):void 0},K=function(e){var t=_(),a=e.timestamp.toDate();return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{variant:"caption"},Y(a)),r.a.createElement(F.a,{color:"secondary",variant:"static",value:W(a),className:t.progress,size:16}))},q=Object(m.a)(function(e){return{root:{scrollSnapAlign:"start",padding:"0px",height:"82vh",display:"flex",flexDirection:"column",justifyContent:"center"},avatar:{border:"2px solid #fafafa",marginLeft:"6px"},avatarTimeDiv:{display:"flex",marginBottom:"-21px"}}}),J=function(e){var t=q();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.avatarTimeDiv},r.a.createElement(E.a,{className:t.avatar,alt:"Post Avatar",src:e.post.userPhotoURL}),r.a.createElement(K,{timestamp:e.post.timestamp})),r.a.createElement(z,{imageRef:e.post.imgRef}))},V=a(110),G=Object(m.a)(function(e){return{root:{padding:"0px",height:"82vh",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",alignItems:"center"},"@keyframes arrowAnimation":{from:{transform:"translateY(0)"},to:{transform:"translateY(30px)"}},icon:{position:"relative",fontSize:"65px",animation:"$arrowAnimation 2s infinite alternate"}}}),H=function(){var e=G();return r.a.createElement("div",{className:e.root},r.a.createElement("div",null),r.a.createElement(V.a,null,r.a.createElement(g.a,{variant:"h5",gutterBottom:!0},"Your friends want to know what you are up to. Post a picture to access the feed.")),r.a.createElement(v.a,{color:"disabled",className:e.icon,fontSize:"large"},"arrow_downward"))},M=Object(m.a)(function(e){return{feedWrapper:{},feedTopDiv:{scrollSnapAlign:"end"},feedEndDiv:{display:"flex",justifyContent:"center",alignItems:"center",height:"15vh",color:"#d9d9d9"}}}),Z=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),s=l[0],m=l[1],p=M(),f=Object(n.useContext)(x),d=function(){var e;(e=f.user.uid,N.collection("posts").where("timestamp",">",new Date(A)).where("uid","==",e).limit(1).get().then(function(e){var t;return e.forEach(function(e){t=e.exists}),!!t})).then(function(e){e?(m(!0),N.collection("posts").where("timestamp",">",new Date(A)).orderBy("timestamp","desc").limit(15).get().then(function(e){var t=[];return e.forEach(function(e){t.push(e.data())}),t}).then(function(e){return i(e)})):m(!1)})};Object(n.useEffect)(function(){return d()},[]);return r.a.createElement("div",{className:p.feedWrapper},r.a.createElement("div",{className:p.feedTopDiv}),e.imagePreviewUrl&&r.a.createElement(k.a,{styles:"image-orientation: from-image",width:"100%",height:"auto",src:e.imagePreviewUrl,alt:"preview"}),s?o.map(function(e,t){return r.a.createElement(J,{key:"post"+t,post:e})}):r.a.createElement(H,null),r.a.createElement("div",{className:p.feedEndDiv},r.a.createElement(v.a,{fontSize:"small"},"panorama_fish_eye")))},$=a(151),Q=Object(m.a)({drawerList:{width:"250px"}}),X=function(e){var t=e.open,a=e.toggleDrawer,n=Q();return r.a.createElement($.a,{open:t,onClose:a(!1),onOpen:a(!0)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:a(!1),onKeyDown:a(!1)},r.a.createElement("div",{className:n.drawerList},"SideDrawer")))},ee=a(148),te=Object(p.a)(function(e){return{fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},hide:{display:"none"}}})(function(e){var t=e.classes,a=Object(n.createRef)();return r.a.createElement("div",null,r.a.createElement("span",{className:t.hide},r.a.createElement("input",{type:"file",accept:"image/*",capture:!0,onChange:function(t){return e.handleFile(t)},ref:a})),r.a.createElement(ee.a,{color:"secondary","aria-label":"Add",className:t.fabButton,onClick:function(){return a.current.click()}},r.a.createElement(v.a,null,"photo_camera")))}),ae=a(68),ne=a.n(ae),re=function(e){var t={signInFlow:"popup",signInOptions:[I.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(n.useEffect)(function(){var t=I.auth().onAuthStateChanged(function(t){e.setAuthContext({authenticated:!!t,user:t})});return function(){t()}},[]),r.a.createElement("div",null,r.a.createElement(ne.a,{uiConfig:t,firebaseAuth:I.auth()}))},oe=(a(105),Object(m.a)(function(e){return{App:{height:"100vh",display:"flex",flexDirection:"column",maxWidth:"800px"}}})),ie=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(""),l=Object(u.a)(c,2),s=l[0],m=l[1],p=Object(n.useState)({}),f=Object(u.a)(p,2),d=f[0],g=f[1],h=oe(),v=function(e){g(e)},E=function(e){return function(){i(e)}};return r.a.createElement("div",{className:h.App},r.a.createElement(x.Provider,{value:d},r.a.createElement(S,{setAuthContext:v}),r.a.createElement(X,{open:o,toggleDrawer:E}),d.authenticated?r.a.createElement(Z,{imagePreviewUrl:s}):r.a.createElement(re,{setAuthContext:v}),r.a.createElement(C,{toggleDrawer:E,camera:r.a.createElement(te,{handleFile:function(e){var t=e.target.files[0];!t&&d.authenticated||function(e,t){e&&new B.a(e,{quality:.6,success:function(e){t(e)},error:function(e){console.log(e.message)}})}(t,function(e){m(URL.createObjectURL(e)),L(e,d.user)})}})})))},ce=Object(c.a)({palette:{primary:{main:"#ec407a",light:"#ff77a9",dark:"#b4004e"},secondary:{main:"#42a5f5",light:"#80d6ff",dark:"#0077c2"}},typography:{useNextVariants:!0}});var le=function(e){return r.a.createElement(l.a,{theme:ce},r.a.createElement(s.a,null),r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports=a(108)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.a4290953.chunk.js.map