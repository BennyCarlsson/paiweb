import React from "react"
import Icon from "@material-ui/core/Icon"
import { makeStyles } from "@material-ui/styles"

const DrawIcon = props => {
  const { editDrawEnabled, drawEnabled } = props
  const classes = useStyles()
  return (
    <Icon
      fontSize="large"
      className={classes.icon}
      onClick={editDrawEnabled}
      color={drawEnabled ? "secondary" : "disabled"}
    >
      format_paint
    </Icon>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    position: "absolute",
    bottom: "-16px",
    right: "8px"
  }
}))

export default DrawIcon
