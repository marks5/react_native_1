import React, { Component } from 'react';
import Item from './Item';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default class ItemList extends Component {

  constructor(props){
    super(props);

    this.state = { listItens: [] };
  }

  componentWillMount(){
    const url = "http://faus.com.br/recursos/c/dmairr/api/itens.html";
    axios.get(url).then(response => {
      this.setState({listItens: response.data});
    }).catch(() => {
      console.log('Erro ao recuperar api');
    });
  }

  render() {

    let { container } = style;

    return (
      <View style={container}>
        <View style={{maxHeight:'100%',flex:1}}>
          <ScrollView>
            { 
              this.state.listItens.map( item => ( <Item key={item.titulo} item={item}/> ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 22
  }
});