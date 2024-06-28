import React from 'react';
import CalendarCustomized from '../../components/CalendarCustomized';
import TimelineCustomized from '../../components/TimelineCustomized';
import moment from 'moment';

const myEventsList = [
  {
    title: 'Meeting',
    start: new Date(2024, 5, 27, 10, 0), // Note: months are 0-based, so June is month 5
    end: new Date(2024, 5, 27, 12, 0),
  },
  {
    title: 'Breakfast',
    start: new Date(2024, 5, 27, 10, 0), // Note: months are 0-based, so June is month 5
    end: new Date(2024, 5, 27, 12, 0),
  },
  {
    title: 'Lunch',
    start: new Date(2024, 5, 28, 12, 0),
    end: new Date(2024, 5, 28, 13, 0),
  },
];

const groups = [
  { id: 1, title: 'Twin', rootGroup: true },
  { id: 2, title: 'Room T-1', parent: 1 },
  { id: 3, title: 'Room T-2', parent: 1 },
  { id: 4, title: 'Room T-3', parent: 1 },
  { id: 5, title: 'Deluxe', rootGroup: true },
  { id: 6, title: 'Room D-1', parent: 2 },
  { id: 7, title: 'Room D-2', parent: 2 },
  { id: 8, title: 'Room D-3', parent: 2 },
  { id: 9, title: 'Standard' },
  { id: 10, title: 'Suite' }
];


const items = [
  {
    id: 1,
    group: 2, // Room T-1
    title: 'Booking 1',
    start_time: moment().add(1, 'days').set({ hour: 14, minute: 0 }),
    end_time: moment().add(2, 'days').set({ hour: 11, minute: 0 })
  },
  {
    id: 2,
    group: 3, // Room T-2
    title: 'Booking 2',
    start_time: moment().add(3, 'days').set({ hour: 14, minute: 0 }),
    end_time: moment().add(4, 'days').set({ hour: 11, minute: 0 })
  },
  {
    id: 3,
    group: 4, // Room T-3
    title: 'Booking 3',
    start_time: moment().add(5, 'days').set({ hour: 14, minute: 0 }),
    end_time: moment().add(6, 'days').set({ hour: 11, minute: 0 })
  }
];

const CombinedCalendar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <div style={{ flex: 1 }}>
      <h2>Big Calendar</h2>
      <CalendarCustomized events={myEventsList} height="900px" />
    </div>
    <div style={{ flex: 1, marginTop: '20px' }}>
      <h2>Timeline</h2>
      <TimelineCustomized
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        height="400px"
      />
    </div>
  </div>
);

export default CombinedCalendar;
