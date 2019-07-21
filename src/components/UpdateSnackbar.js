import React from "react"
import Snackbar from "@material-ui/core/Snackbar"

function UpdateSnackbar(props) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={props.showUpdateSnackBar}
        onClose={props.handleCloseSnackBar}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">New Update! Restart the app</span>}
      />
    </div>
  )
}

export default UpdateSnackbar
