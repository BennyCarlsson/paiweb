import React, { useEffect, useState } from "react"
import ExifOrientationImg from "react-exif-orientation-img"
import { getAllPosts } from "../firebase/dbFunctions"
import FeedImage from "./FeedImage"

const Feed = props => {
  const [allPosts, setAllPosts] = useState([])

  const getAllFeedImages = () => {
    getAllPosts().then(posts => setAllPosts(posts))
  }

  useEffect(() => getAllFeedImages(), [])

  const renderImages = () => {
    return allPosts.map((post, i) => (
      <FeedImage key={"FeedImage" + i} imageRef={post.imgRef} />
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
