import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import Icon from "@material-ui/core/Icon"

const NoAccessToFeed = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div />
      <span>
        <Typography align="center" variant="h4" color="textSecondary">
          Tell friends what you are doing.
          <br /> Post a picture.
        </Typography>
      </span>
      <Icon color="disabled" className={classes.icon} fontSize="large">
        arrow_downward
      </Icon>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px",
    height: "78vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center"
  },
  "@keyframes arrowAnimation": {
    from: { transform: `translateY(0)` },
    to: { transform: `translateY(30px)` }
  },
  icon: {
    position: "relative",
    fontSize: "65px",
    animation: "$arrowAnimation 2s infinite alternate"
  }
}))

export default NoAccessToFeed
