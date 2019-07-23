import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { progressCalc, convertTimeStamp } from "../utils"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

const PostTimer = props => {
  const classes = useStyles()
  const timestamp = props.timestamp
  return (
    <Fragment>
      <Typography variant="caption">
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
        variant="static"
        value={100}
        className={classes.innerProgress}
        size={16}
      />
    </Fragment>
  )
}

const useStyles = makeStyles(theme => ({
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

export default PostTimer
