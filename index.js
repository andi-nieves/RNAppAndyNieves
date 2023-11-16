import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";
import Routes from './Routes';

function App(): JSX.Element {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      amber: {
        400: '#d97706',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  return (<Provider store={store}>
    <PersistGate persistor={persistor}>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </PersistGate>
  </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
