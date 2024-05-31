"use client"

import React, {useEffect, useState} from "react";
import Target from "./icons/Target";
import styled from "styled-components";
import RequiredLabel from "./RequiredLabel";

const RadioWrapper = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    legend {
        display: flex;
        gap: 4px;
        margin-bottom: 8px;
    }
`
const RadioItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    label, svg {
        cursor: pointer;
        
    }
    
    &:hover {
        svg circle {
            display: block;
        }
    }
`
type SelectItem = {
  value: string
  title: string
}

type RadioProps = {
  label?: string
  name: string
  required?: boolean
  selectedItem?: string
  onSelected?: (value: string) => void
  options: SelectItem[]
} & React.ComponentPropsWithRef<'input'>

const Radio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (props, ref) => {
  const [selected, setSelected] = useState<string | undefined>()

  const {
    name,
    label,
    options,
    required,
    selectedItem,
    onSelected,
    ...restProps
  } = props

  useEffect(() => {
    if (selectedItem !== undefined)
      setSelected(selectedItem)
  }, [selectedItem])

  return <RadioWrapper>
    <legend>
      {label}
      {
        required && label !== undefined && <RequiredLabel requiredTitle=''/>
      }
    </legend>

    {
      options.map((option) => <RadioItem key={option.value} >
        <Target
          isToggled={selected === option.value}
          onClick={() => {
            setSelected(option.value)
            if (onSelected !== undefined) {
              onSelected(option.value)
            }
          }}
        />
        <label htmlFor={option.value}>{option.title}</label>
        <input
          value={option.value}
          ref={ref}
          checked={selected === option.value}
          required={required}
          name={name}
          id={option.value}
          type="radio"
          onChange={() => {
            setSelected(option.value)
            if (onSelected !== undefined) {
              onSelected(option.value)
            }
          }}
          {...restProps}
        />
      </RadioItem>)
    }
  </RadioWrapper>
}

export default React.forwardRef(Radio)
