import React from 'react'
import styled from 'styled-components'

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

export default (props) => (
  <Container>
    <Item>
      <svg height="200">
        <rect width="300" height="100" />
      </svg>
    </Item>
    <Item>item 1</Item>
    <Item>item 1</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Item>item 3</Item>
    <Item>item 4</Item>
    <Item>item 5</Item>
    <Item>item 6</Item>
  </Container>
)