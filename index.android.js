import React from 'react';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#299499',
    textAlign: 'center',
    padding: 15,
    // shadowColor: '#5e7766',
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // }
  }
};

const App = () => {
  return(
    <Text style={ Estilos.estiloTexto }>Frases do Dia</Text>
  );
};

AppRegistry.registerComponent('app2', () => App);
