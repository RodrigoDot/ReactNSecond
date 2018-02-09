import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AppRegistry
} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#50ecb5',
    padding: 10,
    borderColor: '#326c5a',
    borderWidth: 1,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1
  },
  textoBotao: {
    fontSize: 30,
    color: '#000',
    alignSelf: 'center'
  }
};

const onButtonCLick = () => {
  alert('Clicked');
}

const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return(
    <View style={ principal }>

      <TouchableOpacity style={ botao }>
          <Text style={ textoBotao }>Click</Text>
      </TouchableOpacity>

    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
