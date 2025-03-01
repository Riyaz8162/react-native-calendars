import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
import {Theme} from '../../../types';

const FILLER_HEIGHT = 34;

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    base: {
      width:34,
      height:34,
      alignItems: 'center',
      borderRadius:3,
      marginBottom:2,
      borderColor:'#3481F3',
      borderWidth:0.5
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },

    text: {
      marginTop: 7,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor
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

    // quickAction: {
    //   backgroundColor: 'white',
    //   borderWidth: 1,
    //   borderColor: '#c1e4fe'
    // },
    // quickActionText: {
    //   marginTop: 6,
    //   color: appStyle.textColor
    // },
    // firstQuickAction: {
    //   backgroundColor: appStyle.textLinkColor
    // },
    // firstQuickActionText: {
    //   color: 'white'
    // },
    // naText: {
    //   color: '#b6c1cd'
    // },
    // @ts-expect-error
    ...(theme['stylesheet.day.period'] || {})
  });
}
