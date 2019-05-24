import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

const CustomSideDrawer = props => {
  const { open, toggleDrawer } = props
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
        <div className="drawerList">SideDrawer</div>
      </div>
    </SwipeableDrawer>
  )
}

export default CustomSideDrawer
