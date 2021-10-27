import React, { useState } from 'react'
import { OptionsItems } from '../../interfaces'
import * as S from './style'

interface SelectFieldProps {
  title: string
  options: OptionsItems[]
  onChangeSelect: (value: string) => void
}

export const SelectField: React.FC<SelectFieldProps> = ({ title, options, onChangeSelect }) => {
  const [currentOption, setCurrentOption] = useState<string>('')

  const HandleSelect = (event: React.ChangeEvent<{ value: string }>) => {
    onChangeSelect(event.target.value)
    setCurrentOption(event.target.value)
  }

  return (
    <S.Select>
      <S.Title>{title}</S.Title>
      <select value={currentOption} onChange={HandleSelect}>
        <option value=''>Not selected</option>
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
