import React from 'react'
import styled from 'styled-components'
import Transformer from '../transformers/transformer'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px;
  grid-gap: 20px;
`
const Item = styled.div`
  background: #eee;
  height: 200px;
`
const SVG = styled.svg`
  width: 100%;
  height: 100%;
`

export default props => {
  const target = <rect width="80" height="30" />
  const iterations = Array.from(Array(40))
  return (
    <Container>
      <Item>
        <SVG>{target}</SVG>
      </Item>
      {iterations.map((_, __, i) => (
        <Item key={i}>
          <SVG>
            <Transformer>{target}</Transformer>
          </SVG>
        </Item>
      ))}
    </Container>
  )
}
