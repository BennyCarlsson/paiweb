import React, { useEffect, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getImagesRef, getImageUrlOnRef } from "../firebase/dbFunctions"
import FeedImage from "./FeedImage"

const Feed = props => {
  const [imagesRefs, setImagesRefs] = useState([])

  const getFeedImages = () => {
    getImagesRef().then(imagesRefs =>
      getImageUrlOnRef(setImagesRefs(imagesRefs))
    )
  }

  useEffect(() => getFeedImages(), [])

  const renderImages = () => {
    return imagesRefs.map((imageRef, i) => (
      <FeedImage key={"FeedImage" + i} imageRef={imageRef} />
    ))
  }
  return (
    <div>
      <ExifOrientationImg
        styles={"image-orientation: from-image"}
        width="100%"
        height="auto"
        src={props.imagePreviewUrl}
        alt="preview"
      />
      {renderImages()}
    </div>
  )
}

export default Feed
