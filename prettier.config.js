import config from '@vercel/style-guide/prettier';

export default {
  ...config,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
};
