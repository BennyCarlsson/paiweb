import React, { useEffect, useState } from "react"
import firebase from "../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Typography from "@material-ui/core/Typography"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/actions"

const LoginPage = (props) => {
  const [triedToAuth, setTriedToAuth] = useState(false)
  const dispatch = useDispatch()
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  useEffect(() => {
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      dispatch(setUser(user))
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
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
          authenticating
        </Typography>
      )}
    </div>
  )
}

export default LoginPage
