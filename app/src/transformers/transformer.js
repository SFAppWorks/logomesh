import React from 'react'

const randomSign = () => Math.random() < 0.4
  ? -1
  : 1
const absoluteRandom = (scale) => randomSign() * Math.random() * scale

const rotate = [
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`,
  `rotate(${absoluteRandom(40)}, ${absoluteRandom(120)}, ${absoluteRandom(20)})`
]

const scale = [
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`,
  `scale(${absoluteRandom(2)} ${absoluteRandom(2)})`
]

class Transformer extends React.Component {

  render() {
    return (
      <>
        {React.Children.toArray(this.props.children).map((child) => {
          return React.cloneElement(child, {
            transform: `
              ${rotate[Math.floor(Math.random() * rotate.length)]}
              ${scale[Math.floor(Math.random() * scale.length)]}
            `
          })
        })}
      </>
    )
  }

}

export default Transformer