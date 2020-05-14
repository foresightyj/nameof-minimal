module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          ie: "9",
        },
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [["babel-plugin-macros"]],
};
