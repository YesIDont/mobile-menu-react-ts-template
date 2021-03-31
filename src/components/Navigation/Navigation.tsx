import React from 'react';
import styled, { css } from 'styled-components';

import { MenuIcon } from 'components/icons/';
import { Paragraph } from 'components/Paragraph/';
import { ScrollVertical } from 'components/ScrollVertical/';
import { colorsLibrary, navigationWidth } from 'styles/themeDefault';
import { NavItem } from './NavItem';
import { NavItemWithContent } from './NavItemWithContent';
import { Settings } from './Settings';

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
      <ScrollVertical>
        <NavItem style={{ fontWeight: 'bold' }}>
          <MenuIcon color={colorsLibrary.secondary} style={{ marginRight: '0.5rem' }} />
          Menu
        </NavItem>

        <Settings />

        <NavItemWithContent title='Users'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItemWithContent title='Profile'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItem>
          <Paragraph>
            You can place Menu items however you&apos;d like, mixing buttons that will open submenus
            containers with plane text.
          </Paragraph>
        </NavItem>

        <NavItemWithContent title='Contact'>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItemWithContent>

        <NavItem isColumn>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </NavItem>
      </ScrollVertical>
    </Container>
  );
};
