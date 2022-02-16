import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
import {Theme} from '../../../types';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dot: {
      width:5,
      height: 5,
      marginTop:0,
      marginHorizontal: 0,
      borderRadius:5/2,
      opacity: 0,
      color:appStyle.todayDotColor
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.todayDotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    inactiveDot: {
      backgroundColor: appStyle.inactiveDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    // @ts-expect-error
    ...(theme['stylesheet.dot'] || {})
  });
}
