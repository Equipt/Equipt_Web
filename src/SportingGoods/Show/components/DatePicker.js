import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { DateRangePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const moment = extendMoment(Moment);

class DatePicker extends Component {

  static propTypes = {
    rentals: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  onDatesChange(dates) {
    const { onChange } = this.props;
    this.setState(dates);
    if (onChange) onChange(dates);
  }

  takenDay = date => {

		const { rentals } = this.props;

		return rentals.filter(rental => {
			const startDate = new Date(rental.startDate);
			const endDate = new Date(rental.endDate);
			const range = moment().range(startDate, endDate);
			return range.contains(date);
		}).length > 0;

  }

  render() {

    const { startDate, endDate, focusedInput } = this.state;

    return <DateRangePicker startDate={ startDate } // momentPropTypes.momentObj or null,
                            startDateId="startDate" // PropTypes.string.isRequired,
                            endDate={ endDate } // momentPropTypes.momentObj or null,
                            endDateId="endDate" // PropTypes.string.isRequired,
                            minimumNights={0}
                            onDatesChange={ dates => this.onDatesChange(dates) }
                            focusedInput={ focusedInput }
                            onFocusChange={ focusedInput => this.setState({ focusedInput }) }
                            isDayBlocked={ this.takenDay }/>
  }

}

export default DatePicker;
