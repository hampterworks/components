'use client'

import React, {useState} from "react";
import Link from 'next/link'
import styled, {css} from "styled-components";
import ChevronDown from "./icons/ChevronDown";

const NavigationWrapper = styled.ul`

`
const itemStyles = css`
    display: flex;
    line-height: 24px;
    gap: 8px;
    padding: 8px 16px;
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

    a {
        padding-left: 32px;
    }
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
  links: NavigationList[]
} & React.ComponentPropsWithoutRef<'nav'>

const Navigation: React.FC<NavigationProps> = ({links, ...props}) => {
  const [menuToggle, setMenuToggle] = useState<string[]>([])
  return <nav {...props}>
    <NavigationWrapper>
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
                <ChevronDown/>
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
    </NavigationWrapper>
  </nav>
}

export default Navigation
