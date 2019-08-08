importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js")

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../pai/firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope)
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err)
    })
}

let config = {
  messagingSenderId: "210106….862"
}
firebase.initializeApp(config)
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title
  console.log("payload", payload.notification.icon)
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  }
  return self.registration.showNotification(title, options)
})

//Todo https://firebase.google.com/docs/cloud-messaging/js/send-multiple
//onTokenRefresh
