import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      style: {
        flex:1, 
        margin:10, 
        shadowOffset:{width: 2,height: 2}, 
        elevation:2, 
        borderColor:'#000', 
        borderWidth:0.001,
        backgroundColor: '#fff'
      }
    }
  }

  UNSAFE_componentWillMount() {
    console.log('Before rendering');
  }

  componentDidMount() {
    console.log('After rendering');
  }

  render() {
    let {container, foto, detalhesItem, txtTitulo, txtValor } = style;
    console.log('Rendered');
    return (
      <View key={this.state.item.titulo} style={container} >

        <View style={ foto }>
          <Image style={{width: 100,height: 100}} source={{ uri: this.state.item.foto }} />
        </View>

        <View style={detalhesItem}>
          <Text style={ txtTitulo }>{this.state.item.titulo}</Text>
          <Text style={ txtValor }>R$ {this.state.item.valor} </Text>
          <Text>Local: {this.state.item.local_anuncio} </Text>
          <Text>Data: {this.state.item.data_publicacao} </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102,
    marginRight: 20
  },
  detalhesItem: {
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValor: {
    fontWeight: 'bold',
    fontSize: 16
  }
});