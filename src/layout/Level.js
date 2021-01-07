import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { styles } from '../Style';
import { levels, bg } from '../confic/const';
import { TouchableHighlight } from 'react-native-gesture-handler';
const Screen = (props) => {
  return (
    <TouchableHighlight style={[{
      aspectRatio: 1, margin: 5, width: 100,
      backgroundColor: 'rgba(55, 55, 75, 0.6)',
    }, styles.center]}
      onPress={() => { props.play(props.index) }}
      underlayColor='#5a5c69'>
      <Text style={styles.textMedium}>{props.level}</Text>
    </TouchableHighlight>
  );
};
const Level = ({ navigation }) => {
  const [background, setBg] = useState(bg[0]);
  useEffect(() => {
    let i = Math.floor(Math.random() * bg.length);
    setBg(bg[i]);
  }, []);
  return (
    <ImageBackground
      source={background}
      style={[styles.bgImage, styles.center]}>
      <View style={[{
        alignItems: 'flex-start', justifyContent: 'flex-start',
        width: '85%', maxWidth: 600, aspectRatio: 1, flexDirection: 'row', flexWrap: 'wrap'
      }]}>
        {levels.map((item, index) => {
          return (
            <Screen key={index} level={item[0] + ' x ' + item[1]}
              play={(level) => {
                navigation.navigate('Game',
                  { level: level + 1 })
              }} index={index} />
          );
        })}
      </View>
    </ImageBackground>
  );
};
export default Level;