import config from '@vercel/style-guide/prettier';

export default {
  ...config,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};
