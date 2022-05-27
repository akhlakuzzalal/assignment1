import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const basicText = {
  fontFamily: typography.italic,
  color: colors.black,
};

export const presets = {
  default: {
    ...basicText,
    fontSize: 18,
  },
  h1: {
    ...basicText,
    fontSize: 32,
  },
  h2: {
    ...basicText,
    fontSize: 28,
  },
  h4: {
    ...basicText,
    fontSize: 24,
  },
  h5: {
    ...basicText,
    fontSize: 22,
  },
};
