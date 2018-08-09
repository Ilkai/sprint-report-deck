import React from 'react'
import styled from 'styled-components';

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10vh 10vw
`

export default ({ children }) =>
  <Cover>
    {children}
  </Cover>