export const recFrame = (width: string, height: string) => {
  return {
    width,
    height,
    overflow: "hidden",
    position: "relative",
    border: "solid 6px #b49b5a",
  }
}

export const recImage: {} = {
  width: "100%",
  height: "100%",
  position: "relative",
  objectFit: "cover",
  top: 0,
  left: 0,
}
