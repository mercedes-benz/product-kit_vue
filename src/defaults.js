import { mbtiDefaults, mbDefaults, hotDefaults, mbtmDefaults } from './brands';
export const productKitDefaults = {
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

export function defaults(brand) {
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
