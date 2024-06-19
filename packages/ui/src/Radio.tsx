"use client"

import React, {useEffect, useState} from "react";
import Target from "./icons/Target";
import styled, {type css} from "styled-components";
import RequiredLabel from "./RequiredLabel";

const RadioWrapper = styled.fieldset<{ $sx?: ReturnType<typeof css> }>`
    display: flex;
    flex-direction: column;
    gap: 8px;

    legend {
        display: flex;
        gap: 4px;
        margin-bottom: 8px;
    }
    
    ${props => props.$sx}
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
/**
 * Represents an item in a select dropdown menu.
 *
 * @typedef {Object} SelectItem
 * @property {string} value - The value of the item.
 * @property {string} title - The title or display text of the item.
 */
type SelectItem = {
  value: string
  title: string
}

/**
 * Represents the properties for the Radio component.
 *
 * @typedef {Object} RadioProps
 *
 * @property {string} name - The name of the radio group.
 * @property {string} [label] - The label for the radio group.
 * @property {boolean} [required] - Whether the radio group is required.
 * @property {string} [selectedItem] - The selected item in the radio group.
 * @property {Function} [onSelected] - The callback function triggered when an item is selected.
 * @param {string} value - The value of the selected item.
 * @property {SelectItem[]} options - The options available for the radio group.
 * @property {Function} [sx] - The styling function to apply custom CSS styles to the radio group.
 * @param {Object} CSSProperties - The CSS properties object.
 * @returns {React.ComponentPropsWithRef<'input'>} - The component props for the input element.
 */
type RadioProps = {
  label?: string
  name: string
  required?: boolean
  selectedItem?: string
  onSelected?: (value: string) => void
  options: SelectItem[]
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>

/**
 * A functional component that represents a radio input with options.
 *
 * @param {RadioProps} props - The props object containing the input configuration.
 * @param {React.Ref<HTMLInputElement>} ref - The ref object for accessing the underlying radio input.
 * @returns {JSX.Element} - The rendered radio input component.
 */
const Radio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (props, ref) => {
  const [selected, setSelected] = useState<string | undefined>()

  const {
    name,
    label,
    options,
    required,
    selectedItem,
    onSelected,
    sx,
    ...restProps
  } = props

  useEffect(() => {
    if (selectedItem !== undefined)
      setSelected(selectedItem)
  }, [selectedItem])

  return <RadioWrapper $sx={sx}>
    <legend>
      {label}
      {
        required && label !== undefined && <RequiredLabel requiredTitle=''/>
      }
    </legend>

    {
      options.map((option) => <RadioItem key={option.value}>
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
