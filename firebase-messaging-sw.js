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
    icon: payload.data.icon,
    badge: payload.data.badge
  }
  return self.registration.showNotification(title, options)
})

self.addEventListener("notificationclick", function(event) {
  //For root applications: just change "'./'" to "'/'"
  //Very important having the last forward slash on "new URL('./', location)..."
  const rootUrl = new URL("./", location).href
  event.notification.close()
  event.waitUntil(
    clients.matchAll().then(matchedClients => {
      for (let client of matchedClients) {
        if (client.url.indexOf(rootUrl) >= 0) {
          return client.focus()
        }
      }

      return clients.openWindow(rootUrl).then(function(client) {
        client.focus()
      })
    })
  )
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
