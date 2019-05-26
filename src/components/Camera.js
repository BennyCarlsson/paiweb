import React, { createRef } from "react"
import { withStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Icon from "@material-ui/core/Icon"

const Camera = props => {
  const { classes } = props
  const inputRef = createRef()

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
        onClick={() => inputRef.current.click()}
      >
        <Icon>photo_camera</Icon>
      </Fab>
    </div>
  )
}

const styles = theme => ({
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  hide: { display: "none" }
})

export default withStyles(styles)(Camera)
