import React from "react"
import { withStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import Icon from "@material-ui/core/Icon"

const styles = {
  root: {
    width: 500
  }
}

class CustomBottomNavigation extends React.Component {
  state = {
    value: "recents"
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className="bottomNavigationWrapper">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<Icon>home</Icon>}
          />
          <BottomNavigationAction
            label="Camera"
            value="Camera"
            icon={<Icon>photo_camera</Icon>}
          />
          <BottomNavigationAction
            label="Nearby"
            value="Nearby"
            icon={<Icon>location_on</Icon>}
          />
        </BottomNavigation>
      </div>
    )
  }
}

export default withStyles(styles)(CustomBottomNavigation)
