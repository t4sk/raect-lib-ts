import React from "react";
/*
Hack to fix error:
Cannot redeclare block-scoped variable 'tz
*/
import * as moment from "moment";
import "moment-timezone";

const DEFAULT_FORMAT = "YYYY-MM-DD HH:mm";

export interface Props {
  date: Date | string;
  timeZone: string;
  format?: string;
}

// trigger bit rebuild

export function DateFormat(props: Props) {
  const { date, timeZone, format = DEFAULT_FORMAT } = props;

  // NOTE: need to wrap in string as React component
  return <>{moment.tz(date, timeZone).format(format)}</>;
}

export default DateFormat;
