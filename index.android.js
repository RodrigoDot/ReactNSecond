import React from 'react';
import {
  View,
  Text,
  Button,
  AppRegistry
} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  }
};

const onButtonCLick = () => {
  alert('Clicked');
}

const App = () => {

  const { principal } = Estilos;

  return(
    <View style={ principal }>
      <Button
        title= 'Click'
        color= '#4a691a'
        onPress= {onButtonCLick}
        acessibilityLabel= 'Click aqui para visulizar'
      />
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
