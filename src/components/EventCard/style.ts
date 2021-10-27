import styled from 'styled-components'

import { ReactComponent as Bookmark } from '../../assets/svg/bookmark.svg'

interface CardProps {
  bg: string
}

interface FlagProps {
  favorite: string
}

export const Card = styled.div<CardProps>`
  padding: 40px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${({ bg }) => bg});
  background-size: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  height: 400px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Flag = styled(Bookmark)<FlagProps>`
  fill: ${(p) => (p.favorite === 'true' ? 'white' : 'transparent')};
`

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardDay = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #ffffff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Avenir Regular';
    font-size: 48px;
    text-align: center;
    color: #ffffff;
  }
`

export const CardTitle = styled.h2`
  font-family: 'Avenir Bold', sans-serif;
  font-size: 48px;
  line-height: 66px;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }
`
