(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(83),a(69)),l=a(150),s=a(146),u=a(15),m=a(112),p=a(113),d=a(136),f=a(137),g=a(138),h=a(139),b=a(143),v=a(142),E=a(151),w=a(149),x=r.a.createContext({authenticated:!1,user:{}}),O=a(39),j=a.n(O),y=(a(84),a(62),a(107),{apiKey:"AIzaSyCNrWqbvDNEp53wNfDtDMqfZbgStsJEM-E",authDomain:"paiweb.firebaseapp.com",databaseURL:"https://paiweb.firebaseio.com",projectId:"paiweb",storageBucket:"paiweb.appspot.com",messagingSenderId:"560094021764",appId:"1:560094021764:web:d9efaf85f4747eb1"}),D={apiKey:y.apiKey,authDomain:y.authDomain,databaseURL:y.databaseUrl,projectId:y.projectId,storageBucket:y.storageBucket,messagingSenderId:y.mesagingSenderId,appId:y.appId};j.a.initializeApp(D);var I=j.a,N=j.a.firestore(),S=Object(p.a)({root:{},grow:{flexGrow:1},avatar:{margin:0,padding:0,height:"24px",width:"24px"}})(function(e){var t=e.classes,a=r.a.useState(null),i=Object(u.a)(a,2),o=i[0],c=i[1],l=Boolean(o),s=Object(n.useContext)(x);return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.grow},"Pai"),r.a.createElement(h.a,{color:"inherit",onClick:function(e){s.authenticated&&c(e.currentTarget)}},s.authenticated?r.a.createElement(v.a,{alt:"Remy Sharp",src:s.user.photoURL,className:t.avatar}):r.a.createElement(b.a,null,"account_circle")),r.a.createElement(w.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){c(null)}},r.a.createElement(E.a,{onClick:function(){c(null),I.auth().signOut(),e.setAuthContext({})}},"Sign out")))))}),k=Object(p.a)(function(e){return{appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"}}})(function(e){var t=e.classes;return r.a.createElement(d.a,{position:"sticky",color:"primary",className:t.appBar},r.a.createElement(f.a,{className:t.toolbar},r.a.createElement(h.a,{color:"inherit","aria-label":"Open drawer",onClick:e.toggleDrawer(!0)},r.a.createElement(b.a,null,"menu")),e.camera,r.a.createElement("div",null,r.a.createElement(h.a,{color:"inherit"},r.a.createElement(b.a,null,"more_vert")))))}),R=a(50),C=a.n(R),P=a(67),A=function(e){return 100-((new Date).getTime()/1e3-e.seconds)/86400*100},B=function(e,t){var a="images/"+t.uid+"/"+function(e){return Date.now()+e.name.substr(e.name.lastIndexOf("."))}(e);I.storage().ref(a).put(e).on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("percentage",t)},function(e){},function(){console.log("DONE!"),z(a,t)})},z=function(e,t){N.collection("posts").add({uid:t.uid,userPhotoURL:t.photoURL,imgRef:e,text:"",timestamp:I.firestore.FieldValue.serverTimestamp()}).then(function(e){console.log("Document written with docRef: ",e)}).catch(function(e){console.error("Error adding document: ",e)})},L=Object(m.a)(function(e){return{imgDiv:{borderRadius:"4px",minHeight:"250px",maxHeight:"75vh",maxWidth:"450px",overflow:"hidden"},img:{borderRadius:"4px",boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"}}}),U=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),i=a[0],o=a[1];Object(n.useEffect)(function(){return l(e.imageRef)},[e.imageRef]);var c=L(),l=function(e){(function(e){if(e)return I.storage().ref(e).getDownloadURL().then(function(e){return e})})(e).then(function(e){return o(e)})};return r.a.createElement("div",{className:c.imgDiv},r.a.createElement(C.a,{styles:"image-orientation: from-image",width:"100%",height:"auto",src:i,alt:"image post",className:c.img}))},T=a(111),V=a(144),W=Object(T.a)(function(e){return{progress:{marginLeft:"5px"},innerProgress:{position:"relative",marginLeft:"-16px",color:e.palette.gray.light}}}),F=function(e){var t=new Date,a=(t.getTime()-e.getTime())/1e3;return a<60?parseInt(a)+"s":a<3600?parseInt(a/60)+"m":a<=86400?parseInt(a/3600)+"h":a>86400?e.getDate()+" "+e.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","")+(e.getFullYear()===t.getFullYear()?"":" "+e.getFullYear()):void 0},_=function(e){var t=W(),a=e.timestamp;return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{variant:"caption"},F(a.toDate())),r.a.createElement(V.a,{color:"primary",variant:"static",value:A(a),className:t.progress,size:16}),r.a.createElement(V.a,{color:"secondary",variant:"static",value:100,className:t.innerProgress,size:16}))},Y=Object(m.a)(function(e){return{root:{scrollSnapAlign:"start",padding:"0px",height:"82vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},avatar:{border:"2px solid #fafafa",marginLeft:"6px"},avatarTimeDiv:{display:"flex",marginBottom:"-21px"}}}),K=function(e){var t=Y();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.avatarTimeDiv},r.a.createElement(v.a,{className:t.avatar,alt:"Post Avatar",src:e.post.userPhotoURL}),r.a.createElement(_,{timestamp:e.post.timestamp})),r.a.createElement(U,{imageRef:e.post.imgRef}))},q=a(108),J=Object(m.a)(function(e){return{root:{padding:"0px",height:"82vh",display:"flex",flexDirection:"column",justifyContent:"space-around",textAlign:"center",alignItems:"center"},"@keyframes arrowAnimation":{from:{transform:"translateY(0)"},to:{transform:"translateY(30px)"}},icon:{position:"relative",fontSize:"65px",animation:"$arrowAnimation 2s infinite alternate"}}}),G=function(){var e=J();return r.a.createElement("div",{className:e.root},r.a.createElement("div",null),r.a.createElement(q.a,null,r.a.createElement(g.a,{variant:"h5",gutterBottom:!0},"Your friends want to know what you are up to. Post a picture to access the feed.")),r.a.createElement(b.a,{color:"disabled",className:e.icon,fontSize:"large"},"arrow_downward"))},H=Object(m.a)(function(e){return{feedWrapper:{display:"flex",flexDirection:"column",alignItems:"center"},feedTopDiv:{scrollSnapAlign:"end"},feedEndDiv:{display:"flex",justifyContent:"center",alignItems:"center",height:"15vh",color:e.palette.gray.main}}}),M=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),s=l[0],m=l[1],p=Object(n.useState)(!0),d=Object(u.a)(p,2),f=d[0],g=d[1],h=H(),v=function(){e.latestValidPost?(m(!0),N.collection("posts").where("timestamp",">",new Date(Date.now()-864e5)).orderBy("timestamp","desc").limit(15).get().then(function(e){var t=[];return e.forEach(function(e){t.push(e.data())}),t}).then(function(e){return o(e)})):m(!1),g(!1)};Object(n.useEffect)(function(){v()},[e.latestValidPost]);return r.a.createElement("div",{className:h.feedWrapper},r.a.createElement("div",{className:h.feedTopDiv}),e.imagePreviewUrl&&r.a.createElement(C.a,{styles:"image-orientation: from-image",width:"100%",height:"auto",src:e.imagePreviewUrl,alt:"preview"}),f?r.a.createElement("p",null,"loading"):s?i.map(function(e,t){return r.a.createElement(K,{key:"post"+t,post:e})}):r.a.createElement(G,null),r.a.createElement("div",{className:h.feedEndDiv},r.a.createElement(b.a,{fontSize:"small"},"panorama_fish_eye")))},Z=a(148),$=Object(m.a)({drawerList:{width:"250px"}}),Q=function(e){var t=e.open,a=e.toggleDrawer,n=$();return r.a.createElement(Z.a,{open:t,onClose:a(!1),onOpen:a(!0)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:a(!1),onKeyDown:a(!1)},r.a.createElement("div",{className:n.drawerList},"SideDrawer")))},X=a(145),ee=Object(p.a)(function(e){return{fabButton:{position:"absolute",zIndex:2,top:"-29px",left:0,right:0,margin:"0 auto"},progressWrapper:{backgroundColor:e.palette.background.main,position:"absolute",zIndex:1,top:0,left:0,right:0,margin:"0 auto",width:"64px",height:"32px",borderBottomLeftRadius:"128px",borderBottomRightRadius:"128px"},fabProgress:{position:"absolute",zIndex:1,top:-34,left:"-1px",right:0,margin:"0 auto"},hide:{display:"none"}}})(function(e){var t=e.classes,a=Object(n.createRef)(),i=Object(n.useState)(0),o=Object(u.a)(i,2),c=o[0],l=o[1];return Object(n.useEffect)(function(){e.latestValidPost?l(A(e.latestValidPost.timestamp)):l(0)},[e.latestValidPost]),r.a.createElement("div",null,r.a.createElement("span",{className:t.hide},r.a.createElement("input",{type:"file",accept:"image/*",capture:!0,onChange:function(t){return e.handleFile(t)},ref:a})),r.a.createElement(X.a,{color:"secondary","aria-label":"Add",className:t.fabButton,size:"large",onClick:function(){return a.current.click()}},r.a.createElement(b.a,null,"photo_camera")),r.a.createElement("div",{className:t.progressWrapper},r.a.createElement(V.a,{size:66,variant:"static",value:c,className:t.fabProgress})))}),te=a(68),ae=a.n(te),ne=function(e){var t={signInFlow:"popup",signInOptions:[I.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(n.useEffect)(function(){var t=I.auth().onAuthStateChanged(function(t){e.setAuthContext({authenticated:!!t,user:t})});return function(){t()}},[]),r.a.createElement("div",null,r.a.createElement(ae.a,{uiConfig:t,firebaseAuth:I.auth()}))},re=Object(m.a)(function(e){return{App:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"800px",width:"100%"}}}),ie=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(""),l=Object(u.a)(c,2),s=l[0],m=l[1],p=Object(n.useState)({}),d=Object(u.a)(p,2),f=d[0],g=d[1],h=Object(n.useState)(),b=Object(u.a)(h,2),v=b[0],E=b[1],w=re(),O=function(e){g(e)},j=function(e){return function(){o(e)}},y=function(){var e;f.authenticated&&(e=f.user.uid,N.collection("posts").where("timestamp",">",new Date(864e5)).where("uid","==",e).orderBy("timestamp","desc").limit(1).get().then(function(e){var t;return e.forEach(function(e){t=e.data()}),t})).then(function(e){E(e)})};Object(n.useEffect)(function(){return y()},[f.authenticated]);return r.a.createElement("div",{className:w.App},r.a.createElement(x.Provider,{value:f},r.a.createElement(S,{setAuthContext:O}),r.a.createElement(Q,{open:i,toggleDrawer:j}),f.authenticated?r.a.createElement(M,{imagePreviewUrl:s,latestValidPost:v}):r.a.createElement(ne,{setAuthContext:O}),r.a.createElement(k,{toggleDrawer:j,camera:r.a.createElement(ee,{handleFile:function(e){var t=e.target.files[0];!t&&f.authenticated||function(e,t){e&&new P.a(e,{quality:.6,success:function(e){t(e)},error:function(e){console.log(e.message)}})}(t,function(e){m(URL.createObjectURL(e)),B(e,f.user)})},latestValidPost:v})})))},oe=Object(c.a)({palette:{background:{main:"#fafafa"},primary:{main:"#ec407a",light:"#ff77a9",dark:"#b4004e"},secondary:{main:"#42a5f5",light:"#80d6ff",dark:"#0077c2"},green:{main:"#43a047",light:"#d7ffd9",dark:"#76d275"},gray:{main:"#d9d9d9",light:"#80808026",dark:"gray"}},typography:{useNextVariants:!0}});var ce=function(e){return r.a.createElement(l.a,{theme:oe},r.a.createElement(s.a,null),r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a(106)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.647316bb.chunk.js.map