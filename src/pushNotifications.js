export function initializePush(messaging) {
  return messaging.requestPermission().then(() => {
    return messaging.getToken()
  })
}
