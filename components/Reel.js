import React, {Component} from "react";
import { View, StyleSheet, Button, Text } from "react-native-web";
import { Constants } from "../App";
import Symbol from "./Symbol";


export default class Reel extends Component {
    constructor(props){
        super(props);
        this.symbols = "BBCDGLGLCCCLLDDMS777XDBL";
        this.symbolHeight = this.props.height / Constants.SYMBOLS;
    }


    render(){
        return(
            <View style={[styles.reel, {width: this.props.width, height: this.props.height}]}>
                <View style={{width: this.props.width, height: this.symbolHeight * this.symbols.length}}>
                    {this.symbols.split("").map((el, idx) => {
                        return <Symbol symbol={el} key={idx} index={idx} width={this.props.width} height={this.symbolHeight} ></Symbol>
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reel: {
    //   overflow: 'hidden',
      backgroundColor: 'pink',
    }
  });