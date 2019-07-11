import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { postValidTime } from "../settingsConfig"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  progress: {
    marginLeft: "5px"
  }
}))

const PostTimer = props => {
  const classes = useStyles()
  const timestamp = props.timestamp.toDate()
  return (
    <Fragment>
      <Typography variant="caption">{convertTimeStamp(timestamp)}</Typography>
      <CircularProgress
        color="secondary"
        variant="static"
        value={progressCalc(timestamp)}
        className={classes.progress}
        size={16}
      />
    </Fragment>
  )
}

const progressCalc = timestamp => {
  return 100 - ((new Date() - timestamp) / postValidTime) * 1000000
}

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
