import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Items, OptionsItems } from '../../interfaces'
import { EventCard } from '../EventCard/EventCard'
import { SelectField } from '../SelectField/SelectField'
import * as S from './style'

const allMonths: OptionsItems[] = [
  { title: 'January', value: '01' },
  { title: 'February', value: '02' },
  { title: 'March', value: '03' },
  { title: 'April', value: '04' },
  { title: 'May', value: '05' },
  { title: 'June', value: '06' },
  { title: 'July', value: '07' },
  { title: 'August', value: '08' },
  { title: 'September', value: '09' },
  { title: 'October', value: '10' },
  { title: 'November', value: '11' },
  { title: 'December', value: '12' }
]

export const EventBlock: React.FC = () => {
  const [items, setItems] = useState<Items[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [filteredItems, setFiltertdItems] = useState<Items[]>([])
  const [cities, setCities] = useState<OptionsItems[]>([])
  const [currentCity, setCurrentCity] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState<string>('')
  const [months, setMonths] = useState<OptionsItems[]>([])
  const [showFavorites, setShowFavorites] = useState<boolean>(false)

  const handleCity = (value: string) => {
    setCurrentCity(value)
  }
  const handleMonth = (value: string) => {
    setCurrentMonth(value)
  }

  const handleFavorite = (id: string) => {
    if (favorites.some((el) => el === id)) {
      setFavorites((prev) => prev.filter((item) => item !== id))
    } else {
      setFavorites((prev) => [...prev, id])
    }
  }

  //set favorites to localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // fetch data and setState
  useEffect(() => {
    axios
      .get<Items[]>(
        'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json'
      )
      .then(({ data }) => {
        setItems(data.map((item) => ({ ...item })))
      })
  }, [])

  // set options for "city" select
  useEffect(() => {
    const uniqueArray: string[] = Array.from(new Set(items.map((item) => item.city)))
    setCities(uniqueArray.map((item) => ({ title: item, value: item })))
  }, [items])

  // apply filters
  useEffect(() => {
    setFiltertdItems(
      items.filter(
        (item) =>
          item.city === (currentCity !== '' ? currentCity : item.city) &&
          item.date.split('.')[1] ===
            (currentMonth !== '' ? currentMonth : item.date.split('.')[1]) &&
          item.id === (!showFavorites ? item.id : favorites.find((el) => el === item.id))
      )
    )
  }, [items, currentCity, currentMonth, showFavorites, favorites])

  // set options for "month" select
  useEffect(() => {
    const uniqueArray: string[] = Array.from(new Set(items.map((item) => item.date.split('.')[1])))
    const monthsArray: OptionsItems[] = []
    uniqueArray.sort().forEach((item) => {
      const value = Object.assign(
        {},
        allMonths.find((month) => month.value === item)
      )
      monthsArray.push(value)
    })

    setMonths(monthsArray)
  }, [items])

  return (
    <S.Wrapper>
      <S.Heading>Event Listing</S.Heading>
      <S.SelectsBlock>
        {cities && <SelectField title='City:' options={cities} onChangeSelect={handleCity} />}
        <SelectField title='Month:' options={months} onChangeSelect={handleMonth} />
        <S.SelectCheck>
          <input
            type='checkbox'
            id='fav-show'
            checked={showFavorites}
            onChange={(e) => setShowFavorites(e.target.checked)}
          />
          <label htmlFor='fav-show'>Show favorites only</label>
        </S.SelectCheck>
      </S.SelectsBlock>
      <S.EventCards>
        {filteredItems &&
          filteredItems.map((item) => (
            <EventCard
              {...item}
              key={item.id}
              onFavorite={handleFavorite}
              isFavorite={favorites.find((e) => e === item.id) === item.id}
            />
          ))}
        {filteredItems.length === 0 && <p>No data to display</p>}
      </S.EventCards>
    </S.Wrapper>
  )
}
