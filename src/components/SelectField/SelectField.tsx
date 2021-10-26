import React, { useEffect } from 'react'
import { OptionsItems } from '../../interfaces'
import * as S from './style'

interface SelectFieldProps {
  title: string
  options: OptionsItems[]
}

export const SelectField: React.FC<SelectFieldProps> = ({ title, options }) => {
  return (
    <S.Select>
      <S.Title>{title}</S.Title>
      <select value={options.length !== 0 ? options[0].value : ''}>
        {options.length !== 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
      </select>
    </S.Select>
  )
}
