import mbti from './brands/mbti/index';
import mb from './brands/mb/index';
import hot from './brands/hot/index';
import mbtm from './brands/mbtm/index';

export const useColors = (brand) => {
  const brands = {
    mbti,
    mb,
    hot,
    mbtm,
  };

  if (!brands[brand]) {
    throw new Error('No valid brand is provided.');
  }

  const tokens = brands[brand].light;
  const tokensDark = brands[brand].dark;

  const light = {
    background: tokens.colorApplicationBackground,
    'on-background': tokens.colorApplicationContrastBackground,
    surface: tokens.colorApplicationSurface,
    'on-surface': tokens.colorApplicationContrastSurface,
    primary: tokens.colorApplicationPrimary,
    'on-primary': tokens.colorApplicationContrastPrimary,
    'primary-variant': tokens.colorApplicationPrimaryVariant,
    'on-primary-variant': tokens.colorApplicationPrimaryVariant,
    secondary: tokens.colorApplicationSecondary,
    'on-secondary': tokens.colorApplicationContrastSecondary,
    success: tokens.colorApplicationSuccess,
    'on-success': tokens.colorApplicationContrastSuccess,
    warning: tokens.colorApplicationWarning,
    'on-warning': tokens.colorApplicationContrastWarning,
    error: tokens.colorApplicationError,
    'on-error': tokens.colorApplicationContrastError,
    info: tokens.colorApplicationInfo,
    'on-info': tokens.colorApplicationContrastInfo,
    tertiary: tokens.colorApplicationTertiary,
    'on-tertiary': tokens.colorApplicationContrastTertiary,
    quaternary: tokens.colorApplicationQuaternary,
    'on-quaternary': tokens.colorApplicationContrastQuaternary,
  };

  const dark = {
    background: tokensDark.colorApplicationBackground,
    'on-background': tokensDark.colorApplicationContrastBackground,
    surface: tokensDark.colorApplicationSurface,
    'on-surface': tokensDark.colorApplicationContrastSurface,
    primary: tokensDark.colorApplicationPrimary,
    'on-primary': tokensDark.colorApplicationContrastPrimary,
    'primary-variant': tokensDark.colorApplicationPrimaryVariant,
    'on-primary-variant': tokensDark.colorApplicationPrimaryVariant,
    secondary: tokensDark.colorApplicationSecondary,
    'on-secondary': tokensDark.colorApplicationContrastSecondary,
    success: tokensDark.colorApplicationSuccess,
    'on-success': tokensDark.colorApplicationContrastSuccess,
    warning: tokensDark.colorApplicationWarning,
    'on-warning': tokensDark.colorApplicationContrastWarning,
    error: tokensDark.colorApplicationError,
    'on-error': tokensDark.colorApplicationContrastError,
    info: tokensDark.colorApplicationInfo,
    'on-info': tokensDark.colorApplicationContrastInfo,
    tertiary: tokensDark.colorApplicationTertiary,
    'on-tertiary': tokensDark.colorApplicationContrastTertiary,
    quaternary: tokensDark.colorApplicationQuaternary,
    'on-quaternary': tokensDark.colorApplicationContrastQuaternary,
  };

  Object.assign(light, baseColors());
  Object.assign(dark, baseColors());

  console.log('all', light);
  return {
    light,
    dark,
  };
};

function baseColors() {
  const colorNames = ['neutral', 'blue', 'red', 'green', 'yellow', 'blackcurrant', 'lividbrown', 'nandor'];
  const shades = [
    { shade: '50', postfix: 'lighten-5', postfixContrast: 'lighten-5-contrast' },
    { shade: '100', postfix: 'lighten-4', postfixContrast: 'lighten-4-contrast' },
    { shade: '200', postfix: 'lighten-3', postfixContrast: 'lighten-3-contrast' },
    { shade: '300', postfix: 'lighten-2', postfixContrast: 'lighten-2-contrast' },
    { shade: '400', postfix: 'lighten-1', postfixContrast: 'lighten-1-contrast' },
    { shade: '500', postfix: '', postfixContrast: 'contrast' },
    { shade: '600', postfix: 'darken-1', postfixContrast: 'darken-1-contrast' },
    { shade: '700', postfix: 'darken-2', postfixContrast: 'darken-2-contrast' },
    { shade: '800', postfix: 'darken-3', postfixContrast: 'darken-3-contrast' },
    { shade: '900', postfix: 'darken-4', postfixContrast: 'darken-4-contrast' },
  ];
  const tokens = mbti.light;
  const colors = {};

  function createColorName(color, postfix, shade) {
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
    const name = `colorBase${capitalizedColor}${postfix}${shade}`;
    return name;
  }

  colorNames.forEach((color) => {
    const baseColor = {};
    baseColor[color] = {};

    shades.forEach((shade) => {
      baseColor[color][shade.postfix] = tokens[createColorName(color, shade.shade, '')];
      baseColor[color][shade.postfixContrast] = tokens[createColorName(color, 'Contrast', shade.shade)];
    });

    Object.assign(colors, baseColor);
  });

  return flattenObject(colors);
}

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}-${key}` : key;
      newKey = removeTrailingHyphenOnBaseColors(newKey);
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

function removeTrailingHyphenOnBaseColors(key) {
  if (key.charAt(key.length - 1) === '-') {
    return key.split('-')[0];
  }
  return key;
}
