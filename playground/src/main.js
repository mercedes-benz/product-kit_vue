import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { productKitTheme } from '../../src/index';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: productKitTheme,
  },
});

console.dir(productKitTheme);

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
