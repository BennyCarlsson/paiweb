import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import { makeStyles } from "@material-ui/styles"

const FeedImageCanvas = props => {
  const classes = useStyles()
  let canvasRef = useRef()
  let pressing = false
  let lastX
  let lastY
  let context
  let canvasData = []

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      resize()
    })
    resizeObserver.observe(props.imageWrapperRef.current)
  }, [props.imageWrapperRef])

  const resize = () => {
    canvasRef.current.style.width = "100%"
    canvasRef.current.style.height = "100%"
    canvasRef.current.width = canvasRef.current.offsetWidth
    canvasRef.current.height = canvasRef.current.offsetHeight
  }

  let count = 0
  const draw = (x, y, isDown) => {
    context = canvasRef.current.getContext("2d")
    if (isDown && count > 10) {
      //Todo draw every time locally but the filter every 10th for db
      canvasData.push({ x, y })
      console.log(canvasData)
      context.beginPath()
      context.strokeStyle = "red"
      context.lineWidth = 3
      context.lineJoin = "round"
      context.moveTo(lastX, lastY)
      context.lineTo(x, y)
      context.stroke()
      context.closePath()
      lastX = x
      lastY = y
      count = 0
    }
    count++
  }

  const down = e => {
    pressing = true
    const { x, y } = getPointerPos(e)
    draw(x, y, false)
  }

  const move = e => {
    e.preventDefault()
    if (pressing) {
      const { x, y } = getPointerPos(e)
      draw(x, y, true)
    }
  }

  const up = e => {
    //Todo save up down and make new array
    //so that you can delete last step
    //now if you release and start drawing again it draws a line
    pressing = false
  }

  const getPointerPos = e => {
    const rect = ReactDOM.findDOMNode(canvasRef.current).getBoundingClientRect()
    let clientX = e.clientX
    let clientY = e.clientY

    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX
      clientY = e.changedTouches[0].clientY
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    }
  }

  const handleTouch = (action, e) => {
    if (props.drawEnabled) {
      if (action === "down") {
        down(e)
      }
      if (action === "move") {
        move(e)
      }
      if (action === "up") {
        up(e)
      }
    }
  }

  return (
    <canvas
      className={classes.canvas}
      onMouseDown={e => handleTouch("down", e)}
      onTouchStart={e => handleTouch("down", e)}
      onMouseMove={e => handleTouch("move", e)}
      onTouchMove={e => handleTouch("move", e)}
      onMouseUp={e => handleTouch("up", e)}
      onTouchEnd={e => handleTouch("up", e)}
      onMouseOut={e => handleTouch("up", e)}
      onTouchCancel={e => handleTouch("up", e)}
      ref={canvasRef}
    />
  )
}

const useStyles = makeStyles(theme => ({
  canvas: {
    position: "absolute",
    top: "0px",
    left: "0",
    backgroundColor: "#ffffff00",
    touchAction: "none"
  }
}))

export default FeedImageCanvas
