import { format, startOfWeek, endOfWeek } from 'date-fns';

function makeDateRange() {
  const date = new Date();
  const month = format(date, 'MMM');
  const year = format(date, 'yyyy');
  const weekStart = format(startOfWeek(date), 'dd');
  const weekEnd = format(endOfWeek(date), 'dd');

  return `${month} ${weekStart} - ${weekEnd}, ${year}`;
}

export default makeDateRange;
