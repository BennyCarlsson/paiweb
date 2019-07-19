import React, { useEffect, useState } from "react"
import firebase from "../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const LoginPage = props => {
  const [triedToAuth, setTriedToAuth] = useState(false)

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  }

  useEffect(() => {
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      props.setAuthContext({
        authenticated: !!user,
        user: user
      })
      if (!user) {
        setTriedToAuth(true)
      }
    })
    return () => {
      unregisterAuthObserver()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {triedToAuth ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <p style={{ textAlign: "center" }}>loading</p>
      )}
    </div>
  )
}

export default LoginPage