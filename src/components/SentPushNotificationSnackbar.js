import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import Slide from "@material-ui/core/Slide"

function TransitionLeft(props) {
  return <Slide {...props} direction="right" />
}
const SentPushNotificationSnackBar = props => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        autoHideDuration={1300}
        open={props.showSnackBar}
        onClose={props.handleCloseSnackBar}
        TransitionComponent={TransitionLeft}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Sent Push Notification</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClose={props.handleCloseSnackBar}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    </div>
  )
}

export default SentPushNotificationSnackBar
