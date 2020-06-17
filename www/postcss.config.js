module.exports = {
    plugins: [
      require("postcss-import"),
      require("postcss-nested"),
      require("tailwindcss"),

      ...process.env.NODE_ENV === 'production'
            ? [require('css-mqpacker')(),
               require('cssnano')()]
            : []
    ],
  }