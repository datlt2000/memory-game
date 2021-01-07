import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../Style';
import Card from './Card';
import { levels } from '../confic/const';

function Board(props) {
  const renderItem = ({ item, index }) => {
    return <Card data={item} index={index}
      clickCard={props.clickCard} />
  };
  let r = levels[props.level - 1][0];
  let c = levels[props.level - 1][1];
  return (
    <View style={[styles.board, styles.center, { aspectRatio: c / r }]}>
      <FlatList
        numColumns={c}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        key={c} />
    </View>
  );
};
export default Board;