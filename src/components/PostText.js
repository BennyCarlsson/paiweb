import React from "react"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"

const PostText = props => {
  const classes = useStyles()
  return (
    <div className={classes.text}>
      <Typography component="p">{props.text}</Typography>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(3, 2)
  }
}))

export default PostText
