import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { progressCalc } from "../utils"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

const PostTimer = props => {
  const classes = useStyles()
  const timestamp = props.timestamp
  return (
    <Fragment>
      <Typography variant="caption" className={classes.text}>
        {convertTimeStamp(timestamp.toDate())}
      </Typography>
      <CircularProgress
        color="primary"
        variant="static"
        value={progressCalc(timestamp)}
        className={classes.progress}
        size={16}
      />
      <CircularProgress
        color="secondary"
        variant="static"
        value={100}
        className={classes.innerProgress}
        size={16}
      />
    </Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  text: {
    color: "white"
  },
  progress: {
    marginLeft: "5px",
    color: theme.palette.color.main,
    zIndex: 2
  },
  innerProgress: {
    position: "relative",
    marginLeft: "-16px",
    color: theme.palette.gray.main,
    zIndex: 1
  }
}))

const convertTimeStamp = timestamp => {
  var now = new Date(),
    secondsPast = (now.getTime() - timestamp.getTime()) / 1000
  if (secondsPast < 60) {
    return parseInt(secondsPast) + "s"
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + "m"
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + "h"
  }
  if (secondsPast > 86400) {
    const day = timestamp.getDate()
    const month = timestamp
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "")
    const year =
      timestamp.getFullYear() === now.getFullYear()
        ? ""
        : " " + timestamp.getFullYear()
    return day + " " + month + year
  }
}

export default PostTimer
