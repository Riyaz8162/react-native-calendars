import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, TouchableWithoutFeedback, ViewStyle, TextStyle, Dimensions, StyleSheet} from 'react-native';
import range from 'lodash/range';
import {HOUR_BLOCK_HEIGHT} from './Packer';
import {buildTimeString, calcTimeByPosition} from './helpers/presenter';

const {width: dimensionWidth} = Dimensions.get('window');

interface NewEventTime {
  hour: number;
  minutes: number;
  date?: string;
}

export interface TimelineHoursProps {
  start?: number;
  end?: number;
  date?: string;
  format24h?: boolean;
  onBackgroundLongPress?: (timeString: string, time: NewEventTime) => void;
  onBackgroundLongPressOut?: (timeString: string, time: NewEventTime) => void;
  styles: {[key: string]: ViewStyle | TextStyle};
}

const TimelineHours = (props: TimelineHoursProps) => {
  const {format24h, start = 0, end = 24, date, styles, onBackgroundLongPress, onBackgroundLongPressOut} = props;

  const lastLongPressEventTime = useRef<NewEventTime>();
  // const offset = this.calendarHeight / (end - start);
  const offset = HOUR_BLOCK_HEIGHT;
  const EVENT_DIFF = 20;

  const hours = useMemo(() => {
    return range(start, end + 1).map(i => {
      let timeText;

      if (i === start) {
        timeText = '';
      } else if (i < 12) {
        timeText = !format24h ? `${i<=9?'0'+i:i}:00 AM` : `${i<=9?'0'+i:i}:00`;
      } else if (i === 12) {
        timeText = !format24h ? `${i}:00 PM` : `${i<21?'0'+i:i}:00`;
      } else if (i === 24) {
        timeText = !format24h ? '12:00 AM' : '23:59';
      } else {
        timeText = !format24h ? `${((i- 12)<=9) ?'0'+(i-12)+':00':(i-12)+':00'} PM` : `${i}:00`;
      }
      return {timeText, time:i};
    });
  }, [start, end, format24h]);

  const handleBackgroundPress = useCallback(
    event => {
      const yPosition = event.nativeEvent.locationY;
      const {hour, minutes} = calcTimeByPosition(yPosition, HOUR_BLOCK_HEIGHT);

      lastLongPressEventTime.current = {hour, minutes, date};

      const timeString = buildTimeString(hour, minutes, date);
      onBackgroundLongPress?.(timeString, lastLongPressEventTime.current);
    },
    [onBackgroundLongPress, date]
  );

  const handlePressOut = useCallback(() => {
    if (lastLongPressEventTime.current) {
      const {hour, minutes, date} = lastLongPressEventTime.current;
      const timeString = buildTimeString(hour, minutes, date);
      onBackgroundLongPressOut?.(timeString, lastLongPressEventTime.current);
      lastLongPressEventTime.current = undefined;
    }
  }, [onBackgroundLongPressOut, date]);

  return (
    <>
      <TouchableWithoutFeedback onLongPress={handleBackgroundPress} onPressOut={handlePressOut}>
        <View style={StyleSheet.absoluteFillObject} />
      </TouchableWithoutFeedback>
      {hours.map(({timeText, time}, index) => {
        return (
          <React.Fragment key={time}>
            <Text key={`timeLabel${time}`} style={[styles.timeLabel, {top: offset * index - 6}]}>
              {timeText}
            </Text>
            {time === start ? null : (
              <View
                key={`line${time}`}
                style={[styles.line, {top: offset * index, width: dimensionWidth - EVENT_DIFF}]}
              />
            )}
            {
              <View
                key={`lineHalf${time}`}
                style={[styles.line, {top: offset * (index + 0.5), width: dimensionWidth - EVENT_DIFF}]}
              />
            }
          </React.Fragment>
        );
      })}
      <View style={styles.verticalLine}/>
    </>
  );
};

export default React.memo(TimelineHours);
