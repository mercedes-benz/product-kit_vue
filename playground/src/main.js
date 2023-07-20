import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

import { useProductKit } from '../../src/index';
const productKit = useProductKit('mb');
const vuetify = createVuetify(productKit);

// const vuetify = createVuetify({
//   theme: {
//     themes: productKit.themes,
//   },
//   defaults: productKit.defaults,
//   display: productKit.display,
// });

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
