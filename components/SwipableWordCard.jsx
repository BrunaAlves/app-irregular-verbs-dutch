/*import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import  WordCard from './WordCard';

export default class SwipableWordCard extends React.Component {
  _animatedValue = useRef(new Animated.Value(0)).current

  _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return true;
    },
    onPanResponderMove: (evt, gestureState) => {
      this._animatedValue.setValue(gestureState.dx);
      console.info(this._animatedValue)
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      //this.props.onGestureEnd();
    },
    onPanResponderTerminate: (evt, gestureState) => {
      //this.props.onGestureTerminate();
    },
  });

  render() {
   

    var style = {
      transform: [
        {
          translateX: this._animatedValue,
        }
      ]
    }

    console.info(this._animatedValue)
    
    return (
      <View {...this._panResponder.panHandlers}>
        <WordCard 
          styles={style}
          key={this.props.keys}
          index={this.props.index}
          canFlip={this.props.canFlip}
          word={this.props.word}
        />
      </View>
    )
  }
}*/