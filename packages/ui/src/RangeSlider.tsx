'use client'

import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const RangeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    output {
        position: absolute;
        left: 25px;
        top: 110%;
        background: #000;
        color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
        transform: translateX(-50%);
    }

    datalist {
        display: flex;
        justify-content: space-between;
        padding: 0 2px;
        height: 10px;
        overflow: hidden;

        option::before {
            content: '|';
            color: #aeaeae;
        }
    }

`

const RangeElement = styled.input`
    &::-webkit-slider-runnable-track, &::-moz-range-track {
        background: #0c69a8;
        height: 15px;
        border-radius: 2px;
    }

    &::-webkit-slider-thumb, &::-moz-range-thumb {
        background-color: #aeaeae;
        height: 20px;
        width: 10px;
        border-radius: 2px;
        border: 0;
    }

    &::-moz-range-progress, &::-webkit-slider-runnable-track {
        background: #053a5f;
        height: 10px;
    }
`

const GenerateTickMarks = (min: number, max: number, marks: number) =>
  Array.from({length: (max - min) / marks + 1}, (_, index) => min + (index * marks))
    .map(index => <option value={index} label={index.toString()} key={index.toString()}></option>)

type RangeSliderProps = {
  name?: string
  label?: string
  value?: number
  min?: number
  max?: number
  step?: number
  marks?: number
} & React.ComponentPropsWithoutRef<'input'>

const RangeSlider: React.FC<RangeSliderProps> = ({name, label, value, min, max, step, marks, ...props}) => {
  const [internalValue, setInternalValue] =
    useState(value ?? (max !== undefined && min !== undefined ? (min + max) / 2 : 50))

  const [isShowing, setIsShowing] = useState(false)

  const updateValueTooltip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(parseInt(event.target.value))
    setIsShowing(true)
  }
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isShowing) {
      timer = setTimeout(() => {
        setIsShowing(false)
      }, 2000) // hide after 2 seconds
    }
    return () => clearTimeout(timer) // cleanup on unmount or state change
  }, [isShowing])

  return <RangeWrapper>
    {
      label !== undefined &&
      <label htmlFor={name}>{label}</label>
    }
    <RangeElement
      id={name}
      name={name}
      min={min ?? 0}
      max={max ?? 100}
      type="range"
      list={`${name ?? ''}values`}
      step={step ?? 1}
      value={internalValue}
      onChange={updateValueTooltip}
      {...props}
    />
    {
      isShowing && <output>{internalValue}</output>
    }
    {
      marks !== undefined &&
      <datalist id={`${name ?? ''}values`}>
        {
          GenerateTickMarks(min ?? 0, max ?? 100, marks ?? 25).map(element => element)
        }
      </datalist>
    }
  </RangeWrapper>
}

export default RangeSlider
