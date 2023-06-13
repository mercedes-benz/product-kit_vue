import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { useProductKit } from '../../src/index';

const productKit = useProductKit('mbti');

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: productKit.themes,
  },
  defaults: productKit.defaults,
  // display: productKit.display,
});

console.dir(productKit);

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
