'use client'

import React, {useState} from "react";
import Link from 'next/link'
import styled, {css} from "styled-components";
import ChevronDown from "./icons/ChevronDown";
import {usePathname} from 'next/navigation'

const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid #eaeaea;
    max-width: 200px;

    & > div {
        padding: 16px 8px;
    }

    & > div:last-of-type {
        margin-top: auto;
    }

    .linkShortName {
        display: none;
        font-weight: bold;
    }

    @media (max-width: 769px) {
        width: 65px;
        .linkShortName {
            display: block;
        }

        .linkFullName {
            display: none;
        }
    }
`

const NavigationList = styled.ul`
    font-size: 16px;
`
const itemStyles = css`
    display: flex;
    line-height: 16px;
    gap: 8px;
    padding: 16px 8px;
    border-bottom: 1px solid #eaeaea;

    @media (max-width: 769px) {
        justify-content: center;
        gap: 0;
    }

    &:hover {
        transform: scale(1.1);
    }
`

const NavigationItem = styled.li`
    position: relative;

    a {
        ${itemStyles}
    }
`

const SubNavigationItem = styled.li`
    background: #e6e6e6;
`

const SubLinkHeader = styled.div`
    cursor: pointer;
    ${itemStyles};
    align-items: center;
    @media (max-width: 769px) {
        background: #f4f4f4;
    }
`

const IndicatorContainer = styled.span`
    margin-left: auto;
    @media (max-width: 769px) {
        display: none;
    }
`

type NavigationItem = {
  name: string;
  url: string;
  icon?: React.ReactNode
}

export type NavigationList = {
  name: string;
  icon?: React.ReactNode
} & ({
  type: 'link';
  url: string;
} | {
  type: 'subLink';
  subLinks: NavigationItem[];
})

type LinkElementProps = {
  isExternal: boolean
  url: string
  name: string
  pathname?: string
  icon?: React.ReactNode
}

const getLinkElement = ({isExternal, url, name, pathname, icon}: LinkElementProps): React.ReactNode => {
  const shortName = icon === undefined ? name.charAt(0).toUpperCase() : undefined

  return isExternal
    ? <a href={url} rel='noreferrer' target='_blank'>
      {icon}
      <div className="linkFullName">{name}</div>
      <div className="linkShortName">{shortName}</div>
    </a>
    : <Link href={url}>
      {icon}
      <div className="linkFullName">{name}</div>
      <div className="linkShortName">{shortName}</div>
      {pathname === url && <IndicatorContainer>
        <ChevronDown style={{transform: 'rotate(-90deg)', height: '14px'}}/>
      </IndicatorContainer>}
    </Link>
}

type NavigationProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
  links: NavigationList[]
} & React.ComponentPropsWithoutRef<'nav'>

const Navigation: React.FC<NavigationProps> = ({header, footer, links, ...props}) => {
  const [menuToggle, setMenuToggle] = useState<string[]>([])
  const pathname = usePathname()

  return <NavigationWrapper {...props}>
    {
      header !== undefined &&
      <div>
        {header}
      </div>
    }
    <NavigationList>
      {
        links.map((link, index) => <NavigationItem key={link.name + index}>
          {
            link.type === 'link' &&
            getLinkElement({
              isExternal: link.url.startsWith('http'),
              name: link.name,
              icon: link.icon,
              url: link.url,
              pathname: pathname
            })
          }
          {
            link.type === 'subLink' && <>
              <SubLinkHeader onClick={() => {
                const itemIndex = menuToggle.indexOf(link.name + index)
                if (itemIndex === -1) {
                  setMenuToggle([...menuToggle, link.name + index])
                } else {
                  setMenuToggle(prevMenuToggle => {
                    const newManuToggle = [...prevMenuToggle]
                    newManuToggle.splice(itemIndex, 1)
                    return newManuToggle
                  })
                }
              }}>
                {link.icon}
                <div className="linkFullName">{link.name}</div>
                {
                  link.icon === undefined &&
                  <div className="linkShortName">{link.name.charAt(0).toUpperCase()}</div>
                }
                <IndicatorContainer>
                  <ChevronDown invert={menuToggle.includes(link.name + index)}/>
                </IndicatorContainer>
              </SubLinkHeader>
              {
                menuToggle.includes(link.name + index) && <ul>
                  {
                    link.subLinks.map((subLink, index) => <SubNavigationItem key={subLink.name + index}>
                      {
                        getLinkElement({
                          isExternal: subLink.url.startsWith('http'),
                          name: subLink.name,
                          icon: subLink.icon,
                          url: subLink.url,
                          pathname: pathname
                        })
                      }
                    </SubNavigationItem>)
                  }
                </ul>
              }
            </>
          }
        </NavigationItem>)
      }
    </NavigationList>
    {
      footer !== undefined &&
      <div>
        {footer}
      </div>
    }
  </NavigationWrapper>
}

export default Navigation
