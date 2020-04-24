import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export interface Props {
  block?: boolean;
  margin?: any;
  padding?: boolean;
  paddingHorizontal?: boolean;
  paddingVertical?: boolean;
  width?: boolean;
  height?: boolean;
  border?: boolean;
  borderWidth?: boolean;
  borderColor?: boolean;
  centered?: boolean;
  color?: any;
  style?: any;
  direction?: string;
  middle?: boolean;
  justifyContent?: boolean;
  borderRadius?: boolean;
  shadow?: boolean;
}

const Block: React.FC<Props> = (props) => {
  const {
    block,
    margin,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    height,
    border,
    borderWidth,
    borderColor,
    centered,
    color,
    style,
    direction,
    middle,
    children,
    justifyContent,
    borderRadius,
    shadow,
  } = props;
  const styleComponent = [
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    border && {borderWidth: 1, borderColor: 'gray'},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    color && {backgroundColor: color},
    centered && {justifyContent: 'center'},
    justifyContent && {justifyContent},
    direction && {flexDirection: direction},
    paddingVertical && {paddingVertical},
    paddingHorizontal && {paddingHorizontal},
    middle && {alignItems: 'center'},
    borderRadius && {borderRadius},
    shadow && {
      shadowOpacity: 0.12,
      shadowRadius: 15,
      shadowColor: '#000000',
      shadowOffset: {height: 0, width: 0},
    },
    style,
  ];
  console.log(props);
  console.log(styleComponent);
  return <View style={styleComponent}>{children}</View>;
};

export default Block;
