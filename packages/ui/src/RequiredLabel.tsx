"use client"

import React from "react";
import styled from "styled-components";


const RequiredLabelWrapper = styled.div`
    height: 14px;
    font-size: 14px;

    span {
        color: red;
        display: block;
        margin-left: -4px;
        margin-top: -4px;
    }
`

type RequiredLabelProps = {
  requiredTitle?: React.ReactNode
}

const RequiredLabel: React.FC<RequiredLabelProps> = ({requiredTitle, ...props}) => {
  return <RequiredLabelWrapper>
    {
      requiredTitle === undefined
        ? <><span>*</span> This field is required</>
        : <>{requiredTitle}</>
    }
  </RequiredLabelWrapper>
}

export default RequiredLabel
