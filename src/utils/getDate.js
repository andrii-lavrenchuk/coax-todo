import { format, startOfWeek, endOfWeek } from 'date-fns';

function makeDateRange() {
  const date = new Date();
  const month = format(date, 'MMM');
  const year = format(date, 'yyyy');
  const weekStart = format(startOfWeek(date, { weekStartsOn: 1 }), 'dd');
  const weekEnd = format(endOfWeek(date, { weekStartsOn: 1 }), 'dd');

  return `${month} ${weekStart} - ${weekEnd}, ${year}`;
}

export default makeDateRange;
