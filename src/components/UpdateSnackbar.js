import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

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
