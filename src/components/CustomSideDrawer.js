import React from "react"
import { makeStyles } from "@material-ui/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

const CustomSideDrawer = props => {
  const { open, toggleDrawer } = props
  const classes = useStyles()
  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.drawerList}>v.0.1.1</div>
      </div>
    </SwipeableDrawer>
  )
}

const useStyles = makeStyles({
  drawerList: {
    width: "250px"
  }
})

export default CustomSideDrawer
