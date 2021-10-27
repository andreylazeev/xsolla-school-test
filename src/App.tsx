import React from 'react'
import { EventBlock } from './components/EventBlock/EventBlock'
import styled from 'styled-components'

const Container = styled.div`
  padding: 80px;
  @media screen and (max-width: 992px) {
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`

const App: React.FC = () => {
  return (
    <Container>
      <EventBlock />
    </Container>
  )
}

export default App
