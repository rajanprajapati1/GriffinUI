// .storybook/preview.ts
import type { Preview } from '@storybook/react';
import '../src/styles/index.css'; // ✅ Tailwind styles here too


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
