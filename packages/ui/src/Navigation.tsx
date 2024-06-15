'use client'

import React, {useState} from "react";
import Link from 'next/link'
import styled, {css} from "styled-components";
import ChevronDown from "./icons/ChevronDown";

const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid #eaeaea;

    & > div {
        padding: 16px 8px;
    }
    
    & > div:last-of-type {
        margin-top: auto;
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
`

const NavigationItem = styled.li`
    position: relative;

    a {
        ${itemStyles}
    }
`

const SubNavigationItem = styled.li`
    background: #f4f4f4;
`

const SubLinkHeader = styled.div`
    cursor: pointer;
    ${itemStyles};
    align-items: center;

    & > svg:last-child {
        margin-left: auto;
    }
`

type NavigationItem = {
  name: string;
  url: string;
  icon?: React.ReactNode
}

type NavigationList = {
  name: string;
  icon?: React.ReactNode
} & ({
  type: 'link';
  url: string;
} | {
  type: 'subLink';
  subLinks: NavigationItem[];
})

type NavigationProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
  links: NavigationList[]
} & React.ComponentPropsWithoutRef<'nav'>

const Navigation: React.FC<NavigationProps> = ({header, footer, links, ...props}) => {
  const [menuToggle, setMenuToggle] = useState<string[]>([])
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
            link.type === 'link' && (link.url.startsWith('http')
              ? <a href={link.url} rel='noreferrer' target='_blank'>{link.icon} {link.name}</a>
              : <Link href={link.url}>{link.icon} {link.name}</Link>)
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
                {link.name}
                <ChevronDown invert={menuToggle.includes(link.name + index)}/>
              </SubLinkHeader>
              {
                menuToggle.includes(link.name + index) && <ul>
                  {
                    link.subLinks.map((subLink, index) => <SubNavigationItem key={subLink.name + index}>
                      {
                        subLink.url.startsWith('http')
                          ? <a href={subLink.url} rel='noreferrer' target='_blank'>{subLink.icon} {subLink.name}</a>
                          : <Link href={subLink.url}>{subLink.icon} {subLink.name}</Link>
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
