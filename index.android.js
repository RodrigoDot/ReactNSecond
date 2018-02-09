import React from 'react';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#2932a1',
    //COM CSS PADRAO
    // fontStyle: 'italic'
    // shadowColor: '#5e7766',
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // }
  },
  estiloView: {
    backgroundColor: '#7cb0f6',
    height: 300,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
};

const App = () => {

  const { estiloTexto, estiloView } = Estilos;

  return(
    <View style={ estiloView }>
      <Text style={ estiloTexto }>Frases do Dia</Text>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
