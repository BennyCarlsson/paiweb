import React from "react"
import { useSelector } from "react-redux"
import firebase from "../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Typography from "@material-ui/core/Typography"

const LoginPage = (props) => {
  const triedToAuth = useSelector((state) => state.triedLogin)
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
