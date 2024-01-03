/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "gray-1000": "#0D121D",
        "gray-850": "#18202F",
      },
      fontFamily: {
        sans: ['"Inter var", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          {
            fontFeatureSettings: '"cv02","cv03","cv04","cv11"',
            fontVariationSettings: 'normal'
          },
        ],
      },
    },
  },
  plugins: [],
}
