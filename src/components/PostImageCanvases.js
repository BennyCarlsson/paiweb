import React, { useRef, useEffect, useCallback } from "react"
import { makeStyles } from "@material-ui/styles"

const PostImageCanvases = props => {
  const { canvasDrawings, imageWrapperRef } = props
  let canvasRef = useRef()
  const classes = useStyles()
  let lastX = useRef()
  let lastY = useRef()

  const draw = useCallback((x, y) => {
    let context = canvasRef.current.getContext("2d")
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 3
    context.lineJoin = "round"
    context.moveTo(lastX.current, lastY.current)
    context.lineTo(x, y)
    context.stroke()
    context.closePath()
    lastX.current = x
    lastY.current = y
  }, [])

  const resetLastPosition = useCallback(() => {
    lastX.current = undefined
    lastY.current = undefined
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const drawCanvasDrawing = () => {
        if (canvasDrawings && canvasRef.current) {
          resetLastPosition()
          let context = canvasRef.current.getContext("2d")
          context.clearRect(0, 0, canvasRef.width, canvasRef.height)
          for (const key in canvasDrawings) {
            canvasDrawings[key].forEach(data => {
              if (data === "up") {
                resetLastPosition()
              } else {
                draw(data.x, data.y)
              }
            })
          }
        }
      }
      resize()
      drawCanvasDrawing()
    })
    resizeObserver.observe(imageWrapperRef.current)
  }, [imageWrapperRef, draw, canvasDrawings, resetLastPosition])

  const resize = () => {
    if (canvasRef.current) {
      canvasRef.current.style.width = "100%"
      canvasRef.current.style.height = "100%"
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight
    }
  }

  return <canvas className={classes.canvas} ref={canvasRef} />
}

const useStyles = makeStyles(theme => ({
  canvas: {
    position: "absolute",
    top: "0px",
    left: "0",
    backgroundColor: "#ffffff00"
  }
}))

export default PostImageCanvases
