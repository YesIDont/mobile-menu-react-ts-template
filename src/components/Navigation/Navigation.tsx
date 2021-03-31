import React from 'react';
import styled, { css } from 'styled-components';

import { MenuIcon } from 'components/icons/';
import { Paragraph } from 'components/Paragraph/';
import { colorsLibrary, navigationWidth } from 'styles/themeDefault';
import { NavItem } from './NavItem';
import { NavItemWithContent } from './NavItemWithContent';

const Container = styled.div(
  ({ theme: { colors } }) => css`
    align-items: flex-start;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    width: ${navigationWidth}px;
  `,
);

export const Navigation: React.FC = () => {
  return (
    <Container>
      <NavItem style={{ fontWeight: 'bold' }}>
        <MenuIcon color={colorsLibrary.secondary} style={{ marginRight: '0.5rem' }} />
        Menu
      </NavItem>
      <NavItemWithContent title='Settings'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </NavItemWithContent>
      <NavItemWithContent title='Users'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </NavItemWithContent>
      <NavItemWithContent title='Profile'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </NavItemWithContent>
      <NavItem>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </NavItem>
      <NavItem>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </NavItem>
    </Container>
  );
};
