// SPDX-License-Identifier: MIT 

import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from '../../../src/theme/mbti/colors.js';
Vue.use(Vuetify);

export default new Vuetify({
    preset: colors
});
