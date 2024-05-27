"use client"

import React, {useEffect, useState} from "react";
import Check from "./icons/Check";
import styled, {css} from "styled-components";
import RequiredLabel from "./RequiredLabel";

const CheckboxWrapper = styled.div<{ $sx?: ReturnType<typeof css> }>`
    display: flex;
    align-items: center;
    gap: 4px;

    label, svg {
        cursor: pointer;
        font-size: 18px;
    }

    &:hover {
        svg path:last-of-type {
            display: block;
        }
    }
    
    ${props => props.$sx}
`

type CheckboxProps = {
  title: string
  name: string
  isChecked?: boolean
  onChecked?: (checked: boolean) => void
  required?: boolean
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>

const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
  const [selected, setSelected] = useState<boolean>(false)

  const {
    title,
    name,
    isChecked,
    onChecked,
    required,
    sx,
    ...restProps
  } = props

  useEffect(() => {
    if (isChecked !== undefined)
      setSelected(isChecked)
  }, [isChecked])

  return <CheckboxWrapper $sx={sx}>
    <Check
      isToggled={selected}
      onClick={() => {
        setSelected(!selected)
        if (onChecked !== undefined)
          onChecked(!selected)
      }}/>

    <label htmlFor={name}>{title}</label>

    <input
      ref={ref}
      name={name}
      id={name}
      type="checkbox"
      checked={selected}
      required={required}
      onChange={() => {
        setSelected(!selected)
        if (onChecked !== undefined)
          onChecked(!selected)
      }}
      {...restProps}
    />
    {
      required && <RequiredLabel requiredTitle={<span>*</span>}/>
    }
  </CheckboxWrapper>
}

export default React.forwardRef(Checkbox)
