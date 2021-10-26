import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1440px;
  padding: 100px 80px 100px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  display: grid;
  grid-row-gap: 40px;
  grid-template-rows: repeat(3, max-content);
`

export const SelectsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 20px;
`

export const Heading = styled.h1`
  font-family: 'Avenir Bold', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 66px;
  color: #2e282c;
`
