'use client'

import React from "react";
import {usePathname} from 'next/navigation'
import Link from "next/link";
import styled, {type css} from "styled-components";

const CrumbsWrapper = styled.div<{ $sx?: ReturnType<typeof css> }>`
    display: flex;
    gap: 4px;
    font-size: 14px;

    span:last-child {
        font-weight: bold;
    }

    a {
        display: inline-block;
        text-decoration: underline;
    }

    a:hover {
        transform: scale(1.04);
    }

    ${props => props.$sx}
`

const DisplayLink = styled.span`
    color: #515151;
`

/**
 * @typedef {object} BreadcrumbsProps
 * @property {string[]} [excludedPaths] - An array of paths to be excluded from the breadcrumbs.
 * @property {string[]} [displayPaths] - An array of paths to be displayed in the breadcrumbs. If not provided, all paths will be displayed.
 * @property {Object<string, React.ReactNode>} [overwritePaths] - An object of paths and their corresponding custom React nodes to overwrite the display of specific paths in the breadcrumbs.
 * @property {string} [overwriteSeparator] - A custom separator to be used between each path in the breadcrumbs. By default, '/' is used.
 * @property {ReturnType<typeof css>} [sx] - The css styling for the component.
 * @property {React.ComponentPropsWithoutRef<'div'>} [props] - Additional props to be passed to the underlying 'div' component.
 */
type BreadcrumbsProps = {
  excludedPaths?: string[]
  displayPaths?: string[]
  overwritePaths?: Record<string, React.ReactNode>
  overwriteSeparator?: string
  sx?: ReturnType<typeof css>
} & React.ComponentPropsWithoutRef<'div'>

/**
 * Breadcrumbs component that displays a breadcrumb trail for navigation.
 *
 * @param {BreadcrumbsProps} props - The component props.
 * @return {React.FC} The Breadcrumbs component.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = (
  {
    excludedPaths,
    displayPaths,
    overwritePaths,
    overwriteSeparator,
    sx,
    ...props
  }) => {
  const pathname = usePathname()
  const crumbs = pathname.split('/').filter(link => !excludedPaths?.includes(link))
  const overwriteKeys = overwritePaths !== undefined ? Object.keys(overwritePaths) : undefined

  const separator = <span>{overwriteSeparator ?? '/'}</span>

  return <CrumbsWrapper $sx={sx} {...props}>
    {
      crumbs.map((item, index) => {
        const link = item.length === 0 ? 'home' : item
        if (overwritePaths !== undefined && overwriteKeys !== undefined && overwriteKeys.includes(link)) {
          return <React.Fragment key={link}>
            {overwritePaths[link]}
            {
              index !== crumbs.length - 1 ? separator : ''
            }
          </React.Fragment>
        }
        return <React.Fragment key={link}>
          {
            !displayPaths?.includes(link) && index !== crumbs.length - 1
              ? <Link href={link}>{link}</Link>
              : <DisplayLink>{link}</DisplayLink>
          }
          {
            index !== crumbs.length - 1 ? separator : ''
          }
        </React.Fragment>
      })
    }
  </CrumbsWrapper>
}

export default Breadcrumbs
