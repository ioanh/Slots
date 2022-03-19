import React, {Component} from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native-web";
import { Constants } from "../App";
import images from "../assets/images";


export default class Symbol extends Component {
    constructor(props){
        super(props);
    }

    getImage = () => {
        switch(this.props.symbol){
            case 'B':
                return images.banan;
            case 'C':
                return images.cherry;
            case 'D':
                return images.dollar;
            case 'G':
                return images.grape;
            case 'L':
                return images.bell;
            case 'M':
                return images.watermelon;
            case 'S':
                return images.seven;
            case '7':
                return images.apple;
            case 'X':
                return images.bar;
            default:
                return images.apple;
        }
    }


    render(){
        let symbolSource = this.getImage();
        return(
            <View style={[styles.symbol, {width: this.props.width, height: this.props.height, zIndex: 55}]}>
                <Image style={{width: this.props.width - 20, height: this.props.height - 20}} resizeMode="contain" source={symbolSource}/>
                {/* <Text style={{zIndex: 55}}>LOL</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    symbol: {
      backgroundColor: 'green',
      padding: 10,
    }
  });