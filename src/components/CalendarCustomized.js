import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';

const localizer = momentLocalizer(moment);
const CalendarCustomized = ({ events, height }) => (
  <div style={{ height: height || '500px' }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100%' }}
    />
  </div>
);

CalendarCustomized.propTypes = {
  events: PropTypes.array.isRequired,
  height: PropTypes.string
};

export default CalendarCustomized;
