module.exports = function (api) {
  api.cache(true);
  return { presets: [require('nativewind/preset')], content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'] };
};
