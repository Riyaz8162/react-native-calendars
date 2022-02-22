import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../style';
import { Theme } from '../types';


const commons = require('./commons');
export const HEADER_HEIGHT = 68;
export const KNOB_CONTAINER_HEIGHT = 5;


export default function styleConstructor(theme: Theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    containerShadow: {
      // backgroundColor: appStyle.OurAppTheme,
      // ...Platform.select({
      //   ios: {
      //     shadowColor: '#858F96',
      //     shadowOpacity: 0.25,
      //     shadowRadius: 10,
      //     shadowOffset: { height: 2, width: 0 },
      //     zIndex: 99
      //   },
      //   android: {
      //     shadowColor: '#858F96',
      //     shadowOpacity: 0.25,
      //     shadowRadius: 10,
      //     shadowOffset: { height: 2, width: 0 },
      //     zIndex: 99,
      //     elevation: 15,
      //   }
      // })
    },
    verticalLine: {
      width: '100%',
      borderColor: '#F2F4F7',
      borderBottomWidth: 1,
      marginTop:32
    },
    containerWrapper: {
      paddingBottom: 6
    },
    container: {
      // backgroundColor: appStyle.OurAppTheme,
      flex: 1
    },
    knobContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 12,
      bottom: -10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 0

    },
    knob: {
      width: 68,
      height:5,
      marginTop:20,
      borderRadius:6,
      backgroundColor: '#e8ecf0'
    },
    sectionText: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 10,
      color: '#212121',
      paddingTop: 30, // 8
      paddingBottom: 2,
      paddingLeft: 20,
      backgroundColor: '#fff',
      textAlign: 'left',
      textTransform: 'uppercase'
    },
    sectionTodayText: {
      fontSize: 14,
      lineHeight: 10,
      color: '#212121',
      paddingTop: 28, // 8
      paddingBottom: 2,
      paddingLeft: 6,
      backgroundColor: '#fff',
      textAlign: 'left',
      textTransform: 'capitalize'
    },
    eventTxt: {
      color: '#6C6C6C',
      fontSize: 14,
      paddingLeft: 20
    },
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: appStyle.calendarBackground,
    },
    headerTitle: {
      alignSelf: 'center',
      paddingTop: 13,
      paddingBottom: 18,
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor
    },
    weekDayNames: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    weekContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: HEADER_HEIGHT + (commons.isAndroid ? 8 : 4), // align row on top of calendar's first row
    },
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    },
    weekCalendar: {
      marginTop: 5,
      marginBottom: 10
    },
    week: {
      marginTop: 10,
      marginBottom: 0,
      paddingRight: 15,
      paddingLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayContainer: {
      flex: 1,
      alignItems: 'center',
      // backgroundColor:appStyle.OurAppTheme,
    },
    emptyDayContainer: {
      flex: 1
    },
    dayHeader: {
      width: 32,
      textAlign: 'center',
      fontSize: 12,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: '#000'
    },
    arrowImage: {
      // tintColor: appStyle.arrowColor,
      transform: commons.isRTL ? [{ scaleX: -1 }] : undefined
    },
    todayButtonContainer: {
      alignItems: appStyle.todayButtonPosition === 'right' ? 'flex-end' : 'flex-start',
      position: 'absolute',
      top: Platform.OS === "ios" ? 55 : 72,
      right: 100,
      bottom: 0
    },
    todayButton: {
      height: commons.isTablet ? 40 : 28,
      paddingHorizontal: commons.isTablet ? 20 : 12,
      borderRadius: commons.isTablet ? 20 : 14,
      flexDirection: appStyle.todayButtonPosition === 'right' ? 'row-reverse' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    todayButtonText: {
      color: "#3481F3",
      fontSize: commons.isTablet ? appStyle.todayButtonFontSize + 2 : appStyle.todayButtonFontSize,
      fontWeight: appStyle.todayButtonFontWeight,
      fontFamily: appStyle.todayButtonFontFamily
    },
    todayButtonImage: {
      tintColor: appStyle.todayButtonTextColor,
      marginLeft: appStyle.todayButtonPosition === 'right' ? 7 : undefined,
      marginRight: appStyle.todayButtonPosition === 'right' ? undefined : 7
    },
    ...(theme?.stylesheet?.expandable?.main || {})
  });
}
