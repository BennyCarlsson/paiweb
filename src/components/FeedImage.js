import React, { useState, useEffect } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getImageUrlOnRef } from "../firebase/dbFunctions.js"

const FeedImage = props => {
  const [imageUrl, setImageUrl] = useState("")
  useEffect(() => getImageUrl(props.imageRef), [props.imageRef])

  const getImageUrl = imageRef => {
    getImageUrlOnRef(imageRef.path).then(url => setImageUrl(url))
  }

  return (
    <ExifOrientationImg
      styles={"image-orientation: from-image"}
      width="100%"
      height="auto"
      src={imageUrl}
      alt="image post"
    />
  )
}

export default FeedImage
