import React from "react"
import ExifOrientationImg from "react-exif-orientation-img"

const Feed = props => {
  return (
    <div>
      <ExifOrientationImg
        styles={"image-orientation: from-image"}
        width="100%"
        height="auto"
        src={props.imagePreviewUrl}
        alt="preview"
      />
    </div>
  )
}

export default Feed
