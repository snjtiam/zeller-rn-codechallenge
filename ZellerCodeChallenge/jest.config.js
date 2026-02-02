module.exports = {
  preset: 'react-native',
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-async-storage|@react-native-community|react-native-safe-area-context|react-native-screens|react-native-get-random-values|react-native-localize|aws-amplify|@aws-amplify|react-native-error-boundary)/)',
  ],
};
