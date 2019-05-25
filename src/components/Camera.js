import React, { createRef, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"

const Camera = props => {
  const inputRef = createRef()
  const [state, setState] = useState({ file: {}, imagePreviewUrl: "" })

  const handleFile = event => {
    // let reader = new FileReader()
    // let file = event.target.files[0]

    // reader.onloadend = () => {
    //   setState({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   })
    // }

    // reader.readAsDataURL(file)
    setState({ imagePreviewUrl: URL.createObjectURL(event.target.files[0]) })
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
        src={state.imagePreviewUrl}
        alt="preview"
      />
      <p>asd</p>
    </div>
  )
}

export default Camera
