import React, {Component} from "react";
import { View, StyleSheet, Button, Text } from "react-native-web";
import { Constants } from "../App";


export default class Symbol extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={[styles.symbol, {width: this.props.width, height: this.props.height}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    symbol: {
      backgroundColor: 'red',
    }
  });