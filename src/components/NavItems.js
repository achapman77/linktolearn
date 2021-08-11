import React from 'react';
import scrollToElement from 'scroll-to-element';
// import { animateScroll as scroll } from "react-scroll"
import { map } from 'lodash';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Resources
// https://chaseohlson.com/gatsby-link-anchor-navigation
export function scroller(target, offset) {
  scrollToElement(target, {
    offset,
  });
}

export function handleMenuLinkClick(l, e) {
  if (typeof window !== 'undefined' && l.link.includes('#')) {
    const [anchorPath, anchor] = l.link.split('#');
    if (window.location.pathname === anchorPath) {
      e.preventDefault();
      scroller(`#${anchor}`, -80);
    }
  }
}

export function renderNavItems(linkData) {
  return map(linkData, l => {
    return (
        <NavItem>
            <NavLink
            key={l.link}
            data-id={`nav_${l.title.toLowerCase()}`}
            to={l.link}
            onClick={e => handleMenuLinkClick(l, e)}
            activeClassName='active'
            className={l.isActive ? 'active' : ''}
            >
            <span>{l.title}</span>
            </NavLink>
        </NavItem>
      
    );
  });
}

const NavItem = styled.li`
    height: -webkit-fill-available;
`

const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 4vw;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    border-bottom: 4px solid transparent;

    &.active {
    border-bottom: 4px solid ${props => props.theme.colors.primary.main};
    }
    /* &:hover {
      border-right: 1px solid white;
      border-left: 1px solid white;
      background: rgba(255,255,255, 0.125);
    } */
`