import React, { createRef, useState, useEffect } from "react"
import { withStyles } from "@material-ui/styles"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/core/Icon"
import { progressCalc } from "../utils"
import CircularProgress from "@material-ui/core/CircularProgress"

const Camera = props => {
  const { classes } = props
  const inputRef = createRef()
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    if (!props.latestValidPost) {
      setProgressValue(0)
    } else {
      setProgressValue(progressCalc(props.latestValidPost.timestamp))
    }
  }, [props.latestValidPost])

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
        onClick={() => inputRef.current.click()}
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
    backgroundColor: theme.palette.background.main,
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
    margin: "0 auto"
    //borderRadius: "50%",
  },
  hide: { display: "none" }
})

export default withStyles(styles)(Camera)
