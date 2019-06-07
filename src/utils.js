import Compressor from "compressorjs"

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
