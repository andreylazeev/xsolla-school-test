import React from 'react'
import * as S from './style'

interface EventCardProps {
  date: string
  name: string
  isFavorite: boolean
  image: string
}

export const EventCard: React.FC<EventCardProps> = ({ date, name, isFavorite, image }) => {
  return (
    <S.Card bg={image}>
      <p>{date}</p>
    </S.Card>
  )
}
