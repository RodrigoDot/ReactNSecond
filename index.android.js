import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  AppRegistry
} from 'react-native';

const Styles = {
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {

  },
  bottomtButton: {
    backgroundColor: '#26a327',
    padding: 15,
    paddingHorizontal: 85,
    marginTop: 20
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
};

const onButtonClicked = () => {
  var randomNumber = Math.floor(Math.random() * 7);

  var texts = [
    {
      index : 0,
      value: 'Hoje parece ser um belo dia para dormir.'
    },
    {
      index : 1,
      value: 'Adeus, e obrigado pelos peixes.'
    },
    {
      index : 2,
      value: 'Foi ótimo fingir estar sóbrio.'
    },
    {
      index : 3,
      value: 'Don`t Panic !!!'
    },
    {
      index : 4,
      value: 'É preciso rituais para que a vida faça sentido !'
    },
    {
      index : 5,
      value: 'Se a Lua não está no céu, será que ela arrumou um outro amor ?'
    },
    {
      index : 6,
      value: 'Se não foi o BIG-BANG, logo Deus é que não foi !'
    },
    {
      index : 7,
      value: 'Aconteça o que acontecer, não faz sentido esperar que seja diferente !'
    }
  ];

  //poderia ser feito com o uso de um array da seguinte forma

  // var texts = Array();
  //
  // texts[0] = 'frase';
  // texts[1] = 'frase';
  // texts[2] = 'frase';
  // texts[3] = 'frase';
  // texts[4] = 'frase';
  // texts[5] = 'frase';

  // Alert.alert(texts[randomNumber]);
  // ...

  Alert.alert(texts[randomNumber].value);
};

const App = () => {

  const { main, image, bottomtButton, bottomButtonText } = Styles;

  return(
    <View style={ main }>
      <Image style={ image } source={ require('./imgs/logo.png') } >
      </Image>
      <TouchableOpacity
        style={ bottomtButton }
        onPress={ onButtonClicked }
        >
        <Text style={ bottomButtonText }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
