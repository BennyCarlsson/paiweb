import Compressor from "compressorjs"
import { postValidTimeSeconds } from "./settingsConfig"

export const convertTimeStamp = timestamp => {
  var now = new Date(),
    secondsPast = (now.getTime() - timestamp.getTime()) / 1000
  if (secondsPast < 60) {
    return parseInt(secondsPast) + "s"
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + "m"
  }
  if (secondsPast <= 172800) {
    return parseInt(secondsPast / 3600) + "h"
  }
  if (secondsPast > 86400) {
    return "< 2 days"
  }
}

export const progressCalc = timestamp => {
  return (
    100 -
    ((new Date().getTime() / 1000 - timestamp.seconds) / postValidTimeSeconds) *
      100
  )
}

export const changeImageName = file => {
  return Date.now() + file.name.substr(file.name.lastIndexOf("."))
}

export const compressImage = (file, callback) => {
  if (!file) {
    return
  }

  new Compressor(file, {
    quality: 0.5,
    width: 512,
    success(result) {
      callback(result)
    },
    error(err) {
      console.log(err.message)
    }
  })
}
