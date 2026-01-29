module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [[
    "module-resolver",
    {
      root: ["./src"],
      alias: {
        "apis": "./src/apis",
        "components": "./src/components",
        "contexts": "./src/contexts",
        "navigation": "./src/navigation",
        "screens": "./src/screens",
        "services": "./src/services",
        "theme": "./src/theme",
        "types": "./src/types",
        "utils": "./src/utils"
      }
    }
  ]]
};
