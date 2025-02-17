import type { ClientConfig } from 'vuepress/client';
import { defineClientConfig } from 'vuepress/client';

import sociallink from './components/sociallink.js';

import 'vuepress-theme-hope/presets/shinning-feature-panel.scss';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('sociallink', sociallink);
  },
}) as ClientConfig;
