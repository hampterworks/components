"use client"

import * as React from "react";
import type {css} from "styled-components";
import styled from "styled-components";

const StyledButton = styled.button<{
  $sx?: ReturnType<typeof css>,
  size?: 'small' | 'medium' | 'large',
  $iconButton: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    height: 37px;
    gap: 8px;
    padding: 16px;
    border-radius: 4px;
    color: #0b0b0b;
    cursor: pointer;

    ${props => !props.$iconButton && 'border: 1px solid gray;'}

    &:hover, &:focus {
        background: #e8e8e8;
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
/**
 * Represents the props for the Button component.
 *
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} [label] - The label to be displayed on the button.
 * @property {('small' | 'medium' | 'large')} [size] - The size of the button.
 * @property {React.ReactElement} [icon] - The icon to be displayed on the button.
 * @property {('left' | 'right')} [iconDirection] - The direction of the icon on the button.
 * @property {boolean} [iconButton] - A boolean value indicating whether the button should be rendered as an icon button.
 * @property {ReturnType<typeof css>} [sx] - The CSS styling of the button.
 * @extends {React.ComponentPropsWithoutRef<'button'>}
 */
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

  return <StyledButton
    type={props.type ?? 'button'}
    $sx={sx}
    size={size}
    $iconButton={iconButton ?? false}
    {...props}
  >
    {(icon !== undefined && direction === 'left') && icon}
    {label !== undefined && label}
    {(icon !== undefined && direction === 'right') && icon}
  </StyledButton>
}

export default Button
