import React, { useRef, useEffect, useCallback, Fragment } from "react"
import ReactDOM from "react-dom"
import { makeStyles } from "@material-ui/styles"
import { saveCanvasData } from "../firebase/dbFunctions"
import { useSelector } from "react-redux"
import UndoIcon from "./UndoIcon"

const PostImageCanvasDraw = (props) => {
  const classes = useStyles()
  const uid = useSelector((state) => state.user.data.uid)
  const { canvasDrawing, imageWrapperRef, postId, drawEnabled } = props
  let canvasRef = useRef()
  let canvasData = useRef([])
  let pressing = false
  let lastX = useRef()
  let lastY = useRef()

  const draw = useCallback((x, y) => {
    let context = canvasRef.current.getContext("2d")
    canvasData.current.push({ x, y })
    context.beginPath()
    context.strokeStyle = "red"
    context.lineWidth = 4
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
    const resizeObserver = new ResizeObserver((entries) => {
      const drawCanvasDrawing = () => {
        if (canvasDrawing && canvasRef.current) {
          canvasData.current = []
          resetLastPosition()
          let context = canvasRef.current.getContext("2d")
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          )
          canvasDrawing.forEach((data) => {
            if (data === "up") {
              canvasData.current.push("up")
              resetLastPosition()
            } else {
              draw(data.x, data.y)
            }
          })
        } else if (canvasRef.current) {
          canvasData.current = []
          let context = canvasRef.current.getContext("2d")
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          )
        }
      }
      resize()
      drawCanvasDrawing()
    })
    resizeObserver.observe(imageWrapperRef.current)
    return () => {
      try {
        resizeObserver.disconnect()
      } catch (e) {
        console.log("error", e)
      }
    }
  }, [imageWrapperRef, canvasDrawing, draw, resetLastPosition])

  const resize = () => {
    if (canvasRef.current) {
      canvasRef.current.style.width = "100%"
      canvasRef.current.style.height = "100%"
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight
    }
  }

  const getPointerPos = (e) => {
    const rect = ReactDOM.findDOMNode(canvasRef.current).getBoundingClientRect()
    let clientX = e.clientX
    let clientY = e.clientY

    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX
      clientY = e.changedTouches[0].clientY
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }

  const handleTouch = (action, e) => {
    if (drawEnabled) {
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

  const undo = () => {
    if (canvasData.current && canvasData.current.length) {
      let arr = canvasData.current
      const deleteFrom = arr.lastIndexOf("up", arr.length - 2) + 1
      canvasData.current = arr.slice(0, deleteFrom)
      reDraw()
    }
  }

  const reDraw = () => {
    let context = canvasRef.current.getContext("2d")
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    let arr = [...canvasData.current]
    canvasData.current = []
    resetLastPosition()
    arr.forEach((data) => {
      if (data === "up") {
        canvasData.current.push("up")
        resetLastPosition()
      } else {
        draw(data.x, data.y)
      }
    })

    saveCanvasData(canvasData.current, postId, uid)
  }

  const down = (e) => {
    pressing = true
  }

  const move = (e) => {
    e.preventDefault()
    const { x, y } = getPointerPos(e)
    if (canDraw(x, y)) {
      draw(x, y)
    }
  }

  const canDraw = (x, y) => {
    if (pressing && positionMovedFarEnough(x, y)) {
      return true
    }
    return false
  }

  const positionMovedFarEnough = (x, y) => {
    if (!lastY.current || !lastY.current) return true
    if (bigEnoughDiff(x, lastX.current) || bigEnoughDiff(y, lastY.current))
      return true
  }

  const bigEnoughDiff = (n1, n2) => {
    const diffValue = 2
    if (n1 - n2 > diffValue || n2 - n1 > diffValue) {
      return true
    }
    return false
  }

  const up = (e) => {
    if (
      pressing &&
      canvasData.current[canvasData.current.length - 1] !== "up"
    ) {
      canvasData.current.push("up")
      resetLastPosition()
      saveCanvasData(canvasData.current, postId, uid)
    }
    pressing = false
  }

  return (
    <Fragment>
      <canvas
        className={drawEnabled ? classes.touchActionNone : classes.canvas}
        onMouseDown={(e) => handleTouch("down", e)}
        onTouchStart={(e) => handleTouch("down", e)}
        onMouseMove={(e) => handleTouch("move", e)}
        onTouchMove={(e) => handleTouch("move", e)}
        onMouseUp={(e) => handleTouch("up", e)}
        onTouchEnd={(e) => handleTouch("up", e)}
        onMouseOut={(e) => handleTouch("up", e)}
        onTouchCancel={(e) => handleTouch("up", e)}
        ref={canvasRef}
      />
      <UndoIcon undo={undo} drawEnabled={drawEnabled} />
    </Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  canvas: {
    position: "absolute",
    top: "0px",
    left: "0",
    backgroundColor: "#ffffff00",
  },
  touchActionNone: {
    position: "absolute",
    top: "0px",
    left: "0",
    backgroundColor: "#ffffff00",
    touchAction: "none",
  },
}))

export default PostImageCanvasDraw
