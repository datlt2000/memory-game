import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { styles } from '../Style';
import { defaultCard, cards } from '../confic/const';
function Card(props) {
  const [icon, setIcon] = useState(defaultCard);
  const press = () => {
    if (!props.data.isOpen) {
      props.data.isOpen = true;
      setIcon(cards[props.data.id].src);
      setTimeout(() => {
        props.clickCard(props.index);
      }, 300);
    }
  };
  useEffect(() => {
    if (props.data.isOpen) {
      setIcon(cards[props.data.id].src);
    }
    else {
      setIcon(defaultCard);
    }
  }, [props.data]);
  return (
    <TouchableHighlight
      style={[styles.cell, styles.center]}
      activeOpacity={0.75}
      underlayColor='#f1f1f1'
      onPress={press}>
      <View style={{ flex: 1 }}>
        {props.data.isPaired ? null : <Image
          source={icon}
          style={styles.img} />}
      </View>
    </TouchableHighlight>
  );
};
export default Card;