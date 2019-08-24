import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import { createNewGroup } from "../firebase/dbFunctions"
import { AuthContext } from "../AuthContext"

const CreateGroupButton = () => {
  const context = useContext(AuthContext)
  const onPress = () => {
    if (context.authenticated && context.user) {
      createNewGroup(context.user)
    }
  }

  return (
    <Button color="secondary" onClick={onPress}>
      Create Group <Icon>add</Icon>
    </Button>
  )
}

export default CreateGroupButton
