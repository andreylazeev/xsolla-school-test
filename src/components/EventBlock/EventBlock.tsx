import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Items, OptionsItems } from '../../interfaces'
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
  const [cities, setCities] = useState<OptionsItems[]>([])
  const [months, setMonths] = useState<OptionsItems[]>([])

  useEffect(() => {
    axios
      .get<Items[]>(
        'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json'
      )
      .then(({ data }) => {
        setItems(data.map((item) => ({ ...item, isFavorite: false })))
      })
  }, [])

  // set options for "city" select
  useEffect(() => {
    const uniqueArray: string[] = Array.from(new Set(items.map((item) => item.city)))
    setCities(uniqueArray.map((item) => ({ title: item, value: item })))
  }, [items])

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
        {cities && <SelectField title='City:' options={cities} />}
        <SelectField title='Month:' options={months} />
      </S.SelectsBlock>
    </S.Wrapper>
  )
}
