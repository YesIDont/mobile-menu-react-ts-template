import styled, { css } from 'styled-components';

export const Paragraph = styled.div(
  ({ theme: { paragraph } }) => css`
    ${paragraph}
  `,
);
