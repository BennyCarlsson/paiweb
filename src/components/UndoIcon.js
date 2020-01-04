import React, { Fragment } from "react"
import Icon from "@material-ui/core/Icon"
import { makeStyles } from "@material-ui/styles"

const UndoIcon = props => {
  const { undo, drawEnabled } = props
  const classes = useStyles()
  return (
    <Fragment>
      {drawEnabled ? (
        <Icon
          fontSize="large"
          className={classes.icon}
          onClick={undo}
          color={"secondary"}
        >
          undo
        </Icon>
      ) : (
        ""
      )}
    </Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    position: "absolute",
    bottom: "-16px",
    right: "50px"
  }
}))

export default UndoIcon
