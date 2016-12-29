# Calendar Pager

[![npm version](https://badge.fury.io/js/calendar-pager.svg)](https://badge.fury.io/js/calendar-pager)
[![Build Status](https://travis-ci.org/oreshinya/calendar-pager.svg?branch=master)](https://travis-ci.org/oreshinya/calendar-pager)

Utility for getting calendar dates with [moment](https://github.com/moment/moment).

## Dependencies

- `moment`
- `moment-range`

## Installation

```
$ npm i --save calendar-pager
```

## Usage

```javascript
import calendar from 'calendar-pager';

// Get calendar dates of this month.
const {
  current, // start of month
  range,   // moment-range
  prev,    // start of prev month
  next     // start of next month
} = calendar();

// Get calendar dates of prev month.
const prevPayload = calendar(prev);

// Get calendar dates of next month.
const nextPayload = calendar(next);

// Get calendar starting with Monday.
const payload = calendar(next, true);
```

## LICENSE

MIT
