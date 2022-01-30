import makeDateRange from '../../utils/getDate';

import s from './DateRange.module.scss';

const DateRange = () => {
  return <p className={s.dateRange}>{makeDateRange()}</p>;
};

export default DateRange;
