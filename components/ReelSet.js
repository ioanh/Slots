import React, {Component} from "react";
import { View, StyleSheet, Button, Text } from "react-native-web";
import { Constants } from "../App";
import Reel from "./Reel";


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
        let reelList = Array.apply(null, Array(Constants.REELS)).map((el, idx) => {
            return <Reel width={reelWidth} height = {this.state.height} key={idx} index={idx}></Reel>

        })
        return (
            <>{reelList}</>
        )
    }

    render(){
        return(
            <View style={styles.ReelSet} onLayout={this.onLayout}>
                {this.state.width && this.state.height && this.renderReels()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ReelSet: {
      backgroundColor: 'orange',
      flexDirection: 'row',
    }
  });