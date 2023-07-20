import './styles/main.scss';
import { useColors } from './colors';
import { variables } from './variables';
import { defaults } from './defaults';
import {
  sizeScreenPlatformS,
  sizeScreenPlatformM,
  sizeScreenPlatformL,
  sizeScreenPlatformXl,
  sizeScreenPlatformXxl,
} from '@mercedes-benz/productkit-core/dist/web/styles/mbti/js/variables';

const defaultBrand = 'mb';
export const useProductKit = (brand = defaultBrand) => {
  const colors = useColors(brand);

  return {
    defaults: defaults(brand),
    theme: {
      themes: {
        light: { colors: colors.light, variables },
        dark: { colors: colors.dark, variables },
      },
    },
    display: {
      mobileBreakpoint: 'xl',
      thresholds: {
        xs: 0,
        sm: getNumberValue(sizeScreenPlatformS),
        md: getNumberValue(sizeScreenPlatformM),
        lg: getNumberValue(sizeScreenPlatformL),
        xl: getNumberValue(sizeScreenPlatformXl),
        xxl: getNumberValue(sizeScreenPlatformXxl),
      },
    },
  };
};

function getNumberValue(value) {
  if (typeof value !== 'string') {
    throw new Error('Invalid arg for getNumberValue()');
  }
  return Number(value.split('px')[0]);
}
