import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { styles } from '../Style';
import Board from '../component/Board';
import { Button, Overlay } from 'react-native-elements';
import { cards, levels, bg } from '../confic/const';
const Game = ({ navigation, route }) => {
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);
  const [chosed, setChosed] = useState(-1);
  const [right, setRight] = useState(0);
  const [win, setWin] = useState(false);
  const [level, setLevel] = useState(1);
  const [background, setBg] = useState(bg[0]);
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const resetData = () => {
    const n = Math.floor((levels[level - 1][0] * levels[level - 1][1]) / 2);
    let newArray = Array(n).fill(null);
    const numCard = cards.length;
    const unvisit = Array(numCard).fill(true);
    let i = 0;
    while (i < n) {
      let shuffle = Math.floor(Math.random() * numCard);
      if (unvisit[shuffle]) {
        unvisit[shuffle] = false;
        newArray[i] = cards[shuffle];
        ++i;
      }
    }
    newArray = newArray.concat(JSON.parse(JSON.stringify(newArray)));
    const arr = shuffle(newArray);
    setData(JSON.parse(JSON.stringify(arr)));
  };
  useEffect(() => {
    let i = Math.floor(Math.random() * bg.length);
    setBg(bg[i]);
    if (route.params.level >= level) {
      setLevel(route.params.level);
    };
    resetData();
  }, [level]);
  const isWin = () => {
    setWin(true);
    setScore(score + 1);
  };
  const clickCard = (index) => {
    if (data[index].isPaired) return null;
    if (chosed >= 0) {
      const newData = JSON.parse(JSON.stringify(data));
      if (data[index].id === data[chosed].id) {
        newData[index].isPaired = true;
        newData[chosed].isPaired = true;
        if (right + 2 === levels[level - 1][0] * levels[level - 1][1]) isWin();
        else setRight(right + 2);
      }
      else {
        newData[index].isOpen = false;
        newData[chosed].isOpen = false;
      }
      setData(newData);
      setChosed(-1);
    }
    else {
      setChosed(index);
    }
  };
  const reset = () => {
    setWin(false);
    setRight(0);
    setChosed(-1);
    resetData();
  };
  const nextLevel = () => {
    if (level + 1 > levels.length) setLevel(1);
    else setLevel(level + 1);
    setWin(false);
    setRight(0);
    setChosed(-1);
  };
  const Score = (props) => {
    return (
      <View style={[{
        marginTop: 50, marginBottom: 20, paddingHorizontal: 40,
        borderColor: 'orange', borderWidth: 4
      }, styles.bgDanger]}>
        <Text style={[styles.textBig]}>
          {score}
        </Text>
      </View>
    );
  };
  return (
    <ImageBackground
      source={background}
      style={[styles.bgImage, styles.center]}>
      <View style={[{ flex: 1, width: '70%', maxWidth: 700 },
      { alignItems: 'center', justifyContent: 'space-around' }]}>
        <Score score={score} />
        <Board data={data} clickCard={clickCard} level={level} />
        <Button
          title='reset'
          onPress={reset}
          buttonStyle={[styles.button, styles.bgPrimary]}
          titleStyle={styles.textMedium} />
        <Overlay isVisible={win}>
          <View style={styles.center}>
            <Text style={{
              paddingHorizontal: 50, fontSize: 40,
              paddingVertical: 20, fontWeight: 'bold'
            }}>Complete</Text>
            <Button
              title='Again'
              buttonStyle={[styles.button, styles.bgDanger]}
              titleStyle={styles.textMedium}
              onPress={reset} />
            <Button
              title='Next'
              titleStyle={styles.textMedium}
              buttonStyle={[styles.button, styles.bgSuccess]}
              onPress={nextLevel} />
          </View>
        </Overlay>
      </View>
    </ImageBackground>
  );
};
export default Game;