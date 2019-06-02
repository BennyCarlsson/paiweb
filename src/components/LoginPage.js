import React, { useState, useEffect } from "react"
import firebase from "../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const LoginPage = props => {
  const [isSignedIn, setIsSignedIn] = useState(false)

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
      setIsSignedIn(!!user)
      console.log(user)
    })
    return () => {
      unregisterAuthObserver()
    }
  })

  const renderSignInPage = () => {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    )
  }
  const renderIsSignedIn = () => {
    return (
      <div>
        <h1>My App</h1>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    )
  }
  return isSignedIn ? renderIsSignedIn() : renderSignInPage()
}

export default LoginPage
