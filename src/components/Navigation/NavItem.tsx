import styled, { css } from 'styled-components';

export const NavItem = styled.div<{ isColumn?: boolean }>(
  ({ isColumn, theme: { colors, navigationWidth, padding } }) => css`
    align-items: center;
    border-bottom: 1px solid ${colors.shadeMid};
    color: ${colors.secondary};
    display: flex;
    font-size: 0.95rem;
    line-height: 1.5rem;
    padding: ${padding.small};
    text-align: left;
    transition: background-color ease 0.3s, color ease 0.3s;
    width: ${navigationWidth}px;
    ${isColumn &&
    css`
      align-items: flex-start;
      flex-direction: column;
    `}
  `,
);
