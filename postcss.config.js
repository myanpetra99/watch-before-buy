module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-parent-selector')({
      selector: '#watchBeforeBuy', // Replace with your desired parent selector
      includeFiles: [/\.css$/], // Define the types of files to include
      excludeFiles: [/node_modules/], // Define the files or directories to exclude
    }),
  ],
};
