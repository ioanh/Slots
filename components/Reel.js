import React, {Component} from "react";
import { View, StyleSheet, Button, Text } from "react-native-web";
import { Constants } from "../App";


export default class Reel extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={[styles.container, {width: this.props.width, height: this.props.height}]}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      backgroundColor: 'pink',
    }
  });