"use client"

import React, {useEffect, useState} from "react";
import Check from "./icons/Check";
import styled, {css} from "styled-components";
import RequiredLabel from "./RequiredLabel";

const CheckboxWrapper = styled.div<{ $sx?: ReturnType<typeof css> }>`
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    
    label, svg {
        cursor: pointer;
        font-size: 18px;
    }

    &:hover {
        svg path:last-of-type {
            display: block;
        }
    }
    
    input {
        position: absolute;
        bottom: 0;
    }
    
    ${props => props.$sx}
`
/**
 * @typedef {Object} CheckboxProps
 * @property {string} label - The label for the checkbox.
 * @property {string} name - The name for the checkbox.
 * @property {boolean} [isChecked] - Indicates whether the checkbox is checked or not. Default is false.
 * @property {Function} [onChecked] - Callback function triggered when the checkbox is checked or unchecked.
 * @property {boolean} [required] - Indicates whether the checkbox is required or not.
 * @property {Function} [sx] - The styling function for custom styling of the checkbox component.
 * @property {React.Ref} [ref] - The ref object for the checkbox component.
 */
type CheckboxProps = {
  label: string
  name: string
  isChecked?: boolean
  onChecked?: (checked: boolean) => void
  required?: boolean
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>

/**
 * Checkbox component for React.
 *
 * @param {Object} props - The properties of the Checkbox component.
 * @param {React.Ref} ref - The ref for the input element.
 * @returns {React.Element} The rendered Checkbox component.
 */
const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
  const [selected, setSelected] = useState<boolean>(false)

  const {
    label,
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

    <label htmlFor={name}>{label}</label>

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
      required && <RequiredLabel requiredTitle=''/>
    }
  </CheckboxWrapper>
}

export default React.forwardRef(Checkbox)
