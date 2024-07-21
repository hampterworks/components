import React from "react";

export const inputCodeString = `
type InputProps = {
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode,
  requiredTitle?: React.ReactNode
  isInvalid?: boolean
  onInput?: (value: string) => void
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>
`

export const checkboxCodeString = `
type CheckboxProps = {
  label: string
  name: string
  isChecked?: boolean
  onChecked?: (checked: boolean) => void
  required?: boolean
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>
`

export const radioCodeString = `
type SelectItem = {
  value: string
  title: string
}

type RadioProps = {
  label?: string
  name: string
  required?: boolean
  selectedItem?: string
  onSelected?: (value: string) => void
  options: SelectItem[]
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'input'>
`

export const typographyCodeString = `
type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TypographyProps = {
  variant?: Variants
  component?: Headings
  children: React.ReactNode
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithoutRef<'h1'>
`
export const buttonCodeString = `
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
`

export const selectCodeString = `
type SelectItem = {
  value: string
  title: string
}

type SelectProps = {
  options: SelectItem[]
  label?: string
  name?: string
  required?: boolean
  selectedValue?: SelectItem | SelectItem[]
  multiple?: boolean
  searchable?: boolean
  onSelectedValue?: (value: SelectItem[]) => void
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithRef<'select'>
`
export const rangeCodeString = `
type RangeSliderProps = {
  name?: string
  label?: string
  value?: number
  min?: number
  max?: number
  step?: number
  marks?: number
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithoutRef<'input'>
`

export const breadcrumbsCodeString = `
type BreadcrumbsProps = {
  excludedPaths?: string[]
  displayPaths?: string[]
  overwritePaths?: Record<string, React.ReactNode>
  overwriteSeparator?: string
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithoutRef<'div'>
`
export const useClickOutsideCodeString = `
"use client"

import {RefObject, useEffect } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback])
}

export default useClickOutside
`
export const notificationsCodeString = `
type Alert = 'success' | 'warning' | 'error' | 'info'

type NotificationsProps = {
  message?: string
  alertType?: Alert
  delay?: number
  onClose?: () => void
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithoutRef<'div'>
`
