import './styles/main.scss';
import { useColors } from './colors';
import { variables } from './variables';
import { mbtiDefaults } from './brands';

export const useProductKit = (brand = 'mbti') => {
  const colors = useColors(brand);

  return {
    defaults: defaults(brand),
    themes: {
      light: { colors: colors.light, variables },
      dark: { colors: colors.dark, variables },
    },
    display: {
      // mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
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

  if (brand === 'mbti') {
    return Object.assign(defaults, mbtiDefaults);
  }

  return defaults;
}
