import './wdyr'; // <--- must be first import

import {Navigation} from 'react-native-navigation';
// import {I18nManager} from 'react-native'; // <--- In order to test RTL
//@ts-expect-error
import {LocaleConfig} from 'react-native-calendars';
import {registerScreens} from './screens';

// I18nManager.forceRTL(true); // <--- In order to test RTL
registerScreens();
// eslint-disable-next-line no-console
console.ignoredYellowBox = ['Remote debugger'];

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
};
LocaleConfig.defaultLocale = 'en';


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Menu',
              options: {
                topBar: {
                  title: {
                    text: 'Wix RN Calendars'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
