import React from 'react';
import {
  View,
  Image,
  Text,
  AppRegistry
} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  },
  image: {
    justifyContent: 'center'
  }
};

const App = () => {

  const { principal, image } = Estilos;

  return(
    <View style={ principal }>
      <Image style={ image }
        source={ require('./imgs/uvas.png') }
      >
        <Text>Legenda foto</Text>
      </Image>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
