import React, { useEffect } from "react"
import firebase from "../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const LoginPage = props => {
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
      props.setAuthContext({ authenticated: !!user, user: user })
    })
    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default LoginPage
