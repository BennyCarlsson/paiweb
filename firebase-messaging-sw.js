importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js")

let config = {
  messagingSenderId: "560094021764"
}
firebase.initializeApp(config)

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.data.title
  const options = {
    body: payload.data.body,
    icon: payload.data.icon
  }
  return self.registration.showNotification(title, options)
})

// messaging.setBackgroundMessageHandler(function(payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true
//     })
//     .then(windowClients => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i]
//         windowClient.postMessage(payload)
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title")
//     })
//   return promiseChain
// })

//Todo https://firebase.google.com/docs/cloud-messaging/js/send-multiple
//onTokenRefresh
