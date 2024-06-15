import type { Preview } from '@storybook/react';
import '../src/app/styles/index.css';

const customViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
    backgrounds: {
      values: [{ name: 'dark', value: '#151515' }],
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
