export const changeImageName = file => {
  return Date.now() + file.name.substr(file.name.lastIndexOf("."))
}
