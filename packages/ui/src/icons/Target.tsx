"use client"

import React from "react";
import styled, {css} from "styled-components";

const IconWrapper = styled.svg<{ $isToggled: boolean }>`
    height: 24px;

    path {
        fill: #1b1b1b;
    }

    circle {
        fill: #6c6c6c;
        ${props => props.$isToggled ? css`display: block` : css`display: none`}
    }

`

type TargetProps = {
  isToggled?: boolean
} & React.ComponentPropsWithoutRef<'svg'>

const Target: React.FC<TargetProps> = ({isToggled, ...props}) => {
  return <IconWrapper
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    $isToggled={isToggled !== undefined ? isToggled : false}
    {...props}
  >
    <path
      d="M12,.45A11.55,11.55,0,1,0,23.55,12,11.55,11.55,0,0,0,12,.45Zm0,20.79A9.24,9.24,0,1,1,21.24,12,9.24,9.24,0,0,1,12,21.24Z"
      transform="translate(-0.45 -0.45)"/>
    <circle cx="11.55" cy="11.55" r="4.78"/>
  </IconWrapper>
}

export default Target
