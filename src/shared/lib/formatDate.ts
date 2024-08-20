import { DateTime } from 'luxon';

export const formatDate = (dateStr: string): string => {
  return DateTime.fromISO(dateStr).toFormat('MM/yyyy');
};
