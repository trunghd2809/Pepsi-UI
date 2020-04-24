/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Block from './src/components/block';
const WIDTH = Dimensions.get('window').width;

interface Props {
  size: string;
  isZoom?: boolean;
  middle?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {size, isZoom, middle} = props;
  return (
    <Block style={[styles.box, middle && styles.middleBox]}>
      <TouchableOpacity style={styles.button}>
        <Image
          style={[
            styles.img,
            isZoom && styles.isZoom,
            middle && styles.middleImg,
          ]}
          source={require('./src/images/Can.png')}
        />
        <Text style={[styles.size, middle && styles.middleSize]}>{size}</Text>
      </TouchableOpacity>
    </Block>
  );
};

const App = () => {
  return (
    <>
      <Block block={true} color="#3788DD">
        <Block style={styles.oval} />
        <Block style={styles.pepsi} middle>
          <Image source={require('./src/images/pepsi.png')} />
          <Block style={[styles.shadow, styles.shadowMargin]}>
            <Block style={styles.shadow}>
              <Block style={styles.shadow}>
                <Block style={styles.shadow} />
              </Block>
            </Block>
          </Block>
        </Block>
        <Block style={styles.titleWrapper}>
          <Text style={styles.txt}>Classic Diet Pepsi</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no
          </Text>
        </Block>
        <Block direction="row" style={styles.titleWrapper}>
          <Block direction="row" style={styles.price}>
            <Text style={styles.txt}>$</Text>
            <Text style={styles.txt}>8.45</Text>
          </Block>
          <Block direction="row" style={styles.boxWrapper}>
            <Button size="s" />
            <Button size="M" isZoom middle />
            <Button size="L" />
          </Block>
        </Block>
        <Block direction="row" centered>
          <TouchableOpacity style={styles.buyNow}>
            <Text style={styles.btnTxt}>Buy now</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  scrol: {
    flex: 1,
  },
  oval: {
    backgroundColor: '#EFF3F6',
    width: WIDTH + WIDTH / 2,
    height: WIDTH + WIDTH / 2,
    position: 'absolute',
    borderRadius: WIDTH + WIDTH / 2,
    top: -WIDTH * 0.8,
    alignSelf: 'center',
  },
  pepsi: {
    marginTop: WIDTH * 0.2,
  },
  shadow: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 100,
    transform: [{scaleX: 2}],
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: {height: 2, width: -4},
    shadowOpacity: 1,
  },
  shadowMargin: {
    marginRight: 40,
    marginTop: 20,
  },
  titleWrapper: {
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  desc: {
    marginTop: 10,
    color: '#fff',
    fontWeight: '300',
  },
  price: {
    flexDirection: 'row',
  },
  boxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#EFEFEF',
    padding: 5,
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    flexDirection: 'row',
  },
  middleBox: {
    borderWidth: 2,
    borderColor: '#2151A1',
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 10,
  },
  isZoom: {
    transform: [{scale: 1.1}],
  },
  button: {
    justifyContent: 'center',
  },
  size: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    color: 'gray',
  },
  middleSize: {
    color: '#2151A1',
  },
  img: {
    tintColor: 'gray',
  },
  middleImg: {
    tintColor: '#2151A1',
  },
  buyNow: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
  },
  btnTxt: {
    fontWeight: '600',
    alignSelf: 'center',
    color: '#2151A1',
  },
});

export default App;
