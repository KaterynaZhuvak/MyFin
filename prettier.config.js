import config from '@vercel/style-guide/prettier';

export const prettierConfig = {
  ...config,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
};
