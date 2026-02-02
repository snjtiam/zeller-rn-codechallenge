require('react-native-get-random-values');

jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper',
  () => ({}),
  { virtual: true },
);

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  return {
    SafeAreaProvider: ({ children }) => <>{children}</>,
    SafeAreaView: ({ children }) => <>{children}</>,
    useSafeAreaInsets: () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }),
  };
});

jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
  screensEnabled: jest.fn(),
  Screen: 'Screen',
  ScreenContainer: 'ScreenContainer',
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
  fetch: jest.fn(() =>
    Promise.resolve({
      isConnected: true,
      isInternetReachable: true,
      details: null,
    }),
  ),
}));

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ],
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('react-native/Libraries/Lists/VirtualizedList', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockVirtualizedList = React.forwardRef((props, ref) => (
    <View ref={ref}>{props.children}</View>
  ));
  return { default: MockVirtualizedList };
});

jest.mock('@react-native/virtualized-lists/Lists/VirtualizedList', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockVirtualizedList = React.forwardRef((props, ref) => (
    <View ref={ref}>{props.children}</View>
  ));
  return { default: MockVirtualizedList };
});

jest.mock('@react-navigation/native', () => {
  const React = require('react');
  return {
    NavigationContainer: ({ children }) => <>{children}</>,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      setOptions: jest.fn(),
    }),
    useRoute: () => ({ params: {} }),
    useFocusEffect: (cb) => cb(),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  const React = require('react');
  const Screen = ({ component: Component, children }) => {
    if (Component) {
      return <Component />;
    }
    if (typeof children === 'function') {
      return children();
    }
    return children ?? null;
  };

  return {
    createNativeStackNavigator: () => ({
      Navigator: ({ children }) => <>{children}</>,
      Screen,
    }),
  };
});

jest.mock('aws-amplify', () => ({
  Amplify: {
    configure: jest.fn(),
  },
}));

jest.mock('aws-amplify/api', () => ({
  generateClient: jest.fn(),
}));

const { listZellerCustomers } = require('./mock-data/listZellerCustomers');
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(listZellerCustomers),
  }),
);

require('./src/i18n/i18n');
