import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

const TimelineCustomized = ({ groups, items, defaultTimeStart, defaultTimeEnd, height }) => (
  <div style={{ height: height || '500px' }}>
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={defaultTimeStart || moment().add(-12, 'hour')}
      defaultTimeEnd={defaultTimeEnd || moment().add(12, 'hour')}
      style={{ height: '100%' }}
    />
  </div>
);

export default TimelineCustomized;
