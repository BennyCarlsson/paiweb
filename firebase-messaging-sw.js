importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js")

let config = {
  messagingSenderId: "560094021764"
}
firebase.initializeApp(config)

const messaging = firebase.messaging()

// messaging.setBackgroundMessageHandler(payload => {
//   const title = payload.notification.title
//   console.log("payload", payload.notification.icon)
//   const options = {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   }
//   return self.registration.showNotification(title, options)
// })

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  )
  // Customize notification here
  const notificationTitle = "Background Message Title"
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/ic_launcher.png"
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

//Todo https://firebase.google.com/docs/cloud-messaging/js/send-multiple
//onTokenRefresh
