module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
    plugins: [
      "@babel/plugin-transform-export-namespace-from",
      ["module-resolver"],
      "react-native-reanimated/plugin"
    ]
  };
};
