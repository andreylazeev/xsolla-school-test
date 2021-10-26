import React from 'react'
import { EventBlock } from './components/EventBlock/EventBlock'
import styled from 'styled-components'

const Container = styled.div`
  padding: 80px;
`

const App: React.FC = () => {
  return (
    <Container>
      <EventBlock />
    </Container>
  )
}

export default App
