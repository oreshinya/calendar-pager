import assert from 'power-assert';
import { test } from 'eater/runner';
import moment from 'moment';

import calendar from '../src';

const period = moment('2016-12-31');

test('start with sunday', () => {
  const {
    current,
    range: { start, end },
    prev,
    next
  } = calendar(period);

  assert(current.isSame(moment('2016-12-01')));
  assert(start.isSame(moment('2016-11-27')))
  assert(end.isSame(moment('2016-12-31 23:59:59.999')));
  assert(prev.isSame(moment('2016-11-01')));
  assert(next.isSame(moment('2017-01-01')));
});

test('start with monday', () => {
  const {
    current,
    range: { start, end },
    prev,
    next
  } = calendar(period, true);

  assert(current.isSame(moment('2016-12-01')));
  assert(start.isSame(moment('2016-11-28')))
  assert(end.isSame(moment('2017-01-01 23:59:59.999')));
  assert(prev.isSame(moment('2016-11-01')));
  assert(next.isSame(moment('2017-01-01')));
});
