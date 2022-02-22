import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';
import {Theme} from '../../types';

export default function (theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 6,
      alignItems: 'center',
      marginBottom:6
 
    },
    headerContainer: {
      flexDirection: 'row'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {

      ...appStyle.arrowStyle
    },
    arrowImage: {
      tintColor: appStyle.arrowColor,
      ...Platform.select({
        web: {
          width: appStyle.arrowWidth,
          height: appStyle.arrowHeight
        }
      })
    },
    disabledArrowImage: {
      tintColor: appStyle.disabledArrowColor
    },
    // @ts-expect-error
    week: {
     
      flexDirection: 'row',
       justifyContent: 'space-evenly',
      backgroundColor:'#F2F4F7',
      width:'100%'
    },
    dayHeader: {
      marginTop: 4,
      marginBottom: 4,
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '600',
      color: '#000'
    },
    disabledDayHeader: {
      color: appStyle.textSectionTitleDisabledColor
    },
    ...(theme['stylesheet.calendar.header'] || {})
  });
}
