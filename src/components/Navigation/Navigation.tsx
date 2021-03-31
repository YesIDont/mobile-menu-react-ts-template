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
    overflow-x: hidden;
    overflow-y: scroll;
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
        <NavItemWithContent title='Option 1'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItemWithContent title='Option 2'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItem isColumn>
          Option 3<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>
        <NavItem isColumn>
          Option 4<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>
        <NavItem isColumn>
          Option 5<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </NavItem>

        <NavItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItem>

        <NavItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItem>
      </NavItemWithContent>

      <NavItemWithContent title='Users'>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
      </NavItemWithContent>

      <NavItemWithContent title='Profile'>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Paragraph>
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
