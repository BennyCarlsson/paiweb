import React from "react"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import { createNewGroup } from "../firebase/dbFunctions"
import { useSelector } from "react-redux"

const CreateGroupButton = () => {
  const user = useSelector(state => state.user)
  const onPress = () => {
    if (user.authenticated && user.data) {
      createNewGroup(user.data)
    }
  }

  return (
    <Button color="secondary" onClick={onPress}>
      Create Group <Icon>add</Icon>
    </Button>
  )
}

export default CreateGroupButton
