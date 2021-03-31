import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { ArrowIcon } from 'components/icons/';
import { colorsLibrary } from 'styles/themeDefault';
import { animateValue } from 'utils/animateValue';
import { NavItem } from './NavItem';

const NavLink = styled(NavItem)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.shadeDark};
    color: ${colors.shadeUltraLight};
    cursor: pointer;
    justify-content: space-between;

    &:hover {
      background-color: ${colors.shadeMid};
      color: ${colors.secondary};

      svg {
        fill: ${colors.secondary};
      }
    }
  `,
);

const ContentWrapper = styled.div(
  ({ theme: { colors, paragraph } }) => css`
    ${paragraph}
    background-color: ${colors.primary};
    bottom: 0;
    padding: 0;
    position: absolute;
    top: 0;
    z-index: 1;
  `,
);

const GoBackButton = styled(NavItem)(
  ({ theme: { colors } }) => css`
    color: ${colors.shadeUltraLight};
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: ${colors.shadeDark};
      color: ${colors.secondary};

      svg {
        fill: ${colors.secondary};
      }
    }
  `,
);

type MenuItemType = {
  title: string;
};

export const NavItemWithContent: React.FC<MenuItemType> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [leftOffset, setLeftOffset] = useState(320);
  const openItem = (): void => {
    setIsOpen(true);
    animateValue({
      from: 320,
      to: 0,
      callback: setLeftOffset,
    });
  };
  const closeItem = (): void => {
    animateValue({
      from: 0,
      to: 320,
      callback: setLeftOffset,
    });
    setIsOpen(true);
  };

  return (
    <>
      <NavLink as='button' type='button' onClick={openItem}>
        {title}
        <ArrowIcon color={colorsLibrary.shadeLight} />
      </NavLink>
      {isOpen && (
        <ContentWrapper style={{ left: leftOffset }}>
          <GoBackButton as='button' type='button' onClick={closeItem}>
            <ArrowIcon
              color={colorsLibrary.shadeUltraLight}
              style={{ marginRight: '0.5rem' }}
              transform='scaleX(-1)'
            />
            Go back
          </GoBackButton>
          <div>
            <NavItem
              style={{
                color: colorsLibrary.hightlight,
                fontWeight: 'bold',
              }}
            >
              {title}
            </NavItem>
            <div>{children}</div>
          </div>
        </ContentWrapper>
      )}
    </>
  );
};
