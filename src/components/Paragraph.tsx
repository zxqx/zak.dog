import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../constants/colors';

export const Paragraph = styled.p`
  color: ${lighten(0.83, colors.primary)};
`;
