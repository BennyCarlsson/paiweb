import Compressor from "compressorjs"
import { postValidTimeSeconds } from "./settingsConfig"

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
    quality: 0.6,
    success(result) {
      callback(result)
    },
    error(err) {
      console.log(err.message)
    }
  })
}
