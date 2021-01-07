import { colors } from './confic/const';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 150,
    paddingVertical: 10,
    margin: 10
  },
  textMedium: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center'
  },
  textBig: {
    fontSize: 54,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center'
  },
  bgPrimary: {
    backgroundColor: colors.primary
  },
  bgSuccess: {
    backgroundColor: colors.success
  },
  bgDanger: {
    backgroundColor: colors.danger
  },
  bgOranger: {
    backgroundColor: colors.oranger
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  board: {
    flexDirection: 'row',
    maxWidth: 700,
    borderWidth: 2,
    borderColor: colors.oranger,
    backgroundColor: '#f8f9fc'
  },
  cell: {
    flex: 1,
    width: 50,
    height: undefined,
    aspectRatio: 1,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    padding: 4,
    margin: 5
  },
  img: {
    flex: 1,
    resizeMode: 'contain'
  }
});