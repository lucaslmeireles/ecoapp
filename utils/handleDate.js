import moment from 'moment';

export const handleDate = (date) => {
  return moment(String(date, 'YYY-MM-DDTHH:MM:SSZ')).fromNow();
};
