import React, { createRef, useState, useEffect, useContext } from "react"
import { AuthContext } from "../AuthContext"
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

  const context = useContext(AuthContext)

  useEffect(() => {
    if (!props.latestValidPost) {
      setProgressValue(0)
    } else {
      setProgressValue(progressCalc(props.latestValidPost.timestamp))
    }
  }, [props.latestValidPost])

  const handleCameraClick = () => {
    if (!context.authenticated) {
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
        color="secondary"
        aria-label="Add"
        className={classes.fabButton}
        size="large"
        onClick={handleCameraClick}
      >
        <Icon>photo_camera</Icon>
      </Fab>
      <div className={classes.progressWrapper}>
        <CircularProgress
          size={66}
          variant="static"
          value={progressValue}
          className={classes.fabProgress}
        />
      </div>
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
  progressWrapper: {
    backgroundColor: theme.palette.gray.main,
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "64px",
    height: "32px",
    borderBottomLeftRadius: "128px",
    borderBottomRightRadius: "128px"
  },
  fabProgress: {
    position: "absolute",
    zIndex: 1,
    top: -34,
    left: "-1px",
    right: 0,
    margin: "0 auto",
    color: theme.palette.color.main
  },
  hide: { display: "none" }
})

export default withStyles(styles)(Camera)