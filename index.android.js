import React from 'react';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';

const Estilos = {
  container: {
    flex: 1,
    backgroundColor: '#7cb0f6',
  },
  header: {
    flex: 2,
    fontSize: 40,
    backgroundColor: '#2932a1',
  },
  body: {
    flex: 8,
    fontSize: 40,
    backgroundColor: '#424899',
  },
  footer: {
    flex: 1,
    fontSize: 40,
    backgroundColor: '#a6a9d9',
  }
};

const App = () => {

  const { header, body, footer, container } = Estilos;

  return(
    <View style={ container }>
      <Text style={ header }>Header</Text>
      <Text style={ body }>Body</Text>
      <Text style={ footer }>Footer</Text>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
