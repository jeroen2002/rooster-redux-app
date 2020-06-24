import { format } from 'date-fns';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';


// Function that gets the start and end of a week in roster API friendly format
function getWeekStartAndEnd(date) {
  const weekStart = 1; // Weeks starts on monday
  const dateFormat = 'yyyyMMdd';

  const start = format(
    startOfWeek(date, { weekStartsOn: weekStart }),
    dateFormat,
  );
  const end = format(
    endOfWeek(date, { weekStartsOn: weekStart }),
    dateFormat,
  );

  return [start, end];
}

export default getWeekStartAndEnd;
