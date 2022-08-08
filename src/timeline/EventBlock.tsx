import React, {useCallback, useMemo} from 'react';
import {View, Text, TextStyle, TouchableOpacity, ViewStyle,Pressable} from 'react-native';
import XDate from 'xdate';
import moment from 'moment';

export interface Event {
  id?: string;
  start: string;
  end: string;
  title: string;
  summary?: string;
  color?: string;
}

export interface PackedEvent extends Event {
  index: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface EventBlockProps {
  index: number;
  event: PackedEvent;
  onPress: (eventIndex: number) => void;
  renderEvent?: (event: PackedEvent) => JSX.Element;
  format24h?: boolean;
  styles: {[key: string]: ViewStyle | TextStyle};
}

const TEXT_LINE_HEIGHT = 17;

const EventBlock = (props: EventBlockProps) => {
  const {index, event, renderEvent, onPress, format24h, styles} = props;

  // Fixing the number of lines for the event title makes this calculation easier.
  // However it would make sense to overflow the title to a new line if needed
 // console.log("Event start is ",event.start);
  
   const numberOfLines = Math.floor(event.height / TEXT_LINE_HEIGHT);
   const formatTime = format24h ? 'HH:mm' : 'hh:mm';
  // let eventStartDate =  moment(event?.start).format('DD MMM YYYY hh:mm:ss')
  // let eventEndDate = moment(event?.end).format('DD MMM YYYY hh:mm:ss')
  // var hoursDiff = eventEndDate.diff(eventStartDate, 'minutes');
  const eventStyle = useMemo(() => {
    return {
      left: event.left,
      height: event.height,
      width: event.width,
      top: event.top,
      backgroundColor: event.color ? event.color : '#add8e6'
    };
  }, [event]);

  const _onPress = useCallback(() => {
    onPress(index);
  }, [index, onPress]);

  return (
    <TouchableOpacity activeOpacity={0.9}  >
      {renderEvent ? (
        renderEvent(event)
      ) : (
        event.title  ?
        <Pressable onPress={_onPress} style={[styles.event, eventStyle]}>
          <Text numberOfLines={1} style={styles.eventTitle}>
            {event.title || 'Event'}
          </Text>
          {numberOfLines > 1 ? (
            <Text numberOfLines={numberOfLines - 1} style={[styles.eventSummary]}>
              {event.summary || ' '}
            </Text>
          ) : null}
          {numberOfLines > 8 ? (
            <Text style={styles.eventTimes} numberOfLines={1}>
              {/* {event.start + "Min"} */}
              {/* {new XDate(event.start).toString(formatTime)} - {new XDate(event.end).toString(formatTime)} */}
             </Text>
          ) : null} 
        </Pressable> : null
      )}
    </TouchableOpacity>
  );
};

export default EventBlock;
