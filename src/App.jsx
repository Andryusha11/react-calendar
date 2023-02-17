import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  getWeekStartDate,
  generateWeekRange,
  months,
} from '../src/utils/dateUtils.js';
import './common.scss';
import moment from 'moment/moment.js';

const App = () => {
  const [weekStartDate, setWeekStartDay] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const changeWeekToNext = () =>
    setWeekStartDay(new Date(moment(weekStartDate).add(7, 'days')));

  const changeWeekToPrevious = () =>
    setWeekStartDay(new Date(moment(weekStartDate).subtract(7, 'days')));

  const changeWeekToCurrent = () => setWeekStartDay(new Date());

  const month =
    weekDates[0].getDate() < weekDates[6].getDate()
      ? moment(weekDates[0]).format('MMM')
      : moment(weekDates[0]).format('MMM') +
        ' - ' +
        moment(weekDates[6]).format('MMM');

  // first attempt
  // const lastDayOfWeek = weekDates.length - 1;
  // const changeWeekToNext = () => {
  //   setWeekStartDay(
  //     new Date(
  //       weekDates[lastDayOfWeek].setDate(weekDates[lastDayOfWeek].getDate() + 1)
  //     )
  //   );
  // };

  // const changeWeekToPrevious = () => {
  //   setWeekStartDay(new Date(weekDates[0].setDate(weekDates[0].getDate() - 6)));
  // };

  // const changeWeekToCurrent = () => {
  //   setWeekStartDay(new Date());
  // };

  // const month =
  //   weekDates[0].getMonth() === weekDates[lastDayOfWeek].getMonth()
  //     ? months[weekDates[0].getMonth()].slice(0, 3)
  //     : months[weekDates[0].getMonth()].slice(0, 3) +
  //       ' - ' +
  //       months[weekDates[lastDayOfWeek].getMonth()].slice(0, 3);

  return (
    <>
      <Header
        changeWeekToPrevious={changeWeekToPrevious}
        changeWeekToNext={changeWeekToNext}
        changeWeekToCurrent={changeWeekToCurrent}
        month={month}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
