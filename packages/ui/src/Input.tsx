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

type InputProps = {
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode,
  requiredTitle?: React.ReactNode
  isInvalid?: boolean
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>

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
