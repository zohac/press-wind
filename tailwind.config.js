module.exports = {
  // use preflight (reset CSS) override fonts size from theme.json
  corePlugins: {
    preflight: false,
  },
  content: ['./**/*.{php,twig,html}', './assets/*.{js,jsx,ts,tsx,vue}'],
  safelist: [],
  theme: {
    fontFamily: {
      display: ['PlayfairDisplay'],
      body: ['Roboto'],
    },
    extend: {
      gridTemplateColumns: {
        main: '8rem 1fr 8rem',
      },
      backgroundImage: (theme) => ({
        'wp-performance': "url('/assets/media/wp-performance.png')",
      }),
    },
  },
  plugins: [],
}
