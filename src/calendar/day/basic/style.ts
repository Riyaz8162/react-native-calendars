import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';
import {Theme} from '../../../types';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      alignSelf: 'center',
      alignItems: 'center',
      overflow:'hidden'
    },
    base: {
      alignItems: 'center',
      width:34,
      height:34,
      backgroundColor:'#fff',
      borderRadius:3,
      marginBottom:2
    },
    text: {
      marginTop: Platform.OS === 'android' ? 4 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      ...appStyle.textDayStyle
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor:"#3481F3",
      borderRadius:3
    },
    today: {
      backgroundColor: appStyle.AppTodayTheme,
      borderColor:'#3481F3',
      borderWidth:1,
    },
    todayText: {
      color: "#3481F3",
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    inactiveText: {
      color: appStyle.textInactiveColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    // @ts-expect-error
    ...(theme['stylesheet.day.basic'] || {})
  });
}
