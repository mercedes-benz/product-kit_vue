import './styles/index.scss';
import './styles/settings.scss';
import { colorsDark, colorsLight } from './colors';
import { variables } from './variables';

export const productKitTheme = {
  light: { colors: colorsLight, variables },
  dark: { colors: colorsDark, variables },
};
