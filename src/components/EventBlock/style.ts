import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 100px 80px 100px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  height: 100%;
  display: grid;
  grid-row-gap: 40px;

  @media screen and (max-width: 992px) {
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
  }
`

export const SelectCheck = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 10px;
  align-items: center;
`

export const SelectsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 20px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const Heading = styled.h1`
  font-family: 'Avenir Bold', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 66px;
  color: #2e282c;

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`

export const EventCards = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 100%;
  }
`
