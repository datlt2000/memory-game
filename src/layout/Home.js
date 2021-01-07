import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../Style';
const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../img/bg/bg1.jpg')}
      style={[styles.bgImage, styles.center]}>
      <View style={[styles.center, { width: '80%' }]}>
        <Button
          title='Start'
          buttonStyle={[styles.button, styles.bgPrimary]}
          titleStyle={styles.textMedium}
          onPress={() => { navigation.navigate('Game', { level: 1 }) }} />
        <Button
          title='Level'
          buttonStyle={[styles.button, styles.bgSuccess]}
          titleStyle={styles.textMedium}
          onPress={() => { navigation.navigate('Level') }} />
      </View>
    </ImageBackground>
  );
};
export default Home;