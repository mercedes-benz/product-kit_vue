require('../styles/overrides.scss')
import colors from 'vuetify/lib/util/colors'

const preset = {
    theme: {
        themes: {
            light: {
                primary: {
                    base: colors.purple.base,
                    darken1: colors.purple.darken2,
                },
                secondary: '#b0bec5',
                tertiary: '#000000',
                anchor: '#8c9eff',
            },
        },
    },
}

export default preset