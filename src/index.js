import './styles/main.scss';
import { useColors } from './colors';
import { variables } from './variables';
import { mbtiDefaults, mbDefaults, hotDefaults, mbtmDefaults } from './brands';
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
    themes: {
      light: { colors: colors.light, variables },
      dark: { colors: colors.dark, variables },
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

const productKitDefaults = {
  VBtn: {
    elevation: 0,
    style: 'text-transform: none;',
  },
  VChip: {
    elevation: 0,
  },
  VPagination: {
    variant: 'flat',
  },
};

function defaults(brand) {
  const defaults = productKitDefaults;

  if (brand === 'mb') {
    return Object.assign(defaults, mbDefaults);
  }
  if (brand === 'mbti') {
    return Object.assign(defaults, mbtiDefaults);
  }
  if (brand === 'mbtm') {
    return Object.assign(defaults, mbtmDefaults);
  }
  if (brand === 'hot') {
    return Object.assign(defaults, hotDefaults);
  }

  return defaults;
}

function getNumberValue(value) {
  if (typeof value !== 'string') {
    throw new Error('Invalid arg for getNumberValue()');
  }
  return Number(value.split('px')[0]);
}
