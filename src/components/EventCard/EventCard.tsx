import React from 'react'
import * as S from './style'

interface EventCardProps {
  id: string
  date: string
  name: string
  isFavorite: boolean
  image: string
  onFavorite: (id: string) => void
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  date,
  name,
  isFavorite,
  image,
  onFavorite
}) => {
  const handleFavorite = (id: string) => {
    onFavorite(id)
  }

  return (
    <S.Card bg={image}>
      <S.CardHeading>
        <S.CardDay>
          <p>{date.split('.')[0]}</p>
        </S.CardDay>
        <S.Flag favorite={isFavorite.toString()} onClick={() => handleFavorite(id)} />
      </S.CardHeading>
      <S.CardTitle>{name}</S.CardTitle>
    </S.Card>
  )
}
