import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Home from './src/components/screens/Home';

const App = () => {
  return (
    <PaperProvider>
      <Home/>
    </PaperProvider>
  );
};

export default App;