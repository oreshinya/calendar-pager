import 'moment-range';
import moment from 'moment';

export default function(period, startWithMonday = false) {
  const weekKey = startWithMonday ? 'isoWeek' : 'week';
  const current = ((period && period.clone()) || moment()).startOf('month');
  const start   = current.clone().startOf(weekKey);
  const end     = current.clone().endOf('month').endOf(weekKey);
  const range   = moment.range(start, end);
  const prev    = current.clone().add(-1, 'month');
  const next    = current.clone().add(1, 'month');

  return { current, range, prev, next };
}
