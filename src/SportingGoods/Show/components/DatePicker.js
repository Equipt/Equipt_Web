import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class DatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: {},
      focusedInput: false
    }
  }

  onDatesChange(dates) {
    this.setState(dates);
  }

  render() {
    return <DateRangePicker startDate={this.state.dates.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.dates.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={ dates => this.onDatesChange(dates) }
                            focusedInput={ this.state.focusedInput }
                            onFocusChange={ focusedInput => this.setState({ focusedInput }) }/>
  }

}

export default DatePicker;
