import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Avatar } from "@material-ui/core"
import PostTimer from "./PostTimer"
import Icon from "@material-ui/core/Icon"

const LoadingPost = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.postWrapper}>
        <div className={classes.avatarTimeDiv}>
          <Avatar className={classes.avatar} alt="Post Avatar" />
          <PostTimer timestamp={"..."} variant={"indeterminate"} />
        </div>
        <Icon fontSize="large" className={classes.icon} color={"disabled"}>
          brush
        </Icon>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    scrollSnapAlign: "start",
    padding: "0px",
    paddingBottom: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  postWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "450px",
    height: "75vh",
  },
  avatar: {
    border: "2px solid #fafafa",
    marginRight: "8px",
  },
  avatarTimeDiv: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    padding: "8px",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    bottom: "-16px",
    right: "8px",
  },
}))

export default LoadingPost
