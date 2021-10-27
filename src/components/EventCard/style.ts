import styled from 'styled-components'

interface CardProps {
  bg: string
}

export const Card = styled.div<CardProps>`
  padding: 40px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${({ bg }) => bg});
  background-size: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  height: 400px;
  border-radius: 6px;
`
