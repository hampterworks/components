"use client"

import styled, {css} from "styled-components";
import React, {useEffect, useState} from "react";
import RequiredLabel from "./RequiredLabel";

const ElementWrapper = styled.div<{ $sx?: ReturnType<typeof css> }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    ${props => props.$sx}
`

const InputWrapper = styled.div<
  {
    $iconLeft: boolean,
    $iconRight: boolean,
    $isInvalid: boolean
  }>
  `
      --text-padding: 28px;
      --input-height: 37px;
      position: relative;

      input {
          height: var(--input-height);
          width: 100%;
          background: white;
          color: black;
          border: 1px solid gray;
          border-radius: 4px;

          ${props => {
              if (!props.$iconLeft && !props.$iconRight) {
                  return css`padding: 8px;`
              }
              if (!props.$iconLeft && props.$iconRight) {
                  return css`padding: 8px var(--text-padding) 8px 8px;`
              }
              if (props.$iconLeft && !props.$iconRight) {
                  return css`padding: 8px 8px 8px var(--text-padding);`
              }

              return css`padding: 8px var(--text-padding);`
          }}
          &:focus:invalid {
              border: 3px solid red;
          }

          ${props => props.$isInvalid && css`border: 3px solid red;`}
      }
  `

const IconCommon = styled.div`
    --icon-size: 18px;
    --icon-padding: 8px;

    position: absolute;
    height: var(--icon-size);
    max-width: var(--icon-size);
    top: calc(50% - (var(--icon-size) / 2));

    svg {
        height: var(--icon-size);
    }

    button {
        position: absolute;
        height: var(--input-height);
    }
`

const IconLeft = styled(IconCommon)`
    left: var(--icon-padding);

    button {
        top: -10px;
        left: -16px;
    }
`

const IconRight = styled(IconCommon)`
    right: var(--icon-padding);

    button {
        top: -10px;
        right: -16px;
    }
`
/**
 * Represents the properties for the Input component.
 *
 * @typedef {Object} InputProps
 *
 * @property {string} [label] - The label for the input.
 * @property {React.ReactNode} [iconLeft] - The icon to be displayed on the left side of the input.
 * @property {React.ReactNode} [iconRight] - The icon to be displayed on the right side of the input.
 * @property {React.ReactNode} [requiredTitle] - The required title to be displayed for the input.
 * @property {boolean} [isInvalid] - Specifies if the input is in an invalid state.
 * @property {ReturnType<typeof css>} [sx] - The custom styling for the input.
 * @property {React.ComponentPropsWithRef<'input'>} - The additional properties for the input element.
 */
type InputProps = {
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode,
  requiredTitle?: React.ReactNode
  isInvalid?: boolean
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>

/**
 * React forward ref render function for an input component.
 *
 * @param {object} props - The input component props.
 * @param {string} props.id - The input element ID.
 * @param {string} [props.type='text'] - The input element type.
 * @param {string} props.value - The input element value.
 * @param {function} props.onChange - The callback function for when the input value changes.
 * @param {function} props.onFocus - The callback function for when the input element gets focus.
 * @param {function} props.onBlur - The callback function for when the input element loses focus.
 * @param {string} props.label - The label for the input element.
 * @param {ReactNode} props.iconLeft - The icon to display on the left side of the input element.
 * @param {ReactNode} props.iconRight - The icon to display on the right side of the input element.
 * @param {object} props.sx - The custom styles for the input wrapper.
 * @param {boolean} props.required - Indicates if the input is required.
 * @param {string} props.requiredTitle - The title for the required label.
 * @param {boolean} props.isInvalid - Indicates if the input is invalid.
 *
 * @returns {JSX.Element} - The rendered input component.
 */
const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
  const {
    id,
    type,
    value,
    onChange,
    onFocus,
    onBlur,
    label,
    iconLeft,
    iconRight,
    sx,
    required,
    requiredTitle,
    isInvalid,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    if (value !== undefined)
      setInputValue(value)
  }, [value])

  return <ElementWrapper $sx={sx}>
    {
      label !== undefined &&
      <label htmlFor={id}>{label}</label>
    }
    <InputWrapper
      $iconLeft={iconLeft !== undefined}
      $iconRight={iconRight !== undefined}
      $isInvalid={isInvalid ?? false}
    >
      {
        props.iconLeft !== undefined && <IconLeft>
          {props.iconLeft}
        </IconLeft>
      }
      <input
        ref={ref}
        id={id}
        type={type || 'text'}
        value={inputValue ?? ''}
        onChange={onChange ?? ((event) => setInputValue(event.target.value))}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        {...restProps}
      />
      {
        props.iconRight !== undefined && <IconRight>
          {props.iconRight}
        </IconRight>
      }
    </InputWrapper>
    {
      required && <RequiredLabel requiredTitle={requiredTitle}/>
    }
  </ElementWrapper>
}


export default React.forwardRef(Input)
