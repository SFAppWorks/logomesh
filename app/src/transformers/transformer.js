import React from 'react'

const containerSize = [146, 200]
const objectSize = [80, 30]

const randomSign = () => Math.random() < 0.4
  ? -1
  : 1
const absoluteRandom = (scale) => randomSign() * Math.random() * scale

const Transformer = (props) => {
  return (
    <>
      {React.Children.toArray(props.children).map((child) => {
        const [containerX, containerY] = containerSize
        const [objectX, objectY] = objectSize
        const scaleTransformer = absoluteRandom(2)
        const realX = scaleTransformer * objectX
        const realY = scaleTransformer * objectY

        return React.cloneElement(child, {
          transform: `
            translate(${containerX / 2 - realX / 2}, ${containerY / 2 - realY / 2})
            scale(${scaleTransformer})
            rotate(${absoluteRandom(360)}, ${objectX / 2}, ${objectY / 2})
          `
        })
      })}
    </>
  )
}

export default Transformer