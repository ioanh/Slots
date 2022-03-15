import React, {Component} from "react";
import { View, StyleSheet, Button, Text } from "react-native-web";
import { Constants } from "../App";


export default class ReelSet extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: null,
            height: null,
        }
    }

    onLayout = (e) => {
        this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        })
    }

    renderReels = () => {
        let reelWidth = this.state.width / Constants.REELS;
        let reelHeight = this.state.height / Constants.SYMBOLS;
        return (
            <Text>{this.state.width} {this.state.height}</Text>
        )
    }

    render(){
        return(
            <View style={styles.container} onLayout={this.onLayout}>
                {this.state.width && this.state.height && this.renderReels()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
    }
  });