"use client"

import * as React from "react";
import styled from "styled-components";
import type {css} from "styled-components";

const StyledButton = styled.button<{
  $sx?: ReturnType<typeof css>,
  size?: 'small' | 'medium' | 'large'
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 8px;
    background: blue;
    padding: 16px;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
        background: darkblue;
    }
    
   ${props => {
  if (props.$sx === undefined) {
    switch (props.size) {
      case 'small':
        return 'width: 150px;'
      case 'medium':
        return 'width: 200px;'
      case 'large':
        return 'width: 300px;'
      default:
        return 'align-self: flex-start;'
    }
  }
}}
    ${props => props.$sx}
`

type ButtonProps = ({
  label: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactElement
  iconDirection?: 'left' | 'right'
  iconButton?: false
  sx?: ReturnType<typeof css>
} | {
  label?: never
  size?: never
  icon: React.ReactElement
  iconDirection?: never
  iconButton: true
  sx?: ReturnType<typeof css>
}) & React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<ButtonProps> = ({label, size, icon, iconDirection, iconButton, sx, ...props}) => {
  const direction = iconDirection === undefined || iconDirection === 'left' ? 'left' : 'right'

  return <StyledButton type={props.type ?? 'button'} $sx={sx} size={size} {...props}>
    {(icon !== undefined && direction === 'left') && icon}
    {label !== undefined && label}
    {(icon !== undefined && direction === 'right') && icon}
  </StyledButton>
}

export default Button
