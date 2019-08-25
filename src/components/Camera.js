import React, { createRef, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { withStyles } from "@material-ui/styles"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/core/Icon"
import { progressCalc } from "../utils"
import CircularProgress from "@material-ui/core/CircularProgress"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"

const Camera = props => {
  const { classes } = props
  const inputRef = createRef()
  const [progressValue, setProgressValue] = useState(0)
  const [openSnackbar, setOpenSnackbar] = React.useState(false)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (!props.latestValidPost) {
      setProgressValue(0)
    } else {
      setProgressValue(progressCalc(props.latestValidPost.timestamp.toDate()))
    }
  }, [props.latestValidPost])

  const handleCameraClick = () => {
    if (!user.authenticated) {
      setOpenSnackbar(true)
    } else {
      inputRef.current.click()
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <div>
      <span className={classes.hide}>
        <input
          type="file"
          accept="image/*"
          capture
          onChange={e => props.handleFile(e)}
          ref={inputRef}
        />
      </span>
      <Fab
        aria-label="Add"
        className={classes.fabButton}
        size="large"
        onClick={handleCameraClick}
      >
        <Icon>photo_camera</Icon>
      </Fab>
      <CircularProgress
        size={66}
        variant={props.showUploadLoader ? "indeterminate" : "static"}
        value={progressValue}
        className={classes.fabProgress}
      />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        message={<span id="message-id">Login to post pictures</span>}
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleClose}
        action={
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
        }
      />
    </div>
  )
}

const styles = theme => ({
  fabButton: {
    position: "absolute",
    zIndex: 2,
    top: "-29px",
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  fabProgress: {
    position: "absolute",
    zIndex: 1,
    top: -34,
    left: 0,
    right: 0,
    margin: "0 auto",
    color: theme.palette.color.main
  },
  hide: { display: "none" }
})

export default withStyles(styles)(Camera)
