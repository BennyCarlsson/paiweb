import React, { createRef, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"

const Camera = props => {
  const inputRef = createRef()
  const [imagePreviewUrl, setimagePreviewUrl] = useState("")

  const handleFile = event => {
    setimagePreviewUrl(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture
        onChange={e => handleFile(e)}
        ref={inputRef}
      />
      <ExifOrientationImg
        styles={"image-orientation: from-image"}
        width="250px"
        height="250px"
        src={imagePreviewUrl}
        alt="preview"
      />
    </div>
  )
}

export default Camera
