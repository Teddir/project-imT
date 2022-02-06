// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const config = getDefaultConfig(__dirname)

// remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true
module.exports = config