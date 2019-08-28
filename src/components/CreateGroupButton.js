import React, { Fragment } from "react"
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

  //Todo remove uid check
  return (
    <Fragment>
      {user.data.uid === "CtJDRqu7FUf6OReDg8ztcTo1wmv2" ? (
        <Button color="secondary" onClick={onPress}>
          Create Group <Icon>add</Icon>
        </Button>
      ) : (
        ""
      )}
    </Fragment>
  )
}

export default CreateGroupButton
