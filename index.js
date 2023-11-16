/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Routes from './Routes';
import { name as appName } from './app.json';
import { Box, NativeBaseProvider, extendTheme } from 'native-base';
import AppContext from './App/Context';
import { useState } from 'react';

function App(): JSX.Element {
  const [notes, setNotes] = useState([])
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

  return (<NativeBaseProvider theme={theme}>
      <AppContext.Provider value={{ notes, setNotes }}>
        <Routes />
      </AppContext.Provider>
  </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
