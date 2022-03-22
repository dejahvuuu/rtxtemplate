module.exports = {
  stories: [
    '../src/components/*.stories.mdx',
    '../src/components/**/*.stories.js',
    '../src/views/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
